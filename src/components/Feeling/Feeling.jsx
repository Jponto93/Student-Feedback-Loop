import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [feelingFeedback, setFeelingFeedback] = useState({ feeling: '' })

    const handleClick = (e) => {
        e.preventDefault;
        if (feelingFeedback.feeling == !Number) {
            alert('Feedback required!')
        } else {
            console.log('inside Feeling handleClick');
            dispatch({
                type: 'ADD_FEELING',
                payload: feelingFeedback
            })
            history.push('/understanding')
        }
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