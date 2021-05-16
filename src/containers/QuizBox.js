import React, {useState, useEffect, Fragment} from 'react';
import Question from '../components/Question'
import Answer from '../components/Answer';


const QuizBox = () => {
    const [allQuestions, setAllQuestions] = useState([]);
    const [correctResult, setCorrectResult] = useState(false);
    const [wrongResult, setWrongResult] = useState(false);

    const newQuestion = useEffect(() => {
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
        } else {
            setWrongResult(true)
            setCorrectResult(null)
        }
    };

    const nextQuestionClick = () => {
        window.location.reload();
    }


    return (
        <>
            <h1>Quiz App!</h1>
            <Question question={allQuestions} result={handleUserAnswer} getQuestion={getQuestionData} newQuestion={newQuestion}/>
            <Answer correctResult={correctResult} wrongResult={wrongResult} nextQuestion={nextQuestionClick}/>
        </>
    )
}

export default QuizBox;