const pw = document.getElementById("pw");
const pwConfirm = document.getElementById("confirm-pw");
const pwLabel = document.querySelector("label[for='pw']");

function checkPW() {
    if (pw.value != pwConfirm.value) {
        pw.classList.add("error");
        pwConfirm.classList.add("error");
        pwLabel.classList.add("error");

    } else {
        pw.classList.remove("error");
        pwConfirm.classList.remove("error");
        pwLabel.classList.remove("error");
    };
};

pw.addEventListener("focusout", checkPW);
pwConfirm.addEventListener("focusout", checkPW);