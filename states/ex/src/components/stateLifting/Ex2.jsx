import { useEffect, useState } from "react"
import List from "./List"
import Convers from "./Convers"

function Ex2() {


    let arr = {
        displayConversation: null,
        conversations: [
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    }

    const [names, setNames] = useState([])
    const [displayConversation, setDisplayConversation] = useState(null)


    useEffect(() => {
        setNames(arr.conversations)
    }, [])


    function changeDisplay() {
        setDisplayConversation(null);
    }


    return (
        <>

            {
                displayConversation === null ?
                    names.map((el, index) => (
                        <div onClick={() => setDisplayConversation(el.convo)}>
                            <List key={index} id={index} name={el.with} convo={el.convo} />
                        </div>
                    )) : <Convers back={changeDisplay} convo = {displayConversation} />
            }

        </>

    )

}

export default Ex2