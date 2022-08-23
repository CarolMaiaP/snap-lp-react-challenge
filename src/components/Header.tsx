import {HeaderContainer} from "./Header.styles"

export function Header(){
  return(
    <HeaderContainer>
      <div className='header-main'>
        <div className="logo">
          <img src="src/assets/logo.svg" alt="" />
        </div>
        <div className="menu">
          <ul>
            <li><a href="#">Features</a><svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </div>
      
      <div className="login">
        <a href="#">Login</a>
        <a href="#" id='register'>Register</a>
      </div>
    </HeaderContainer>
  )
}