src = 'userClass.js';
$(document).ready(function(){

    $('#BasicBtn').click(function() {
        var questionType = "BasicQuestion";
        $.get('http://localhost:8080/BasicQuiz', questionType ,function(result){
            console.log('I got here aswell')
        })

    });

    $('#IntermediateBtn').click(function() {
        $.get('http://localhost:8080/IntermediateQuiz', function(result){
            console.log(result)
            console.log('I got here aswell')
        })
    });

    $('#AdvancedBtn').click(function() {
        $.get('http://localhost:8080/AdvancedQuiz', function(result){
            console.log(result)
            console.log('I got here aswell')
        })
    });






});