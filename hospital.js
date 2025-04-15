// Auto-scroll for review carousel
const carousel = document.querySelector('.review-carousel');

setInterval(() => {
  const firstImg = carousel.querySelector('img');
  carousel.scrollBy({ left: firstImg.offsetWidth + 15, behavior: 'smooth' });

  if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
    carousel.scrollTo({ left: 0, behavior: 'smooth' });
  }
}, 3000);

// Sliding logic for elements with class .patientReview
let slide = document.querySelectorAll(".patientReview");
let count = 0;

slide.forEach((slides, index) => {
  slides.style.left = `${index * 100}%`;
});

function myFun() {
  slide.forEach((curVal) => {
    curVal.style.transform = `translateX(-${count * 100}%)`;
  });
}

setInterval(() => {
  count++;
  if (count === slide.length) {
    count = 0;
  }
  myFun();
}, 2000);
// card desccription
// Popup functionality for card description
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");

card.forEach((cards) => {
  cards.addEventListener("click", function () {
    const docImg = cards.querySelector("img").src;
    const docName = cards.getAttribute("data-name");
    const docDesc = cards.getAttribute("data-full"); // Full description for popup

    document.querySelector(".detail").style.display = "block";
    document.querySelector(".content").innerHTML = `
      <img src="${docImg}" alt="${docName}">
      <div class="contentText">
        <h1>${docName}</h1>
        <p>${docDesc}</p>
      </div>
    `;

    closeBtn.addEventListener("click", function () {
      document.querySelector(".detail").style.display = "none";
    });
  });
});


    

// Contact Us Form Validation
const connectBtn = document.getElementById("connectBtn");

connectBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  

  if (!name || !email || !phone ) {
    alert("Please fill all the fields!");
  } else {
    alert("You Logged IN");
  }
});


  