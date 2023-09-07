/* eslint-disable react/display-name */
import { ComponentProps, forwardRef } from 'react';
import {  Container, InputContainer } from './style';
import { CrossCircledIcon } from '@radix-ui/react-icons';

interface InputProps extends ComponentProps<'input'> {
  error?: string;
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    error?: string;
  }
}


export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, ...props }, ref) => {
    return (
        <Container>
            <InputContainer
                {...props}
                ref={ref}
                error={error}
            />
            {error && (
                <div className="icon">
                    <CrossCircledIcon />
                    <span>{error}</span>
                </div>
            )}
        </Container>
    );
}
);

