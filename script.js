const wrapper = document.querySelector(".wrapper"),
qrInput = document.querySelector(".form input"),
generateBtn = document.querySelector(".form button"),
qrImg = document.querySelector(".qr-code img");

generateBtn.addEventListener("click",()=>{
    let qrValue = qrInput.value;

    if(!qrValue) return; //if input is empty return from here
    generateBtn.innerText =  "Generating Qr Code..."

    // api and passing the api returned img src to qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active")
        generateBtn.innerText =  "Generate QR code"
    })
})

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active"); 
    }
});


// get QR code of user entered value using the qrserver
//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example