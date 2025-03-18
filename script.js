document.getElementById("upload-photo").addEventListener("change", function(event) {
    const img = document.getElementById("profile-photo");
    img.src = URL.createObjectURL(event.target.files[0]);
});

document.getElementById("profile-upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profile-image").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});


/*--sidebar--*/
document.getElementById("messageBtn").addEventListener("click", function() {
    document.getElementById("messageForm").style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("messageForm").style.display = "none";
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent!");
    document.getElementById("messageForm").style.display = "none";
});


