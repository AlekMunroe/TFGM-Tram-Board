function playAudio(destination, stopName) {
    var audio;
    
    //Single Audio
    // if (destination === "Altrincham") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3');
    // }else if (destination === "Manchester Airport") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
    // }else if (destination === "East Didsbury") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/East-Didsbury.mp3');
    // }else if (destination === "The Trafford Centre") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/The-Trafford-Centre.mp3');
    // }else if (destination === "Eccles") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    // }else if (destination === "MediaCityUK") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/MediaCityUK.mp3');
    // }else if (destination === "Deansgate Castlefield") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Deansgate-Castlefield.mp3');
    // }else if (destination === "Piccadilly") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Piccadilly.mp3');
    // }else if (destination === "Etihad Campus") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Etihad-Campus.mp3');
    // }else if (destination === "Victoria`") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Victoria.mp3');
    // }else if (destination === "Bury") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Bury.mp3');
    // }else if (destination === "Shaw and Crompton") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3');
    // }else if (destination === "Rochdale Town Centre") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Rochdale-Town-Centre.mp3');
    // }else if (destination === "Ashton-under-Lyne") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Ashton-under-Lyne.mp3');
    // }
    
    // //Audio with Via
    // else if (destination === "Eccles via MediaCityUK") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    // }else if (destination === "Ashton via MCUK") {
    //     audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-under-Lyne_MCUK.mp3');
    // }
    
    
    //Terminates
    if(null){
        console.log("No information available");
    }
    else if (destination === "See Tram Front" || destination === "Terminates Here"  && stopName === "Altrincham") {
        audio = new Audio('Audio/Announcements/Terminates/Altrincham.mp3');
    }else if (destination === "See Tram Front" || destination === "Terminates Here"  && stopName === "Manchester Airport") {
        audio = new Audio('Audio/Announcements/Terminates/Manchester-Airport.mp3');
    }else if (destination === "See Tram Front" || destination === "Terminates Here"  && stopName === "East Didsbury") {
        audio = new Audio('Audio/Announcements/Terminates/East-Didsbury.mp3');
    }else if (destination === "See Tram Front" || destination === "Terminates Here"  && stopName === "The Trafford Centre") {
        audio = new Audio('Audio/Announcements/Terminates/The-Trafford-Centre.mp3');
    }else if (destination === "See Tram Front" || destination === "Terminates Here"  && stopName === "Eccles") {
        audio = new Audio('Audio/Announcements/Terminates/Eccles.mp3');
    }else if (destination === "See Tram Front" || destination === "Terminates Here"  && stopName === "MediaCityUK") {
        audio = new Audio('Audio/Announcements/Terminates/MediaCityUK.mp3');
    }else if (destination === "See Tram Front" || destination === "Terminates Here"  && stopName === "Deansgate Castlefield") {
        audio = new Audio('Audio/Announcements/Terminates/Deansgate-Castlefield.mp3');
    }else if (destination === "See Tram Front" || destination === "Terminates Here" && stopName === "Piccadilly") {
        audio = new Audio('Audio/Announcements/Terminates/Piccadilly.mp3');
    }else if (destination === "See Tram Front" || destination === "Terminates Here"  && stopName === "Etihad Campus") {
        audio = new Audio('Audio/Announcements/Terminates/Etihad-Campus.mp3');
    }else if (destination === "See Tram Front" || destination === "Terminates Here"  && stopName === "Victoria`") {
        audio = new Audio('Audio/Announcements/Terminates/Victoria.mp3');
    }else if (destination === "See Tram Front" || destination === "Terminates Here"  && stopName === "Bury") {
        audio = new Audio('Audio/Announcements/Terminates/Bury.mp3');
    }else if (destination === "See Tram Front" || destination === "Terminates Here"  && stopName === "Shaw and Crompton") {
        audio = new Audio('Audio/Announcements/Terminates/Shaw-and-Crompton.mp3');
    }else if (destination === "See Tram Front" || destination === "Terminates Here"  && stopName === "Rochdale Town Centre") {
        audio = new Audio('Audio/Announcements/Terminates/Rochdale-Town-Centre.mp3');
    }else if (destination === "See Tram Front" || destination === "Terminates Here"  && stopName === "Ashton-under-Lyne") {
        audio = new Audio('Audio/Announcements/Terminates/Ashton-under-Lyne.mp3');
    }


    //The next stop
    
    //Manchester Airport - Victoria
    //Victoria
    else if (destination === "Victoria" && stopName === "Manchester Airport") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Shadowmoss.mp3').play();
    }else if (destination === "Victoria" && stopName === "Shadowmoss") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Peel-Hall.mp3').play();
    }else if (destination === "Victoria" && stopName === "Peel Hall") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Robinswood-Road.mp3').play();
    }else if (destination === "Victoria" && stopName === "Robinswood Road") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Wythenshawe-Town-Centre.mp3').play();
    }else if (destination === "Victoria" && stopName === "Wythenshawe Town Centre") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Crossacres.mp3').play();
    }else if (destination === "Victoria" && stopName === "Crossacres") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Benchill.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Shadowmoss.mp3').play();
    }else if (destination === "Victoria" && stopName === "Benchill") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Martinscroft.mp3').play();
    }else if (destination === "Victoria" && stopName === "Martinscroft") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Roundthorn.mp3').play();
    }else if (destination === "Victoria" && stopName === "Roundthorn") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Baguley.mp3').play();
    }else if (destination === "Victoria" && stopName === "Baguley") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Moor-Road.mp3').play();
    }else if (destination === "Victoria" && stopName === "Moor Road") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Wythenshawe-Park.mp3').play();
    }else if (destination === "Victoria" && stopName === "Wythenshawe Park") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Northern-Moor.mp3').play();
    }else if (destination === "Victoria" && stopName === "Northern Moor") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Sale-Water-Park.mp3').play();
    }else if (destination === "Victoria" && stopName === "Sale Water Park") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Werburghs-Road.mp3').play();
    }else if (destination === "Victoria" && stopName === "Barlow Moor Road") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Werburghs-Road.mp3').play();
    }else if (destination === "Victoria" && stopName === "St Werburgh's Road") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Chorlton.mp3').play();
    }else if (destination === "Victoria" && stopName === "Chorlton") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Firswood.mp3').play();
    }else if (destination === "Victoria" && stopName === "Firswood") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Trafford-Bar.mp3').play();
    }else if (destination === "Victoria" && stopName === "Trafford-Bar") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Cornbrook.mp3').play();
    }else if (destination === "Victoria" && stopName === "Cornbrook") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Deansgate-Castlefield.mp3').play();
    }else if (destination === "Victoria" && stopName === "Deansgate-Castlefield") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Peters-Square.mp3').play();
    }else if (destination === "Victoria" && stopName === "St Peter's Square") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Market-Street.mp3').play();
    }else if (destination === "Victoria" && stopName === "Market Street") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Victoria.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Shudehill.mp3').play();
    }else if (destination === "Victoria" && stopName === "Shudehill") {
        var audio1 = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Victoria.mp3');
        audio1.play(); // Start playing the first audio

        audio1.onended = function() {
            var audio2 = new Audio('Audio/Announcements/TheNextStop/Victoria.mp3');
            audio2.play(); // Start playing the second audio after the first one ends

            audio2.onended = function() {
                var audio3 = new Audio('Audio/Announcements/Terminates/WhereThisServiceTerminates.mp3');
                audio3.play(); // Start playing the third audio after the second one ends
        };
    };
    }



    //Manchester Airport
    else if (destination === "Manchester Airport" && stopName === "Shadowmoss") {
        var audio1 = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio1.play(); // Start playing the first audio

        audio1.onended = function() {
            var audio2 = new Audio('Audio/Announcements/TheNextStop/Manchester-Airport.mp3');
            audio2.play(); // Start playing the second audio after the first one ends

            audio2.onended = function() {
                var audio3 = new Audio('Audio/Announcements/Terminates/WhereThisServiceTerminates.mp3');
                audio3.play(); // Start playing the third audio after the second one ends
        };
    };
    }else if (destination === "Manchester Airport" && stopName === "Peel Hall") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Shadowmoss.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Robinswood Road") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Peel-Hall.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Wythenshawe Town Centre") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Robinswood-Road.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Crossacres") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Wythenshawe-Town-Centre.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Benchill") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Crossacres.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Martinscroft") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Benchill.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Roundthorn") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Martinscroft.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Baguley") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Roundthorn.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Moor Road") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Baguley.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Wythenshawe Park") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Moor-Road.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Northern Moor") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Wythenshawe-Park.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Sale Water Park") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Northern-Moor.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Barlow Moor Road") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Sale-Water-Park.mp3').play();
    }
    else if (destination === "Manchester Airport" && stopName === "St Werburgh's Road") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Barlow-Moor-Road.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Chorlton") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Werburghs-Road.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Firswood") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Chorlton.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Trafford-Bar") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Firswood.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Cornbrook") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Trafford-Bar.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Deansgate-Castlefield") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Cornbrook.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "St Peter's Square") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Deansgate-Castlefield.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Market Street") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Peters-Square.mp3').play();
    }else if (destination === "Manchester Airport" && stopName === "Shudehill") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Market-Street.mp3').play();
    }
    else if (destination === "Manchester Airport" && stopName === "Victoria") {
        var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Manchester-Airport.mp3');
        audio.play();
        audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Shudehill.mp3').play();
    }


    //The Trafford Centre - Deansgate - Castlefield
