

function Convers({ convo ,changeD}) {
    return (
        <>
            <button onClick={()=>changeD(null)}>Back</button>
            
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