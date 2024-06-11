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
          <th scope="col">Imagem</th>
          <th scope="col">Nome</th>
          <th scope="col">Categoria</th>
          <th scope="col">Preço</th>
          <th scope="col">Ações</th>
        </tr>
      </TableHead>
      <TableBody>
        <tr>
          <td>🍕</td>
          <td>Quatro Queijos</td>
          <td>🍕 Pizza</td>
          <td>R$ 40</td>
          <td><button type="button"><Icon1 /></button><button type="button"><Icon2 /></button></td>
        </tr>
        <tr>
          <td>🍕</td>
          <td>Quatro Queijos</td>
          <td>🍕 Pizza</td>
          <td>R$ 40</td>
          <td><button type="button"><Icon1 /></button><button type="button"><Icon2 /></button></td>
        </tr>
        <tr>
          <td>🍕</td>
          <td>Quatro Queijos</td>
          <td>🍕 Pizza</td>
          <td>R$ 40</td>
          <td><button type="button"><Icon1 /></button><button type="button"><Icon2 /></button></td>
        </tr>
      </TableBody>
    </Container>
  );
}
