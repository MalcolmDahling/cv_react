import './Main.scss';
import './MainSectionLeft.scss';
import './MainSectionRight.scss';
import './MainSectionBottom.scss';
import icons_40x40 from '../../img/icons/icons_40x40.webp';
import icons_36x36 from '../../img/icons/icons_36x36.webp';
import profilePic from '../../img/profilepic.webp';

import { useState } from 'react';

export function Main({changeArticle}){

    const [styleCheck, setStyleCheck] = useState('Profile');


    function handleClick(e){

        changeArticle(e.currentTarget.id);

        setStyleCheck(e.currentTarget.id);
    }

    return(
        <main>

            <section className="mainSectionLeft">

                <h1>Malcolm Dahling</h1>

                <img className="profilePic" src={profilePic} alt="Profile Picture" />

                <nav>
                    <a href="mailto:mac.dahling@gmail.com" aria-label="Email" className="headerIcon">
                        <img src={icons_36x36} className="icon0" alt="Email" />
                    </a>

                    <a href="https://www.linkedin.com/in/malcolm-dahling-175841222/" aria-label="LinkedIn" className="headerIcon">
                        <img src={icons_36x36} className="icon1" alt="LinkedIn" />
                    </a>

                    <a href="https://github.com/MalcolmDahling/" aria-label="GitHub" className="headerIcon">
                        <img src={icons_36x36} className="icon2" alt="GitHub" />
                    </a>
                </nav>

            </section>

            

            <section className="mainSectionRight">

                <div id="Profile" onClick={e => { handleClick(e); }} className={styleCheck == 'Profile' ? 'selected' : null}>
                    <img src={icons_40x40} className="icon icon3" alt="Profil" />
                    <h2>Profil</h2>
                </div>
                
                <div id="Competence" onClick={e => { handleClick(e); }} className={styleCheck == 'Competence' ? 'selected' : null}>
                    <img src={icons_40x40} className="icon icon4" alt="Kompetensområden" />
                    <h2>Kompetensområden</h2>
                </div>

                <div id="Education" onClick={e => { handleClick(e); }} className={styleCheck == 'Education' ? 'selected' : null}>
                    <img src={icons_40x40} className="icon icon5" alt="Utbildning" />
                    <h2>Utbildning</h2>
                </div>

                <div id="Internship" onClick={e => { handleClick(e); }} className={styleCheck == 'Internship' ? 'selected' : null}>
                    <img src={icons_40x40} className="icon icon6" alt="Praktik" />
                    <h2>Praktik</h2>
                </div>
                
                <div id="Programming" onClick={e => { handleClick(e); }} className={styleCheck == 'Programming' ? 'selected' : null}>
                    <img src={icons_40x40} className="icon icon7" alt="Programmering" />
                    <h2>Programmering</h2>
                </div>
                
                <div id="Languages" onClick={e => { handleClick(e); }} className={styleCheck == 'Languages' ? 'selected' : null}>
                    <img src={icons_40x40} className="icon icon8" alt="Språkkunskaper" />
                    <h2>Språkkunskaper</h2>
                </div>
                
                <div id="Miscellaneous" onClick={e => { handleClick(e); }} className={styleCheck == 'Miscellaneous' ? 'selected' : null}>
                    <img src={icons_40x40} className="icon icon9" alt="Övrigt" />
                    <h2>Övrigt</h2>
                </div>

                <div id="References" onClick={e => { handleClick(e); }} className={styleCheck == 'References' ? 'selected' : null}>
                    <img src={icons_40x40} className="icon icon10" alt="Referenser" />
                    <h2>Referenser</h2>
                </div>

            </section>

            <section className="mainSectionBottom">
                <p><span>Email: </span>mac.dahling@gmail.com</p>
            </section>

        </main>
    );
}