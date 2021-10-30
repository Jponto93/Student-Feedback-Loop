import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understandingFeedback, setUnderstandingFeedback] = useState({understanding: ''})

    const handleClick = (e) => {
        e.preventDefault;
        console.log('in Understanding handleClick');
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understandingFeedback
        })
        history.push('/support')
    } // end handleClick

    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <input 
            required 
            type="number"
            placeholder="Understanding?"
            value={understandingFeedback}
            onChange={(e) => setUnderstandingFeedback(e.target.value)} />
            <button 
            onClick={handleClick}>NEXT</button>
        </>
    )
} // end Understanding

export default Understanding;