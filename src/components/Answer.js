import { getNodeText } from "@testing-library/dom";



const Answer = ({ correctResult, wrongResult, nextQuestion}) => {

    return (
        <>
            {correctResult ? <p> Correct! </p> : null}
            {wrongResult ? <p> Wrong! </p> : null}
            {correctResult || wrongResult ?
            <button onClick={nextQuestion}> Next Question </button> : null}
        </>
    )
}

export default Answer;

// tried to use one 'state' where true would be the correct answer and false would be the incorrect 
// answer, but couldn't work out how to set it so it didn't show as 'Wrong!' before an answer 
// was even guessed