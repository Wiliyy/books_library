import {useState , createContext} from 'react'
import nextId from 'react-id-generator'

const Books_context = createContext()

const Provider = ({children}) => {
  const [books, setbooks] = useState([])
  
  const deleteBook = async (id)=>{
    setbooks(
      books.filter((book) => { return book.id !== id })
    )
  }

  const createBook =(title)=>{
    setbooks(
      [...books ,{id:nextId(), title}]
    )
  }


  const editTitle = (id , newtitle )=>{
    setbooks(
      books.map((book)=>{
        return id === book.id ? {
          ...book ,  title:newtitle
        }:
        {...book };
      })
    )
  }

  const value_to_share={
    books,
    deleteBook,
    createBook,
    editTitle
  }  

  return (
    <Books_context.Provider value={value_to_share}> 
      {children}
    </Books_context.Provider>
  )
}

export {Provider};  
export default Books_context