// The Trafford Centre
if (destination === "The Trafford Centre" && stopName === "Deansgate - Castlefield") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/The-Trafford-Centre.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Cornbrook.mp3').play();
} else if (destination === "The Trafford Centre" && stopName === "Cornbrook") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/The-Trafford-Centre.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Pomona.mp3').play();
} else if (destination === "The Trafford Centre" && stopName === "Pomona") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/The-Trafford-Centre.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Wharfside.mp3').play();
} else if (destination === "The Trafford Centre" && stopName === "Wharfside") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/The-Trafford-Centre.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Imperial-War-Museum.mp3').play();
} else if (destination === "The Trafford Centre" && stopName === "Imperial War Museum") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/The-Trafford-Centre.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Village.mp3').play();
} else if (destination === "The Trafford Centre" && stopName === "Village") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/The-Trafford-Centre.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Parkway.mp3').play();
} else if (destination === "The Trafford Centre" && stopName === "Parkway") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/The-Trafford-Centre.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Barton-Dock-Road.mp3').play();
} else if (destination === "The Trafford Centre" && stopName === "Barton Dock Road") {
    var audio1 = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/The-Trafford-Centre.mp3');
        audio1.play(); // Start playing the first audio

        audio1.onended = function() {
            var audio2 = new Audio('Audio/Announcements/TheNextStop/The-Trafford-Centre.mp3');
            audio2.play(); // Start playing the second audio after the first one ends

            audio2.onended = function() {
                var audio3 = new Audio('Audio/Announcements/Terminates/WhereThisServiceTerminates.mp3');
                audio3.play(); // Start playing the third audio after the second one ends
        };
    };
}


    //Deansgate - Castlefield
