/*
class  userClass {
    constructor(Username,Firstname,Lastname,Password,testRes1,testRes2,testRes3){
        this.Username = Username;
        this.Firstname = Firstname;
        this.Lastname = Lastname;
        this.Password = Password;
        this.testRes1 = testRes1;
        this.testRes2 = testRes2;
        this.testRes3 = testRes3;
    }



populateUser(result)
    {
        this.Username = result.Username;
        this.Firstname = result.Firstname;
        this.Lastname = result.Lastname;
        this.Password = result.Password;
        this.testRes1 = result.testRes1;
        this.testRes2 = result.testRes2;
        this.testRes3 = result.testRes3;
    }
}
*/

function User(Username,Firstname,Lastname,Password,testRes1,testRes2,testRes3) {
    this.Username = Username;
    this.Firstname = Firstname;
    this.Lastname = Lastname;
    this.Password = Password;
    this.testRes1 = testRes1;
    this.testRes2 = testRes2;
    this.testRes3 = testRes3;
}



function populateUser(User,result)
    {
        User.Username = result.Username;
        User.Firstname = result.Firstname;
        User.Lastname = result.Lastname;
        User.Password = result.Password;
        User.testRes1 = result.testRes1;
        User.testRes2 = result.testRes2;
        User.testRes3 = result.testRes3;
    }





