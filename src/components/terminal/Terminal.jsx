import { useEffect, useRef, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import TypewriterComponent, { TypewriterClass } from 'typewriter-effect';
import './Terminal.scss';


export function Terminal(selectedArticle){

    let ref = useRef();


    const [errorHandler, setErrorHandler] = useState('');

    useEffect(() => {

        if(selectedArticle.selectedArticle == 'Profile' && errorHandler == ''){
            setErrorHandler('done');
        }

        else{

            if(selectedArticle.selectedArticle == 'Competence'){
                ref.current.state.instance.typeString('Initializing Competence.jsx<br>').start();
            }
            if(selectedArticle.selectedArticle == 'Education'){
                ref.current.state.instance.typeString('Initializing Education.jsx<br>').start();
            }
            if(selectedArticle.selectedArticle == 'Internship'){
                ref.current.state.instance.typeString('Initializing Internship.jsx<br>').start();
            }
            if(selectedArticle.selectedArticle == 'Languages'){
                ref.current.state.instance.typeString('Initializing Languages.jsx<br>').start();
            }
            if(selectedArticle.selectedArticle == 'Miscellaneous'){
                ref.current.state.instance.typeString('Initializing Miscellaneous.jsx<br>').start();
            }
            if(selectedArticle.selectedArticle == 'Profile'){
                ref.current.state.instance.typeString('Initializing Profile.jsx<br>').start();
            }
            if(selectedArticle.selectedArticle == 'Programming'){
                ref.current.state.instance.typeString('Initializing Programming.jsx<br>').start();
            }
            if(selectedArticle.selectedArticle == 'References'){
                ref.current.state.instance.typeString('Initializing References.jsx<br>').start();
            }
        }

    },[selectedArticle])
    
    
    

        


    //ref.current.state.instance.typeString('asdf').start();

    return(
        <section className="sectionBottom">

            <ScrollToBottom className="scrollToBottom" checkInterval={50}>

                <TypewriterComponent
                    ref={ref}

                    onInit={(typewriter) => {
                        typewriter
                            .start()
                            .changeDelay(20)
                            .typeString('Terminal initiated<br>')
                            .pauseFor(1000)
                            .typeString('Initializing Components<br>')
                            .pauseFor(1000)
                            .typeString('Initializing Matrix.jsx<br>')
                            .typeString('Initializing Index.js<br>')
                            .typeString('Initializing Index.scss<br>')
                            .typeString('Initializing App.jsx<br>')
                            .typeString('Initializing App.scss<br>')
                            .typeString('Initializing Profile.jsx<br>')
                            .pauseFor(500)
                            .typeString('Component initialization complete<br>')
                            .pauseFor(500)
                            .typeString('Waiting for input...<br>')            
                    }}
                />

            </ScrollToBottom>
        </section>
    );
}