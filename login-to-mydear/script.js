const statusImage = document.getElementById("statusImage");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginForm = document.getElementById("LoginForm");
const submitBtn = document.getElementById("submitBin");

const successLove = document.getElementById("successLove");
const closeLove = document.getElementById("closeLove");

// ป้องกันการส่งฟอร์มถ้าไม่มีข้อมูล
loginForm.addEventListener("submit", function(event) {
    if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("กรอกข้อมูลให้ครบก่อน!");
        statusImage.src = "./img/shoos.jpg";
        event.preventDefault();
        return;
    }

    // ตรวจสอบรหัสผ่าน
    if (passwordInput.value !== "07122022") {
        alert("รหัสผ่านคือวันครบรอบจ้า! ปี ค.ศ. นะะะ");
        statusImage.src = "./img/baseboll.jpg";
        event.preventDefault();
        return;
    }

    // ถ้าผ่านเงื่อนไขทั้งหมด แสดง successLove
    successLove.style.display = "flex";
    event.preventDefault(); // ป้องกันการรีเฟรชหน้า
});

// ปิด popup
closeLove.addEventListener("click", function() {
    successLove.style.display = "none";
});

// ปิด popup เมื่อคลิกนอกกรอบ
window.addEventListener("click", function (event) {
    if (event.target === successLove) {
        successLove.style.display = "none";
    }
});
