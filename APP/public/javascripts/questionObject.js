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