import { useEffect, useState, useCallback } from "react";
import {
  Caption,
  Container,
  Quantity,
  TableBody,
  TableHead,
} from "../../../components/tableStyles";
import { pagesIcons } from "../../../components/icons/pageIconsMaps";
import { api } from "../../../utils/api";
import { IUser } from "../../../entities/User";
import { Button } from "../../../components/Button";
import { NewUserModal } from "./NewUserModal";

export function UsersTable() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);
  const Icon1 = pagesIcons.pencil;
  const Icon2 = pagesIcons.trash;

  const fetchUsers = useCallback(async () => {
    const result = await api.get("/users");

    setUsers(result.data);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  function openNewUserModal() {
    setIsNewUserModalOpen(true);
  }

  function closeNewUserModal() {
    setIsNewUserModalOpen(false);
  }

  return (
    <>
      {isNewUserModalOpen && (
        <NewUserModal onClose={closeNewUserModal} onSuccess={fetchUsers} />
      )}
      <Container>
        <Caption>
          <strong>Usuários</strong>
          <Quantity>3</Quantity>

          <Button
            label="Novo Usuário"
            variant="secondary"
            onClick={openNewUserModal}
          />
        </Caption>
        <TableHead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Cargo</th>
            <th scope="col">Ações</th>
          </tr>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button type="button">
                  <Icon1 />
                </button>
                <button type="button">
                  <Icon2 />
                </button>
              </td>
            </tr>
          ))}
        </TableBody>
      </Container>
    </>
  );
}
