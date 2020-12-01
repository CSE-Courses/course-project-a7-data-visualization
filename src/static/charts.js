let player1MatchStats;
let player2MatchStats;
let player1BrStats;
let player2BrStats;
let player1name;
let player2name;


function renderCharts(){
    player1MatchStats = JSON.parse(sessionStorage.getItem('matchStats'));
    player2MatchStats = JSON.parse(sessionStorage.getItem('matchStats2'));
    player1BrStats = JSON.parse(sessionStorage.getItem('brStats1'));
    player2BrStats = JSON.parse(sessionStorage.getItem('brStats2'));
    player1name = sessionStorage.getItem('gamertag');
    player2name = sessionStorage.getItem('gamertag_2');

    console.log(player1name)
    console.log(player2name)
    console.log(player1BrStats)
    console.log(player2BrStats)
    console.log(player1MatchStats)
    console.log(player2MatchStats)

    if(player1name !== null && player2name !== null){
        renderBar();
        renderLine();
        renderRadar();
        //renderPie();
    }
    else{
        renderBar();
        renderLine();
        renderRadar();
        //renderPie();
    }
}

function renderBar(){
    let myChart = document.getElementById('barChart').getContext('2d');
    let p1Game1kills = player1MatchStats["matches"]["0"]["playerStats"]["kills"];
    let p1Game2kills = player1MatchStats["matches"]["1"]["playerStats"]["kills"];
    let p1Game3kills = player1MatchStats["matches"]["2"]["playerStats"]["kills"];
    let p1Game4kills = player1MatchStats["matches"]["3"]["playerStats"]["kills"];
    let p1Game5kills = player1MatchStats["matches"]["4"]["playerStats"]["kills"];

    let p2Game1kills;
    let p2Game2kills;
    let p2Game3kills;
    let p2Game4kills;
    let p2Game5kills;

    if(player2name !== null){
        p2Game1kills = player2MatchStats["matches"]["0"]["playerStats"]["kills"];
        p2Game2kills = player2MatchStats["matches"]["1"]["playerStats"]["kills"];
        p2Game3kills = player2MatchStats["matches"]["2"]["playerStats"]["kills"];
        p2Game4kills = player2MatchStats["matches"]["3"]["playerStats"]["kills"];
        p2Game5kills = player2MatchStats["matches"]["4"]["playerStats"]["kills"];
    }

    let maxValue = p1Game1kills;

    if(maxValue < p1Game2kills){
        maxValue = p1Game2kills;
    }
    if(maxValue < p1Game3kills){
        maxValue = p1Game3kills;
    }
    if(maxValue < p1Game4kills){
        maxValue = p1Game4kills;
    }
    if(maxValue < p1Game5kills){
        maxValue = p1Game5kills;
    }

    if(player2name != null){
        if(maxValue < p2Game1kills){
            maxValue = p2Game1kills;
        }
        if(maxValue < p2Game2kills){
            maxValue = p2Game2kills;
        }
        if(maxValue < p2Game3kills){
            maxValue = p2Game3kills;
        }
        if(maxValue < p2Game4kills){
            maxValue = p2Game4kills;
        }
        if(maxValue < p2Game5kills){
            maxValue = p2Game5kills;
        }
    }
    //global options
    if(player2name != null) {
        let massPopChart = new Chart(myChart, {
            type: 'bar', //bar, horozontalbar, pie, line, doughnut
            data: {
                labels: ["game 1", "game 2", "game 3", "game 4", "game 5"],
                datasets: [{
                    label: player1name,
                    barPercentage: 0.5,
                    categoryPercentage: 0.7,
                    data: [p1Game1kills, p1Game2kills, p1Game3kills, p1Game4kills, p1Game5kills],
                    //backgroundColor:'green'
                    backgroundColor: [
                        'rgb(17,78,3)',
                        'rgb(17,78,3)',
                        'rgb(17,78,3)',
                        'rgb(17,78,3)',
                        'rgb(17,78,3)'
                    ],
                    borderWidth: 2,
                    borderColor: "#020202",
                    barThickness: 60,
                    hoverBorderColor: "#ffd500",
                    hoverBorderWidth: 3
                }, {
                    label: player2name,
                    barPercentage: 0.5,
                    categoryPercentage: 0.7,
                    data: [p2Game1kills, p2Game2kills, p2Game3kills, p2Game4kills, p2Game5kills],
                    //backgroundColor:'green'
                    backgroundColor: [
                        'rgb(3,19,78)',
                        'rgb(3,19,78)',
                        'rgb(3,19,78)',
                        'rgb(3,19,78)',
                        'rgb(3,19,78)'
                    ],
                    borderWidth: 2,
                    borderColor: "#020202",
                    barThickness: 60,
                    hoverBorderColor: "#ffd500",
                    hoverBorderWidth: 3
                }],
            },
            options: {
                label: player2name,
                title: { // floating title to be specific
                    display: true,
                    text: 'Kills per game',
                    titleFontSize: 8
                },
                legend: {
                    position: "right",
                    display: true
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 50,
                        top: 50,
                        bottom: 50
                    }
                },
                tooltips: {
                    titleFontSize: 14

                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "kills"
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: maxValue + 2,
                            stepSize: 1
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            //labelString: "games"
                        },
                        ticks: {
                            beginAtZero: true,
                        },
                    }]
                }
            }
        })
    }
    else{
        let massPopChart = new Chart(myChart, {
            type: 'bar', //bar, horozontalbar, pie, line, doughnut
            data: {
                labels: ["game 1", "game 2", "game 3", "game 4", "game 5"],
                datasets: [{
                    label: player1name,
                    barPercentage: 0.5,
                    categoryPercentage: 0.7,
                    data: [p1Game1kills, p1Game2kills, p1Game3kills, p1Game4kills, p1Game5kills],
                    //backgroundColor:'green'
                    backgroundColor: [
                        'rgb(17,78,3)',
                        'rgb(17,78,3)',
                        'rgb(17,78,3)',
                        'rgb(17,78,3)',
                        'rgb(17,78,3)'
                    ],
                    borderWidth: 2,
                    borderColor: "#020202",
                    barThickness: 60,
                    hoverBorderColor: "#ffd500",
                    hoverBorderWidth: 3
                }],
            },
            options: {
                title: { // floating title to be specific
                    display: true,
                    text: 'Kills per game',
                    titleFontSize: 8
                },
                legend: {
                    position: "right",
                    display: true
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 50,
                        top: 50,
                        bottom: 50
                    }
                },
                tooltips: {
                    titleFontSize: 14

                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "kills"
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: maxValue + 2,
                            stepSize: 1
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            //labelString: "games"
                        },
                        ticks: {
                            beginAtZero: true,
                        },
                    }]
                }
            }
        })
    }
}

