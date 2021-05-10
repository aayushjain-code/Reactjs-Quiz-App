import React, { useEffect, useState } from 'react'

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {


	const [options, setOptions] = useState();
	const [currQues, setcurrQues] = useState(0);

	useEffect(() => {
		setOptions(
			questions &&
			handleShuffle([
				questions[currQues]?.correct_answer,
				...questions[currQues]?.incorrect_answers,
			])
		);
	}, [currQues, questions]);

	console.log(questions);

	const handleShuffle = (options) => {
		return options.sort(() => Math.random() - 0.5);
	};



	return (
		<div>
			<h1>Quiz page</h1>
		</div>
	)
}

export default Quiz
