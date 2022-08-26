import './Main.scss';
import icons_40x40 from '../../img/icons/icons_40x40.webp';

export function Main(){

    return(
        <main>
            <section>
                <article>
                    <img src={icons_40x40} className="icon icon3" alt="Profil" />
                    <h3>Profil</h3>
                    <p>
                        Jag är en uppfinningsrik och kreativ person som lär sig snabbt och gärna tar mig an utmanande uppgifter där man får tänka lite. Mitt arbete kan ske efter instruktion eller med större frihet i uppgifter där det krävs. Jag kan jobba självständigt eller i grupp och tar gärna emot konstruktiv kritik för att förbättra mitt arbete. Problemlösning är även det en av mina starka sidor och jag hoppar gärna in och hjälper andra vid behov.
                        <br/>I framtiden vill jag gärna se mig själv i en roll inom teknik eller programmering och webbutveckling.
                    </p>
                </article>

                <article>
                    <img src={icons_40x40} className="icon icon4" alt="Kompetensområden" />
                    <h3>Kompetensområden</h3>
                    <p>
                        Mina ansvarsområden har varit allt ifrån programmering, grafisk design, webbutveckling och lödning till mer praktiska uppgifter som montering av kontorsmöbler och installation av elektrisk utrustning och datorer.
                        <br/>Jag har också varigt med och skapat en utställning på Sydostasiatiskamuséet där jag ansvarade för den tekniska delen med TV-apparater, datorer och nätverk.
                    </p>
                </article>

                <article>
                    <img src={icons_40x40} className="icon icon5" alt="Utbildning" />
                    <h3>Utbildning</h3>
                    <p>
                        2021–Pågående - Frontend-Developer, Medieinstitutet Yrkeshögskola.
                        <br/>Naturvetenskapligt program inriktning programmering, Fryshusets Gymnasium.
                    </p>
                </article>

                <article>
                    <img src={icons_40x40} className="icon icon6" alt="Praktik" />
                    <h3>Praktik</h3>
                    <p>
                        Lödare och programmerare - LATAB
                        <br/>Installatör och programmerare - Service Databörsen AB
                        <br/>Mångsysslare - Spånga Badminton och Bollcenter
                    </p>
                </article>

                <article>
                    <img src={icons_40x40} className="icon icon7" alt="Programmering" />
                    <h3>Programmeringsspråk</h3>
                    <p>
                        Kunnig inom HTML, CSS och Javascript (vanilla, React, Angular, Typescript och Node), även grundläggande kunskaper inom C#, C++, PHP och SQL.
                    </p>
                </article>

                <article>
                    <img src={icons_40x40} className="icon icon8" alt="Språkkunskaper" />
                    <h3>Språkkunskaper</h3>
                    <p>
                        Svenska.
                        <br/>Engelska, flytande.
                    </p>
                </article>

                <article>
                    <img src={icons_40x40} className="icon icon9" alt="Övrigt" />
                    <h3>Övrigt</h3>
                    <p>
                        B-körkort.
                    </p>
                </article>

                <article>
                    <img src={icons_40x40} className="icon icon10" alt="Referenser" />
                    <h3>Referenser</h3>
                    <p>
                        Lämnas vid begäran.
                    </p>
                </article>

            </section>
        </main>
    );
}