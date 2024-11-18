import { userType } from "../../type/type"
import './Userdata.css'
import Pin from "../../IconComponents/Pin"
import Link from "../../IconComponents/Link"
import Twitter from "../../IconComponents/Twitter"
import Github from "../../IconComponents/github"

type userdataProps={
    user: userType
}

const Userdata = ({user}:userdataProps) => {

const convertDate=(datetime?:string)=>{
    if (!datetime) {
        return "unknown date"
    }
    const date = new Date(datetime);
    const day = date.getDate();
    const month = date.toLocaleString("default",{month:"short"})
    const year = date.getFullYear();
    return `${day} ${month} ${year}`
}

const displayCompany = (company?: string) => {
    if (!company) return <p>Not Available</p>;
    return company.includes("@") ? (
      <a href={`https://github.com/${company.slice(1)}`} target="_blank" rel="noreferrer">
        {company}
      </a>
    ) : (
      <p>{company}</p>
    );
  };


const joinDate = convertDate(user.created_at);
 return (
    <div className="user-card">
        <div className="user-top">
            <img className="avatar" src={user.avatar_url} alt={user.name}/>
            <div className="user-info">
                <div className="user-info-inner">
                    <h2 className="name">{user.name ? user.name : user.login}</h2>
                    <a className="login" href={`https://github.com/${user.login}`} target="_blank" rel="noreferrer">@{user.login}</a>
                </div>
                <p className="joined">Joined {joinDate}</p>
            </div>
        </div>
        <div className="user-middle">
            <p className={`bio ${!user.bio ? 'not-available' : ""}`}>{user.bio ? user.bio : "This profile has no bio"}</p>
            <div className="stats">
                <div className="stat">
                    <h3 className="stat-title">Repos</h3>
                    <p className="stat-number">{user.public_repos}</p>
                </div>
                <div className="stat">
                    <h3 className="stat-title">Followers</h3>
                    <p className="stat-number">{user.followers}</p>
                </div>
                <div className="stat">
                    <h3 className="stat-title">Following</h3>
                    <p className="stat-number">{user.following}</p>
                </div>
            </div>
        </div>
        <div className="user-bottom">
            <div className="links">
                <div className={`link-wrapper ${!user.location ? 'not-available' : ""}`}>
                <Pin></Pin>
                <p>{user.location?"Not available":""}</p>
                </div>
                <div className={`link-wrapper ${!user.blog ? "not-available" :""}`}>
                <Link></Link>
                {
                            !user.blog ?
                            <p>Not Available</p> :
                            <a href={user.blog} target="_blank" rel="noreferrer">{user.blog}</a>
                        }
                </div>
            </div>
            <div className="links">
                <div className={`link-wrapper ${!user.twitter_username ? "not-available" :""}`}>
                        <Twitter></Twitter>
                        {
                            !user.twitter_username?
                            <p>Not available</p> :
                            <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer">{user.twitter_username}</a>
                        }
                </div>
                <div className={`link-wrapper ${user.company ? "not-available" : ""}`}>
                        <Github></Github>
                {displayCompany(user.company)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Userdata