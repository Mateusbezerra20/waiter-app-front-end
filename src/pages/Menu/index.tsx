import { Header } from '../../components/Header';
import { CategoriesTable } from './Components/CategoriesTable';

export function Menu() {
  return (
    <>
      <Header
        title="Cardápio"
        description="Gerencie os produtos do seu estabelecimento"
        pageIcon="menu"
      />
      <CategoriesTable />
    </>
  );
}
