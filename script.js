const Questions = [{
	q: "which domain has to be learn to create websites",
	a: 
  [
  { text: "Web development", isCorrect: true },
	{ text: "Data Science", isCorrect: false },
	{ text: "Cyber security", isCorrect: false },
	{ text: "None of the above", isCorrect: false }
	]

},
{
	q: "HTML is used in",
	a: 
  [
    { text: "Back-end", isCorrect: false },
    { text: "Front-end", isCorrect: true },
    { text: "Both", isCorrect: false },
    { text: "Not used", isCorrect: false }
    ]

},
{
	q: "Css full form",
	a: 
  [
    { text: "Cascading style script", isCorrect: false },
    { text: "Cascading script", isCorrect: false },
    { text: "Cascading style sheet", isCorrect: true },
    { text: "Cyber style sheet", isCorrect: false }
    ]

},
{
	q: "Javascript file extension is",
	a: 
  [
    { text: ".java", isCorrect: false },
    { text: ".javascript", isCorrect: false },
    { text: ".script", isCorrect: false },
    { text: ".js", isCorrect: true }
    ]

},
{
	q: "Fullstack development means",
	a: 
  [
    { text: "Creating websites", isCorrect: false },
    { text: "Maintaing websitest", isCorrect: false },
    { text: "Both", isCorrect: true },
    { text: "Not related to web", isCorrect: false }
    ]

}
]

let currQuestion = 0
let points = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadpoints() {
	const totalpoints = document.getElementById("points")
	totalpoints.textContent = `Your total points ${points} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadpoints();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		points++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