function renderPie(){
    let myChart = document.getElementById("pieChart").getContext('2d');
    //global options
    Chart.defaults.global.defaultFontFamily = "lato";
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = "#020202";

    let massPopChart = new Chart(myChart,{
        type: 'pie', //bar, horozontalbar, pie, line, doughnut
        data:{
            labels:["Top Player 1","Top Player 2","Top Player 3","Top Player 4",player1name],
            datasets:[{
                barPercentage:0.5,
                categoryPercentage:0.7,
                data:[40000,33908,28909,26078,4740],
                //backgroundColor:'green'
                backgroundColor:[
                    'rgb(84,224,8)',
                    'rgb(12,29,219)',
                    'rgb(219,0,28)',
                    'rgb(245,221,0)',
                    'rgb(0,245,208)'
                ],
                borderWidth:2,
                borderColor:"#020202",
                barThickness: 60,
                hoverBorderColor: "#ffd500",
                hoverBorderWidth:3
            }],
        },
        options:{
            title: { // floating title to be specific
                display: true,
                text: 'Total career kills',
                titleFontSize: 8
            },
            legend:{
                position: 'left'
            },
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    top: 50,
                    bottom: 50
                }
            },
            scales: {
            }
        }
    })
}
function renderRadar(){
    let myChart = document.getElementById('radarChart').getContext('2d');
    //global options
    Chart.defaults.global.defaultFontFamily = "lato";
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = "#020202";

    let p1Kills = player1BrStats["br"]["kills"];
    let p1Deaths = player1BrStats["br"]["deaths"];
    let p1Downs = player1BrStats["br"]["downs"];

    let p2Kills
    let p2Deaths
    let p2Downs

    if(player2name != null){
        p2Kills = player2BrStats["br"]["kills"];
        p2Deaths = player2BrStats["br"]["deaths"];
        p2Downs = player2BrStats["br"]["downs"];
    }
    //let topFives = stats["br"]["topFive"];
    let suggestedMax = p1Kills;

    if(suggestedMax < p1Deaths){
        suggestedMax = p1Deaths;
    }
    if(suggestedMax < p1Downs){
        suggestedMax = p1Downs
    }

    if(suggestedMax < p2Deaths){
        suggestedMax = p2Deaths;
    }
    if(suggestedMax < p2Downs){
        suggestedMax = p2Downs
    }
    if(suggestedMax < p2Kills){
        suggestedMax = p2Kills
    }
    if(player2name != null) {
        let massPopChart = new Chart(myChart, {
            type: 'radar', //bar, horozontalbar, pie, line, doughnut
            data: {
                labels: ["Kills", "Deaths", "Downs"],
                datasets: [{
                    data: [p1Kills, p1Deaths, p1Downs],
                    label: player1name,
                    fill: true,
                    borderColor: ['rgb(231,3,30,0.70)'],
                    pointBackgroundColor: "#030303",
                    pointBorderColor: "#000000",
                    //pointHoverBackgroundColor: "#55bae7",
                    //pointHoverBorderColor: "#55bae7",
                    backgroundColor: [
                        'rgba(229,7,7,0.2)'
                    ],
                },
                    {
                        data: [p2Kills, p2Deaths, p2Downs],
                        label: player2name,
                        fill: true,
                        borderColor: ['rgb(177,239,4,0.6)'],
                        pointBackgroundColor: "#030303",
                        pointBorderColor: "#000000",
                        //pointHoverBackgroundColor: "#55bae7",
                        //pointHoverBorderColor: "#55bae7",
                        backgroundColor: [
                            'rgb(29,248,5,0.4)'
                        ],
                    }
                ],
            },
            options: {
                title: { // floating title to be specific
                    display: true,
                    text: 'BR KDD',
                    titleFontSize: 18
                },
                legend: {
                    position: 'left'
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 50,
                        top: 50,
                        bottom: 50
                    }
                },
                scale: {
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: suggestedMax + 100
                    },
                    gridLines: {
                        color: 'grey'
                    },
                    angleLines: {
                        color: 'blue'
                    },
                    pointLabels: {
                        fontSize: 18,
                    },
                },
            }
        })
    }
    else{
        let massPopChart = new Chart(myChart, {
            type: 'radar', //bar, horozontalbar, pie, line, doughnut
            data: {
                labels: ["Kills", "Deaths", "Downs"],
                datasets: [{
                    data: [p1Kills, p1Deaths, p1Downs],
                    label: player1name,
                    fill: true,
                    borderColor: ['rgb(231,3,30,0.70)'],
                    pointBackgroundColor: "#030303",
                    pointBorderColor: "#000000",
                    //pointHoverBackgroundColor: "#55bae7",
                    //pointHoverBorderColor: "#55bae7",
                    backgroundColor: [
                        'rgba(229,7,7,0.2)'
                    ],
                },],
            },
            options: {
                title: { // floating title to be specific
                    display: true,
                    text: 'BR KDD',
                    titleFontSize: 18
                },
                legend: {
                    position: 'left'
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 50,
                        top: 50,
                        bottom: 50
                    }
                },
                scale: {
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: suggestedMax + 100
                    },
                    gridLines: {
                        color: 'grey'
                    },
                    angleLines: {
                        color: 'blue'
                    },
                    pointLabels: {
                        fontSize: 18,
                    },
                },
            }
        })
    }
}
function renderLine(){
    let myChart = document.getElementById('lineChart').getContext('2d');
    //global options
    Chart.defaults.global.defaultFontFamily = "lato";
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = "#020202";

    let player1Damage1 = player1MatchStats["matches"][0]["playerStats"]["damageDone"];
    let player1Damage2 = player1MatchStats["matches"][1]["playerStats"]["damageDone"];
    let player1Damage3 = player1MatchStats["matches"][2]["playerStats"]["damageDone"];
    let player1Damage4 = player1MatchStats["matches"][3]["playerStats"]["damageDone"];
    let player1Damage5 = player1MatchStats["matches"][4]["playerStats"]["damageDone"];

    let player1Kills1 = player1MatchStats["matches"][0]["playerStats"]["damageTaken"];
    let player1kills2 = player1MatchStats["matches"][1]["playerStats"]["damageTaken"];
    let player1kills3 = player1MatchStats["matches"][2]["playerStats"]["damageTaken"];
    let player1Kills4 = player1MatchStats["matches"][3]["playerStats"]["damageTaken"];
    let player1Kills5 = player1MatchStats["matches"][4]["playerStats"]["damageTaken"];

    let player2Damage1
    let player2Damage2
    let player2Damage3
    let player2Damage4
    let player2Damage5

    let player2Kills1
    let player2kills2
    let player2kills3
    let player2Kills4
    let player2Kills5

    if(player2name != null){
        player2Damage1 = player2MatchStats["matches"][0]["playerStats"]["damageDone"];
        player2Damage2 = player2MatchStats["matches"][1]["playerStats"]["damageDone"];
        player2Damage3 = player2MatchStats["matches"][2]["playerStats"]["damageDone"];
        player2Damage4 = player2MatchStats["matches"][3]["playerStats"]["damageDone"];
        player2Damage5 = player2MatchStats["matches"][4]["playerStats"]["damageDone"];

        player2Kills1 = player2MatchStats["matches"][0]["playerStats"]["damageTaken"];
        player2kills2 = player2MatchStats["matches"][1]["playerStats"]["damageTaken"];
        player2kills3 = player2MatchStats["matches"][2]["playerStats"]["damageTaken"];
        player2Kills4 = player2MatchStats["matches"][3]["playerStats"]["damageTaken"];
        player2Kills5 = player2MatchStats["matches"][4]["playerStats"]["damageTaken"];
    }

    if(player2name != null){
        let massPopChart = new Chart(myChart, {
            type: 'line', //bar, horozontalbar, pie, line, doughnut
            data: {
                labels: ["game 1", "game 2", "game 3", "game 4", "game 5"],
                datasets: [{
                    label: (player1name + " damage done"),
                    fill: false,
                    borderColor: "#ff5401",
                    //backgroundColor: "#e755ba",
                    pointBackgroundColor: "#030303",
                    pointBorderColor: "#000000",
                    //pointHoverBackgroundColor: "#55bae7",
                    //pointHoverBorderColor: "#55bae7",
                    data: [player1Damage1, player1Damage2, player1Damage3, player1Damage4, player1Damage5],
                },
                    {
                        label: (player1name + " damage taken"),
                        fill: false,
                        borderColor: "#ffc001",
                        //backgroundColor: "#e755ba",
                        pointBackgroundColor: "#030303",
                        pointBorderColor: "#020700",
                        //pointHoverBackgroundColor: "#55bae7",
                        //pointHoverBorderColor: "#55bae7",
                        data: [player1Kills1, player1kills2, player1kills3, player1Kills4, player1Kills5]
                    },
                    {
                        label: (player2name + " damage done"),
                        fill: false,
                        borderColor: "#9e01ff",
                        //backgroundColor: "#e755ba",
                        pointBackgroundColor: "#030303",
                        pointBorderColor: "#000000",
                        //pointHoverBackgroundColor: "#55bae7",
                        //pointHoverBorderColor: "#55bae7",
                        data: [player2Damage1, player2Damage2, player2Damage3, player2Damage4, player2Damage5],
                    },
                    {
                        label: (player2name + " damage taken"),
                        fill: false,
                        borderColor: "#018bb3",
                        //backgroundColor: "#e755ba",
                        pointBackgroundColor: "#030303",
                        pointBorderColor: "#020700",
                        //pointHoverBackgroundColor: "#55bae7",
                        //pointHoverBorderColor: "#55bae7",
                        data: [player2Kills1, player2kills2, player2kills3, player2Kills4, player2Kills5]
                    }
                ],
            },
            options: {
                elements: {
                    line: {
                        tension: 0
                    }
                },
                title: { // floating title to be specific
                    display: true,
                    text: 'Damage Ratio',
                    titleFontSize: 8
                },
                legend: {
                    position: 'right'
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "Damage"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            //labelString: "games"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }
    else{
        let massPopChart = new Chart(myChart, {
            type: 'line', //bar, horozontalbar, pie, line, doughnut
            data: {
                labels: ["game 1", "game 2", "game 3", "game 4", "game 5"],
                datasets: [{
                    label: (player1name + " damage done"),
                    fill: false,
                    borderColor: "#ff5401",
                    //backgroundColor: "#e755ba",
                    pointBackgroundColor: "#030303",
                    pointBorderColor: "#000000",
                    //pointHoverBackgroundColor: "#55bae7",
                    //pointHoverBorderColor: "#55bae7",
                    data: [player1Damage1, player1Damage2, player1Damage3, player1Damage4, player1Damage5],
                },
                    {
                        label: (player1name + " damage taken"),
                        fill: false,
                        borderColor: "#ffc001",
                        //backgroundColor: "#e755ba",
                        pointBackgroundColor: "#030303",
                        pointBorderColor: "#020700",
                        //pointHoverBackgroundColor: "#55bae7",
                        //pointHoverBorderColor: "#55bae7",
                        data: [player1Kills1, player1kills2, player1kills3, player1Kills4, player1Kills5]
                    }
                ],
            },
            options: {
                elements: {
                    line: {
                        tension: 0
                    }
                },
                title: { // floating title to be specific
                    display: true,
                    text: 'Damage Ratio',
                    titleFontSize: 8
                },
                legend: {
                    position: 'right'
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "Damage"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            //labelString: "games"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }
}