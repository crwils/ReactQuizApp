

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