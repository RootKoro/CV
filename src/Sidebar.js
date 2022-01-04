const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <section className="sideTitles">
                <h3>Formation</h3>
            </section>
            <div className="surrender"></div>
            <div className="vitrine">
                <h4 className="years">2020 - 2021</h4>
                <p>
                    <h4>Licence Génie Logiciel et Système d’Information (GLSI)</h4>
                    <h6>École Supérieure Polytechnique (ESP) de Dakar - Sénégal</h6>
                </p>
            </div>
            <div className="vitrine">
                <h4 className="years">2018 - 2020</h4>
                <p>
                    <h4>Diplôme Supérieur de Technicien en Informatique (DST)</h4>
                    <h6>École Supérieure Polytechnique (ESP) de Dakar - Sénégal</h6>
                </p>
            </div>
            <div className="vitrine">
                <h4 className="years">2017 - 2018</h4>
                <p>
                    <h4>Baccalauréat (BAC)</h4>
                    <h6>Groupe Scolaire Saint Pierre (GSSP) de Dakar - Sénégal</h6>
                </p>
            </div>
            
            <div className="surrender"></div>
            
            <section className="sideTitles">
                <h3>Compétences</h3>
            </section>
            
            <div className="surrender"></div>
            
            <p>
                développement web back-end <br />
                <div className="web-dev-back"></div> <br />
                
                développement web front-end <br />
                <div className="web-dev-front"></div> <br />
                
                développement desk backend <br />
                <div className="desk-dev-back"></div> <br />
                
                développement desk front <br />
                <div className="desk-dev-front"></div> <br />

                développement mobile <br />
                <div className="mobil-dev"></div> <br />

                Algorithmique <br />
                <div className="algo"></div>
            </p>
            
            <div className="surrender"></div>
            
            <section className="sideTitles">
                <h3>Centres d'intérêt</h3>
            </section>
            
            <div className="surrender"></div>
            
            <p>
                J’aime cuisiner, faire du sport et donner des cours particuliers en algorithme et en programmation en langage C et JAVA pour les débutants. <br />
                Mes sports favoris sont la course à pied, les jeux d'échecs et la musculation. <br />
                Mes plats préférés sont les lasagnes, les bananes plantin cuits ainsi que les pates.
            </p>
        </div>
    );
}
 
export default Sidebar;