if (destination === "Deansgate Castlefield" && stopName === "The Trafford Centre") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Deansgate-Castlefield.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Barton-Dock-Road.mp3').play();
} else if (destination === "Deansgate Castlefield" && stopName === "Barton Dock Road") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Deansgate-Castlefield.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Parkway.mp3').play();
} else if (destination === "Deansgate Castlefield" && stopName === "Parkway") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Deansgate-Castlefield.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Village.mp3').play();
} else if (destination === "Deansgate Castlefield" && stopName === "Village") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Deansgate-Castlefield.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Imperial-War-Museum.mp3').play();
} else if (destination === "Deansgate Castlefield" && stopName === "Imperial War Museum") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Deansgate-Castlefield.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Wharfside.mp3').play();
} else if (destination === "Deansgate Castlefield" && stopName === "Wharfside") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Deansgate-Castlefield.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Pomona.mp3').play();
} else if (destination === "Deansgate Castlefield" && stopName === "Pomona") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Deansgate-Castlefield.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Cornbrook.mp3').play();
} else if (destination === "Deansgate Castlefield" && stopName === "Cornbrook") {
    var audio1 = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Deansgate-Castlefield.mp3');
        audio1.play(); // Start playing the first audio

        audio1.onended = function() {
            var audio2 = new Audio('Audio/Announcements/TheNextStop/Deansgate-Castlefield.mp3');
            audio2.play(); // Start playing the second audio after the first one ends

            audio2.onended = function() {
                var audio3 = new Audio('Audio/Announcements/Terminates/WhereThisServiceTerminates.mp3');
                audio3.play(); // Start playing the third audio after the second one ends
        };
    };
}


//MediaCityUK - Etihad Campus

//MediaCityUK
if (destination === "Etihad Campus" && stopName === "MediaCityUK") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Etihad-Campus.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Harbour-City.mp3').play();
} else if (destination === "Etihad Campus" && stopName === "Harbour City") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Etihad-Campus.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Anchorage.mp3').play();
} else if (destination === "Etihad Campus" && stopName === "Anchorage") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Etihad-Campus.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Salford-Quays.mp3').play();
} else if (destination === "Etihad Campus" && stopName === "Salford Quays") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Etihad-Campus.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Exchange-Quay.mp3').play();
} else if (destination === "Etihad Campus" && stopName === "Exchange Quay") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Etihad-Campus.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Pomona.mp3').play();
} else if (destination === "Etihad Campus" && stopName === "Pomona") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Etihad-Campus.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Cornbrook.mp3').play();
} else if (destination === "Etihad Campus" && stopName === "Cornbrook") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Etihad-Campus.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Deansgate-Castlefield.mp3').play();
} else if (destination === "Etihad Campus" && stopName === "Deansgate - Castlefield") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Etihad-Campus.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Peters-Square.mp3').play();
} else if (destination === "Etihad Campus" && stopName === "St Peter's Square") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Etihad-Campus.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Piccadilly-Gardens.mp3').play();
} else if (destination === "Etihad Campus" && stopName === "Piccadilly Gardens") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Etihad-Campus.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Piccadilly.mp3').play();
} else if (destination === "Etihad Campus" && stopName === "Piccadilly") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Etihad-Campus.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/New-Islington.mp3').play();
} else if (destination === "Etihad Campus" && stopName === "New Islington") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Etihad-Campus.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Holt-Town.mp3').play();
} else if (destination === "Etihad Campus" && stopName === "Holt Town") {
    var audio1 = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Etihad-Campus.mp3');
        audio1.play(); // Start playing the first audio

        audio1.onended = function() {
            var audio2 = new Audio('Audio/Announcements/TheNextStop/Etihad-Campus.mp3');
            audio2.play(); // Start playing the second audio after the first one ends

            audio2.onended = function() {
                var audio3 = new Audio('Audio/Announcements/Terminates/WhereThisServiceTerminates.mp3');
                audio3.play(); // Start playing the third audio after the second one ends
        };
    };
}

