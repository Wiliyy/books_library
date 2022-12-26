import { useState  } from 'react'
import EditBook from './EditBook';
import usebook_context from '../hooks/usebook_context';

const ShowBook = ({book}) => {
  const {deleteBook } = usebook_context()
  const [showedit,setshowedit]= useState(false)

  console.log(book);
  const handledelete =()=>{
    deleteBook(book.id);
  }

  const handleEdit =()=>{
    setshowedit(!showedit);
  }

  const hideEdit= ()=>{
    setshowedit(false);
  }

  return (
    <div className="book-container"  style={{color:'white',
    background:`url(https://picsum.photos/seed/${book.id}/200/300/?blur=2)`}}
    // style={{color:"white",background:`url(https://picsum.photos/200/300/?random=${book.id}&grayscale)`}}
    >
      <div className="book-actions">
        <button className="btn-edit" onClick={handleEdit}>!</button>
        <button className="btn-deltet" onClick={handledelete}>X</button>
      </div>
      { showedit?
        (       
          <EditBook hideEdit={hideEdit} book={book} />
        )
        :
        (<h3
          style={
            {backgroundColor:"#54555566",
            fontSize: "medium",
            wordWrap: 'break-word',
            margin:0
            }
          }
         >
          {book.title}
        </h3>)          
      }
    </div>
  )
}

export default ShowBook