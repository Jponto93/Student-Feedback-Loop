

function Feeling() {

    const handleClick = () => {
        console.log('inside Feeling handleClick');
    }
    return (
        <>
            <h2>How are you feeling today?</h2>
            <input type="number" 
            placeholder="Feeling?"/>
            <button onClick={handleClick}>NEXT</button>
        </>
    )
} // end Feeling

export default Feeling;