src = 'userClass.js';
$(document).ready(function(){
    $('#BasicBtn').click(function() {
        $.get('http://localhost:8080/BasicQuiz', function(result){
            /* This is where to add the code to add the data to the class */
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