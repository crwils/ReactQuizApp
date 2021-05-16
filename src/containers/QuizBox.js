import React, {useState, useEffect, Fragment} from 'react';
import Question from '../components/Question'
import Answer from '../components/Answer';


const QuizBox = () => {
    const [allQuestions, setAllQuestions] = useState([]);
    const [result, setResult] = useState(false);

    useEffect(() => {
        getQuestionData();
    }, []);

    const getQuestionData = function () { 
    fetch('https://opentdb.com/api.php?amount=10&type=boolean')
        .then(response => response.json())
        .then(data => setAllQuestions(data.results[0]))
    };

    const handleUserAnswer = function (value) {
        setResult(value)
    };


    return (
        <>
            <h1>Quiz App!</h1>
            <Question question={allQuestions} userAnswer={handleUserAnswer} getQuestion={getQuestionData}/>
            {result ? <Answer question={allQuestions} revealResult={result}/> : null}
        </>
    )
}

export default QuizBox;