//MediaCityUK
if (destination === "MediaCityUK" && stopName === "Etihad Campus") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/MediaCityUK.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Holt-Town.mp3').play();
} else if (destination === "MediaCityUK" && stopName === "Holt Town") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/MediaCityUK.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/New-Islington.mp3').play();
} else if (destination === "MediaCityUK" && stopName === "New Islington") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/MediaCityUK.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Piccadilly.mp3').play();
} else if (destination === "MediaCityUK" && stopName === "Piccadilly") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/MediaCityUK.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Piccadilly-Gardens.mp3').play();
} else if (destination === "MediaCityUK" && stopName === "Piccadilly Gardens") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/MediaCityUK.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Peters-Square.mp3').play();
} else if (destination === "MediaCityUK" && stopName === "St Peter's Square") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/MediaCityUK.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Deansgate-Castlefield.mp3').play();
} else if (destination === "MediaCityUK" && stopName === "Deansgate - Castlefield") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/MediaCityUK.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Cornbrook.mp3').play();
} else if (destination === "MediaCityUK" && stopName === "Cornbrook") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/MediaCityUK.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Pomona.mp3').play();
} else if (destination === "MediaCityUK" && stopName === "Pomona") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/MediaCityUK.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Exchange-Quay.mp3').play();
} else if (destination === "MediaCityUK" && stopName === "Exchange Quay") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/MediaCityUK.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Salford-Quays.mp3').play();
} else if (destination === "MediaCityUK" && stopName === "Salford Quays") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/MediaCityUK.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Anchorage.mp3').play();
} else if (destination === "MediaCityUK" && stopName === "Anchorage") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/MediaCityUK.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Harbour-City.mp3').play();
} else if (destination === "MediaCityUK" && stopName === "Harbour City") {
    var audio1 = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/MediaCityUK.mp3');
        audio1.play(); // Start playing the first audio

        audio1.onended = function() {
            var audio2 = new Audio('Audio/Announcements/TheNextStop/MediaCityUK.mp3');
            audio2.play(); // Start playing the second audio after the first one ends

            audio2.onended = function() {
                var audio3 = new Audio('Audio/Announcements/Terminates/WhereThisServiceTerminates.mp3');
                audio3.play(); // Start playing the third audio after the second one ends
        };
    };
}



//Ashton-under-Lyne
if (destination === "Ashton-under-Lyne" && stopName === "Eccles") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Ladywell.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Ladywell") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Weaste.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Weaste") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Langworthy.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Langworthy") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Broadway.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Broadway") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/MediaCityUK.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "MediaCityUK") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Harbour-City.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Harbour City") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Anchorage.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Anchorage") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Salford-Quays.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Salford Quays") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Exchange-Quay.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Exchange Quay") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Pomona.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Pomona") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Cornbrook.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Cornbrook") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Deansgate-Castlefield.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Deansgate - Castlefield") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Peters-Square.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "St Peter's Square") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Piccadilly-Gardens.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Piccadilly Gardens") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-Under-Lyne_Piccadilly.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Piccadilly.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Piccadilly") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Ashton-under-Lyne.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/New-Islington.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "New Islington") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-under-Lyne.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Holt-Town.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Holt Town") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-under-Lyne.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Etihad-Campus.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Etihad Campus") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-under-Lyne.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Velopark.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Velopark") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-under-Lyne.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Clayton-Hall.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Clayton Hall") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-under-Lyne.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Edge-Lane.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Edge Lane") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-under-Lyne.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Cemetery-Road.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Cemetery Road") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-under-Lyne.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Droylsden.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Droylsden") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-under-Lyne.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Audenshaw.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Audenshaw") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-under-Lyne.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Ashton-Moss.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Ashton Moss") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Ashton-under-Lyne.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Ashton-West.mp3').play();
} else if (destination === "Ashton-under-Lyne" && stopName === "Ashton West") {
    var audio1 = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Ashton-under-Lyne.mp3');
        audio1.play(); // Start playing the first audio

        audio1.onended = function() {
            var audio2 = new Audio('Audio/Announcements/TheNextStop/Ashton-under-Lyne.mp3');
            audio2.play(); // Start playing the second audio after the first one ends

            audio2.onended = function() {
                var audio3 = new Audio('Audio/Announcements/Terminates/WhereThisServiceTerminates.mp3');
                audio3.play(); // Start playing the third audio after the second one ends
        };
    };
}

