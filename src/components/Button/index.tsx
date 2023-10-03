import { ComponentProps } from 'react';
import { ButtonStyle } from './style';
import { Spinner } from '../Spinner';

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
  variant?: 'danger' | 'ghost';
}

export function Button({ isLoading, variant, disabled, children, ...props }: ButtonProps) {

    return (
        <ButtonStyle
            {...props}
            disabled={disabled || isLoading }
            color={variant}
        >
            {!isLoading && children}

            {isLoading && (
                <div className="loader">
                    <Spinner />
                </div>
            )}

        </ButtonStyle>
    );
}
