import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { CategoriesTable } from './Components/CategoriesTable';
import { Sections } from './Components/Sections';
import { ProductsTable } from './Components/ProductsTable';
import { api } from '../../utils/api';

export function Menu() {
  const [activeSection, setActiveSection] = useState<'products' | 'categories'>('products');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('/categories').then((response) => {
      setCategories(response.data);
    });
  }, []);

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
      {
        activeSection === 'products'
          ? <ProductsTable data={products} />
          : <CategoriesTable data={categories} />
      }
    </>
  );
}
