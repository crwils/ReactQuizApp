

const Question = ({ question, result }) => {

    const answer = question.correct_answer
    
    const handleButtonClick = function (event) {
        const userChoice = event.target.value
            
        if (userChoice === answer) {
            result(true)
        } else {
            result(false) // figure out where result is coming from 
        }
    }
    
    return (
        <>
            <p>{question.question}</p>
            <div className="buttons">
                <button value="True" onClick={handleButtonClick}>True</button>
                <button value="False" onClick={handleButtonClick}>False</button>
            </div>
        </>
    )
}
// string replace: .replace(/&quot;|&#039;/g, "'")

export default Question;

// how can I change this so user can't repeatedly click true or false to alter score before refreshing the question