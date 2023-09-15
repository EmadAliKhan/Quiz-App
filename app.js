var questionData = [{
    question : "What is the Full Form of HTML?",
    options : ['Hyper Text Makeup Language','Hyper Text Markup Language','Hyper Text Markup Lame','HyperTate Markup Language'],
    answer : "Hyper Text Markup Language"
},
{
    question : "What does CSS stands for?",
    options : ['Common Style Sheet','Colorful Style Sheet','Computer Style Sheet','Cascading Style Sheet'],
    answer : "Cascading Style Sheet"
},
{
    question : "What does PHP stands for?",
    options : ['Hypertext preprocessor','Hypertext programming','Hypertext popup','Hypertact preprocessor'],
    answer : "Hypertext preprocessor"
},
{
    question : "What does SQL stands for?",
    options : ['Stylish Question Language','Stylesheet Query Language','Statement Question Language','Structured Query Language'],
    answer : "Structured Query Language"
},
{
    question : "What was JavaScript launched?",
    options : ['1996','1995','1994','None of the above'],
    answer : "1995"
},
];

var infoBox = document.getElementById("infoBox");
var Start= document.getElementById("Start");
function startButton(){
    infoBox.style.display = "block";
    Start.style.display = "none";
}
function exitQuiz(){
    infoBox.style.display = "none";
    Start.style.display = "block";
}

function continueQuiz(){
    infoBox.style.display = "none";
    Start.style.display = "none";
    document.getElementById("Quiz").style.display = "block";
    startTimer(15);
}

var questionText = document.getElementById("questionTxt");
var options = document.getElementById("options");
var questionCount= document.getElementById("questionCount");
var questionIndex = 0;
var score = 0;


function renderText(){
    if(questionIndex < questionData.length){
     questionText.innerHTML = questionData[questionIndex].question;
     questionCount.innerHTML =`Question Count ${questionIndex + 1}/${questionData.length}`;
     startTimer(15);
     options.innerHTML = "";
     for(var i=0; i< questionData[questionIndex].options.length; i++){
        options.innerHTML += `
        <div class="col-md-6 mt-4">
          <div class="p-2 shadow-lg rounded-pill bg-white">
            <button onclick="checkAns('${questionData[questionIndex].options[i]}','${questionData[questionIndex].answer}')" 
            class="btn w-100 fs-4 fw-bold">${questionData[questionIndex].options[i]}</button>
          </div>
        </div>`;
    
     }
    }else{
      
        document.getElementById("Quiz").style.display = "none";
        document.getElementById("score").textContent = score;
        document.getElementById("scoreCard").style.display = "block";

    }     
}
renderText();
 
function nextQuestion(){
    questionIndex++;
    renderText();

}
function checkAns(userSelectedAns,correctAns){
    if(userSelectedAns === correctAns){
        score++;
    }
    else{
        console.log("wrong");
    }
    // console.log("score=====>",score);
    nextQuestion();
}

// ====================Timer==========================
var timeCount = document.getElementById("timeCount");
var counter;
var timeVal = 15;
function startTimer(time){
    clearInterval(counter);
    timeVal = time;
    counter = setInterval(timer,1000);
}
function timer(){
    timeCount.innerHTML = timeVal;
    if(timeVal<=0){
        clearInterval(counter);
        nextQuestion();
    }
    timeVal--;
}

function restartQuiz(){
    document.getElementById("Quiz").style.display = "none";
    document.getElementById("scoreCard").style.display = "none";
    infoBox.style.display = "none";
    Start.style.display = "block";
}