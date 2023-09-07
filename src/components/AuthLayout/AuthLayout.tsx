import ilustration from '../../assets/images/ilustration.png';
import LogoGreen from '../../assets/images/LogoGreen.svg';
import Logo from '../../assets/images/Logo.svg';
import { Container } from './style';
import { Outlet } from 'react-router-dom';

export function AuthLayout () {
    return (
        <Container>
            <div className='form'>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>

                <div className="page">
                    <Outlet />
                </div>
            </div>

            <div className="img-container">
                <img src={ilustration} alt="" />

                <div className='footer-img'>
                    <img src={LogoGreen} alt="" />
                    <p>
                Gerencie suas finanças pessoais de uma forma simples com o finchek, e o melhor, totalmente de graça!
                    </p>
                </div>
            </div>


        </Container>
    );
}
