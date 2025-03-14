import {
  Caption,
  Container,
  TableBody,
  TableHead,
} from "../../../components/tableStyles";
import { pagesIcons } from "../../../components/icons/pageIconsMaps";

export function UsersTable() {
  const Icon1 = pagesIcons.eye;
  const Icon2 = pagesIcons.trash;

  return (
    <Container>
      <Caption>
        <strong>Usuários</strong>
        <div>3</div>
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
        <tr>
          <td>Fulano de Tal</td>
          <td>fulano@mail.com</td>
          <td>Garçom</td>
          <td>
            <button type="button">
              <Icon1 />
            </button>
            <button type="button">
              <Icon2 />
            </button>
          </td>
        </tr>
        <tr>
          <td>Fulano de Tal</td>
          <td>fulano@mail.com</td>
          <td>Garçom</td>
          <td>
            <button type="button">
              <Icon1 />
            </button>
            <button type="button">
              <Icon2 />
            </button>
          </td>
        </tr>
        <tr>
          <td>Fulano de Tal</td>
          <td>fulano@mail.com</td>
          <td>Garçom</td>
          <td>
            <button type="button">
              <Icon1 />
            </button>
            <button type="button">
              <Icon2 />
            </button>
          </td>
        </tr>
      </TableBody>
    </Container>
  );
}
