import { useState } from "react";







function Hudini() {

   const [show ,setShow] = useState(true);


    return (
        <>
        {
            show ? <div> Now you see me</div>:<div> Now you don't</div>
        }
            </>
    )
}


export default Hudini;