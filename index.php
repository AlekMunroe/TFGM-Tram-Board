<?php
// Set the timezone to UTC for consistency
date_default_timezone_set('UTC');

// Function to make an API call and get tram information
function getTramInformation($stationRef)
{
    $apiURL = "https://europe-west2-tramsfunc.cloudfunctions.net/tramsfunc";
    $response = file_get_contents($apiURL);
    if ($response === FALSE) {
        return ['error' => 'Error retrieving tram data.'];
    }
    $data = json_decode($response, true);
    if (is_null($data)) {
        return ['error' => 'Error decoding JSON data.'];
    }
    $groupedData = [];
    foreach ($data as $item) {
        if ($item['TLAREF'] === $stationRef) {
            $groupedData[$item['PIDREF']][] = $item;
        }
    }
    return $groupedData;
}

// Function to display all platform boards for the station
function displayStationBoards($stationRef)
{
    $groupedData = getTramInformation($stationRef);
    if (isset($groupedData['error'])) {
        echo '<p style="color: red;">' . $groupedData['error'] . '</p>';
        return;
    }

    $stationLocation = $groupedData[array_key_first($groupedData)][0]['StationLocation'] ?? 'Unknown Station';

    foreach ($groupedData as $platformID => $platformInfo) {
        preg_match('/\d+$/', $platformID, $matches);
        $platformNumber = $matches[0] ?? 'Unknown';
        echo '<div style="background-color: #000000; color: #ffd700; font-family: monospace; padding: 20px; border: 20px solid #949494; margin-bottom: 20px;">';
        echo "<h2>Stop: $stationLocation, Platform: $platformNumber, PlatformID: $platformID</h2>";
        displayPlatformBoard($platformInfo, $platformID);
        echo "</div>";
    }
}

// Function to simulate the tram board style for a single platform
function displayPlatformBoard($platformInfo, $platformID) {
    $trams = [];
    $messageBoard = '';

    foreach ($platformInfo as $info) {
        if (!empty($info["Dest0"]) && isset($info["Wait0"])) {
            $doubleText = $info["Carriages0"] === "Double" ? "dbl " : "";
            $trams[0] = "<div onclick='playAudio(\"{$info["Dest0"]}\", \"{$info["StationLocation"]}\")' style='cursor: pointer; display: flex; justify-content: space-between; font-size: 28px; font-family: LEDBoard;'>{$info["Dest0"]}<span>{$doubleText}{$info["Wait0"]} min</span></div>";
        }
        if (!empty($info["Dest1"]) && isset($info["Wait1"])) {
            $doubleText = $info["Carriages1"] === "Double" ? "dbl " : "";
            $trams[1] = "<div onclick='playAudio(\"{$info["Dest1"]}\", \"{$info["StationLocation"]}\")' style='cursor: pointer; display: flex; justify-content: space-between; font-size: 28px; font-family: LEDBoard;' id='line2_$platformID'>{$info["Dest1"]}<span>{$doubleText}{$info["Wait1"]} min</span></div>";
        }
        if (!empty($info["Dest2"]) && isset($info["Wait2"])) {
            $doubleText = $info["Carriages2"] === "Double" ? "dbl " : "";
            $trams[2] = "<div onclick='playAudio(\"{$info["Dest2"]}\", \"{$info["StationLocation"]}\")' style='cursor: pointer; display: none; justify-content: space-between; font-size: 28px; font-family: LEDBoard;' id='line3_$platformID'>{$info["Dest2"]}<span>{$doubleText}{$info["Wait2"]} min</span></div>";
        }        
        if (!empty($info["MessageBoard"])) {
            $messageBoard = $info["MessageBoard"];
        }    
    }

    echo $trams[0] ?? ''; // Show Tram 1

    // Ensure Tram 2 and Tram 3 are alternated properly
    if (!empty($trams[1])) {
        echo $trams[1]; // Always show Tram 2
    }
    if (!empty($trams[2])) {
        echo $trams[2]; // Prepare Tram 3, but hidden
    }

    // Show the message board in a scrolling container
    if (!empty($messageBoard)) {
        // The container has a fixed height and overflow hidden to restrict the view to just the message board
        echo "<div style='position: relative; overflow: hidden; width: 100%; height: 50px;'>";
        // This is the message board that will scroll
        echo "<div class='messageBoard' style='font-size: 24px;' id='messageBoard_$platformID'>$messageBoard</div>";
        echo "</div>";
    }

    // Add a data attribute to the container that holds the tram information
    echo "<div data-platform-id='{$platformID}' style='display: none;'></div>";

    // Show the current time
    echo "<div class='liveTime' style='font-size: 28px; font-family: LEDBoard; text-align: center;'></div>";

}

