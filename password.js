function checkpassword(){
    //capture the user enterd password for user iput elemnt
    var passwordboxobject = document.getElementById("passwordbox");
    console.dir(passwordboxobject)
    var passwordentered = passwordboxobject.value;
    console.log("user entered password  ",passwordentered);
    //check if correct
    var sitepassword = "codeclub";
    if (passwordentered == sitepassword){
        console.log('allow');
        window.location.assign('member.html')
    }
    else {console.log ('block')};
    document.getElementById('incorrect').style.color = 'red';
    var paraelim = document.getElementById('incorrect')
    paraelim.innerHTML = "Incorrect password please try again......"

    };