//Eccles
if (destination === "Eccles" && stopName === "Ladywell") {
    var audio1 = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Ashton-under-Lyne.mp3');
        audio1.play(); // Start playing the first audio

        audio1.onended = function() {
            var audio2 = new Audio('Audio/Announcements/TheNextStop/Ashton-under-Lyne.mp3');
            audio2.play(); // Start playing the second audio after the first one ends

            audio2.onended = function() {
                var audio3 = new Audio('Audio/Announcements/Terminates/WhereThisServiceTerminates.mp3');
                audio3.play(); // Start playing the third audio after the second one ends
        };
    };
} else if (destination === "Eccles" && stopName === "Weaste") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Ladywell.mp3').play();
} else if (destination === "Eccles" && stopName === "Langworthy") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/Single/Weaste.mp3').play();
} else if (destination === "Eccles" && stopName === "Broadway") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Langworthy.mp3').play();
} else if (destination === "Eccles" && stopName === "Harbour City") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Broadway.mp3').play();
} else if (destination === "Eccles" && stopName === "Anchorage") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Harbour-City.mp3').play();
} else if (destination === "Eccles" && stopName === "Salford Quays") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Anchorage.mp3').play();
} else if (destination === "Eccles" && stopName === "Exchange Quay") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Salford-Quays.mp3').play();
} else if (destination === "Eccles" && stopName === "Pomona") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Exchange-Quay.mp3').play();
} else if (destination === "Eccles" && stopName === "Cornbrook") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Pomona.mp3').play();
} else if (destination === "Eccles" && stopName === "Deansgate - Castlefield") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Cornbrook.mp3').play();
} else if (destination === "Eccles" && stopName === "St Peter's Square") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Deansgate-Castlefield.mp3').play();
} else if (destination === "Eccles" && stopName === "Piccadilly Gardens") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Peters-Square.mp3').play();
} else if (destination === "Eccles" && stopName === "Piccadilly") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Piccadilly-Gardens.mp3').play();
} else if (destination === "Eccles" && stopName === "New Islington") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Piccadilly.mp3').play();
} else if (destination === "Eccles" && stopName === "Holt Town") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/New-Islington.mp3').play();
} else if (destination === "Eccles" && stopName === "Etihad Campus") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Holt-Town.mp3').play();
} else if (destination === "Eccles" && stopName === "Velopark") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Etihad-Campus.mp3').play();
} else if (destination === "Eccles" && stopName === "Clayton Hall") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Velopark.mp3').play();
} else if (destination === "Eccles" && stopName === "Edge Lane") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Clayton-Hall.mp3').play();
} else if (destination === "Eccles" && stopName === "Cemetery Road") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Edge-Lane.mp3').play();
} else if (destination === "Eccles" && stopName === "Droylsden") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Cemetery-Road.mp3').play();
} else if (destination === "Eccles" && stopName === "Audenshaw") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Droylsden.mp3').play();
} else if (destination === "Eccles" && stopName === "Ashton Moss") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Audenshaw.mp3').play();
} else if (destination === "Eccles" && stopName === "Ashton West") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Ashton-Moss.mp3').play();
} else if (destination === "Eccles" && stopName === "Ashton-under-Lyne") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Ashton-West.mp3').play();
}


//Eccles via MediaCityUK
else if (destination === "Eccles via MediaCityUK" && stopName === "Anchorage") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Harbour-City.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Salford Quays") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Anchorage.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Exchange Quay") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Salford-Quays.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Pomona") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Exchange-Quay.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Cornbrook") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Pomona.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Deansgate - Castlefield") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Cornbrook.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "St Peter's Square") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Deansgate-Castlefield.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Piccadilly Gardens") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Peters-Square.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Piccadilly") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Piccadilly-Gardens.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "New Islington") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Piccadilly.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Holt Town") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/New-Islington.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Etihad Campus") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Holt-Town.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Velopark") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Etihad-Campus.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Clayton Hall") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Velopark.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Edge Lane") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Clayton-Hall.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Cemetery Road") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Edge-Lane.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Droylsden") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Cemetery-Road.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Audenshaw") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Droylsden.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Ashton Moss") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Audenshaw.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Ashton West") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Ashton-Moss.mp3').play();
} else if (destination === "Eccles via MediaCityUK" && stopName === "Ashton-under-Lyne") {
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Eccles.mp3');
    audio.play();
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Ashton-West.mp3').play();
}



