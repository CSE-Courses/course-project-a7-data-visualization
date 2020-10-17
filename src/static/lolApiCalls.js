
function makeApiCallLoL(){

    let lolDataJSON = {}

    let apiCall = './gamedata/loldata.py'
        $.get(apiCall,function(data){

            if (data){
                console.log("Data returned from LoL api call:", data)
            }


            lolDataJSON = JSON.parse(data)
            }
        )
    sessionStorage.setItem('character', lolDataJSON.championID)
    sessionStorage.setItem('spell1', lolDataJSON.spell1)
    sessionStorage.setItem('spell2',lolDataJSON.spell2)
    sessionStorage.setItem('win',lolDataJSON.win)
    sessionStorage.setItem('kills',lolDataJSON.kills)
    sessionStorage.setItem('death',lolDataJSON.deaths)
    sessionStorage.setItem('assists',lolDataJSON.assists)
    sessionStorage.setItem('totalDamageDelt',lolDataJSON.totalDamageDelt)
    sessionStorage.setItem('goldEarned',lolDataJSON.goldEarned)
    sessionStorage.setItem('champLevel',lolDataJSON.champLevel)
    sessionStorage.setItem('totalMinionsKilled',lolDataJSON.totalMinionsKilled)
    sessionStorage.setItem('item0',lolDataJSON.item0)
    sessionStorage.setItem('item1',lolDataJSON.item1)
}