// Function to display all platform boards for the station

// Check if this is an AJAX request for tram information
if (isset($_GET['ajax']) && $_GET['ajax'] === '1') {
    displayStationBoards($_GET['stationRef'] ?? 'CNK');
    exit; // End the script here for AJAX requests
}

// Rest of the code for the HTML form and initial page load

$selectedStationRef = $_POST['stationRef'] ?? 'CNK';
$stationsJson = file_get_contents('stations.json');
$stations = json_decode($stationsJson, true);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Tram Board</title>
    <link rel="stylesheet" href="style.css">
    <script src="AudioAnnouncements.js"></script>
    <script>
// Function to alternate tram displays
// Global object to keep track of intervals
var tramIntervals = {};

function alternateTramDisplay(platformID) {
    // Clear any existing interval for this platformID
    if (tramIntervals[platformID]) {
        clearInterval(tramIntervals[platformID]);
    }

    // Set a new interval for alternation
    tramIntervals[platformID] = setInterval(function() {
        var tram2 = document.getElementById('line2_' + platformID);
        var tram3 = document.getElementById('line3_' + platformID);
        var messageBoard = document.getElementById('messageBoard_' + platformID);
        if (tram2 && tram3 && messageBoard) {
            if (tram2.style.display === 'flex') {
                tram2.style.display = 'none';
                tram3.style.display = 'flex';
            } else {
                tram2.style.display = 'flex';
                tram3.style.display = 'none';
            }
        } else {
            // Clear interval if elements don't exist
            clearInterval(tramIntervals[platformID]);
            delete tramIntervals[platformID];
        }
    }, 5000);
}


// Rest of your JavaScript functions

function getAllPlatformIDs() {
    var platformElements = document.querySelectorAll('[data-platform-id]');
    var platformIDs = Array.from(platformElements).map(function(element) {
        return element.getAttribute('data-platform-id');
    });
    return platformIDs;
}


function fetchTramData(stationRef) {
    fetch('index.php?stationRef=' + stationRef + '&ajax=1')
    .then(response => response.text())
    .then(data => {
        document.getElementById('tram-info').innerHTML = data;
        // Clear all existing intervals
        for (var id in tramIntervals) {
            clearInterval(tramIntervals[id]);
        }
        tramIntervals = {}; // Reset the interval tracking object

        // Start new intervals for the updated tram data
        var platformIDs = getAllPlatformIDs();
        platformIDs.forEach(function(platformID) {
            alternateTramDisplay(platformID);
        });
    })
    .catch(error => console.error('Error fetching tram data:', error));
}


        function updateTramData() {
            const selectedStationRef = document.getElementById('stationRef').value;
            fetchTramData(selectedStationRef);
            setTimeout(updateTramData, 10000); // 5 seconds
        }

        document.addEventListener('DOMContentLoaded', function () {
    // Fetch initial tram data
    updateTramData();

    // Initialize alternation for the initially loaded tram data
    var platformIDs = getAllPlatformIDs();
    platformIDs.forEach(function(platformID) {
        alternateTramDisplay(platformID);
    });
});

//Time
function updateLiveTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ':' + minutes + ':' + seconds;
    
    // Get all elements with the 'liveTime' class and update their content
    var timeDisplays = document.getElementsByClassName('liveTime');
    for (var i = 0; i < timeDisplays.length; i++) {
        timeDisplays[i].textContent = timeString;
    }
}

// Call updateLiveTime every second to update the time
setInterval(updateLiveTime, 1000);

// Also call it once immediately to set the initial time
updateLiveTime();

//Announcement audio
// Add this function inside your <script> tag




    </script>
</head>

<body>

    <form action="" method="post">
        <label for="stationRef">Select a station:</label>
        <select name="stationRef" id="stationRef" onchange="fetchTramData(this.value)">
            <?php foreach ($stations as $station): ?>
                <option value="<?= htmlspecialchars($station['ref']) ?>" <?= $selectedStationRef == $station['ref'] ? 'selected' : '' ?>>
                    <?= htmlspecialchars($station['name']) ?>
                </option>
            <?php endforeach; ?>
        </select>
        <noscript><input type="submit" value="View"></noscript>
    </form>

    <div id="tram-info">
        <?php displayStationBoards($selectedStationRef); // Initial call for page load ?>
    </div>

</body>

</html>