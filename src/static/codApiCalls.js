
//this method needs to be modified to handle submit button spam. Request will overload and time out.

function makeApiCallCod(){//this method will be the only method needed to be called in order to get cod api for any mode
    console.log("Calling...")
    const userName = sessionStorage.getItem('gamertag'); // getElementById allows access to html variables
    const platform = sessionStorage.getItem('platform');
    const mode = "br";
    let routeStrInput = "https://call-of-duty-modern-warfare.p.rapidapi.com/"; //api call path
    routeStrInput += "warzone/";
    routeStrInput += userName.toLowerCase();
    routeStrInput += "/"
    routeStrInput += platform;

    //const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //comment out when running on server. When running locally uncomment
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            if(mode === "br"){1, GetCodBrStats(this.responseText);}
            else{1, GetCodMultiplayerStats(this.responseText)}
        } else if (this.status === 404) {
            console.log("404 caught")
            document.location.href = "./error.html"
        }
    });

    xhr.open("GET", routeStrInput);
    xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "b9574dda6dmsh15fd109cf94156ap13974cjsnc7495f8f3eab");
    xhr.send(data);
}
//makeApiCallCod(); // uncomment when running locally

function makeMultiplayerApiCallCod(){
    console.log("Calling...")
    const userName = sessionStorage.getItem('gamertag'); // getElementById allows access to html variables
    const platform = sessionStorage.getItem('platform');
    const mode = "br";
    let routeStrInput = "https://call-of-duty-modern-warfare.p.rapidapi.com/"; //api call path
    routeStrInput += "warzone/";
    routeStrInput += userName.toLowerCase();
    routeStrInput += "/"
    routeStrInput += platform;

    //const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //comment out when running on server. When running locally uncomment
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            if(mode === "br"){GetCodBrStats(2, this.responseText); makeApiCallCod()}
            else{GetCodMultiplayerStats(2, this.responseText); makeApiCallCod()}
        } else if (this.status === 404) {
            console.log("404 caught")
            document.location.href = "./error.html"
        }
    });

    xhr.open("GET", routeStrInput);
    xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "b9574dda6dmsh15fd109cf94156ap13974cjsnc7495f8f3eab");
    xhr.send(data);
}

function GetCodBrStats(player, jsonStr) {
    const codInfoDictionary = JSON.parse(jsonStr) //parse jason file and go through dictionary to get values
    //console.log(codInfoDictionary); uncomment if you want to see dictionary content
    if (codInfoDictionary.hasOwnProperty('error')) {
        document.location.href = "./error.html"
    }
    let mode = "";
    let kills = "";
    let deaths = "";
    let kd = "";
    let downs = "";
    let topFives = "";
    let kdRatioFloat = parseFloat(codInfoDictionary["br"]["kdRatio"]);

    mode += "Battle Royal";
    kills += codInfoDictionary["br"]["kills"];
    deaths += codInfoDictionary["br"]["deaths"];
    kd += kdRatioFloat.toFixed(3);
    downs += codInfoDictionary["br"]["downs"];
    topFives += codInfoDictionary["br"]["topFive"]
    if (player === 1) {
        sessionStorage.setItem('mode', mode)
        sessionStorage.setItem('deaths', deaths)
        sessionStorage.setItem('kills', kills)
        sessionStorage.setItem('kd', kd)
        sessionStorage.setItem('downs', downs)
        sessionStorage.setItem('topFives', topFives)
        console.log(mode, '\n', deaths, '\n', kills, '\n', kd, '\n', downs, '\n', topFives)
        if (document.getElementById('mode') != null) {
            console.log("Setting")
            document.getElementById("mode").innerHTML = (sessionStorage.getItem('mode'))
            document.getElementById("top5").innerHTML = (sessionStorage.getItem('topFives'))
            document.getElementById("kd").innerHTML = (sessionStorage.getItem('kd'))
            document.getElementById("kills").innerHTML = (sessionStorage.getItem('kills'))
            document.getElementById("deaths").innerHTML = (sessionStorage.getItem('deaths'))
            document.getElementById("downs").innerHTML = (sessionStorage.getItem('downs'))
        }
    } else if (player === 2) {
        sessionStorage.setItem('mode_2', mode)
        sessionStorage.setItem('deaths_2', deaths)
        sessionStorage.setItem('kills_2', kills)
        sessionStorage.setItem('kd_2', kd)
        sessionStorage.setItem('downs_2', downs)
        sessionStorage.setItem('topFives_2', topFives)
        console.log(mode, '\n', deaths, '\n', kills, '\n', kd, '\n', downs, '\n', topFives)
        if (document.getElementById('mode_2') != null) {
            console.log("Setting_2")
            document.getElementById("mode_2").innerHTML = (sessionStorage.getItem('mode'))
            document.getElementById("top5_2").innerHTML = (sessionStorage.getItem('topFives'))
            document.getElementById("kd_2").innerHTML = (sessionStorage.getItem('kd'))
            document.getElementById("kills_2").innerHTML = (sessionStorage.getItem('kills'))
            document.getElementById("deaths_2").innerHTML = (sessionStorage.getItem('deaths'))
            document.getElementById("downs_2").innerHTML = (sessionStorage.getItem('downs'))
        }
    }
}

function GetCodMultiplayerStats(jsonStr){
    const codInfoDictionary = JSON.parse(jsonStr)
    //parse jason file and go through dictionary to get values
    //console.log(codInfoDictionary); uncomment if you want to see dictionary content
}



//THIS IS A TESTING METHOD DO NOT USE
function makeApiCallCodTEST(userName, gamemode, platform){//THIS IS A TESTING METHOD DO NOT USE
    let routeStrInput = "https://call-of-duty-modern-warfare.p.rapidapi.com/"; //api call path
    routeStrInput += gamemode;
    routeStrInput += userName.toLowerCase();
    routeStrInput += "/"
    routeStrInput += platform;
    let callMade = false; // this variable is only for testing

    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            //console.log(this.responseText);
            GetCodBrStats(this.responseText);
        }
    });

    xhr.open("GET", routeStrInput);
    xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "b9574dda6dmsh15fd109cf94156ap13974cjsnc7495f8f3eab");

    xhr.send(data);
    callMade = true;
    return callMade;
}