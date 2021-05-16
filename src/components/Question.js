import allQuestions from '../containers/QuizBox'


const Question = ({ question, userAnswer }) => {

    const answer = question.correct_answer

    const checkAnswer = (event) => {
        const userChoice = event.target.value
        if (userChoice === answer) {
            // console.log("Correct")
            userAnswer(true)
        } else {
            // console.log("Incorrect")
            userAnswer(false)
        }
    }

    const handleButtonClick = function (event) {
        // console.log(event.target.value)
        // console.log(answer)
        checkAnswer(event)
    }
    
    return (
        <>
            <p>{question.question}</p>
            <div>
                <button value="True" onClick={handleButtonClick}>True</button>
                <button value="False" onClick={handleButtonClick}>False</button>
            </div>
        </>

    )
}


export default Question;