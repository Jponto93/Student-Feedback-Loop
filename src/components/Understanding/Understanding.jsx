import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Button, TextField } from '@mui/material';

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understandingFeedback, setUnderstandingFeedback] = useState({ understanding: '' })

    const handleClick = (e) => {
        e.preventDefault;
        if (understandingFeedback.understanding == !Number) {
            alert('Feedback required!')
        } else {
            console.log('in Understanding handleClick');
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: understandingFeedback
            })
            history.push('/support')
        }
    } // end handleClick

    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <div className="container">
            <Button
            onClick={() => history.push('/')}
            variant="contained"
            color="inherit">BACK</Button>
                <div className="questionIn">
                    <TextField
                        id="outlined-basic"
                        label="Understanding?"
                        variant="outlined"
                        required
                        type="number"
                        placeholder="Understanding?"
                        value={understandingFeedback}
                        onChange={(e) => setUnderstandingFeedback(e.target.value)} />
                </div>
                <Button
                    variant="contained"
                    color="inherit"
                    onClick={handleClick}>NEXT</Button>
            </div>
        </>
    )
} // end Understanding

export default Understanding;