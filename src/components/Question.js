import allQuestions from '../containers/QuizBox'


const Question = ({ question, result }) => {

    const answer = question.correct_answer

    const handleButtonClick = function (event) {

        const userChoice = event.target.value
            
            if (userChoice === answer) {
                result(true)
            } else {
                result(false)
            }
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