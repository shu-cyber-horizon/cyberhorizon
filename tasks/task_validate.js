function check_answer(form, b64Answer) {
    // Validate if the entered answer is correct, locking the field if so.
    // The base64 encoding here is used so that students can't simply inspect the page's HTML to see the answer.
    let correctAnswer = atob(b64Answer);
    let enteredAnswer = form.children[0].value.toLowerCase();

    output_result(form, correctAnswer === enteredAnswer);
}

function check_answer_contains(form, b64Answer) {
    // Similar to the main function, but only checks if the stored answer is a substring of the entered one.
    // This is used in task 4, allowing the entered answer to be marked as valid, if it contains the entire URL, or just the domain and path.
    let correctAnswer = atob(b64Answer);
    let enteredAnswer = form.children[0].value.toLowerCase();

    output_result(form, enteredAnswer.includes(correctAnswer));
}

function output_result(form, is_correct) {
    if (is_correct) {
        // Disable the inputs.
        form.children[0].disabled = true;
        form.children[1].disabled = true;
        // Confirm the answer is correct.
        form.children[0].style.color = "green";
        form.children[1].style.color = "green";
        form.children[1].value = "Correct!"
    } else {
        // Change the button for a second to say that the input was incorrect.
        form.children[1].disabled = true;
        form.children[1].style.color = "red";
        form.children[1].value = "Incorrect"
        setTimeout(() => {
            // Set everything back.
            form.children[1].disabled = false;
            form.children[1].style.removeProperty("color");
            form.children[1].value = "Check"
        }, 1000);
    }
}
