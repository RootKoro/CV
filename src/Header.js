// import profil_pic from 'img'
const Header = () => {
    return ( 
        <header>
            <div className="right">
                <div className="headerContent">
                    <p>14 rue du Docteur ARRAZAT</p>
                    <p>31650 Saint-Orens-de-Gameville</p>
                    <p>Toulouse - France</p>
                    <p>+33 06 44 94 73 87</p>
                    <p>cyrmatthieucmg@gmail.com</p>
                    <p>né le 26/05/2001 <br /> à Bamako - Mali</p>
                    <p>Célibataire</p>
                </div>
            </div>
            <div className="profilPic">
                <img src="./img/profil_pic.jpeg" alt="moi" />
                {/* {profil_pic} */}
            </div>
            <div className="headerTitle">
                <h1>
                    GUEYE <br />
                    Cyr Mathieu
                </h1>
                <h2>Développeur web</h2> 
                <h3>Junior</h3>
            </div>               
        </header> 
    );
}
 
export default Header;