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
import { DeleteUserModal } from "./DeleteUserModal";
import { EditUserModal } from "./EditUserModal";

export function UsersTable() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [userBeingHandled, setUserBeingHandled] = useState<IUser | null>(null);
  const PencilIcon = pagesIcons.pencil;
  const TrashIcon = pagesIcons.trash;

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

  function openDeleteUserModal(user: IUser) {
    setUserBeingHandled(user);
    setIsDeleteUserModalOpen(true);
  }

  function closeDeleteUserModal() {
    setIsDeleteUserModalOpen(false);
    setUserBeingHandled(null);
  }

  function openEditUserModal(user: IUser) {
    setUserBeingHandled(user);
    setIsEditUserModalOpen(true);
  }

  function closeEditUserModal() {
    setIsEditUserModalOpen(false);
    setUserBeingHandled(null);
  }

  return (
    <>
      {isNewUserModalOpen && (
        <NewUserModal onClose={closeNewUserModal} onSuccess={fetchUsers} />
      )}
      {isDeleteUserModalOpen && userBeingHandled && (
        <DeleteUserModal
          user={userBeingHandled}
          onClose={closeDeleteUserModal}
          onSuccess={fetchUsers}
        />
      )}
      {isEditUserModalOpen && userBeingHandled && (
        <EditUserModal
          user={userBeingHandled}
          onClose={closeEditUserModal}
          onSuccess={fetchUsers}
        />
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
                <button type="button" onClick={() => openEditUserModal(user)}>
                  <PencilIcon />
                </button>
                <button type="button" onClick={() => openDeleteUserModal(user)}>
                  <TrashIcon />
                </button>
              </td>
            </tr>
          ))}
        </TableBody>
      </Container>
    </>
  );
}
