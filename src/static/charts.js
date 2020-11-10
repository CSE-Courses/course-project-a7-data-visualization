let matchStats;
let brStats;
let player1name;
let player2name;

function renderCharts(){
    matchStats = JSON.parse(sessionStorage.getItem('matchStats'));
    brStats = JSON.parse(sessionStorage.getItem('brStats'));
    player1name = sessionStorage.getItem('gamertag');
    //player1name = sessionStorage.getItem('gamertag_2');

    console.log(matchStats);
    renderBar();
    renderLine();
    //renderPie();
    renderRadar();
}

function renderBar(){
    let myChart = document.getElementById('barChart').getContext('2d');
    let game1kills = matchStats["matches"][0]["playerStats"]["kills"];
    let game2kills = matchStats["matches"][1]["playerStats"]["kills"];
    let game3kills = matchStats["matches"][2]["playerStats"]["kills"];
    let game4kills = matchStats["matches"][3]["playerStats"]["kills"];
    let game5kills = matchStats["matches"][4]["playerStats"]["kills"];

    let maxValue = game1kills;
    if(maxValue < game2kills){
        maxValue = game2kills;
    }
    if(maxValue < game3kills){
        maxValue = game3kills;
    }
    if(maxValue < game4kills){
        maxValue = game4kills;
    }
    if(maxValue < game5kills){
        maxValue = game5kills;
    }
    //global options
    let massPopChart = new Chart(myChart,{
        type: 'bar', //bar, horozontalbar, pie, line, doughnut
        data:{
            labels:["game 1","game 2","game 3","game 4","game 5"],
            datasets:[{
                barPercentage:0.5,
                categoryPercentage:0.7,
                data:[game1kills,game2kills,game3kills,game4kills,game5kills],
                //backgroundColor:'green'
                backgroundColor:[
                    'rgb(17,78,3)',
                    'rgb(17,78,3)',
                    'rgb(17,78,3)',
                    'rgb(17,78,3)',
                    'rgb(17,78,3)'
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
                text: 'Kills per game',
                titleFontSize: 8
            },
            legend:{
                position: "right",
                display: false
            },
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    top: 50,
                    bottom: 50
                }
            },
            tooltips:{
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
    let kills = brStats["br"]["kills"];
    let deaths = brStats["br"]["deaths"];
    let downs = brStats["br"]["downs"];
    //let topFives = stats["br"]["topFive"];
    let suggestedMax = kills;
    if(suggestedMax < deaths){
        suggestedMax = deaths;
    }
    if(suggestedMax < downs){
        suggestedMax = downs
    }
    let massPopChart = new Chart(myChart,{
        type: 'radar', //bar, horozontalbar, pie, line, doughnut
        data:{
            labels:["Kills","Deaths","Downs"],
            datasets:[{
                data:[kills,deaths,downs],
                label: player1name,
                fill: true,
                borderColor:['rgb(231,3,30,0.70)'],
                pointBackgroundColor: "#030303",
                pointBorderColor: "#000000",
                //pointHoverBackgroundColor: "#55bae7",
                //pointHoverBorderColor: "#55bae7",
                backgroundColor:[
                    'rgba(229,7,7,0.2)'
                ],
            },
            ],
        },
        options:{
            title: { // floating title to be specific
                display: true,
                text: 'BR KDD',
                titleFontSize: 18
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
function renderLine(){
    let myChart = document.getElementById('lineChart').getContext('2d');
    //global options
    Chart.defaults.global.defaultFontFamily = "lato";
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = "#020202";

    let damage1 = matchStats["matches"][0]["playerStats"]["damageDone"];
    let damage2 = matchStats["matches"][1]["playerStats"]["damageDone"];
    let damage3 = matchStats["matches"][2]["playerStats"]["damageDone"];
    let damage4 = matchStats["matches"][3]["playerStats"]["damageDone"];
    let damage5 = matchStats["matches"][4]["playerStats"]["damageDone"];

    let kills1 = matchStats["matches"][0]["playerStats"]["damageTaken"];
    let kills2 = matchStats["matches"][1]["playerStats"]["damageTaken"];
    let kills3 = matchStats["matches"][2]["playerStats"]["damageTaken"];
    let kills4 = matchStats["matches"][3]["playerStats"]["damageTaken"];
    let kills5 = matchStats["matches"][4]["playerStats"]["damageTaken"];

    let massPopChart = new Chart(myChart,{
        type: 'line', //bar, horozontalbar, pie, line, doughnut
        data:{
            labels:["game 1", "game 2", "game 3", "game 4", "game 5"],
            datasets:[{
                label: 'damage done',
                fill: false,
                borderColor: "#ff5401",
                //backgroundColor: "#e755ba",
                pointBackgroundColor: "#030303",
                pointBorderColor: "#000000",
                //pointHoverBackgroundColor: "#55bae7",
                //pointHoverBorderColor: "#55bae7",
                data:[damage1,damage2,damage3,damage4,damage5],
            },
                {
                    label: 'damage taken',
                    fill: false,
                    borderColor: "#ffc001",
                    //backgroundColor: "#e755ba",
                    pointBackgroundColor: "#030303",
                    pointBorderColor: "#020700",
                    //pointHoverBackgroundColor: "#55bae7",
                    //pointHoverBorderColor: "#55bae7",
                    data:[kills1,kills2,kills3,kills4,kills5]
                }
            ],
        },
        options:{
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
            legend:{
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