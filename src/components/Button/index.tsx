import { ComponentProps } from 'react';
import { ButtonStyle } from './style';
import { Spinner } from '../Spinner';

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
  variant?: 'danger' | 'ghost';
}

export function Button({ isLoading, variant, disabled, children, ...props }: ButtonProps) {
    const isDanger = variant === 'danger' ? '#fff' : '';

    return (
        <ButtonStyle
            {...props}
            disabled={disabled || isLoading }
            variant={variant}
        >
            {!isLoading && children}

            {isLoading && (
                <div className="loader">
                    <Spinner
                        color={isDanger}
                    />
                </div>
            )}

        </ButtonStyle>
    );
}
