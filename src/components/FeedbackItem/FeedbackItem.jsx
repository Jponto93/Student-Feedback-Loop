import { TableRow, TableCell } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function FeedbackItem({ feedback }) {
    return (
        <>
            <TableRow>
                <TableCell align="center">{feedback.feeling}</TableCell>
                <TableCell align="center">{feedback.understanding}</TableCell>
                <TableCell align="center">{feedback.support}</TableCell>
                <TableCell align="center">{feedback.comments}</TableCell>
                <TableCell align="center"><DeleteIcon><button>DELETE</button></DeleteIcon></TableCell>
            </TableRow>
        </>
    )
} // end FeedbackItem

export default FeedbackItem;