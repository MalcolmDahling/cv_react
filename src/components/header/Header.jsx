import './Header.scss';
import icons_36x36 from '../../img/icons/icons_36x36.webp';
import profilePic from '../../img/profilepic.webp';

export function Header(){

    return(
        <header>
            <img className="profilePic" src={profilePic} alt="Profile Picture" />
            <h1>Malcolm Dahling</h1>
            <h2>Studerar till Frontend-Utvecklare</h2>

            <nav>
                <ul>
                    <li>
                        <a href="mailto:mac.dahling@gmail.com" aria-label="Email" className="headerIcon">
                            <img src={icons_36x36} className="icon0" alt="Email" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/malcolm-dahling-175841222/" aria-label="LinkedIn" className="headerIcon">
                            <img src={icons_36x36} className="icon1" alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/MalcolmDahling/" aria-label="GitHub" className="headerIcon">
                            <img src={icons_36x36} className="icon2" alt="GitHub" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}