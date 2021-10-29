

function Support() {

    const handleClick = () => {
        console.log('inside Support handleClick');
    } // end handleClick

    return (
        <>
            <h2>How well are you being supported?</h2>
            <input type="number"
                placeholder="Support?" />
            <button onClick={handleClick}>NEXT</button>
        </>
    )
} // end Support

export default Support;