import { FormEvent, useEffect, useState } from "react"
import './SearchBar.css'
import { userType } from "../../type/type"


type searchBarProps = {
    saveUserdata: (userData:userType)=>void;
};




const SearchBar = ( {saveUserdata}:searchBarProps ) => {
const [username, setUsername] = useState("");

const handleUsernameChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setUsername(e.target.value)
}

const fetchUserData= async(username:string)=> {
 if (!username) {
    return;
 }
 try {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    console.log(data)
    saveUserdata(data)    
 } catch (error) {
    console.log('error:',error)
 }

};

        useEffect(() => {
            fetchUserData("octocat");
        }, []);

const handleSubmit =(e:FormEvent)=>{
    e.preventDefault()
    fetchUserData(username)
}

  return (
    <form onSubmit={handleSubmit} className="searchForm">
        <img className="searchIcon" src="./images/icon-search.svg"  alt="" />
        <input type="text" className="username" placeholder="Search Github username" value={username} onChange={handleUsernameChange}/>
        <button className="searchBtn">Search</button>
    </form>
)
}

export default SearchBar