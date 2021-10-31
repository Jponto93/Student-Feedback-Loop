import { TableRow, TableCell } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

function FeedbackItem({ feedback, fetchFeedback }) {

    const handleClick = () => {
        console.log('inside handleClick');
        axios.delete(`/feedback/${feedback.id}`)
            .then((response) => {
                console.log('Successful delete');
                fetchFeedback();
            })
            .catch((err) => {
                console.log('Error in delete', err);
            })
    }
    return (
        <>
            <TableRow>
                <TableCell align="center">{feedback.feeling}</TableCell>
                <TableCell align="center">{feedback.understanding}</TableCell>
                <TableCell align="center">{feedback.support}</TableCell>
                <TableCell align="center">{feedback.comments}</TableCell>
                <TableCell align="center"><DeleteIcon onClick={handleClick}></DeleteIcon></TableCell>
            </TableRow>
        </>
    )
} // end FeedbackItem

export default FeedbackItem;