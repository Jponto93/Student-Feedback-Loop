import { useHistory } from "react-router";
import { Button } from '@mui/material';

function ThankYou() {

    const history = useHistory();

    return (
        <>
            <h2>Thank You!</h2>
            <Button
                variant="contained"
                color="info"
                onClick={() => history.push('/')}>Leave New Feedback</Button>
        </>
    )
} // end ThankYou

export default ThankYou;