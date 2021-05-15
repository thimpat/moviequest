import { ReactNode } from 'react';

import { Container } from './styles';

interface SearchBarProps {
  children: ReactNode;
}

function SearchBar({ children }: SearchBarProps) {
  return (
    <Container>
      <h1>SearchBar</h1>
      {children}
    </Container>
  );
};

export default SearchBar;
