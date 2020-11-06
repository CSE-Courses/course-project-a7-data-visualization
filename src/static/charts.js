function renderCharts(){
    renderBar();
    renderLine();
    renderPie();
    renderRadar();
}

function renderBar(){
    let myChart = document.getElementById('barChart').getContext('2d');
    //global options
    Chart.defaults.global.defaultFontFamily = "lato";
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = "#020202";

    let massPopChart = new Chart(myChart,{
        type: 'bar', //bar, horozontalbar, pie, line, doughnut
        data:{
            labels:["game01","game02","game03","game04"],
            datasets:[{
                barPercentage:0.5,
                categoryPercentage:0.7,
                data:[14,7,4,9],
                //backgroundColor:'green'
                backgroundColor:[
                    'rgb(18,90,2)',
                    'rgb(255,244,3)',
                    'rgb(187,9,9)',
                    'rgb(18,90,2)'
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
                text: 'Longest Killstreak',
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
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "games"
                    },
                    ticks: {
                        beginAtZero: true
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
            labels:["Top Player 1","Top Player 2","Top Player 3","Top Player 4","curruption123456"],
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

    let massPopChart = new Chart(myChart,{
        type: 'radar', //bar, horozontalbar, pie, line, doughnut
        data:{
            labels:["Kills","Deaths","Score Per Game"],
            datasets:[{
                data:[4740,4549,1271.04],
                label: 'curruption123456',
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
                {
                    data:[7000,2500,4680],
                    label: 'Xx_noLiFeTryHard_xX',
                    fill: true,
                    borderColor:['rgb(253,228,2,0.70)'],
                    pointBackgroundColor: "#030303",
                    pointBorderColor: "#000000",
                    //pointHoverBackgroundColor: "#55bae7",
                    //pointHoverBorderColor: "#55bae7",
                    backgroundColor:[
                        'rgb(66,229,7,0.2)'
                    ],
                }
            ],
        },
        options:{
            title: { // floating title to be specific
                display: true,
                text: 'Skill Radar',
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
                    suggestedMax: 8000
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

    let massPopChart = new Chart(myChart,{
        type: 'line', //bar, horozontalbar, pie, line, doughnut
        data:{
            labels:["game 1", "game 2", "game 3", "game 4", "game 5"],
            datasets:[{
                label: 'curruption123456',
                fill: false,
                borderColor: "#ff5401",
                //backgroundColor: "#e755ba",
                pointBackgroundColor: "#030303",
                pointBorderColor: "#000000",
                //pointHoverBackgroundColor: "#55bae7",
                //pointHoverBorderColor: "#55bae7",
                data:[24,12,22,16,13],
            },
                {
                    label: 'noob42',
                    fill: false,
                    borderColor: "#ffc001",
                    //backgroundColor: "#e755ba",
                    pointBackgroundColor: "#030303",
                    pointBorderColor: "#020700",
                    //pointHoverBackgroundColor: "#55bae7",
                    //pointHoverBorderColor: "#55bae7",
                    data:[12,7,15,3,11]
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
                text: 'Kills Per Game',
                titleFontSize: 8
            },
            legend:{
                position: 'right'
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "kills"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "games"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })
}