
// Liste aller Flaggen-Dateinamen (du musst diese Liste mit deinen tatsächlichen Dateinamen anpassen)
const flagFileNames = [
    "Afghanistan.png",
    "Albanien.png",
    "Algerien.png",
    "Andorra.png",
    "Angola.png",
    "Antigua_und_Barbuda.png",
    "Argentinien.png",
    "Armenien.png",
    "Australien.png",
    "Österreich.png",
    "Aserbaidschan.png",
    "Bahamas.png",
    "Bahrain.png",
    "Bangladesch.png",
    "Barbados.png",
    "Belarus.png",
    "Belgien.png",
    "Belize.png",
    "Benin.png",
    "Bhutan.png",
    "Bolivien.png",
    "Bosnien_und_Herzegowina.png",
    "Botswana.png",
    "Brasilien.png",
    "Brunei.png",
    "Bulgarien.png",
    "Burkina_Faso.png",
    "Burundi.png",
    "Kambodscha.png",
    "Kamerun.png",
    "Kanada.png",
    "Kap_Verde.png",
    "Zentralafrikanische_Republik.png",
    "Tschad.png",
    "Chile.png",
    "China.png",
    "Kolumbien.png",
    "Komoren.png",
    "Republik_Kongo.png",
    "Demokratische_Republik_Kongo.png",
    "Costa_Rica.png",
    "Elfenbeinküste.png",
    "Kroatien.png",
    "Kuba.png",
    "Zypern.png",
    "Tschechien.png",
    "Dänemark.png",
    "Dschibuti.png",
    "Dominica.png",
    "Dominikanische_Republik.png",
    "Deutschland.png",
    "Ecuador.png",
    "Ägypten.png",
    "El_Salvador.png",
    "Äquatorialguinea.png",
    "Eritrea.png",
    "Estland.png",
    "Eswatini.png",
    "Äthiopien.png",
    "Fidschi.png",
    "Finnland.png",
    "Frankreich.png",
    "Gabun.png",
    "Gambia.png",
    "Georgien.png",
    "Ghana.png",
    "Griechenland.png",
    "Grenada.png",
    "Guatemala.png",
    "Guinea.png",
    "Guinea-Bissau.png",
    "Guyana.png",
    "Haiti.png",
    "Honduras.png",
    "Ungarn.png",
    "Island.png",
    "Indien.png",
    "Indonesien.png",
    "Iran.png",
    "Irak.png",
    "Irland.png",
    "Israel.png",
    "Italien.png",
    "Jamaika.png",
    "Japan.png",
    "Jordanien.png",
    "Kasachstan.png",
    "Kenia.png",
    "Kiribati.png",
    "Kuwait.png",
    "Kirgisistan.png",
    "Laos.png",
    "Lettland.png",
    "Libanon.png",
    "Lesotho.png",
    "Liberia.png",
    "Libyen.png",
    "Liechtenstein.png",
    "Litauen.png",
    "Luxemburg.png",
    "Madagaskar.png",
    "Malawi.png",
    "Malaysia.png",
    "Malediven.png",
    "Mali.png",
    "Malta.png",
    "Marshallinseln.png",
    "Mauretanien.png",
    "Mauritius.png",
    "Mexiko.png",
    "Mikronesien.png",
    "Moldau.png",
    "Monaco.png",
    "Mongolei.png",
    "Montenegro.png",
    "Marokko.png",
    "Mosambik.png",
    "Myanmar.png",
    "Namibia.png",
    "Nauru.png",
    "Nepal.png",
    "Niederlande.png",
    "Neuseeland.png",
    "Nicaragua.png",
    "Niger.png",
    "Nigeria.png",
    "Nordkorea.png",
    "Südkorea.png",
    "Nordmazedonien.png",
    "Norwegen.png",
    "Oman.png",
    "Pakistan.png",
    "Palau.png",
    "Panama.png",
    "Papua-Neuguinea.png",
    "Paraguay.png",
    "Peru.png",
    "Philippinen.png",
    "Polen.png",
    "Portugal.png",
    "Katar.png",
    "Rumänien.png",
    "Russland.png",
    "Ruanda.png",
    "St._Kitts_und_Nevis.png",
    "St._Lucia.png",
    "St._Vincent_und_die_Grenadinen.png",
    "Samoa.png",
    "San_Marino.png",
    "São_Tomé_und_Príncipe.png",
    "Saudi-Arabien.png",
    "Senegal.png",
    "Serbien.png",
    "Seychellen.png",
    "Sierra_Leone.png",
    "Singapur.png",
    "Slowakei.png",
    "Slowenien.png",
    "Salomonen.png",
    "Somalia.png",
    "Südafrika.png",
    "Südsudan.png",
    "Spanien.png",
    "Sri_Lanka.png",
    "Sudan.png",
    "Suriname.png",
    "Schweden.png",
    "Schweiz.png",
    "Syrien.png",
    "Tadschikistan.png",
    "Thailand.png",
    "Timor-Leste.png",
    "Togo.png",
    "Tonga.png",
    "Trinidad_und_Tobago.png",
    "Tunesien.png",
    "Türkei.png",
    "Turkmenistan.png",
    "Tuvalu.png",
    "Uganda.png",
    "Ukraine.png",
    "Vereinigte_Arabische_Emirate.png",
    "Vereinigtes_Königreich.png",
    "Tansania.png",
    "Vereinigte_Staaten.png",
    "Uruguay.png",
    "Usbekistan.png",
    "Vanuatu.png",
    "Vatikanstadt.png",
    "Venezuela.png",
    "Vietnam.png",
    "Jemen.png",
    "Sambia.png",
    "Simbabwe.png",
    "Kosovo.png",
    "Taiwan.png"
];


