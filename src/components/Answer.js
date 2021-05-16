import { getNodeText } from "@testing-library/dom";



const Answer = ({ correctResult, wrongResult, nextQuestion }) => {

    return (
        <>
            
            <div>
                <hr />
                <div className="buttons">
                    {correctResult ? <p><b> Correct Answer! </b></p> : null}
                    {wrongResult ? <p><b> Wrong Answer! </b></p> : null}
                </div>
                {correctResult || wrongResult ?
                    <button onClick={nextQuestion}> Next Question </button> : null}
            </div>
        </>
    )
}

export default Answer;

// tried to use one 'state' where true would be the correct answer and false would be the incorrect 
// answer, but couldn't work out how to set it so it didn't show as 'Wrong!' before an answer 
// was even guessed