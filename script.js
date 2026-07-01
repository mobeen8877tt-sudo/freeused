console.log("Free QR Code Generator Loaded Successfully!");
// Get Elements

const input = document.getElementById("qr-input");
const button = document.getElementById("generate-btn");
const result = document.getElementById("qr-result");
// Button Click Event
button.addEventListener("click", () => {

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

    result.innerHTML = `
        <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrData)}"
        alt="QR Code">
    `;

});
// =========================
// QR Category Selector
// =========================

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

    // 👇 YEH LINE YAHAN HONI CHAHIYE
    document.getElementById("generator").scrollIntoView({
        behavior: "smooth"
    });

}