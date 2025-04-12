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

// Loop through all cards
card.forEach(function(cards) {
   cards.addEventListener("click", function() {
       console.log(cards);
       document.querySelector(".detail").style.display = "block";

       // Get which surgeon's card is clicked
       const surgeonType = cards.getAttribute("data-surgeon");

       // Set the inner HTML based on the surgeon type
       if (surgeonType === "knee") {
           document.querySelector(".content").innerHTML = `
               <img src=${cards.firstElementChild.src} alt="">
               <div class="contentText">
                   <h1>Knee Surgeon</h1>
                   <p>Dr. Syed Rushda Afreen is a renowned knee surgeon with over 15 years of experience in advanced orthopedic care. She specializes in minimally invasive knee procedures, ligament repairs, and joint preservation. Known for her precision and compassionate care, Dr. Rushda is dedicated to restoring mobility and transforming lives.</p>
               </div>
           `;
       } else if (surgeonType === "spine") {
           document.querySelector(".content").innerHTML = `
               <img src=${cards.firstElementChild.src} alt="">
               <div class="contentText">
                   <h1>Spin Surgeon</h1>
                   <p>Dr. Zainab is a highly skilled spin surgeon known for her expertise in spinal alignment and minimally invasive spine surgeries. With a passion for restoring posture and relieving chronic back pain, Dr. Zainab combines precision, innovation, and care to transform her patients' lives and mobility.</p>
               </div>
           `;
       } else if (surgeonType === "leg") {
           document.querySelector(".content").innerHTML = `
               <img src=${cards.firstElementChild.src} alt="">
               <div class="contentText">
                   <h1>Leg Surgeon</h1>
                   <p>Dr. Shreya is a dedicated leg surgeon specializing in complex lower limb surgeries and rehabilitation. Her expertise includes fracture repair, limb reconstruction, and vascular integration. Dr. Shreya is known for her patient-centered approach and exceptional post-operative outcomes.</p>
               </div>
           `;
       }

       // Close button logic
       closeBtn.addEventListener("click", function() {
           document.querySelector(".detail").style.display = "none";
       });
   });
});


connectBtn.addEventListener("click", function(){
   let email = document.getElementById("email");
   let pass = document.getElementById("pass");

   if(email.value == "" && pass.value == ""){
       alert("Enter Details")
   }else{
       alert("You Logged IN")
   }
})