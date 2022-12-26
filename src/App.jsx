import { useState , useEffect } from 'react'
import { BrowserRouter as Router ,Routes , Route ,Link } from "react-router-dom";

import './App.css'
import CreateBook from './components/CreateBook';
import ListBook from './components/ListBook';
import usebook_context from './hooks/usebook_context';

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';



function App() {
 
  const [sideopen,setsideopen] = useState(true)
  const hanldeside =()=>{
    setsideopen(!sideopen)
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ListBook /> } />
          <Route exact path="/addBook" element={<CreateBook /> } />
        </Routes>
        <button className="side-toggle" onClick={hanldeside}>
          { sideopen ==0 ? <MoreHorizOutlinedIcon/> : <CloseOutlinedIcon/> }
        </button>
        <div className={sideopen?"sideBar-active":"sideBar-disable"}  >
          <div className="logo">
            <LocalLibraryIcon/>
          </div>
          <Link to={'/addBook'} className="sideBar-buttons">
            <butoon >add book</butoon>
          </Link>
          <Link to={'/'} className="sideBar-buttons">
            <butoon >book library</butoon>
          </Link>
        </div>
      </Router>
    </div>
  )
}

export default App
