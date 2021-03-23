import './Login.css'
import ChatLogo from '../images/chat-logo.png';

const Login = () => {
    return (
        <>
            <div className="login-container">
            <img src={ChatLogo} className='logo'/>
                <input placeholder="Nom d'utilisateur" />
                <input type="password" placeholder="Mot de passe" />
                <button>Se connecter</button>
            </div>
        </>
    )
}

export default Login;