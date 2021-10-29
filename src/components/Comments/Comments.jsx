

function Comments() {

    const handleClick = () => {
        console.log('inside Comments handleClick');
    } // end handleClick

    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <input type="text"
                placeholder="Comments" />
            <button onClick={handleClick}>NEXT</button>
        </>

    )
} // end Comments

export default Comments;