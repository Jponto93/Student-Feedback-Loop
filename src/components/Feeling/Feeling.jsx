import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Feeling() {

    const dispatch = useDispatch();

    const [feelingFeedback, setFeelingFeedback] = useState({feeling: ''})

    const handleClick = (e) => {
        e.preventDefault;
        console.log('inside Feeling handleClick');
        dispatch({
            type: 'ADD_FEELING',
            payload: feelingFeedback
        })
    }

    // console.log(feelingFeedback);

    return (
        <>
            <h2>How are you feeling today?</h2>
            <input 
            required
            type="number" 
            placeholder="Feeling?"
            value={feelingFeedback}
            onChange={(e) => setFeelingFeedback(e.target.value)} />
            <button
            onClick={handleClick}>NEXT</button>
        </>
    )
} // end Feeling

export default Feeling;