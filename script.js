document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById('add-btn');
    const questionInput = document.getElementById('question-input');
    const answerInput = document.getElementById('answer-input');
    const flashcardContainer = document.getElementById('flashcard-container');

    addBtn.addEventListener('click', function() {
        const question = questionInput.value.trim();
        const answer = answerInput.value.trim();

        if (question && answer) {
            // Create a new flashcard div
            const flashcard = document.createElement('div');
            flashcard.className = 'flashcard';

            // Create inner div for 3D effect
            const flashcardInner = document.createElement('div');
            flashcardInner.className = 'flashcard-inner';

            // Create front and back divs
            const flashcardFront = document.createElement('div');
            flashcardFront.className = 'flashcard-front';
            flashcardFront.textContent = question;

            const flashcardBack = document.createElement('div');
            flashcardBack.className = 'flashcard-back';
            flashcardBack.textContent = answer;

            // Append front and back to inner div
            flashcardInner.appendChild(flashcardFront);
            flashcardInner.appendChild(flashcardBack);

            // Append inner div to flashcard
            flashcard.appendChild(flashcardInner);

            // Add event listener to toggle answer on click
            flashcard.addEventListener('click', function() {
                flashcard.classList.toggle('show-answer');
            });

            // Append the flashcard to the container
            flashcardContainer.appendChild(flashcard);

            // Clear the input fields
            questionInput.value = '';
            answerInput.value = '';
        } else {
            alert("Please enter both a question and an answer.");
        }
    });
});
