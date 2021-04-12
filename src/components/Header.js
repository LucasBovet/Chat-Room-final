import './Header.css'
import ChatLogo from '../images/chat-logo.png';

const Header = () => {
    return(
        <>
        <div className='top-header'>
            <img src={ChatLogo} className='logo-1'/>
        </div>
      
        </>
       
    );
}

export default Header;