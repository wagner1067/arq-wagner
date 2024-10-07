import { Link } from 'react-router-dom';
import { useContext } from 'react';

//ASSETS
import './Footer.css';
import Dnc from '../../assets/logo-dnc.svg';
import Brazil from '../../assets/brazil_icon.svg';
import Usa from '../../assets/usa_icon.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter.svg';
import Linkedin from '../../assets/linkedin.svg';

//CONTEXT
import { AppContext } from '../../contexts/AppContext';
import Button from '../Button/Button';


function Footer() {
    const appContext = useContext(AppContext);
    const changeLanguage = (country) => {
        appContext.setLanguage(country);
    }
    return (
        <footer>
            <div className="container">
                <div className='d-flex jc-space-between mobile-fd-column'>
                    <div className='footer-logo-col'>
                        <img src={Dnc} className='footer-logo' />
                        <p className='grey-1-color'>{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className='d-flex social-links'>
                            <a href='https://google.com' target='_blank'>
                                <img src={Facebook} />
                            </a>
                            <a href='https://google.com' target='_blank'>
                                <img src={Twitter} />
                            </a>
                            <a href='https://google.com' target='_blank'>
                                <img src={Linkedin} />
                            </a>
                            <a href='https://google.com' target='_blank'>
                                <img src={Instagram} />
                            </a>
                        </div>
                    </div>
                    <div className='d-flex mobile-fd-column'>
                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].menu.contact}</h3>
                            <p className='grey-1-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className='grey-1-color'>suporte@escoladnc.com.br</p>
                            <p className='grey-1-color'>(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex jc-space-between footer-copy'>
                    <p className='grey-1-color'>Copyright © DNC - 2024</p>
                    <div className='langs-area d-flex'>
                        <Button buttonStyle='unstyled' onClick={() => changeLanguage('br')}>
                            <img src={Brazil} height="29px" />
                        </Button>
                        <Button buttonStyle='unstyled' onClick={() => changeLanguage('en')}>
                            <img src={Usa} height="29px" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;