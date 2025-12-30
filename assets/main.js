function checkPhishing(isPhishing) {
    const result = document.getElementById("phishingResult");

    if (isPhishing) {
        result.style.color = "green";
        result.innerHTML =
            "Correct. This email is a phishing attempt. The sender domain is fake and the message creates unnecessary urgency.";
    } else {
        result.style.color = "red";
        result.innerHTML =
            "Incorrect. This email contains common phishing indicators such as a fake domain name and urgent language.";
    }
}





function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("passwordResult");

    if (password.length === 0) {
        result.style.color = "red";
        result.innerHTML = " Please enter a password.";
        return;
    }

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 1) {
    result.style.color = "red";
    result.innerHTML =
        "Weak password. Such passwords can be cracked very quickly.";
    }
    else if (strength === 2 || strength === 3) {
    result.style.color = "orange";
    result.innerHTML =
        "Medium strength password. Adding more length and symbols will improve security.";
    }
    else {
    result.style.color = "green";
    result.innerHTML =
        "Strong password. This provides good resistance against brute force attacks.";
    }

}







function simulateBruteForce() {
    const length = document.getElementById("passwordLength").value;
    const result = document.getElementById("bruteResult");

    if (length === "" || length <= 0) {
        result.style.color = "red";
        result.innerHTML = " Please enter a valid password length.";
        return;
    }

    // Assume 62 possible characters (a-z, A-Z, 0-9)
    const possibilities = Math.pow(62, length);

    // Assume attacker can try 1 billion attempts per second
    const attemptsPerSecond = 1000000000;

    const seconds = possibilities / attemptsPerSecond;

    let timeMessage = "";

    if (seconds < 60) {
        timeMessage = seconds.toFixed(2) + " seconds";
    } else if (seconds < 3600) {
        timeMessage = (seconds / 60).toFixed(2) + " minutes";
    } else if (seconds < 86400) {
        timeMessage = (seconds / 3600).toFixed(2) + " hours";
    } else if (seconds < 31536000) {
        timeMessage = (seconds / 86400).toFixed(2) + " days";
    } else {
        timeMessage = (seconds / 31536000).toFixed(2) + " years";
    }

    result.style.color = "blue";
    result.innerHTML =
    "Estimated number of attempts: " + possibilities.toExponential(2) + "<br>" +
    "Estimated time to crack: " + timeMessage + "<br><br>" +
    "Increasing password length significantly improves security.";

}








function socialResponse(action) {
    const result = document.getElementById("socialResult");

    if (action === "deny") {
        result.style.color = "green";
        result.innerHTML =
            "Correct decision. Legitimate IT staff will never ask for passwords or OTPs. Reporting such incidents helps prevent attacks.";
    } else {
        result.style.color = "red";
        result.innerHTML =
            "Incorrect decision. Sharing OTPs or passwords can lead to account compromise. This is a common social engineering tactic.";
    }
}




function calculateScore() {
    let score = 0;
    const totalQuestions = 4;

    for (let i = 1; i <= totalQuestions; i++) {
        const answer = document.querySelector('input[name="q' + i + '"]:checked');
        if (answer && answer.value === "1") {
            score++;
        }
    }

    const result = document.getElementById("quizResult");
    result.style.color = "blue";
    result.innerHTML =
        "Your score: " + score + " out of " + totalQuestions + ". " +
        "Review the learning modules to improve your awareness.";
}
