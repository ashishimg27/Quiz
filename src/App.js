import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: "What is the name of Thor's enchanted hammer?",
			answerOptions: [
				{ answerText: 'ASGARD', isCorrect: false },
				{ answerText: 'GUNGNIR', isCorrect: false },
				{ answerText: 'MJOLNIR ', isCorrect: true },
				{ answerText: 'FENRIS', isCorrect: false },
			],
		},
		{
			questionText: "Who is Thor's father?",
			answerOptions: [
				{ answerText: 'FENRIS', isCorrect: false },
				{ answerText: 'ODIN', isCorrect: true },
				{ answerText: 'LOKI', isCorrect: false },
				{ answerText: 'BALDER', isCorrect: false },
			],
		},
		{
			questionText: 'Which Avenger is the king of Wakanda?',
			answerOptions: [
				{ answerText: 'BLACK PANTHER', isCorrect: true },
				{ answerText: 'HERCULES', isCorrect: false },
				{ answerText: 'FALCON', isCorrect: false },
				{ answerText: 'ANT-MAN', isCorrect: false },
			],
		},
		{
			questionText: "Which Avenger can lift Thor's hammer?",
			answerOptions: [
				{ answerText: 'GIANT-MAN', isCorrect: false },
				{ answerText: 'HULK', isCorrect: false },
				{ answerText: 'CAP-AMERICA', isCorrect: true },
				{ answerText: 'IRON-MAN', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the new Sheild Holder in MCU?',
			answerOptions: [
				{ answerText: 'IRON-MAN', isCorrect: false },
				{ answerText: 'FALCON', isCorrect: true },
				{ answerText: 'HULK', isCorrect: false },
				{ answerText: 'BLACK-WIDOW', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		 if (nextQuestion < questions.length) {
		 	setCurrentQuestion(nextQuestion);
		 } else {
			setShowScore(true);
		 }
	};

	const resetForm = () => {
		setScore (0);
		setCurrentQuestion (0);
		setShowScore (false);
	  };
	return (
               
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<br/>
					<p>Have a Nice day - Ashish</p>
					<button className="custom" onClick={resetForm}>  Back to Home</button>
				</div>
			) : (
				<>
				
					<div className='question-section'>
						<div className='question-count'>
							 <span>Question {currentQuestion + 1}</span>/{questions.length} 
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
