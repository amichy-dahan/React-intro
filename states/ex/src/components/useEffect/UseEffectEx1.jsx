import { useEffect, useState } from "react";

function UseEffectEx1() {
     const [time, setTime] = useState(new Date());

     useEffect(() => {
          const intervalId = setInterval(() => {
               setTime(new Date());
          }, 1000);

          return () => clearInterval(intervalId);
     }, [])

     return (
          <>

               <div>
                {time.toLocaleTimeString()}
               </div>
          </>
     )

}


export default UseEffectEx1;