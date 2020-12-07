
//this method needs to be modified to handle submit button spam. Request will overload and time out.

function makeApiCallCod(){ //this method will be the only method needed to be called in order to get cod api for any mode
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

function makeMultiplayerMatchesApiCallCod(){

    const userName = sessionStorage.getItem('gamertag'); // getElementById allows access to html variables
    const platform = sessionStorage.getItem('platform');
    let routeStrInput = "https://call-of-duty-modern-warfare.p.rapidapi.com/"; //api call path
    routeStrInput += "multiplayer-matches/";
    routeStrInput += userName;
    routeStrInput += "/"
    routeStrInput += platform;


    //const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //comment out when running on server. When running locally uncomment
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            GetCodMultiplayerMatchStats(this.responseText);
        } else if (this.status === 404) {
            console.log("404 caught")
            document.location.href = "./error.html"
        }
    });


    xhr.open("GET", routeStrInput);

    xhr.setRequestHeader("x-rapidapi-key", "5da567f6e7mshc130869694d6457p12cb62jsn522eb53efc6c");
    xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");

    xhr.send(data);
}
function MakeMultiplayerStatsCalls() {
    const userName = sessionStorage.getItem('gamertag'); // getElementById allows access to html variables
    const platform = sessionStorage.getItem('platform');
    let routeStrInput = "https://call-of-duty-modern-warfare.p.rapidapi.com/"; //api call path
    routeStrInput += "multiplayer/";
    routeStrInput += userName.toLowerCase();
    routeStrInput += "/"
    routeStrInput += platform;
    //const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //comment out when running on server. When running locally uncomment
//const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //comment out when running on server. When running locally uncomment
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            GetCodMultiplayerStats(this.responseText);
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


function GetCodBrStats(player, jsonStr){
    const codInfoDictionary = JSON.parse(jsonStr) //parse jason file and go through dictionary to get values
    //console.log(codInfoDictionary); uncomment if you want to see dictionary content
    if (codInfoDictionary.hasOwnProperty('error')) {
        document.location.href = "./error.html"
    }
    if(player === 1){
        sessionStorage.setItem('brStats1',jsonStr);
        setTimeout(matchStatsForCharts,3000);
    }
    if(player === 2){
        sessionStorage.setItem('brStats2',jsonStr);
    }
    let mode = "";
    let kills = "";
    let deaths = "";
    let kd = "";
    let downs = "";
    let topFives = "";
    let gamesPlayed = "";
    let kdRatioFloat = parseFloat(codInfoDictionary["br"]["kdRatio"]);

    mode += "Warzone";
    kills += codInfoDictionary["br"]["kills"];
    deaths += codInfoDictionary["br"]["deaths"];
    kd += kdRatioFloat.toFixed(3);
    downs += codInfoDictionary["br"]["downs"];
    topFives += codInfoDictionary["br"]["topFive"]
    gamesPlayed += codInfoDictionary["br_all"]["gamesPlayed"]
    if (player === 1) {
        sessionStorage.setItem('mode', mode)
        sessionStorage.setItem('deaths', deaths)
        sessionStorage.setItem('kills', kills)
        sessionStorage.setItem('kd', kd)
        sessionStorage.setItem('downs', downs)
        sessionStorage.setItem('topFives', topFives)
        sessionStorage.setItem('gamesPlayed', gamesPlayed)
        console.log(mode, '\n', deaths, '\n', kills, '\n', kd, '\n', downs, '\n', topFives)
        if (document.getElementById('mode') != null) {
            console.log("Setting")
            document.getElementById("mode").innerHTML = (sessionStorage.getItem('mode'))
            document.getElementById("top5").innerHTML = (sessionStorage.getItem('topFives'))
            document.getElementById("kd").innerHTML = (sessionStorage.getItem('kd'))
            document.getElementById("kills").innerHTML = (sessionStorage.getItem('kills'))
            document.getElementById("deaths").innerHTML = (sessionStorage.getItem('deaths'))
            document.getElementById("downs").innerHTML = (sessionStorage.getItem('downs'))
            if (document.getElementById("gamesPlayed") != null) {
                document.getElementById("gamesPlayed").innerHTML = (sessionStorage.getItem('gamesPlayed'))
            }
        }
    } else if (player === 2) {
        sessionStorage.setItem('mode_2', mode)
        sessionStorage.setItem('deaths_2', deaths)
        sessionStorage.setItem('kills_2', kills)
        sessionStorage.setItem('kd_2', kd)
        sessionStorage.setItem('downs_2', downs)
        sessionStorage.setItem('topFives_2', topFives)
        sessionStorage.setItem('gamesPlayed_2', gamesPlayed)
        console.log(mode, '\n', deaths, '\n', kills, '\n', kd, '\n', downs, '\n', topFives)
        if (document.getElementById('mode') != null) {
            console.log("Setting_2")
            document.getElementById("gamesPlayed_2").innerHTML = (sessionStorage.getItem('gamesPlayed_2'))
            document.getElementById("top5_2").innerHTML = (sessionStorage.getItem('topFives_2'))
            document.getElementById("kd_2").innerHTML = (sessionStorage.getItem('kd_2'))
            document.getElementById("kills_2").innerHTML = (sessionStorage.getItem('kills_2'))
            document.getElementById("deaths_2").innerHTML = (sessionStorage.getItem('deaths_2'))
            document.getElementById("downs_2").innerHTML = (sessionStorage.getItem('downs_2'))
        }
    }
}

function GetCodBrMatchStats(jsonStr) {
    console.log(jsonStr)
    sessionStorage.setItem("matchStats",jsonStr);
    const codInfoDictionary = JSON.parse(jsonStr) //parse jason file and go through dictionary to get values
    //console.log(codInfoDictionary); uncomment if you want to see dictionary content
    if (codInfoDictionary.hasOwnProperty('error')) {
        document.location.href = "./error.html"
    }
    let match1_kills = "";
    let match1_teamPlacement = "";
    let match1_kdratio = "";
    let match1_damage = "";

    let match2_kills = "";
    let match2_teamPlacement = "";
    let match2_kdratio = "";
    let match2_damage = "";

    let match3_kills = "";
    let match3_teamPlacement = "";
    let match3_kdratio = "";
    let match3_damage = "";

    let match4_kills = "";
    let match4_teamPlacement = "";
    let match4_kdratio = "";
    let match4_damage = "";

    let match5_kills = "";
    let match5_teamPlacement = "";
    let match5_kdratio  = "";
    let match5_damage = "";

    let match6_kills = "";
    let match6_teamPlacement = "";
    let match6_kdratio = "";
    let match6_damage = "";

    match1_kills += codInfoDictionary["matches"][0]["playerStats"]["kills"];
    match1_kdratio += codInfoDictionary["matches"][0]["playerStats"]["kdRatio"];
    match1_damage += codInfoDictionary["matches"][0]["playerStats"]["damageDone"];
    match1_teamPlacement += codInfoDictionary["matches"][0]["playerStats"]["teamPlacement"];

    match2_kills += codInfoDictionary["matches"][1]["playerStats"]["kills"];
    match2_teamPlacement += codInfoDictionary["matches"][1]["playerStats"]["teamPlacement"];
    match2_kdratio += codInfoDictionary["matches"][1]["playerStats"]["kdRatio"];
    match2_damage += codInfoDictionary["matches"][1]["playerStats"]["damageDone"];

    match3_kills += codInfoDictionary["matches"][2]["playerStats"]["kills"];
    match3_teamPlacement += codInfoDictionary["matches"][2]["playerStats"]["teamPlacement"];
    match3_kdratio += codInfoDictionary["matches"][2]["playerStats"]["kdRatio"];
    match3_damage += codInfoDictionary["matches"][2]["playerStats"]["damageDone"];

    match4_kills += codInfoDictionary["matches"][3]["playerStats"]["kills"];
    match4_teamPlacement += codInfoDictionary["matches"][3]["playerStats"]["teamPlacement"];
    match4_kdratio += codInfoDictionary["matches"][3]["playerStats"]["kdRatio"];
    match4_damage += codInfoDictionary["matches"][3]["playerStats"]["damageDone"];

    match5_kills += codInfoDictionary["matches"][4]["playerStats"]["kills"];
    match5_teamPlacement += codInfoDictionary["matches"][4]["playerStats"]["teamPlacement"];
    match5_kdratio += codInfoDictionary["matches"][4]["playerStats"]["kdRatio"];
    match5_damage += codInfoDictionary["matches"][4]["playerStats"]["damageDone"];

    match6_kills += codInfoDictionary["matches"][5]["playerStats"]["kills"];
    match6_teamPlacement += codInfoDictionary["matches"][5]["playerStats"]["teamPlacement"];
    match6_kdratio += codInfoDictionary["matches"][5]["playerStats"]["kdRatio"];
    match6_damage += codInfoDictionary["matches"][5]["playerStats"]["damageDone"];

    sessionStorage.setItem('match1_kills', match1_kills);
    sessionStorage.setItem('match1_teamPlacement', match1_teamPlacement);
    sessionStorage.setItem('match1_kdratio', match1_kdratio);
    sessionStorage.setItem('match1_damage', match1_damage);

    sessionStorage.setItem('match2_kills', match2_kills);
    sessionStorage.setItem('match2_teamPlacement', match2_teamPlacement);
    sessionStorage.setItem('match2_kdratio', match2_kdratio);
    sessionStorage.setItem('match2_damage', match2_damage);

    sessionStorage.setItem('match3_kills', match3_kills);
    sessionStorage.setItem('match3_teamPlacement', match3_teamPlacement);
    sessionStorage.setItem('match3_kdratio', match3_kdratio);
    sessionStorage.setItem('match3_damage', match3_damage);

    sessionStorage.setItem('match4_kills', match4_kills);
    sessionStorage.setItem('match4_teamPlacement', match4_teamPlacement);
    sessionStorage.setItem('match4_kdratio', match4_kdratio);
    sessionStorage.setItem('match4_damage', match4_damage);

    sessionStorage.setItem('match5_kills', match5_kills);
    sessionStorage.setItem('match5_teamPlacement', match5_teamPlacement);
    sessionStorage.setItem('match5_kdratio', match5_kdratio);
    sessionStorage.setItem('match5_damage', match5_damage);

    sessionStorage.setItem('match6_kills', match6_kills);
    sessionStorage.setItem('match6_teamPlacement', match6_teamPlacement);
    sessionStorage.setItem('match6_kdratio', match6_kdratio);
    sessionStorage.setItem('match6_damage', match6_damage);

    if (document.getElementById('table_container') != null) {
        console.log("Youve made it this far, dont give up");

        var cells = document.getElementById("table").rows[1].cells;
        (cells[0]).innerHTML = (sessionStorage.getItem('match1_kills'));
        (cells[1]).innerHTML = (sessionStorage.getItem('match1_kdratio'));
        (cells[2]).innerHTML = (sessionStorage.getItem('match1_damage'));
        (cells[3]).innerHTML = (sessionStorage.getItem('match1_teamPlacement'));

        cells = document.getElementById("table").rows[2].cells;
        (cells[0]).innerHTML = (sessionStorage.getItem('match2_kills'));
        (cells[1]).innerHTML = (sessionStorage.getItem('match2_kdratio'));
        (cells[2]).innerHTML = (sessionStorage.getItem('match2_damage'));
        (cells[3]).innerHTML = (sessionStorage.getItem('match2_teamPlacement'));

        cells = document.getElementById("table").rows[3].cells;
        (cells[0]).innerHTML = (sessionStorage.getItem('match3_kills'));
        (cells[1]).innerHTML = (sessionStorage.getItem('match3_kdratio'));
        (cells[2]).innerHTML = (sessionStorage.getItem('match3_damage'));
        (cells[3]).innerHTML = (sessionStorage.getItem('match3_teamPlacement'));

        cells = document.getElementById("table").rows[4].cells;
        (cells[0]).innerHTML = (sessionStorage.getItem('match4_kills'));
        (cells[1]).innerHTML = (sessionStorage.getItem('match4_kdratio'));
        (cells[2]).innerHTML = (sessionStorage.getItem('match4_damage'));
        (cells[3]).innerHTML = (sessionStorage.getItem('match4_teamPlacement'));

        cells = document.getElementById("table").rows[5].cells;
        (cells[0]).innerHTML = (sessionStorage.getItem('match5_kills'));
        (cells[1]).innerHTML = (sessionStorage.getItem('match5_kdratio'));
        (cells[2]).innerHTML = (sessionStorage.getItem('match5_damage'));
        (cells[3]).innerHTML = (sessionStorage.getItem('match5_teamPlacement'));

        cells = document.getElementById("table").rows[6].cells;
        (cells[0]).innerHTML = (sessionStorage.getItem('match6_kills'));
        (cells[1]).innerHTML = (sessionStorage.getItem('match6_kdratio'));
        (cells[2]).innerHTML = (sessionStorage.getItem('match6_damage'));
        (cells[3]).innerHTML = (sessionStorage.getItem('match6_teamPlacement'));

    }

}

function GetCodMultiplayerStats(jsonStr){
    console.log(jsonStr)

    const codInfoDictionary = JSON.parse(jsonStr) //parse jason file and go through dictionary to get values
   /// console.log(codInfoDictionary); ///uncomment if you want to see dictionary content
    if (codInfoDictionary.hasOwnProperty('error')) {
        document.location.href = "./error.html"
    }
    sessionStorage.setItem("matchStats",jsonStr);
    //parse jason file and go through dictionary to get values
    //console.log(codInfoDictionary); uncomment if you want to see dictionary content
    let mode = "";
    let kdFloat = parseFloat(codInfoDictionary["lifetime"]["all"]["properties"]["kdRatio"]); // gets kd
    let kdFixed = ""; // adjusts the float to a fixed 3 spots
    let WLR = ""; /// win loss ratio
    let assists = "";
    let HKG = ""; /// highest kill game
    let HKS = ""; /// highest kill steak

    mode+= "Multiplayer";
    kdFixed += kdFloat.toFixed(3); // adjusts the float to a fixed 3 spots
    WLR += codInfoDictionary["lifetime"]["all"]["properties"]["winLossRatio"].toFixed(3);
    assists += codInfoDictionary["lifetime"]["all"]["properties"]["bestAssists"];
    HKS += codInfoDictionary["lifetime"]["all"]["properties"]["recordKillStreak"];
    HKG += codInfoDictionary["lifetime"]["all"]["properties"]["recordKillsInAMatch"];
    sessionStorage.setItem('mode', mode)
    sessionStorage.setItem('HKS', HKS)
    sessionStorage.setItem('WLR', WLR)
    sessionStorage.setItem('ASSISTS', assists)
    sessionStorage.setItem('HKG', HKG)
    sessionStorage.setItem('KD', kdFixed)

    if (document.getElementById('mode') != null) {
        console.log("Setting")
        document.getElementById("mode").innerHTML = (sessionStorage.getItem('mode'))
        document.getElementById("top5").innerHTML = (sessionStorage.getItem('KD'))
        document.getElementById("kd").innerHTML = (sessionStorage.getItem('ASSISTS'))
        document.getElementById("kills").innerHTML = (sessionStorage.getItem('WLR'))
        document.getElementById("deaths").innerHTML = (sessionStorage.getItem('HKG'))
        document.getElementById("downs").innerHTML = (sessionStorage.getItem('HKS'))
    }
}

function GetCodMultiplayerMatchStats(jsonStr) {
    console.log('made it to function');
    sessionStorage.setItem("multiplayerMatchStats",jsonStr);
    const codInfoDictionary = JSON.parse(jsonStr) //parse jason file and go through dictionary to get values
    //console.log(codInfoDictionary); uncomment if you want to see dictionary content
    if (codInfoDictionary.hasOwnProperty('error')) {
        document.location.href = "./error.html"
    }
    let match1_result = "";
    let match1_kills = "";
    let match1_kdratio = "";
    let match1_assist = "";

    let match2_result = "";
    let match2_kills = "";
    let match2_kdratio = "";
    let match2_assist = "";

    let match3_result = "";
    let match3_kills = "";
    let match3_kdratio = "";
    let match3_assist = "";

    let match4_result = "";
    let match4_kills = "";
    let match4_kdratio = "";
    let match4_assist = "";

    let match5_result = "";
    let match5_kills = "";
    let match5_kdratio = "";
    let match5_assist = "";

    let match6_result = "";
    let match6_kills = "";
    let match6_kdratio = "";
    let match6_assist = "";



    match1_result += codInfoDictionary["matches"][0]["result"];
    match1_kills += codInfoDictionary["matches"][0]["playerStats"]["kills"];
    match1_kdratio += codInfoDictionary["matches"][0]["playerStats"]["kdRatio"];
    match1_assist += codInfoDictionary["matches"][0]["playerStats"]["assists"];

    match2_result += codInfoDictionary["matches"][1]["result"];
    match2_kills += codInfoDictionary["matches"][1]["playerStats"]["kills"];
    match2_kdratio += codInfoDictionary["matches"][1]["playerStats"]["kdRatio"];
    match2_assist += codInfoDictionary["matches"][1]["playerStats"]["assists"];

    match3_result += codInfoDictionary["matches"][2]["result"];
    match3_kills += codInfoDictionary["matches"][2]["playerStats"]["kills"];
    match3_kdratio += codInfoDictionary["matches"][2]["playerStats"]["kdRatio"];
    match3_assist += codInfoDictionary["matches"][2]["playerStats"]["assists"];

    match4_result += codInfoDictionary["matches"][3]["result"];
    match4_kills += codInfoDictionary["matches"][3]["playerStats"]["kills"];
    match4_kdratio += codInfoDictionary["matches"][3]["playerStats"]["kdRatio"];
    match4_assist += codInfoDictionary["matches"][3]["playerStats"]["assists"];

    match5_result += codInfoDictionary["matches"][4]["result"];
    match5_kills += codInfoDictionary["matches"][4]["playerStats"]["kills"];
    match5_kdratio += codInfoDictionary["matches"][4]["playerStats"]["kdRatio"];
    match5_assist += codInfoDictionary["matches"][4]["playerStats"]["assists"];

    match6_result += codInfoDictionary["matches"][5]["result"];
    match6_kills += codInfoDictionary["matches"][5]["playerStats"]["kills"];
    match6_kdratio += codInfoDictionary["matches"][5]["playerStats"]["kdRatio"];
    match6_assist += codInfoDictionary["matches"][5]["playerStats"]["assists"];



    sessionStorage.setItem('match1_result', match1_result);
    sessionStorage.setItem('match1_kills', match1_kills);
    sessionStorage.setItem('match1_kdratio', match1_kdratio);
    sessionStorage.setItem('match1_assist', match1_assist);

    sessionStorage.setItem('match2_result', match2_result);
    sessionStorage.setItem('match2_kills', match2_kills);
    sessionStorage.setItem('match2_kdratio', match2_kdratio);
    sessionStorage.setItem('match2_assist', match2_assist);

    sessionStorage.setItem('match3_result', match3_result);
    sessionStorage.setItem('match3_kills', match3_kills);
    sessionStorage.setItem('match3_kdratio', match3_kdratio);
    sessionStorage.setItem('match3_assist', match3_assist);

    sessionStorage.setItem('match4_result', match4_result);
    sessionStorage.setItem('match4_kills', match4_kills);
    sessionStorage.setItem('match4_kdratio', match4_kdratio);
    sessionStorage.setItem('match4_assist', match4_assist);

    sessionStorage.setItem('match5_result', match5_result);
    sessionStorage.setItem('match5_kills', match5_kills);
    sessionStorage.setItem('match5_kdratio', match5_kdratio);
    sessionStorage.setItem('match5_assist', match5_assist);

    sessionStorage.setItem('match6_result', match6_result);
    sessionStorage.setItem('match6_kills', match6_kills);
    sessionStorage.setItem('match6_kdratio', match6_kdratio);
    sessionStorage.setItem('match6_assist', match6_assist);

    if (document.getElementById('table_container') != null) {
        console.log("Youve made it this far, dont give up");

        var cells = document.getElementById("table").rows[1].cells;
        (cells[0]).innerHTML = (sessionStorage.getItem('match1_result'));
        (cells[1]).innerHTML = (sessionStorage.getItem('match1_kills'));
        (cells[2]).innerHTML = (sessionStorage.getItem('match1_kdratio'));
        (cells[3]).innerHTML = (sessionStorage.getItem('match1_assist'));

        cells = document.getElementById("table").rows[2].cells;
        (cells[0]).innerHTML = (sessionStorage.getItem('match2_result'));
        (cells[1]).innerHTML = (sessionStorage.getItem('match2_kills'));
        (cells[2]).innerHTML = (sessionStorage.getItem('match2_kdratio'));
        (cells[3]).innerHTML = (sessionStorage.getItem('match2_assist'));

        cells = document.getElementById("table").rows[3].cells;
        (cells[0]).innerHTML = (sessionStorage.getItem('match3_result'));
        (cells[1]).innerHTML = (sessionStorage.getItem('match3_kills'));
        (cells[2]).innerHTML = (sessionStorage.getItem('match3_kdratio'));
        (cells[3]).innerHTML = (sessionStorage.getItem('match3_assist'));

        cells = document.getElementById("table").rows[4].cells;
        (cells[0]).innerHTML = (sessionStorage.getItem('match4_result'));
        (cells[1]).innerHTML = (sessionStorage.getItem('match4_kills'));
        (cells[2]).innerHTML = (sessionStorage.getItem('match4_kdratio'));
        (cells[3]).innerHTML = (sessionStorage.getItem('match4_assist'));

        cells = document.getElementById("table").rows[5].cells;
        (cells[0]).innerHTML = (sessionStorage.getItem('match5_result'));
        (cells[1]).innerHTML = (sessionStorage.getItem('match5_kills'));
        (cells[2]).innerHTML = (sessionStorage.getItem('match5_kdratio'));
        (cells[3]).innerHTML = (sessionStorage.getItem('match5_assist'));

        cells = document.getElementById("table").rows[6].cells;
        (cells[0]).innerHTML = (sessionStorage.getItem('match6_result'));
        (cells[1]).innerHTML = (sessionStorage.getItem('match6_kills'));
        (cells[2]).innerHTML = (sessionStorage.getItem('match6_kdratio'));
        (cells[3]).innerHTML = (sessionStorage.getItem('match6_assist'));

    }

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

function matchStatsForCharts() {
    const userName1 = sessionStorage.getItem('gamertag'); // getElementById allows access to html variables
    const userName2 = sessionStorage.getItem('gamertag_2'); // getElementById allows access to html variables

    const platform = sessionStorage.getItem('platform');
    const platform2 = sessionStorage.getItem('platform_2');

    let routeStrInput1 = "https://call-of-duty-modern-warfare.p.rapidapi.com/"; //api call path
    routeStrInput1 += "warzone-matches/";
    routeStrInput1 += userName1.toLowerCase();
    routeStrInput1 += "/"
    routeStrInput1 += platform;

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            sessionStorage.setItem("matchStats",this.responseText);
        } else if (this.status === 404) {
            console.log("404 caught")
            document.location.href = "./error.html"
        }
    });

    xhr.open("GET", routeStrInput1);
    xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "2d25fd40cdmsh437da74b4bee201p180745jsnd3e9a3336699");
    xhr.send(data);
    // =-------------------------------------------------------------------
    let routeStrInput2 = "https://call-of-duty-modern-warfare.p.rapidapi.com/"; //api call path
    routeStrInput2 += "warzone-matches/";
    routeStrInput2 += userName2.toLowerCase();
    routeStrInput2 += "/"
    routeStrInput2 += platform2;

    const data2 = null;

    const xhr2 = new XMLHttpRequest();
    xhr2.withCredentials = true;

    xhr2.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            sessionStorage.setItem("matchStats2", this.responseText);
        } else if (this.status === 404) {
            console.log("4040 caught")
            document.location.href = "./error.html"
        }
    });

    xhr2.open("GET", routeStrInput2);
    xhr2.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
    xhr2.setRequestHeader("x-rapidapi-key", "b9574dda6dmsh15fd109cf94156ap13974cjsnc7495f8f3eab");
    xhr2.send(data2);
    console.log("done...");
}

