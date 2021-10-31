import axios from "axios";
import { useState, useEffect } from "react";
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import {
    Table,
    TableContainer,
    Paper,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';

function Admin() {

    const [feedbackList, setFeedback] = useState([]);

    const fetchFeedback = () => {

        axios.get('/feedback')
            .then((response) => {
                console.log('successful GET', response.data);
                setFeedback(response.data)
            })
            .catch((err) => {
                console.log('Error in GET', err);
            })
    }

    useEffect(() => {
        fetchFeedback();
    }, [])
    return (
        <>
            <TableContainer component={Paper}
                elevation={12}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Feeling</TableCell>
                            <TableCell align="center">Comprehension</TableCell>
                            <TableCell align="center">Support</TableCell>
                            <TableCell align="center">Comments</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {feedbackList.map((feedback) => {
                            return (
                                <FeedbackItem
                                    feedback={feedback}
                                    key={feedback.id} />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
} // end Admin

export default Admin;