//Altrincham - Piccadilly
//Altrincham
else if (destination === "Altrincham" && stopName === "Piccadilly") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Piccadilly-Gardens.mp3').play(); //The next stop

}else if (destination === "Altrincham" && stopName === "Piccadilly Gardens") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Peters-Square.mp3').play(); //The next stop
    
}else if (destination === "Altrincham" && stopName === "St Peter's Square") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Peters-Square.mp3').play(); //The next stop
}else if (destination === "Altrincham" && stopName === "Deansgate - Castlefield") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Deansgate-Castlefield.mp3').play(); //The next stop
    
}else if (destination === "Altrincham" && stopName === "Cornbrook") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Trafford-Bar.mp3').play(); //The next stop
    
}else if (destination === "Altrincham" && stopName === "Trafford Bar") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Old-Trafford.mp3').play(); //The next stop
    
}else if (destination === "Altrincham" && stopName === "Old Trafford") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Stratford.mp3').play(); //The next stop
    
}else if (destination === "Altrincham" && stopName === "Stratford") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Dane-Road.mp3').play(); //The next stop
    
}else if (destination === "Altrincham" && stopName === "Dane Road") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Sale.mp3').play(); //The next stop
    
}else if (destination === "Altrincham" && stopName === "Sale") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Brooklands.mp3').play(); //The next stop
    
}else if (destination === "Altrincham" && stopName === "Brooklands") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Timperley.mp3').play(); //The next stop
    
}else if (destination === "Altrincham" && stopName === "Timperley") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Navigation-Road.mp3').play(); //The next stop
    
} else if (destination === "Altrincham" && stopName === "Navigation Road") {

    var audio1 = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3');
        audio1.play(); // Start playing the first audio

        audio1.onended = function() {
            var audio2 = new Audio('Audio/Announcements/TheNextStop/Altrincham.mp3');
            audio2.play(); // Start playing the second audio after the first one ends

            audio2.onended = function() {
                var audio3 = new Audio('Audio/Announcements/Terminates/WhereThisServiceTerminates.mp3');
                audio3.play(); // Start playing the third audio after the second one ends
        };
    };
    
}




//Piccadilly
else if (destination === "Piccadilly" && stopName === "Altrincham") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Piccadilly.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Navigation-Road.mp3').play(); //The next stop

} else if (destination === "Piccadilly" && stopName === "Navigation Road") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Piccadilly.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Timperley.mp3').play(); //The next stop
    
} else if (destination === "Piccadilly" && stopName === "Timperley") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Piccadilly.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Brooklands.mp3').play(); //The next stop
    
} else if (destination === "Piccadilly" && stopName === "Brooklands") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Piccadilly.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Sale.mp3').play(); //The next stop
    
} else if (destination === "Piccadilly" && stopName === "Sale") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Piccadilly.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Dane-Road.mp3').play(); //The next stop
    
} else if (destination === "Piccadilly" && stopName === "Dane Road") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Piccadilly.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Stratford.mp3').play(); //The next stop
    
} else if (destination === "Piccadilly" && stopName === "Stratford") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Piccadilly.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Old-Trafford.mp3').play(); //The next stop
    
} else if (destination === "Piccadilly" && stopName === "Old Trafford") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Piccadilly.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Trafford-Bar.mp3').play(); //The next stop
    
} else if (destination === "Piccadilly" && stopName === "Trafford Bar") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Piccadilly.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Cornbrook.mp3').play(); //The next stop
    
} else if (destination === "Piccadilly" && stopName === "Cornbrook") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Piccadilly.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Deansgate-Castlefield.mp3').play(); //The next stop
    
} else if (destination === "Piccadilly" && stopName === "Deansgate - Castlefield") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Piccadilly.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Peters-Square.mp3').play(); //The next stop
    
} else if (destination === "Piccadilly" && stopName === "St Peter's Square") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Piccadilly.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Piccadilly-Gardens.mp3').play(); //The next stop
    
} else if (destination === "Piccadilly" && stopName === "Piccadilly Gardens") {
    
    var audio1 = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Piccadilly.mp3');
        audio1.play(); // Start playing the first audio

        audio1.onended = function() {
            var audio2 = new Audio('Audio/Announcements/TheNextStop/Piccadilly.mp3');
            audio2.play(); // Start playing the second audio after the first one ends

            audio2.onended = function() {
                var audio3 = new Audio('Audio/Announcements/Terminates/WhereThisServiceTerminates.mp3');
                audio3.play(); // Start playing the third audio after the second one ends
        };
    };
}




