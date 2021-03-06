import axios from "axios"
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Paper, Button } from '@mui/material';

function Results() {

    const results = useSelector(store => store.results)
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = () => {

        axios({
            method: 'POST',
            url: '/feedback',
            data: results
        })
            .then((response) => {
                console.log('POST RESPONSE', response);
            })
            .catch((err) => {
                console.log('Error in POST', err);
                res.sendStatus(500);
            })

        dispatch({
            type: 'RESET_SURVEY',
        })
        history.push('/thankyou')
    }

    return (
        <Paper
            elevation={12}>
            <>
                <Button
                    onClick={() => history.push('/comments')}
                    variant="contained"
                    color="inherit">BACK</Button>
                <h2>Review Your Feedback</h2>
                <p>Feelings: {results.feeling}</p>
                <p>Understanding: {results.understanding}</p>
                <p>Support: {results.support}</p>
                <p>Comments: {results.comments}</p>
                <Button
                    color="inherit"
                    variant="contained" onClick={handleSubmit}>SUBMIT</Button>
            </>
        </Paper>
    )
} // end Results

export default Results;