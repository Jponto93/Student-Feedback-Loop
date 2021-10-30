import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

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
            <input
                required
                type="text"
                placeholder="Comments"
                value={comments.comments}
                onChange={(e) => setComments(e.target.value)} />
            <button onClick={handleClick}>NEXT</button>
        </>

    )
} // end Comments

export default Comments;