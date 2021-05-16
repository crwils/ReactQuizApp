import Question from "./Question";



const Answer = ({revealResult}) => {

    return (
        revealResult ? <p>Correct!</p> : <p>Wrong!</p>
    )
}

export default Answer;