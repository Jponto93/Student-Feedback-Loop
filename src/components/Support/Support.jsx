import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

function Support() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [supportFeedback, setSupportFeedback] = useState({ support: '' })

    const handleClick = (e) => {
        e.preventDefault;
        console.log('inside Support handleClick');
        if (supportFeedback.support == !Number) {
            alert('Feedback required!')
        } else {
            dispatch({
                type: 'ADD_SUPPORT',
                payload: supportFeedback
            })
            history.push('/comments')
        }
    } // end handleClick

    return (
        <>
            <h2>How well are you being supported?</h2>
            <input
                required
                type="number"
                placeholder="Support?"
                value={supportFeedback}
                onChange={(e) => setSupportFeedback(e.target.value)} />
            <button
                onClick={handleClick}>NEXT</button>
        </>
    )
} // end Support

export default Support;