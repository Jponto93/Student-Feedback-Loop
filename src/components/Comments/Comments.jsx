import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import './Comments.css';
import { TextField, Button } from '@mui/material';

function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();

    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understanding)
    const support = useSelector(store => store.support)
    const [comments, setComments] = useState('none');

    const handleClick = (e) => {

        const results = {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments
        }
        e.preventDefault();
        console.log('inside Comments handleClick');
        dispatch({
            type: 'ADD_RESULTS',
            payload: results
        })
        history.push('/review')
    } // end handleClick

    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <div className="container">
            <Button
            onClick={() => history.push('/support')}
            variant="contained"
            color="inherit">BACK</Button>
                <div className="questionIn">
                    <TextField
                        id="outlined-basic"
                        label="Comments"
                        variant="outlined"
                        type="text"
                        placeholder="Comments"
                        value={comments.comments}
                        onChange={(e) => setComments(e.target.value)} />
                </div>
                <Button
                    color="inherit"
                    variant="contained"
                    onClick={handleClick}>NEXT</Button>
            </div>
        </>

    )
} // end Comments

export default Comments;