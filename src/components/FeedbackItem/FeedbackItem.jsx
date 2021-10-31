

function FeedbackItem({ feedback }) {
    return (
        <>
            <tr>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td><button>DELETE</button></td>
            </tr>
        </>
    )
} // end FeedbackItem

export default FeedbackItem;