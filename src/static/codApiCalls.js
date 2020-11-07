
//this method needs to be modified to handle submit button spam. Request will overload and time out.

function makeApiCallCod(){//this method will be the only method needed to be called in order to get cod api for any mode
    console.log("Calling player 1...")
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
            if(mode === "br"){GetCodBrStats(1, this.responseText);}
            else{GetCodMultiplayerStats(1, this.responseText)}
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
    console.log("Calling player 2...")
    const userName = sessionStorage.getItem('gamertag_2'); // getElementById allows access to html variables
    const platform = sessionStorage.getItem('platform_2');
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
    xhr.setRequestHeader("x-rapidapi-key", "2d25fd40cdmsh437da74b4bee201p180745jsnd3e9a3336699");
    xhr.send(data);
}

function makeMatchesApiCallCod(){
    const userName = sessionStorage.getItem('gamertag'); // getElementById allows access to html variables
    const platform = sessionStorage.getItem('platform');
    let routeStrInput = "https://call-of-duty-modern-warfare.p.rapidapi.com/"; //api call path
    routeStrInput += "warzone-matches/";
    routeStrInput += userName.toLowerCase();
    routeStrInput += "/"
    routeStrInput += platform;

    //const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //comment out when running on server. When running locally uncomment
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            GetCodBrMatchStats(this.responseText);
        } else if (this.status === 404) {
            console.log("404 caught")
            document.location.href = "./error.html"
        }
    });

    xhr.open("GET", routeStrInput);
    xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "2d25fd40cdmsh437da74b4bee201p180745jsnd3e9a3336699");

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

function GetCodBrMatchStats(jsonStr) {
    const codInfoDictionary = JSON.parse(jsonStr) //parse jason file and go through dictionary to get values
    //console.log(codInfoDictionary); uncomment if you want to see dictionary content
    if (codInfoDictionary.hasOwnProperty('error')) {
        document.location.href = "./error.html"
    }
    let match1_kills = "";
    let match1_assists = "";
    let match1_kdratio = "";
    let match1_damage = "";

    let match2_kills = "";
    let match2_assists = "";
    let match2_kdratio = "";
    let match2_damage = "";

    let match3_kills = "";
    let match3_assists = "";
    let match3_kdratio = "";
    let match3_damage = "";

    let match4_kills = "";
    let match4_assists = "";
    let match4_kdratio = "";
    let match4_damage = "";

    let match5_kills = "";
    let match5_assists = "";
    let match5_kdratio  = "";
    let match5_damage = "";

    let match6_kills = "";
    let match6_assists = "";
    let match6_kdratio = "";
    let match6_damage = "";

    match1_kills += codInfoDictionary["matches"][0]["playerStats"]["kills"];
    match1_assists += codInfoDictionary["matches"][0]["playerStats"]["assists"];
    match1_kdratio += codInfoDictionary["matches"][0]["playerStats"]["kdratio"];
    match1_damage += codInfoDictionary["matches"][0]["playerStats"]["damage"];

    match2_kills += codInfoDictionary["matches"][1]["playerStats"]["kills"];
    match2_assists += codInfoDictionary["matches"][1]["playerStats"]["assists"];
    match2_kdratio += codInfoDictionary["matches"][1]["playerStats"]["kdratio"];
    match2_damage += codInfoDictionary["matches"][1]["playerStats"]["damage"];

    match3_kills += codInfoDictionary["matches"][2]["playerStats"]["kills"];
    match3_assists += codInfoDictionary["matches"][2]["playerStats"]["assists"];
    match3_kdratio += codInfoDictionary["matches"][2]["playerStats"]["kdratio"];
    match3_damage += codInfoDictionary["matches"][2]["playerStats"]["damage"];

    match4_kills += codInfoDictionary["matches"][3]["playerStats"]["kills"];
    match4_assists += codInfoDictionary["matches"][3]["playerStats"]["assists"];
    match4_kdratio += codInfoDictionary["matches"][3]["playerStats"]["kdratio"];
    match4_damage += codInfoDictionary["matches"][3]["playerStats"]["damage"];

    match5_kills += codInfoDictionary["matches"][4]["playerStats"]["kills"];
    match5_assists += codInfoDictionary["matches"][4]["playerStats"]["assists"];
    match5_kdratio += codInfoDictionary["matches"][4]["playerStats"]["kdratio"];
    match5_damage += codInfoDictionary["matches"][4]["playerStats"]["damage"];

    match6_kills += codInfoDictionary["matches"][5]["playerStats"]["kills"];
    match6_assists += codInfoDictionary["matches"][5]["playerStats"]["assists"];
    match6_kdratio += codInfoDictionary["matches"][5]["playerStats"]["kdratio"];
    match6_damage += codInfoDictionary["matches"][5]["playerStats"]["damage"];

    sessionStorage.setItem('match1_kills', match1_kills)
    sessionStorage.setItem('match1_assists', match1_assists)
    sessionStorage.setItem('match1_kdratio', match1_kdratio)
    sessionStorage.setItem('match1_damage', match1_damage)

    sessionStorage.setItem('match2_kills', match2_kills)
    sessionStorage.setItem('match2_assists', match2_assists)
    sessionStorage.setItem('match2_kdratio', match2_kdratio)
    sessionStorage.setItem('match2_damage', match2_damage)

    sessionStorage.setItem('match3_kills', match3_kills)
    sessionStorage.setItem('match3_assists', match3_assists)
    sessionStorage.setItem('match3_kdratio', match3_kdratio)
    sessionStorage.setItem('match3_damage', match3_damage)

    sessionStorage.setItem('match4_kills', match4_kills)
    sessionStorage.setItem('match4_assists', match4_assists)
    sessionStorage.setItem('match4_kdratio', match4_kdratio)
    sessionStorage.setItem('match4_damage', match4_damage)

    sessionStorage.setItem('match5_kills', match5_kills)
    sessionStorage.setItem('match5_assists', match5_assists)
    sessionStorage.setItem('match5_kdratio', match5_kdratio)
    sessionStorage.setItem('match5_damage', match5_damage)

    sessionStorage.setItem('match6_kills', match6_kills)
    sessionStorage.setItem('match6_assists', match6_assists)
    sessionStorage.setItem('match6_kdratio', match6_kdratio)
    sessionStorage.setItem('match6_damage', match6_damage)

    if (document.getElementById('mode') != null) {
    }

    console.log("match5_kills: " + match5_kills)
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