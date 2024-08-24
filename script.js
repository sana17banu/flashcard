document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById('add-btn');
    const questionInput = document.getElementById('question-input');
    const answerInput = document.getElementById('answer-input');
    const flashcardContainer = document.getElementById('flashcard-container');

    // Function to create a flashcard element
    function createFlashcard(question, answer) {
        const flashcard = document.createElement('div');
        flashcard.className = 'flashcard';

        const flashcardInner = document.createElement('div');
        flashcardInner.className = 'flashcard-inner';

        const flashcardFront = document.createElement('div');
        flashcardFront.className = 'flashcard-front';
        flashcardFront.textContent = question;

        const flashcardBack = document.createElement('div');
        flashcardBack.className = 'flashcard-back';
        flashcardBack.textContent = answer;

        flashcardInner.appendChild(flashcardFront);
        flashcardInner.appendChild(flashcardBack);
        flashcard.appendChild(flashcardInner);

        // Add event listener to toggle answer on click
        flashcard.addEventListener('click', function() {
            flashcard.classList.toggle('show-answer');
        });

        flashcardContainer.appendChild(flashcard);
    }

    // Load flashcards from LocalStorage
    function loadFlashcards() {
        const flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
        flashcards.forEach(({ question, answer }) => createFlashcard(question, answer));
    }

    // Save flashcards to LocalStorage
    function saveFlashcards() {
        const flashcards = [];
        flashcardContainer.childNodes.forEach(flashcard => {
            const question = flashcard.querySelector('.flashcard-front').textContent;
            const answer = flashcard.querySelector('.flashcard-back').textContent;
            flashcards.push({ question, answer });
        });
        localStorage.setItem('flashcards', JSON.stringify(flashcards));
    }

    // Add flashcard button event
    addBtn.addEventListener('click', function() {
        const question = questionInput.value.trim();
        const answer = answerInput.value.trim();

        if (question && answer) {
            createFlashcard(question, answer);
            saveFlashcards();

            // Clear the input fields
            questionInput.value = '';
            answerInput.value = '';
        } else {
            alert("Please enter both a question and an answer.");
        }
    });

    // Load existing flashcards when the page loads
    loadFlashcards();
});
