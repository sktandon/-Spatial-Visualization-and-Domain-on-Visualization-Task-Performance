
const questionText = document.getElementById("question-Text");
const questionImage = document.getElementById("question-Image");
const responsesText = document.getElementById("responses-Text");
const column1Text = document.getElementById("column1");
const column2Text = document.getElementById("column2");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let OrderedCounter = 0;
//let seen = [];

//where to put StartTime variable?
var StartTime = Date.now()

//#Jquery function that randomizes the responses
$.fn.randomize = function(selector){
    (selector ? this.find(selector) : this).parent().each(function(){
        $(this).children(selector).sort(function(){
            return Math.random() - 0.5;
        }).detach().appendTo(this);
    });

    return this;
};

//#function to remove duplicates from an array
// Array.prototype.removeDuplicates = function () {
//     return this.filter(function (item, index, self) {
//         return self.indexOf(item) == index;
//     });
// };

//#push the questions into availableQuestions array
function setAvailableQuestions(){
    const totalQuestion = Trainingsurvey.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(Trainingsurvey[i])
    }
};

//#set question and options
function getNewQuestion(){


    document.getElementById("NextButton").disabled= false;
    responsesText.style.display = "inline-block";
    //#get random question
    const questionIndex = availableQuestions[Math.floor(Math.random()* availableQuestions.length)]
    currentQuestion = questionIndex;


    questionText.innerHTML = currentQuestion.q;
    responsesText.innerHTML = currentQuestion.options;
    questionImage.src = currentQuestion.image;
    column1Text.innerHTML = currentQuestion.col1;
    column2Text.innerHTML = currentQuestion.col2;

    //#call randomization of radio buttons
    $('.question').randomize('.radio');

    //#get position of 'questionIndex' from the availableQuestion Array
    const index1 = availableQuestions.indexOf(questionIndex);

    //#remove the questionIndex from the array so there are no repeats
    availableQuestions.splice(index1,1);

    questionCounter=questionCounter+1;
    StartTime = Date.now()

};




//#set questions and options ordered
/*function OrderedQuestions(){
    //TO DO: maybe set progress bar here?

    //#get questions in order of dictionary
    const questionIndex = availableQuestions[OrderedCounter]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    responsesText.innerHTML = currentQuestion.options;
    questionImage.src = currentQuestion.image;
    $('.question').randomize('.radio-inline');
    OrderedCounter++;
    questionCounter++;

};*/



//#what to do when you hit the next button - is there where I should put the calls to send to the database?
function next(){
    
    if ($("#trainingstimuli")[0].checkValidity()){
        //get data and pass it
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                
                //#check if length of questions seen is the length of whole survey to move on
                //#in case questions are getting removed from availablequestions then move on

                    if(questionCounter == Trainingsurvey.length && availableQuestions.length == 0){
                            console.log("quiz over");
                            window.location = "/tr/trans";
                    }
                    // if(questionCounter === (Trainingsurvey.length)){
                    //     console.log("quiz over");
                    //     window.location = "/tr/trans"
                    // }
                    else if(availableQuestions.length == 0){
                        window.location = "/tr/trans";
                    }
                    else{
                        getNewQuestion();
                        //OrderedQuestions();
                    }
            }
        }
        

        //seen.push(questionCounter);
        var EndTime = Date.now()
        document.getElementById("NextButton").disabled=true;
        responsesText.style.display == "none";
        var parameters = ""
        parameters += "qNumber="+questionCounter
        parameters += "&QuestionText="+currentQuestion.q
        parameters += "&Type="+currentQuestion.type
        parameters += "&Density="+currentQuestion.density
        parameters += "&Level="+currentQuestion.level
        parameters += "&CorrectAnswer="+currentQuestion.answer
        parameters += "&Response="+document.querySelector('input[name="diff1"]:checked').value
        parameters += "&Correct="+(currentQuestion.answer === document.querySelector('input[name="diff1"]:checked').value)
        parameters += "&ResponseTime="+(EndTime-StartTime)
        parameters += "&StartTime="+StartTime
        parameters += "&EndTime="+EndTime
        parameters += "&QNum="+currentQuestion.qnum

            //update database
        xhttp.open("POST", "/datafromtraining", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(parameters);

    }
  
    else{
        //Validate Form
        $("#trainingstimuli")[0].reportValidity()
    }

};


// if(seen.length > 2){
//     current=(seen[seen.length-1])["qnum"];
//     last=(seen[seen.length-2])["qnum"];
    
//     if(current == last){
//         let seenqnums = seen.map(a => a.qnum)
//         seenqnums.removeDuplicates();
//         questionCounter = seenqnums.length;
//         getNewQuestion();
        
//     }

// if(seen.length > 1){
//     //let current=(seen[seen.length-1])["qnum"];
//     //let last=(seen[seen.length-2])["qnum"];
//     let current = seen[seen.length-1];
//     let last = seen[seen.length-2];

//     console.log(availableQuestions.length)

//     if(current == last){
//         //let seenqnums = seen.map(a => a.qnum)
//         seen.removeDuplicates();
//         questionCounter = seen.length;
//         //above assumes that no extra questions have been removed from availablequestions as part of glitch?
//         getNewQuestion();        
//     }



window.onload = function(){
    setAvailableQuestions();
    //#If you want randomized questions 
        getNewQuestion();        
   //#if you want ordered questions
        //OrderedQuestions();


};