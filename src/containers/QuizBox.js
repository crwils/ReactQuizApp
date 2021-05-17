import React, {useState, useEffect} from 'react';
import Question from '../components/Question'
import Answer from '../components/Answer';


const QuizBox = () => {
    const [allQuestions, setAllQuestions] = useState([]);
    const [correctResult, setCorrectResult] = useState(false);
    const [wrongResult, setWrongResult] = useState(false);
    const [correctScore, setCorrectScore] = useState(0);
    const [incorrectScore, setIncorrectScore] = useState(0);

    useEffect(() => {
        getQuestionData();
    }, []);

    const getQuestionData = () => { 
    fetch('https://opentdb.com/api.php?amount=10&type=boolean')
        .then(response => response.json())
        .then(data => setAllQuestions(data.results[0]))
    };

    const handleUserAnswer = function (value) {
        if (value === true) {
            setCorrectResult(true)
            setWrongResult(null)
            addToScore(correctScore)
        } else {
            setWrongResult(true)
            setCorrectResult(null)
            addToScore(incorrectScore)
        }
    };

    const addToScore = (value) => {
        if (value === correctScore) {
            setCorrectScore(correctScore+1) 
        } else {
            setIncorrectScore(incorrectScore+1)
        }
    }

    const nextQuestionClick = () => { 
        getQuestionData()
        setWrongResult(null)
        setCorrectResult(null)
    }

    return (
        <>
            <u><h1>QUIZ</h1></u>
            <Question question={allQuestions} result={handleUserAnswer} />
            <b>Correct: {correctScore}</b> <br/>
            <b>Incorrect: {incorrectScore}</b>
            <Answer correctResult={correctResult} wrongResult={wrongResult} nextQuestion={nextQuestionClick}/>
        </>
    )
}

export default QuizBox;