function learnMore() {
    alert("Thank you for your interest. Please explore our services or contact us for more information.");
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Your message has been successfully submitted.");
            form.reset();
        });
    }
});
