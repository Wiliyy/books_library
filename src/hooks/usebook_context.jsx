import { useContext } from "react";
import Books_context from "../context/books";

const usebook_context =()=>{
    return  useContext(Books_context)
}

export default usebook_context