import {
  Caption,
  Container,
  Quantity,
  TableBody,
  TableHead,
} from "../../../components/tableStyles";
import { pagesIcons } from "../../../components/icons/pageIconsMaps";

export function HistoryTable() {
  const Icon1 = pagesIcons.eye;
  const Icon2 = pagesIcons.trash;

  return (
    <Container>
      <Caption>
        <strong>Pedidos</strong>
        <Quantity>3</Quantity>
      </Caption>
      <TableHead>
        <tr>
          <th scope="col" style={{ width: 80 }}>
            Mesa
          </th>
          <th scope="col" style={{ width: 128 }}>
            Data
          </th>
          <th scope="col">Nome</th>
          <th scope="col">Categoria</th>
          <th scope="col">Total</th>
          <th scope="col">Ações</th>
        </tr>
      </TableHead>
      <TableBody>
        <tr>
          <td>123</td>
          <td>09/06/2024</td>
          <td>Frango com Catupiry</td>
          <td>🍕 Pizza</td>
          <td>R$40</td>
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
          <td>123</td>
          <td>09/06/2024</td>
          <td>Frango com Catupiry</td>
          <td>🍕 Pizza</td>
          <td>R$40</td>
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
          <td>123</td>
          <td>09/06/2024</td>
          <td>Frango com Catupiry</td>
          <td>🍕 Pizza</td>
          <td>R$40</td>
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
