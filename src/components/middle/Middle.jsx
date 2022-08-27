import './Middle.scss';
import { Competence } from '../articles/Competence';
import { Education } from '../articles/Education';
import { Internship } from '../articles/Internship';
import { Languages } from '../articles/Languages';
import { Miscellaneous } from '../articles/Miscellaneous';
import { Profile } from '../articles/Profile';
import { Programming } from '../articles/Programming';
import { References } from '../articles/References';


export function Middle(selectedArticle){

    return(
        <section className="sectionMiddle">
            {selectedArticle.selectedArticle == 'Competence' && <Competence></Competence>}
            {selectedArticle.selectedArticle == 'Education' && <Education></Education>}
            {selectedArticle.selectedArticle == 'Internship' && <Internship></Internship>}
            {selectedArticle.selectedArticle == 'Languages' && <Languages></Languages>}
            {selectedArticle.selectedArticle == 'Miscellaneous' && <Miscellaneous></Miscellaneous>}
            {selectedArticle.selectedArticle == 'Profile' && <Profile></Profile>}
            {selectedArticle.selectedArticle == 'Programming' && <Programming></Programming>}
            {selectedArticle.selectedArticle == 'References' && <References></References>}
        </section>
    );
}