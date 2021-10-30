import { useHistory } from "react-router";

function ThankYou() {

    const history = useHistory();

    return (
        <>
            <h2>Thank You!</h2>
            <button onClick={() => history.push('/')}>Leave New Feedback</button>
        </>
    )
} // end ThankYou

export default ThankYou;