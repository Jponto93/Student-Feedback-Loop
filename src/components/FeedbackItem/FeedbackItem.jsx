import { TableRow, TableCell } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import swal from 'sweetalert';

function FeedbackItem({ feedback, fetchFeedback }) {

    const handleClick = () => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`/feedback/${feedback.id}`)
                        .then((response) => {
                            console.log('Successful delete');
                            fetchFeedback();
                        })
                        .catch((err) => {
                            console.log('Error in delete', err);
                        })
                    swal("Feedback has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your feedback is safe!");
                }
            });
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