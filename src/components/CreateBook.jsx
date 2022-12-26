import { useState } from "react";
import created from "./../assets/check-circle.gif"
import usebook_context from '../hooks/usebook_context';
 
const CreateBook = () => {
  const [value,setvalue] = useState();
  const [alert,setalert] = useState("");
  const {createBook} = usebook_context()

  const handlechange = (e) => {
    setvalue(e.target.value);
  }

  const handlecreate = (e) => {
    e.preventDefault()
    createBook(value)
    setvalue("")
    setalert(created)
    setTimeout(() => {
        setalert("")
    }, 1000);
  }

  return (
      <form className="form-input" onSubmit={handlecreate}>
        <h1>write book title </h1>
        <div className="form_inputs">
            <input onChange={handlechange} value={value} type="text" />
            { alert !=0 && <img src={alert} width="3%"/> }
            <button>create</button>
        </div>
    </form>
  )
}

export default CreateBook