import { Container, SectionButton } from './styles';

interface SectionsProps {
  activeSection: 'products' | 'categories';
  changeSection: (section: string) => void;
}

export function Sections({ activeSection, changeSection }: SectionsProps) {

  return (
    <Container>
      <SectionButton active={activeSection === 'products'} onClick={() => changeSection('products')}>
        Produtos
      </SectionButton>
      <SectionButton active={activeSection === 'categories'} onClick={() => changeSection('categories')}>
        Categorias
      </SectionButton>
    </Container>
  );
}
