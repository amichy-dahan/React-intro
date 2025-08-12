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


    function changeDisplay(name) {
        setDisplayConversation(name);
    }
  const conversationObj = names.find(el => el.with === displayConversation);

    return (
        <>

            {
                displayConversation === null ?
                    <List contacts={names.map(el => el.with)}  changeD ={changeDisplay} />
                    :
                     <Convers changeD ={changeDisplay} convo = {conversationObj.convo }/>
            }

        </>

    )

}

export default Ex2