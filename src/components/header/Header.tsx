import './Header.css'


type headerProps = {
  darkmode: boolean;
  toggleDarkmode: ()=>void
}

const Header = (props:headerProps) => {
  return (
    <div className="header">
        <h1 className="website">devfinder</h1>
        <button className="theme-toggle" onClick={props.toggleDarkmode}>
          {props.darkmode?'light':'dark'}
          {props.darkmode?<img src='/images/lightIcon.svg' alt="" />: <img src="/images/darkIcon.svg" alt="" />}
        </button>
    </div>
  )
}

export default Header