import { HeaderContainer } from "@/containers/header/HeaderContainer";
import '../pages/css/merise.css';
import Image from 'next/image'
import ImgMerise from '../../public/Merise.jpg';
import { Merise } from "@/data/Merise";

const merise = () => {
    return (
        <>
            <HeaderContainer />
            <div className="container_merise">
                <div className="merise_word">
                    <span className="word"> M</span>éthode d'<span className="word">E</span>tude et de <span className="word">R</span>éalisation <span className="word">I</span>nformatique des <span className="word">S</span>ystème d'<span className="word">E</span>ntreprise :
                </div>

                <h2> Comprendre l'histoire de Merise : </h2>
                <div className="merise_learn">
                    <div className="merises"> La méthode MERISE date de 1978-1979, et fait suite à une consultation nationale lancée en 1977 par le ministère de l'Industrie dans le but de choisir des
                        sociétés de conseil en informatique afin de définir une méthode de conception de systèmes d'information. C'est une methode Francaise
                        Merise est une  méthode qui a pour but de réaliser une application informatique permettant d'automatiser les tâches et les activités d'une entreprise.
                    </div>
                    <div className="merise_picture">
                        <Image src={ImgMerise} height={250} width={500} alt="merise" />
                    </div>
                </div>
                <hr className="separator" />


                <div className="merise_difference">
                    <h3 className="title_merise"> Les différents méthodes de merises existante : </h3>
                    <ul> {Merise.map((merise) => (
                        <>
                            <li className="merise_type" key={merise.id}> {merise.merise} ({merise.type})</li>
                            <li className="merise_description">{merise.description}</li>
                        </>
                    ))}</ul>
                </div>
            </div>
        </>
    )
}

export default merise;