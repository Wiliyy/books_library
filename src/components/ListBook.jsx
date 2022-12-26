import ShowBook from './ShowBook'
import usebook_context from '../hooks/usebook_context';

const ListBook = () => {
    const {books} =usebook_context() 
    const renderbook= books.map((book) =>{
           return <ShowBook book={book}/>
    })

  return (
    <div className="books-list">
        {books.length==0?
        <div className="list-empty">
          <h1>
              nothing to show
          </h1>
          <p>add book to see it here</p>
        </div>
             :
             <>
             <h1 className="list_title">reading list</h1>
             {renderbook}
             </>
             }
    </div>
  )
}

export default ListBook