import Contact from "./contact"

function List({ contacts , changeD}) {
  return (
    <>
      {contacts.map(c => (
        <Contact  name={c}  changeD={changeD}/>
      ))}
    </>

  )

}

export default List