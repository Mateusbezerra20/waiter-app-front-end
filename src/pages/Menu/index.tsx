import { useState } from 'react';
import { Header } from '../../components/Header';
import { CategoriesTable } from './Components/CategoriesTable';
import { Sections } from './Components/Sections';
import { ProductsTable } from './Components/ProductsTable';

export function Menu() {
  const [activeSection, setActiveSection] = useState<'products' | 'categories'>('products');

  function changeActiveSection(section: string) {
    setActiveSection(section as 'products' | 'categories');
  }

  return (
    <>
      <Header
        title="Cardápio"
        description="Gerencie os produtos do seu estabelecimento"
        pageIcon="menu"
      />
      <Sections activeSection={activeSection} changeSection={changeActiveSection} />
      {activeSection === 'products' ? <ProductsTable /> : <CategoriesTable />}
    </>
  );
}
