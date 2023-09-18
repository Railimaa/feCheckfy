/* eslint-disable react/display-name */
import { ComponentProps, forwardRef } from 'react';
import {  Container, InputContainer } from './style';
import { FieldError } from '../FieldError';

interface InputProps extends ComponentProps<'input'> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, ...props }, ref) => {

    return (
        <Container>
            <InputContainer
                {...props}
                ref={ref}
                color={error}
            />

            {error && (
                <FieldError message={error}/>
            )}
        </Container>
    );
}
);

