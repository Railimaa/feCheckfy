import { Trash } from '../../assets/icons/Trash';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Container } from './style';


interface ConfirmDeleteModalProps {
  onClose: () => void;
}

export function ConfirmDeleteModal({ onClose }: ConfirmDeleteModalProps) {
    return (
        <Modal
            open
            title='Excluir'
            onClose={onClose}
        >
            <Container>
                <div className='trash'>
                    <Trash />
                </div>

                <p>Tem certeza que deseja excluir esta conta?</p>

                <p id='sub-title'>
                 Ao excluir a conta, também serão excluídos todos
                 os registros de receita e despesas relacionados.
                </p>

                <div className="btn">
                    <Button>Sim, desejo excluir</Button>
                    <div className="cancel">
                        <Button onClick={onClose}>Cancelar</Button>
                    </div>
                </div>
            </Container>

        </Modal>
    );
}
