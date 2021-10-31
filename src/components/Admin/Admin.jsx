import axios from "axios";
import { useState, useEffect } from "react";
import FeedbackItem from "../FeedbackItem/FeedbackItem";

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
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackList.map((feedback) => {
                        return (
                            <FeedbackItem
                                feedback={feedback} 
                                key={feedback.id}/>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
} // end Admin

export default Admin;