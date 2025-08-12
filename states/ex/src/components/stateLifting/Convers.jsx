

function Convers({ back, convo }) {
    return (
        <>
            <button onClick={back}>Back</button>
            {convo.map(conv => (
                <div>

                    <b>{conv.sender}:</b> <span>{conv.text}</span>
                    <br/>
                </div>
            ))}
        </>
    )
}


export default Convers;