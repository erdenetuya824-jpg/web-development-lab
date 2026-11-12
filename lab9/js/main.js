// =====================================
// GALLERY FILTER
// =====================================

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryCards = document.querySelectorAll(".gallery-card");

filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        // Active button солих
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        const filter = this.dataset.filter;

        galleryCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});


// =====================================
// IMAGE MODAL
// =====================================

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeModal = document.getElementById("closeModal");

galleryCards.forEach(card => {

    card.addEventListener("click", function() {

        const image = this.querySelector("img");
        const title = this.querySelector("h3");

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        modalCaption.textContent = title.textContent;

        imageModal.hidden = false;

        document.body.style.overflow = "hidden";
    });

});

function hideModal() {
    imageModal.hidden = true;
    modalImage.src = "";

    document.body.style.overflow = "";
}

closeModal.addEventListener("click", hideModal);

imageModal.addEventListener("click", function(event) {

    if (event.target === imageModal) {
        hideModal();
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape" && !imageModal.hidden) {
        hideModal();
    }

});


// =====================================
// FORM ELEMENTS
// =====================================

const form = document.getElementById("feedbackForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const messageError = document.getElementById("messageError");


// =====================================
// ERROR DISPLAY
// =====================================

function showError(input, errorElement, message) {

    input.classList.remove("valid");
    input.classList.add("invalid");

    errorElement.textContent = message;
}

function showSuccess(input, errorElement) {

    input.classList.remove("invalid");
    input.classList.add("valid");

    errorElement.textContent = "";
}


// =====================================
// NAME CHECK
// =====================================

function checkName() {

    const value = nameInput.value;

    if (!validateName(value)) {

        showError(
            nameInput,
            nameError,
            "Нэр 2–50 тэмдэгттэй, тоо агуулаагүй байх ёстой."
        );

        document.getElementById("nameStatus").textContent = "✕";

        return false;
    }

    showSuccess(nameInput, nameError);

    document.getElementById("nameStatus").textContent = "✓";

    return true;
}


// =====================================
// EMAIL CHECK
// =====================================

function checkEmail() {

    const value = emailInput.value;

    if (!validateEmail(value)) {

        showError(
            emailInput,
            emailError,
            "Зөв имэйл хаяг оруулна уу. Жишээ: name@gmail.com"
        );

        document.getElementById("emailStatus").textContent = "✕";

        return false;
    }

    showSuccess(emailInput, emailError);

    document.getElementById("emailStatus").textContent = "✓";

    return true;
}


// =====================================
// PASSWORD STRENGTH
// =====================================

const strengthBars = document.querySelectorAll(".strength-bars span");
const strengthText = document.getElementById("strengthText");

function updatePasswordStrength() {

    const value = passwordInput.value;

    let score = 0;

    if (value.length >= 8) score++;
    if (/[a-zA-Zа-яА-ЯёЁөӨүҮ]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^a-zA-Zа-яА-ЯёЁөӨүҮ0-9\s]/.test(value)) score++;

    // Хоосон зай байвал хүчинтэй нууц үг биш
    if (/\s/.test(value)) {
        score = 0;
    }

    const colors = [
        "#fb7185",
        "#f97316",
        "#eab308",
        "#22c55e"
    ];

    const labels = [
        "Маш сул",
        "Сул",
        "Дунд зэрэг",
        "Сайн"
    ];

    strengthBars.forEach((bar, index) => {

        if (index < score) {
            bar.style.background = colors[score - 1];
        } else {
            bar.style.background = "#303044";
        }

    });

    if (value.length === 0) {
        strengthText.textContent = "Нууц үгийн найдвартай байдал";
    } else if (/\s/.test(value)) {
        strengthText.textContent = "Хоосон зай ашиглаж болохгүй";
    } else {
        strengthText.textContent = labels[score - 1] || "Маш сул";
    }

}


// =====================================
// PASSWORD CHECK
// =====================================

function checkPassword() {

    const value = passwordInput.value;

    updatePasswordStrength();

    if (!validatePassword(value)) {

        showError(
            passwordInput,
            passwordError,
            "8+ тэмдэгт, үсэг болон тоо агуулсан, зайгүй байх ёстой."
        );

        return false;
    }

    showSuccess(passwordInput, passwordError);

    return true;
}


// =====================================
// MESSAGE CHECK
// =====================================

const charCounter = document.getElementById("charCounter");

function checkMessage() {

    const value = messageInput.value;
    const length = value.trim().length;

    charCounter.textContent = `${length} / 500`;

    charCounter.classList.toggle("over-limit", length > 500);

    if (!validateMessage(value)) {

        showError(
            messageInput,
            messageError,
            "Санал хүсэлт 10–500 тэмдэгттэй байх ёстой."
        );

        return false;
    }

    showSuccess(messageInput, messageError);

    return true;
}


// =====================================
// REAL-TIME VALIDATION
// =====================================

nameInput.addEventListener("input", checkName);

emailInput.addEventListener("input", checkEmail);

passwordInput.addEventListener("input", checkPassword);

messageInput.addEventListener("input", checkMessage);


// =====================================
// PASSWORD SHOW / HIDE
// =====================================

const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function() {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        this.textContent = "🙈";
        this.setAttribute("aria-label", "Нууц үг нуух");

    } else {

        passwordInput.type = "password";
        this.textContent = "👁";
        this.setAttribute("aria-label", "Нууц үг харуулах");

    }

});


// =====================================
// TOAST NOTIFICATION
// =====================================

const toast = document.getElementById("toast");

let toastTimeout;

function showToast() {

    clearTimeout(toastTimeout);

    toast.classList.add("show");

    toastTimeout = setTimeout(function() {
        toast.classList.remove("show");
    }, 4000);

}


// =====================================
// FORM SUBMIT
// =====================================

form.addEventListener("submit", function(event) {

    // Page refresh болохоос сэргийлэх
    event.preventDefault();

    // Бүх талбарыг шалгах
    const nameValid = checkName();
    const emailValid = checkEmail();
    const passwordValid = checkPassword();
    const messageValid = checkMessage();

    // Бүгд зөв эсэх
    const isFormValid =
        nameValid &&
        emailValid &&
        passwordValid &&
        messageValid;

    if (isFormValid) {

        // Амжилтын мэдэгдэл
        showToast();

        // Form цэвэрлэх
        form.reset();

        // Validation style цэвэрлэх
        document.querySelectorAll(".valid, .invalid").forEach(input => {
            input.classList.remove("valid", "invalid");
        });

        document.querySelectorAll(".input-status").forEach(status => {
            status.textContent = "";
        });

        // Password strength reset
        strengthBars.forEach(bar => {
            bar.style.background = "#303044";
        });

        strengthText.textContent = "Нууц үгийн найдвартай байдал";

        // Character counter reset
        charCounter.textContent = "0 / 500";
        charCounter.classList.remove("over-limit");

        passwordInput.type = "password";
        togglePassword.textContent = "👁";
        togglePassword.setAttribute("aria-label", "Нууц үг харуулах");

    } else {

        // Эхний алдаатай талбарт очих
        const firstInvalid = form.querySelector(".invalid");

        if (firstInvalid) {
            firstInvalid.focus();
        }

    }

});