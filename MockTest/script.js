const testForm = document.getElementById('test-form');
const submitBtn = document.getElementById('submit-btn');
const resultSection = document.getElementById('result-section');
const resultMessage = document.getElementById('result-message');
const viewReportBtn = document.getElementById('view-report-btn');
const reportSection = document.getElementById('report-section');
const reportMessage = document.getElementById('report-message');
const backBtn = document.getElementById('back-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const answers = [];
    const questions = testForm.elements;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].type === 'radio' && questions[i].checked) {
            answers.push(questions[i].value);
        }
    }
    const score = calculateScore(answers);
    displayResults(score);
});

viewReportBtn.addEventListener('click', () => {
    resultSection.hidden = true;
    reportSection.hidden = false;
    displayReport();
});

backBtn.addEventListener('click', () => {
    reportSection.hidden = true;
    resultSection.hidden = false;
});

function calculateScore(answers) {
    // Add logic to calculate the score based on the answers
    return 80; // Replace with actual score calculation
}

function displayResults(score) {
    resultMessage.textContent = `You scored ${score}%`;
    resultSection.hidden = false;
}

function displayReport() {
    // Add logic to display the report based on the score
    reportMessage.textContent = `You did well! Keep it up!`;
}