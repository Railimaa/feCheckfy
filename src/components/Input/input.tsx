/* eslint-disable react/display-name */
import { ComponentProps, forwardRef, useState } from 'react';
import {  Container, InputContainer } from './style';
import { FieldError } from '../FieldError';
import { EyeIcon } from '../../assets/icons/EyeIcon';

interface InputProps extends ComponentProps<'input'> {
  error?: string;
  showPassword?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, showPassword, type, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function handlePasswordVisible() {
        setIsPasswordVisible(prevState => !prevState);
    }

    return (
        <Container>
            <InputContainer
                {...props}
                ref={ref}
                type={isPasswordVisible ? 'text' : type}
                color={error}
            />


            {showPassword && (
                <button className="show-password" onClick={handlePasswordVisible} type='button'>
                    <EyeIcon open={isPasswordVisible} color='green'/>
                </button>
            )}


            {error && (
                <FieldError message={error}/>
            )}
        </Container>
    );
}
);