//Altrincham - Bury
//Altrincham
else if (destination === "Altrincham" && stopName === "Bury") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Radcliffe.mp3').play(); //The next stop
    
} else if (destination === "Altrincham" && stopName === "Radcliffe") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Whitefield.mp3').play(); //The next stop
    
} else if (destination === "Altrincham" && stopName === "Whitefield") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio("Audio/Announcements/TheNextStop/Besses-O'Th'-Barn.mp3").play(); //The next stop
    
} else if (destination === "Altrincham" && stopName === "Besses O' Th' Barn") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Prestwich.mp3').play(); //The next stop
    
} else if (destination === "Altrincham" && stopName === "Prestwich") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Heaton-Park.mp3').play(); //The next stop
    
} else if (destination === "Altrincham" && stopName === "Heaton Park") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Bowker-Vale.mp3').play(); //The next stop
    
} else if (destination === "Altrincham" && stopName === "Bowker Vale") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Crumpsall.mp3').play(); //The next stop
    
} else if (destination === "Altrincham" && stopName === "Crumpsall") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Abraham-Moss.mp3').play(); //The next stop
    
} else if (destination === "Altrincham" && stopName === "Abraham Moss") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Queens-Road.mp3').play(); //The next stop
    
} else if (destination === "Altrincham" && stopName === "Queens Road") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Victoria.mp3').play(); //The next stop
    
} else if (destination === "Altrincham" && stopName === "Victoria") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Shudehill.mp3').play(); //The next stop
    
} else if (destination === "Altrincham" && stopName === "Shudehill") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Market-Street.mp3').play(); //The next stop
    
} else if (destination === "Altrincham" && stopName === "Market Street") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Altrincham.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Peters-Square.mp3').play(); //The next stop
    
} 
//The rest continues on "Altrincham - Piccadilly"



//Bury
else if (destination === "Bury" && stopName === "Altrincham") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Navigation-Road.mp3').play(); //The next stop
    
}  else if (destination === "Bury" && stopName === "Navigation Road") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Timperley.mp3').play(); //The next stop
    
}  else if (destination === "Bury" && stopName === "Timperley") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Brooklands.mp3').play(); //The next stop
    
}  else if (destination === "Bury" && stopName === "Brooklands") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Sale.mp3').play(); //The next stop
    
}  else if (destination === "Bury" && stopName === "Sale") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Dane-Road.mp3').play(); //The next stop
    
}  else if (destination === "Bury" && stopName === "Dane Road") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Stratford.mp3').play(); //The next stop
    
}  else if (destination === "Bury" && stopName === "Stratford") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Old-Trafford.mp3').play(); //The next stop
    
}  else if (destination === "Bury" && stopName === "Old Trafford") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Trafford-Bar.mp3').play(); //The next stop
    
}  else if (destination === "Bury" && stopName === "Trafford Bar") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Cornbrook.mp3').play(); //The next stop
    
}  else if (destination === "Bury" && stopName === "Cornbrook") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Deansgate-Castlefield.mp3').play(); //The next stop
    
}  else if (destination === "Bury" && stopName === "Deansgate - Castlefield") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Peters-Square.mp3').play(); //The next stop
    
}  else if (destination === "Bury" && stopName === "St Peter's Square") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Market-Street.mp3').play(); //The next stop
    
}  else if (destination === "Bury" && stopName === "Market Street") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Shudehill.mp3').play(); //The next stop
    
} else if (destination === "Bury" && stopName === "Shudehill") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Victoria.mp3').play(); //The next stop
    
} 
else if (destination === "Bury" && stopName === "Victoria") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Queens-Road.mp3').play(); //The next stop
    
} 
else if (destination === "Bury" && stopName === "Queens Road") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Abraham-Moss.mp3').play(); //The next stop
    
} 
else if (destination === "Bury" && stopName === "Abraham Moss") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Crumpsall.mp3').play(); //The next stop
    
} 
else if (destination === "Bury" && stopName === "Crumpsall") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Bowker-Vale.mp3').play(); //The next stop
    
} 
else if (destination === "Bury" && stopName === "Bowker Vale") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Heaton-Park.mp3').play(); //The next stop
    
} 
else if (destination === "Bury" && stopName === "Heaton Park") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Prestwich.mp3').play(); //The next stop
    
} 
else if (destination === "Bury" && stopName === "Prestwich") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio("Audio/Announcements/TheNextStop/Besses-O'-Th'-Barn.mp3").play(); //The next stop
    
} 
else if (destination === "Bury" && stopName === "Besses O' Th' Barn") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Whitefield.mp3').play(); //The next stop
    
} 
else if (destination === "Bury" && stopName === "Whitefield") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Bury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Radcliffe.mp3').play(); //The next stop
    
} 
else if (destination === "Bury" && stopName === "Radcliffe") {

    var audio1 = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Bury.mp3');
        audio1.play(); // Start playing the first audio

        audio1.onended = function() {
            var audio2 = new Audio('Audio/Announcements/TheNextStop/Bury.mp3');
            audio2.play(); // Start playing the second audio after the first one ends

            audio2.onended = function() {
                var audio3 = new Audio('Audio/Announcements/Terminates/WhereThisServiceTerminates.mp3');
                audio3.play(); // Start playing the third audio after the second one ends
        };
    };
    
} 




