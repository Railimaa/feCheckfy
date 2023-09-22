import { Logo } from '../../components/Logo';
import { UserMenu } from '../../components/UserMenu';
import { Accounts } from './components/Accounts';
import { DashboardContext, DashboardProvider } from './components/DashboardContext';
import { Fab } from './components/Fab';
import { Transactions } from './components/Transactions';
import { EditAccountModal } from './modals/EditAccountModal';
import { NewAccountModal } from './modals/NewAccountModal';
import { NewTransactionModal } from './modals/NewTransactionModal';
import { Container, Header, Main } from './style';


export function Dashboard() {
    return (
        <DashboardProvider>
            <DashboardContext.Consumer>
                {({ isAccountSelectedEdit }) => (
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
                        <NewTransactionModal />
                        <NewAccountModal />
                        {isAccountSelectedEdit && (
                            <EditAccountModal />
                        )}
                    </Container>
                )}
            </DashboardContext.Consumer>
        </DashboardProvider>
    );
}
