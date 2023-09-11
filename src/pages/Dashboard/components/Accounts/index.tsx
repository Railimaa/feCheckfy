import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { EyeIcon } from '../../../../assets/icons/EyeIcon';
import { Container } from './style';
import { AccountCard } from '../AccountCard';

export function Accounts() {
    return (
        <Container>
            <span className='title'>Saldo total</span>

            <div className="saldo-btn">
                <strong>R$ 1000,00</strong>
                <button type='button'>
                    <EyeIcon open />
                </button>
            </div>

            <div className="my-acc">

                <div className='title-acc'>
                    <strong>Minhas contas</strong>

                    <div className="actions">
                        <button>
                            <span>
                                <ChevronLeftIcon />
                            </span>
                        </button>

                        <button>
                            <span>
                                <ChevronRightIcon />
                            </span>
                        </button>
                    </div>

                </div>

                <div className='cards'>
                    <AccountCard
                        color='#7950F2'
                        name='Nubank'
                        balance={123}
                    />

                </div>

            </div>


        </Container>
    );
}