//East Didsbury - Shaw and Crompton
//East Didsbury (Starting from Rochdale)
else if (destination === "East Didsbury" && stopName === "Rochdale") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Rochdale-Railway-Station.mp3').play(); //The next stop
    
}else if (destination === "East Didsbury" && stopName === "Rochdale Railway Station") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Newbold.mp3').play(); //The next stop
    
}else if (destination === "East Didsbury" && stopName === "Newbold") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Kingsway-Business-Park.mp3').play(); //The next stop
    
}else if (destination === "East Didsbury" && stopName === "Kingsway Business Park") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Milnrow.mp3').play(); //The next stop
    
}else if (destination === "East Didsbury" && stopName === "Milnrow") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Newhey.mp3').play(); //The next stop
    
}else if (destination === "East Didsbury" && stopName === "Newhey") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/StopName.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Shaw and Crompron") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Derker.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Derker") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Oldham-Mumps.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Oldham Mumps") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Oldham-Central.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Oldham Central") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Oldham-King-Street.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Oldham King Street") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Westwood.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Westwood") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Freehold.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Freehold") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/South-Chadderton.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "South Chadderton") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Hollywood.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Hollywood") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Failsworth.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Failsworth") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Newton-Heath-and-Boston.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Newton Heath and Boston") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Central-Park.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Central Park") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Monsall.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Monsall") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Victoria.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Victoria") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Exchange-Square.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Exchange Square") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Peters-Square.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "St Peter's Square") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Deansgate-Castlefield.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Deansgate - Castlefield") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Trafford-Bar.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Trafford Bar") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Trafford-Bar.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Firswood") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Chorlton.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Chorlton") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Werburghs-Road.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "St Werburgh's Road") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Withington.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Withington") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Burton-Road.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Burton Road") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/West-Didsbury.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "West Didsbury") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/East-Didsbury.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Didsbury-Village.mp3').play(); //The next stop
    
} else if (destination === "East Didsbury" && stopName === "Didsbury Village") {

    var audio1 = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/East-Didsbury.mp3');
        audio1.play(); // Start playing the first audio

        audio1.onended = function() {
            var audio2 = new Audio('Audio/Announcements/TheNextStop/East-Didsbury.mp3');
            audio2.play(); // Start playing the second audio after the first one ends

            audio2.onended = function() {
                var audio3 = new Audio('Audio/Announcements/Terminates/WhereThisServiceTerminates.mp3');
                audio3.play(); // Start playing the third audio after the second one ends
        };
    };
    
} 




//Shaw and Crompton
else if (destination === "Shaw and Crompton" && stopName === "East Didsbury") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Didsbury-Village.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Didsbury Village") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/West-Didsbury.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "West Didsbury") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Burton-Road.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Burton Road") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Withington.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Withington") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Werburghs-Road.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "St Werburgh's Road") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Chorlton.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Chorlton") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Firswood.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Firswood") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Trafford-Bar.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Trafford Bar") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Deansgate-Castlefield.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Deansgate - Castlefield") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/St-Peters-Square.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "St Peter's Square") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Via/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Exchange-Square.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Exchange Square") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Victoria.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Victoria") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Monsall.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Monsall") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Central-Park.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Central Park") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Newton-Heath-and-Boston.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Newton Heath and Boston") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Failsworth.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Failsworth") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Hollywood.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Hollywood") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/South-Chadderton.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "South Chadderton") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Freehold.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Freehold") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Westwood.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Westwood") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Oldham-King-Street.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Oldham King Street") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Oldham-Central.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Oldham Central") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Oldham-Mumps.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Oldham Mumps") {
    //Destination
    var audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3'); //Destination
    audio.play();
    //The next stop
    audio.onended = () => new Audio('Audio/Announcements/TheNextStop/Derker.mp3').play(); //The next stop
    
} else if (destination === "Shaw and Crompton" && stopName === "Derker") {

    var audio1 = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Shaw-and-Crompton.mp3');
        audio1.play(); // Start playing the first audio

        audio1.onended = function() {
            var audio2 = new Audio('Audio/Announcements/TheNextStop/Shaw-and-Crompton.mp3');
            audio2.play(); // Start playing the second audio after the first one ends

            audio2.onended = function() {
                var audio3 = new Audio('Audio/Announcements/Terminates/WhereThisServiceTerminates.mp3');
                audio3.play(); // Start playing the third audio after the second one ends
        };
    };
    
}






    else {
        //audio = new Audio('Audio/Announcements/ThisIsAServiceTo/Single/Victoria.mp3');
    }
    audio.play();
}