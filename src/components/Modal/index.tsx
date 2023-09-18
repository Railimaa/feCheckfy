import * as Dialog from '@radix-ui/react-dialog';
import { ContainerStyle } from './style';
import React from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';

interface ModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  rightAction?: React.ReactNode;
  onClose?: () => void;
}

export function Modal({ open, title, children, rightAction, onClose }: ModalProps) {
    return (
        <Dialog.Root open={open} onOpenChange={onClose}>

            <Dialog.Portal>

                <ContainerStyle>
                    <Dialog.Overlay className='overlay'/>

                    <Dialog.Content className='content'>
                        <header>
                            <button onClick={onClose}>
                                <Cross2Icon width={24} height={24}/>
                            </button>

                            <span>{title}</span>

                            <div className='right-action'>
                                {rightAction}
                            </div>
                        </header>

                        <div className='main'>
                            {children}
                        </div>
                    </Dialog.Content>

                </ContainerStyle>

            </Dialog.Portal>

        </Dialog.Root>
    );
}

