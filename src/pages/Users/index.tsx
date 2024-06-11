import { Header } from '../../components/Header';
import { UsersTable } from './Components/UsersTable';

export function Users() {
  return (
    <>
      <Header
        title="Usuários"
        description="Cadastre e gerencie seus usuários"
        pageIcon="users"
      />
      <UsersTable />
    </>
  );
}
