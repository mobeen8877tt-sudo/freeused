console.log("Free QR Code Generator Loaded Successfully!");

// Get Elements
const input = document.getElementById("qr-input");
const button = document.getElementById("generate-btn");
const result = document.getElementById("qr-result");
const downloadBtn = document.getElementById("download-btn");
const qrColor = document.getElementById("qr-color");
const qrSize = document.getElementById("qr-size");

// Button Click Event
button.addEventListener("click", () => {

    button.innerText = "Generating...";
button.disabled = true;

    let value = input.value.trim();


    if(value === ""){
        alert("Please enter required information.");
        return;
    }

    let qrData = "";

    if(currentType === "website"){
        qrData = value;
    }

    else if(currentType === "email"){
        qrData = "mailto:" + value;
    }

    else if(currentType === "phone"){
        qrData = "tel:" + value;
    }

    else if(currentType === "whatsapp"){
        qrData = "https://wa.me/" + value;
    }

    else if(currentType === "location"){
        qrData = value;
    }

    else if(currentType === "wifi"){
        qrData = "WIFI:T:WPA;S:" + value + ";;";
    }


setTimeout(() => {

    result.innerHTML = `
        <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=${qrSize.value}x${qrSize.value}&color=${qrColor.value.substring(1)}&data=${encodeURIComponent(qrData)}"
        alt="QR Code">
    `;

    downloadBtn.style.display = "block";

    history.unshift(value);

    console.log(history);

if(history.length > 5){
    history.pop();
}

const historyList = document.getElementById("history-list");

historyList.innerHTML = "";

history.forEach(item => {

   const li = document.createElement("li");

li.textContent = item;

li.title = item; // Mouse hover par poora URL dikhega

li.onclick = () => fillInput(item);

historyList.appendChild(li);

});

    button.innerText = "Generate QR Code";
    button.disabled = false;

}, 1000);

});
// =========================
// QR Category Selector
// =========================

let history = [];

let currentType = "website";

function selectType(type){

    currentType = type;

    const input = document.getElementById("qr-input");

    if(type === "website"){
        input.placeholder = "Enter website URL...";
    }

    else if(type === "wifi"){
        input.placeholder = "WiFi Name (SSID)";
    }

    else if(type === "email"){
        input.placeholder = "Enter email address...";
    }

    else if(type === "whatsapp"){
        input.placeholder = "Enter WhatsApp number...";
    }

    else if(type === "phone"){
        input.placeholder = "Enter phone number...";
    }

    else if(type === "location"){
        input.placeholder = "Paste Google Maps link...";
    }


    document.getElementById("generator").scrollIntoView({
        behavior: "smooth"
    });

}
downloadBtn.addEventListener("click", () => {

    const img = document.querySelector("#qr-result img");

    if (!img) return;

    const a = document.createElement("a");
    a.href = img.src;
    a.download = "qr-code.png";
    a.click();

});

// =========================
// Dark / Light Mode
// =========================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerText = "🌞 Light Mode";
    }

    else{
        themeBtn.innerText = "🌙 Dark Mode";
    }

});
function fillInput(value){

    input.value = value;

    document.getElementById("generator").scrollIntoView({
        behavior: "smooth"
    });

}