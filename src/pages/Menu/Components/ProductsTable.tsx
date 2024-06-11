import { Caption, Container, TableBody, TableHead } from '../../../components/tableStyles';
import { pagesIcons } from '../../../components/icons/pageIconsMaps';

export function ProductsTable() {
  const Icon1 = pagesIcons.eye;
  const Icon2 = pagesIcons.trash;

  return (
    <Container>
      <Caption>
        <strong>Products</strong>
        <div>3</div>
      </Caption>
      <TableHead>
        <tr>
          <th scope="col" style={{ width: 40 }}>Emoji</th>
          <th scope="col">Nome</th>
          <th scope="col">Ações</th>
        </tr>
      </TableHead>
      <TableBody>
        <tr>
          <td>🍕</td>
          <td>Pizzas</td>
          <td><button type="button"><Icon1 /></button><button type="button"><Icon2 /></button></td>
        </tr>
        <tr>
          <td>🍔</td>
          <td>Lanches</td>
          <td><button type="button"><Icon1 /></button><button type="button"><Icon2 /></button></td>
        </tr>
        <tr>
          <td>🍺</td>
          <td>Bebidas</td>
          <td><button type="button"><Icon1 /></button><button type="button"><Icon2 /></button></td>
        </tr>
      </TableBody>
    </Container>
  );
}
