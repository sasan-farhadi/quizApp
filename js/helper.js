const formatData = questionData => {
    const result = questionData.map((item) => {
        const questionObject = { question: item.question }
        const answers = [...item.incorrect_answers]
        const correctAnswerIndex = Math.floor(Math.random() * 4)
        answers.splice(correctAnswerIndex, 0, item.correct_answer)
        console.log(answers)
        questionObject.answers = answers
        questionObject.correctAnswerIndex = correctAnswerIndex
        return questionObject
    })
    return result
}
export default formatData