let flags = [];
let currentIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let currentAnswer = '';

let sperre = false;
let waitingForEnter = false;

// Lade Flaggen
function loadFlags() {
    flags = flagFileNames.map(fileName => ({
        url: 'assets/' + fileName, // <-- kein führendes /
        name: fileName.replace(/\.(png|jpg|jpeg|gif|svg)$/i, '')
}));


// Mische Flaggen
flags.sort(() => Math.random() - 0.5);

document.getElementById('fileInfo').textContent = `${flags.length} Flaggen geladen`;
    showScreen('setupScreen');
}

// Zeige Screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Starte Quiz
function startQuiz() {
    currentIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    showScreen('quizScreen');
    showQuestion();
}

// Zeige Frage
function showQuestion() {
    sperre = false;
    if (currentIndex >= flags.length) {
        showResults();
        return;
    }

    const current = flags[currentIndex];
    currentAnswer = current.name;

    document.getElementById('flagImage').src = current.url;
    document.getElementById('progress').textContent = `Flagge ${currentIndex + 1} von ${flags.length}`;

    document.getElementById('answerInput').value = '';
    document.getElementById('answerInput').focus();

    const feedback = document.getElementById('feedback');
    feedback.classList.remove('show', 'correct', 'wrong');
}

// Prüfe Antwort
function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim();
    const feedback = document.getElementById('feedback');

    if (!userAnswer) return;
    if (sperre) return;
    sperre = true;

    const isCorrect = normalizeString(userAnswer) === normalizeString(currentAnswer);

    if (isCorrect) {
        correctAnswers++;
        feedback.textContent = '✓ Richtig!';
        feedback.classList.add('show', 'correct');

    setTimeout(() => {
            currentIndex++;
            showQuestion();
        }, 750);
    } else {
        wrongAnswers++;
        feedback.textContent = `✗ Falsch! Die richtige Antwort ist: ${normalizeStringSol(currentAnswer)}`;
        feedback.classList.add('show', 'wrong');

        waitingForEnter = true;
    }
}

// Zeige Ergebnisse
function showResults() {
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('wrongCount').textContent = wrongAnswers;
    showScreen('resultsScreen');
}

// Neustart
function restartQuiz() {
    flags.sort(() => Math.random() - 0.5);
    startQuiz();
}

// Normalisiere String
function normalizeString(str) {
    return str.toLowerCase()
    .replace(/_/g, ' ') // Unterstriche in Leerzeichen
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function normalizeStringSol(str) {
    return str
        .replace(/_/g, ' ') // Unterstriche in Leerzeichen
        .replace(/[\u0300-\u036f]/g, '')
        .normalize('NFD')
        .trim();
}



// Event Listeners
document.getElementById('startBtn').addEventListener('click', startQuiz);
document.getElementById('submitBtn').addEventListener('click', checkAnswer);
document.getElementById('restartBtn').addEventListener('click', restartQuiz);

document.getElementById('answerInput').addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return;

    if (waitingForEnter) {
        waitingForEnter = false;
        sperre = false;
        currentIndex++;
        showQuestion();
    } else {
        checkAnswer();
    }
});


// Lade Flaggen beim Start
loadFlags();
