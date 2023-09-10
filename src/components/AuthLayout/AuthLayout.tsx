import ilustration from '../../assets/images/ilustration.png';
import { Logo } from '../Logo';
import { Container } from './style';
import { Outlet } from 'react-router-dom';

export function AuthLayout () {
    return (
        <Container>
            <div className='form'>

                <div className="logo">
                    <Logo heigth='24px' className='#ADB5BD' />
                </div>

                <div className="page">
                    <Outlet />
                </div>

            </div>

            <div className="img-container">
                <img src={ilustration} alt="" />

                <div className='footer-img'>
                    <Logo className='#087F5B' width='138px' heigth='32px'/>
                    <p>
                Gerencie suas finanças pessoais de uma forma simples com o finchek, e o melhor, totalmente de graça!
                    </p>
                </div>
            </div>


        </Container>
    );
}
