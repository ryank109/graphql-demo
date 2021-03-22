import React from 'react';
import styled from '@emotion/styled';

export type PageProps = {
  children: React.ReactNode;
  title?: string;
};

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  padding: 32px;
`;

export const Page: React.FC<PageProps> = ({ children, title }) => (
  <Container>
    {title ? <h1>{title}</h1> : null}
    {children}
  </Container>
)
