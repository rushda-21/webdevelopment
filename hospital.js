let slide = document.querySelectorAll(".patientReview");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");
let connectBtn = document.getElementById("connectBtn");


let count = 0;

slide.forEach(function(slides, index){
   slides.style.left=`${index * 100}%`
})

function myFun(){
   slide.forEach(function(curVal){
       curVal.style.transform=`translateX(-${count * 100}%)`
   })
}
setInterval(function(){
   count++;
   if(count == slide.length){
       count=0;
   }
   myFun()
}, 2000)

card.forEach(function(cards){
   cards.addEventListener("click", function(){
       console.log(cards);
       document.querySelector(".detail").style.display="block"
       document.querySelector(".content").innerHTML=`
       <img src=${cards.firstElementChild.src} alt="">
       <div class="contentText">
                   <h1>knee Surgeon</h1>
                   <p>Dr. Syed Rushda Afreen is a renowned knee surgeon with over 15 years of experience in advanced orthopedic care. She specializes in minimally invasive knee procedures, ligament repairs, and joint preservation. Known for her precision and compassionate care, Dr. Rushda is dedicated to restoring mobility and transforming lives.</p>
       </div>
   
       `
      closeBtn.addEventListener("click", function(){
       document.querySelector(".detail").style.display="none"
      })
   })
})

connectBtn.addEventListener("click", function(){
   let email = document.getElementById("email");
   let pass = document.getElementById("pass");

   if(email.value == "" && pass.value == ""){
       alert("Enter Details")
   }else{
       alert("You Logged IN")
   }
})