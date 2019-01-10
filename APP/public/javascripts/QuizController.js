src = "questionObject.js";
src="http://code.jquery.com/jquery-1.7.1.min.js";
let questionArray = [];
    //Set the css style for the slides
makeQuiz();

function makeQuiz(){

    // Moving the class definition into this file because I kept getting an undefined error
    function Question(question,Answer1,Answer2,Answer3,CorrectAnswer){
        this.question = question;
        this.Answers = {
            a: Answer1,
            b: Answer2,
            c: Answer3
        }
        this.correctAnswer = CorrectAnswer;
    }

    function populateQuestion(Question,result){
        Question.question = result.question;
        Question.Answers.a = result.a;
        Question.Answers.b = result.b;
        Question.Answers.c = result.c;
        Question.correctAnswer = result.correctAnswer;

    }

//----------------------------------------------------------------------------------------------
    const header = document.getElementById('header');



    //Determine which questions that need to be loaded into the quiz
    if (header.innerText === "Basic Quiz"){

        $.get('http://localhost:8080/BasicQuestion', function(result){ //Only this one has been done as that is the only collection that has questions
             result.forEach(function (entry, n) {
                 let question = new Question("","","","","");
                 populateQuestion(question,entry);
                 questionArray[n] = question;
             })
             console.log(result);
             console.log(questionArray);
        })

    }else if (header.innerText === "Intermediate Quiz")
    {
        $.get('http://localhost:8080/IntermediateQuestion', function(result){
            questionArray = result;
        })
    }else if (header.innerText === "Advanced Quiz"){
        $.get('http://localhost:8080/AdvancedQuestion', function(result){
            questionArray = result;
        })
    }else
    {
        console.log('There is no page, this should never show')
    }

//Creating the Quiz ---------------------------------------------------------- *Does not work*

    var styleSlides =  document.createElement('style');
    styleSlides.innerHTML = '.slide{ position: absolute;\n' +
        '    left: 0px;\n' +
        '    top: 0px;\n' +
        '    width: 100%;\n' +
        '    z-index: 1;\n' +
        '    opacity: 0;\n' +
        '    transition: opacity 0.5s;\n' +
        '}' +
        '.active-slide{\n' +
        '    opacity: 1;\n' +
        '    z-index: 2;\n' +
        '}\n' +
        '\n' +
        '.quiz-container{\n' +
        '    position: relative;\n' +
        '    height: 200px;\n' +
        '    margin-top: 40px;\n' +
        '}\n'

    document.head.appendChild(styleSlides);


    //these are all the containers in the html, the inner html will be edited

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next')
    const submitButton = document.getElementById('submitQuiz');
    const slides = styleSlides;
    console.log(slides);




    let currentSlide = 0;

    function buildQuiz(){
        const output = [];

        questionArray.forEach((currentQuestion, questionNumber) =>{
            const answers = [];
            //For each of the letters in the answers part of the object it will write out the answer with a radio button
            for(letter in currentQuestion.answers){
                answers.push(`<label> <input type = "radio" name = "question${questionNumber}" value="${letter}"/>
                                     ${letter} : 
                                     ${currentQuestion.answers[letter]}
                               </label>`);
                console.log(answers);
            }
            output.push(`<div class = "slide">
                         <div class = "question"> ${currentQuestion.question} </div>
                         <div class = "answers" >${answers.join('')} </div>
                         </div>`)
        });
            quizContainer.innerHTML= output.join('');
            console.log(quizContainer);
        }



    function showResults()
    {
        const answerContainers = quizContainer.querySelectorAll('.answers');

        let numCorrect= 0;

        questionArray.forEach( (currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = 'input[name = question' + questionNumber + ']:checked';
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'lightgreen';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
            resultsContainer.innerHTML= `${numCorrect} + out of  + ${questionArray.length}`;
        }

    )

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        
        if (currentSlide===0){
            previousButton.style.display= 'none';
        }else{
            previousButton.style.display= 'inline-block';
        }

        if(currentSlide === slides.length-1){
            nextButton.style.display= 'none';
            submitButton.style.display= 'inline-block';

        }else{
            nextButton.style.display= 'inline-block';
            submitButton.style.display= 'none';
        }
    }

    function showNextSlide(){
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide(){
        showSlide(currentSlide - 1);
    }

    buildQuiz();
    showSlide(0);


//Button click actions
        previousButton.addEventListener("click", showPreviousSlide);

        nextButton.addEventListener("click", showNextSlide);

        submitButton.addEventListener("click",showResults);
}}