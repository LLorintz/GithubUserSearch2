import { useState } from "react"
import Header from "./components/header/Header"
import SearchBar from "./components/SearchBar/SearchBar"
import './App.css'
import { userType } from "./type/type"
import Userdata from "./components/Userdata/Userdata"

function App() {
const [darkMode, setDarkMode]=useState(true)
const [user, setUser] = useState({})

const toggleDarkMode = ()=>{
  setDarkMode(prev=>!prev)
}

const saveUserData = (user:userType)=>{
  setUser(user)
}
  return (
    <div className={`App ${darkMode?'dark':'light'}`}>
      <div className="container">
          <Header darkmode={darkMode} toggleDarkmode={toggleDarkMode}></Header>
          <SearchBar saveUserdata={saveUserData}></SearchBar>
          <Userdata user={user}></Userdata>
      </div>
    </div>
  )
}

export default App
