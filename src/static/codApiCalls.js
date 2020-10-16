
//this method needs to be modified to handle submit button spam. Request will overload and time out.

function makeApiCallCod(){//this method will be the only method needed to be called in order to get cod api for any mode
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
            //console.log(this.responseText);
            if(mode === "br"){GetCodBrStats(this.responseText);}
            else{GetCodMultiplayerStats(this.responseText)}
        }
    });

    xhr.open("GET", routeStrInput);
    xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "b9574dda6dmsh15fd109cf94156ap13974cjsnc7495f8f3eab");

    xhr.send(data);
}
//makeApiCallCod(); // uncomment when running locally

function GetCodBrStats(jsonStr){
    const codInfoDictionary = JSON.parse(jsonStr) //parse jason file and go through dictionary to get values
    //console.log(codInfoDictionary); uncomment if you want to see dictionary content
    let mode = "mode: ";
    let kills = "kills: ";
    let deaths = "deaths: ";
    let kd = "kill death ratio: ";
    let downs = "downs: ";
    let topFives = "top five: ";

    mode += "battle royal";
    kills += codInfoDictionary["br"]["kills"];
    deaths += codInfoDictionary["br"]["deaths"];
    kd += codInfoDictionary["br"]["kdRatio"];
    downs += codInfoDictionary["br"]["downs"];
    topFives += codInfoDictionary["br"]["topFive"]
    console.log(mode, '\n',deaths, '\n', kills, '\n', kd, '\n', downs, '\n', topFives)

    // document.getElementById("gameName").innerHTML = mode;
    // document.getElementById("kill#").innerHTML = kills;
    // document.getElementById("death#").innerHTML = deaths;
    // document.getElementById("kd#").innerHTML = kd;
    // document.getElementById("down#").innerHTML = downs;
    // document.getElementById("topfive#").innerHTML = topFives;
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