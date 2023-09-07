import { Link } from 'react-router-dom';
import { Container, FormContainer } from './style';
import { ReactNode } from 'react';

interface FormPagesProps {
  title: string;
  subTitle: string;
  path: string;
  textPath: string
  children: ReactNode;
  OnSubmit?: () => void;
}

export function FormPagesPrincipal({ title, subTitle, path, textPath, children, OnSubmit }: FormPagesProps) {
    return (
        <Container>
            <header>
                <h1>{title}</h1>

                <p>
                    <span>{subTitle}</span>
                    <Link to={path}>{textPath}</Link>
                </p>
            </header>

            <FormContainer onSubmit={OnSubmit}>
                {children}
            </FormContainer>
        </Container>
    );
}
