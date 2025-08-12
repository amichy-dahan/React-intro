function Contact({name , changeD}) {

    return(

        <>
           <h1 onClick={()=>changeD(name)}>{name}</h1>
        </>
    )
    
}

export default Contact;