//Sämtliche Fragen und Antworten der QuizApp
let questions = [
    {
        "question": "Wer ist größtenteils in den Developer Akademie Videos zu sehen?",
        "answer_1": "Peter Griffin",
        "answer_2": "Junus Ergin",
        "answer_3": "Michael Jackson",
        "answer_4": "Tommy Shelby",
        "right_answer": 2
    },

    {
        "question": "Über welche Software laufen die Live Calls bei der Dev Aka?",
        "answer_1": "ICQ",
        "answer_2": "SchülerVZ",
        "answer_3": "Skype",
        "answer_4": "Zoom",
        "right_answer": 4
    },

    {
        "question": "Welchen Job streben die Leute bei der Dev Aka an?",
        "answer_1": "Maurer",
        "answer_2": "Dachdecker",
        "answer_3": "Front-End Developer",
        "answer_4": "Data Scientist",
        "right_answer": 3
    },

    {
        "question": "Wie lange dauert es ungefähr bis man die Dev Aka abgeschlossen hat?",
        "answer_1": "Um die 6 Monate",
        "answer_2": "3 Jahre, wie eine Ausbildung",
        "answer_3": "1 Monat",
        "answer_4": "Das Lernen hat nie ein Ende!",
        "right_answer": 1
    },
];

//Hilfsvariable für den aktuellen Index im questions JSON
currentQuestion = 0;

function init() {
    showQuestion();
}

//Zeigt die Fragen und Antworten sowie den Cardfooter an
function showQuestion() {
    questionNumbers();
    let question = questions[currentQuestion];
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

//Geht im JSON questions eins höher und ruft dann die showQuestion Funktion auf um alle Sachen auszugeben.
function nextQuestion() {
    if (currentQuestion+1 >= questions.length) {
        alert('Du bist mit den Fragen durch')
    }
    else{
        currentQuestion++;
        showQuestion();
    }
}

//Zeigt den dynamischen Bereich im Cardfooter an -> Frage 1/5 etc.
function questionNumbers() {
    document.getElementById('currentQuestion').innerHTML = currentQuestion + 1;
    document.getElementById('questionsLength').innerHTML = questions.length;
}