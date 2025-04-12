// Get all the cards and the close button
const cards = document.querySelectorAll(".card");
const closeBtn = document.getElementById("closeBtn");
const detailBox = document.querySelector(".detail");

// Loop through all cards and add a click event listener
cards.forEach(function(card) {
    card.addEventListener("click", function() {
        // Show the detail popup
        detailBox.style.display = "flex";

        // Get the surgeon type from the clicked card
        const surgeonType = card.getAttribute("data-surgeon");

        // Update content based on the surgeon type
        if (surgeonType === "knee") {
            document.querySelector(".content").innerHTML = `
                <img src="${card.firstElementChild.src}" alt="Knee Surgeon">
                <div class="contentText">
                    <h1>Knee Surgeon</h1>
                    <p>Dr. Syed Rushda Afreen is a renowned knee surgeon with over 15 years of experience in advanced orthopedic care...</p>
                </div>
            `;
        } else if (surgeonType === "spine") {
            document.querySelector(".content").innerHTML = `
                <img src="${card.firstElementChild.src}" alt="Spin Surgeon">
                <div class="contentText">
                    <h1>Spin Surgeon</h1>
                    <p>Dr. Zainab is a highly skilled spin surgeon known for her expertise in spinal alignment...</p>
                </div>
            `;
        } else if (surgeonType === "leg") {
            document.querySelector(".content").innerHTML = `
                <img src="${card.firstElementChild.src}" alt="Leg Surgeon">
                <div class="contentText">
                    <h1>Leg Surgeon</h1>
                    <p>Dr. Shreya is a dedicated leg surgeon specializing in complex lower limb surgeries...</p>
                </div>
            `;
        }
    });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", function() {
    detailBox.style.display = "none";
});
