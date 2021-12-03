var username = document.getElementById("username")
var emaildata =document.getElementById("emailadd")
var numberdata =document.getElementById("phonenum")
var messagedata=document.getElementById("msg")
var err = document.getElementsByClassName("wrong")
var usrnameRegex = /^[A-Za-z]+$/
var emladdRegex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var phnumRegex = /^\d+$/;
var achu = 0

$("#submit-form").submit((e)=>{
    achu = 0
    
    e.preventDefault()
    checkName()
    checkNumber()
    checkEmail()
    checkMsg()


    if(achu == 4){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxGb9DPr8wYhYlXC7NzSwQSO1ftGEmZ1J8zetmqtAikJbDvU-g/exec?",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")
    
            }
        })
    }
})

function checkName(){
    if(username.value == ""){
         err[0].innerHTML = "*Fill this Field"
    }else if(username.value.trim() == ""){
        err[0].innerHTML = "*Space not allowed"
    }else if(usrnameRegex.test(username.value) == false){
        err[0].innerHTML = "*Only character allowed"
    }else{
        err[0].innerHTML = ""
        achu += 1
        
    }
}
function checkNumber() {


    if (numberdata.value == "") {
        err[1].innerHTML="*Enter Number"

    } else if (numberdata.value.trim() == false) {
        err[1].innerHTML="*Space Not Allowed"

    } else if (phnumRegex.test(numberdata.value) == false) {
        err[1].innerHTML="*Enter Numbers"

    }else if(numberdata.value.length >10 || numberdata.value.length<10){
        err[1].innerHTML="*Enter 10 Digits"
    }
     else {
        err[1].innerHTML = ""
        achu += 1
    }
}
function checkEmail() {

    if (emaildata.value == "") {
        err[2].innerHTML="*Enter Email"     

    } else if (emaildata.value.trim() == false) {
        err[2] .innerHTML="*Space Not Allowed"

    } else if (emladdRegex.test(emaildata.value) == false) {
        err[2] .innerHTML="*Input Valid Email Address"

    } else {
        err[2].innerHTML = ""
        achu += 1
    }
}
function checkMsg(){
    if(messagedata.value.trim()==false){
        err[3] .innerHTML="*Space Not Allowed"
    }else{
        err[3].innerHTML = ""
        achu += 1 
    }

}
