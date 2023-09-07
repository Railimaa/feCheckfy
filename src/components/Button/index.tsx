import { ComponentProps } from 'react';
import { ButtonStyle } from './style';
import { Loader } from '../Loader';

interface ButtonProps extends ComponentProps<'button'> {
  isLoading: boolean
}

export function Button({ isLoading, disabled, children, ...props }: ButtonProps) {
    return (
        <ButtonStyle
            {...props}
            disabled={disabled || isLoading}
        >
            {!isLoading && children}

            {isLoading && (
                <div className="loader">
                    <Loader />
                </div>
            )}
        </ButtonStyle>
    );
}
