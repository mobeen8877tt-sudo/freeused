console.log("Free QR Code Generator Loaded Successfully!");
// Get Elements

const input = document.getElementById("qr-input");
const button = document.getElementById("generate-btn");
const result = document.getElementById("qr-result");
// Button Click Event
button.addEventListener("click", () => {

    const url = input.value.trim();

    if(url === ""){
        alert("Please enter a website link.");
        return;
    }

    result.innerHTML = `
        <img 
        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(url)}"
        alt="QR Code">
    `;

});