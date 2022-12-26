import { useState } from "react";
import usebook_context from '../hooks/usebook_context';

const EditBook = ({book , hideEdit}) => {
    const [newtitle , setnewtitle] = useState(book.title)
    const {editTitle} = usebook_context()

  const hanlechange=(e)=>{
    setnewtitle(e.target.value)
  }

  const hanldesubmit=(e)=>{
    e.preventDefault(); 
    editTitle(book.id , newtitle)
    hideEdit()
  }

  return (
      <form onSubmit={hanldesubmit}>
        <input onChange={hanlechange} value={newtitle} className="input-edit" type="text" />
        <button 
        className="btn-saveEdit">save</button>
      </form>
    )
}

export default EditBook