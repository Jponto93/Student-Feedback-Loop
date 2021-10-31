import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import './Feeling.css';
import { Button, TextField } from '@mui/material';


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
            <div className="container">
                <div className="questionIn">
                    <TextField
                        id="outlined-basic"
                        label="Feeling?"
                        variant="outlined"
                        required
                        type="number"
                        value={feelingFeedback}
                        onChange={(e) => setFeelingFeedback(e.target.value)} />
                </div>
                <Button
                    variant="contained"
                    color="inherit"
                    onClick={handleClick}>NEXT</Button>
            </div>
        </>
    )
} // end Feeling

export default Feeling;