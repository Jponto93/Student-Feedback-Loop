

function Understanding() {

    const handleClick = () => {
        console.log('in Understanding handleClick');
    } // end handleClick

    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <input type="number"
                placeholder="Understanding?" />
                <button onClick={handleClick}>NEXT</button>
        </>
    )
} // end Understanding

export default Understanding;