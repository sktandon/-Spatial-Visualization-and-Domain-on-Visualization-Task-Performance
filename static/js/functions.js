// function datafrompost(nextpage, qNumber) {
//     var xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
            
//             datafromgame(nextpage, qNumber, "Post")
//         }
//     }
//     const EndTime = Date.now();
//     var parameters = ""
//     parameters += "qNumber="+qNumber
//     parameters += "&FinalValues="+JSON.stringify(arrowData)
//     parameters += "&StimulusClicks="+stimulusclicks
//     parameters += "&ResponseTime="+(EndTime-StartTime)
//     parameters += "&StartTime="+StartTime
//     parameters += "&EndTime="+EndTime
//     parameters += "&LastClickTime="+LastClickTime
//     parameters += "&FirstClickTime="+FirstClickTime

//     //update database
//     xhttp.open("POST", "/datafrompost", true);
//     xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     xhttp.send(parameters);   
// } 


function datafromgame(nextpage, qNumber, PageType){
    var xhttp = new XMLHttpRequest();

     xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
            window.location = nextpage
        }
    } 
    var parameters = ""
    
    parameters += "Correct="+numRight
    parameters += "&Wrong="+numWrong
    parameters += "&Missed="+numMissed
    parameters += "&PageType="+PageType
    parameters += "&qNumber="+qNumber //might be null
    parameters += "&GameLastClick="+GameLastClick
    parameters += "&GameFirstClick="+GameFirstClick
    
    //update database
    xhttp.open("POST", "/datafromgame", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(parameters);

}

function moveon(nextpage){
    window.location = nextpage
}