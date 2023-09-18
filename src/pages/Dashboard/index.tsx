import { Logo } from '../../components/Logo';
import { Modal } from '../../components/Modal';
import { UserMenu } from '../../components/UserMenu';
import { Accounts } from './components/Accounts';
import { DashboardProvider } from './components/DashboardContext';
import { Fab } from './components/Fab';
import { Transactions } from './components/Transactions';
import { Container, Header, Main } from './style';


export function Dashboard() {


    return (
        <DashboardProvider>
            <Container>
                <Header>
                    <Logo className='#087F5B' heigth='24px'/>
                    <UserMenu />
                </Header>

                <Main>
                    <div className="Left">
                        <Accounts />
                    </div>

                    <div className="Right">
                        <Transactions />
                    </div>
                </Main>

                <Fab />

                <Modal open={false} title="Receitas">
                    Conteudo
                </Modal>
            </Container>

        </DashboardProvider>
    );
}
