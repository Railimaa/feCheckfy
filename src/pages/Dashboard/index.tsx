import { Logo } from '../../components/Logo';
import { UserMenu } from '../../components/UserMenu';
import { Accounts } from './components/Accounts';
import { Transactions } from './components/Transactions';
import { Container, Content, Header } from './style';


export function Dashboard() {


    return (
        <Container>
            <Header>
                <Logo className='#087F5B' heigth='24px'/>
                <UserMenu />
            </Header>

            <Content>
                <div className="Left">
                    <Accounts />
                </div>

                <div className="Right">
                    <Transactions />
                </div>
            </Content>
        </Container>
    );
}
