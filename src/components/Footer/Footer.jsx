import { Link } from 'react-router-dom';
import './Footer.css';

//ASSETS
import Dnc from '../../assets/logo-dnc.svg';
import Brazil from '../../assets/brazil_icon.svg';
import Usa from '../../assets/usa_icon.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter.svg';
import Linkedin from '../../assets/linkedin.svg';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className='d-flex jc-space-between mobile-fd-column'>
                    <div className='footer-logo-col'>
                        <img src={Dnc} className='footer-logo' />
                        <p className='grey-1-color'>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
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
                            <h3>Pages</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>Contact</h3>
                            <p className='grey-1-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className='grey-1-color'>suporte@escoladnc.com.br</p>
                            <p className='grey-1-color'>(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex jc-space-between footer-copy'>
                    <p className='grey-1-color'>Copyright © DNC - 2024</p>
                    <div className='langs-area d-flex'>
                        <img src={Brazil} height="29px" />
                        <img src={Usa} height="29px" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;