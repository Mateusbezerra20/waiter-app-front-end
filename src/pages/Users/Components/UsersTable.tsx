import { useEffect, useState } from "react";
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

export function UsersTable() {
  const [users, setUsers] = useState<IUser[]>([]);
  const Icon1 = pagesIcons.eye;
  const Icon2 = pagesIcons.trash;

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("/users");

      setUsers(result.data);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Caption>
        <strong>Usuários</strong>
        <Quantity>3</Quantity>
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
  );
}
