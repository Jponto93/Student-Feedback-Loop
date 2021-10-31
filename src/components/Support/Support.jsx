import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import './Support.css';
import { Button, TextField } from '@mui/material';

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
            <div className="container">
                <div className="questionIn">
                <TextField
                        id="outlined-basic"
                        label="Feeling?"
                        variant="outlined"
                        required
                        type="number"
                        placeholder="Support?"
                        value={supportFeedback}
                        onChange={(e) => setSupportFeedback(e.target.value)} />
                </div>
                <Button
                variant="contained"
                    onClick={handleClick}>NEXT</Button>
            </div>
        </>
    )
} // end Support

export default Support;