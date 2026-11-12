// =====================================
// 1. NAME VALIDATION
// =====================================

function validateName(value) {

    const name = value.trim();

    // 2-50 тэмдэгт
    if (name.length < 2 || name.length > 50) {
        return false;
    }

    // Тоо агуулахгүй
    if (/[0-9]/.test(name)) {
        return false;
    }

    return true;
}


// =====================================
// 2. EMAIL VALIDATION
// =====================================

function validateEmail(value) {

    const email = value.trim();

    // Хоосон биш
    if (email.length === 0) {
        return false;
    }

    // Email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}


// =====================================
// 3. PASSWORD VALIDATION
// =====================================

function validatePassword(value) {

    // Дор хаяж 8 тэмдэгт
    if (value.length < 8) {
        return false;
    }

    // Хоосон зайгүй
    if (/\s/.test(value)) {
        return false;
    }

    // Кирилл эсвэл латин үсэг агуулсан
    const hasLetter = /[a-zA-Zа-яА-ЯёЁөӨүҮ]/.test(value);

    // Тоо агуулсан
    const hasNumber = /[0-9]/.test(value);

    return hasLetter && hasNumber;
}


// =====================================
// 4. MESSAGE VALIDATION
// =====================================

function validateMessage(value) {

    const message = value.trim();

    return message.length >= 10 &&
           message.length <= 500;
}