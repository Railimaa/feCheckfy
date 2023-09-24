import { Trash } from '../../assets/icons/Trash';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Container } from './style';


interface ConfirmDeleteModalProps {
  onConfirm: () => void;
  onClose: () => void;
  isLoading: boolean;
  title?: string;
  description?: string;
}

export function ConfirmDeleteModal({ onConfirm, onClose, isLoading, title, description }: ConfirmDeleteModalProps) {
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

                <p className='title'>Tem certeza que deseja excluir esta {title}?</p>

                {description && (
                    <p className='description'>
                        {description}
                    </p>
                )}

                <div className="btn">
                    <Button
                        onClick={onConfirm}
                        variant='danger'
                        isLoading={isLoading}
                    >
                      Sim, desejo excluir
                    </Button>

                    <Button
                        onClick={onClose}
                        variant='ghost'
                    >
                      Cancelar
                    </Button>
                </div>
            </Container>

        </Modal>
    );
}
