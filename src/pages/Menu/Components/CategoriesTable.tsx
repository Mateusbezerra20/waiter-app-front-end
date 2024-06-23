import { Caption, Container, TableBody, TableHead } from '../../../components/tableStyles';
import { pagesIcons } from '../../../components/icons/pageIconsMaps';
import { ICategory } from '../../../entities/Category';

interface CategoriesTableProps {
  data: ICategory[];
}

export function CategoriesTable({ data }: CategoriesTableProps) {
  const Icon1 = pagesIcons.pencil;
  const Icon2 = pagesIcons.trash;

  return (
    <Container>
      <Caption>
        <strong>Categorias</strong>
        <div>{data.length}</div>
      </Caption>
      <TableHead>
        <tr>
          <th scope="col" style={{ width: 40 }}>Emoji</th>
          <th scope="col">Nome</th>
          <th scope="col">Ações</th>
        </tr>
      </TableHead>
      <TableBody>
        {
          data.map((category) => (
            <tr key={category._id}>
              <td>{category.icon}</td>
              <td>{category.name}</td>
              <td><button type="button"><Icon1 /></button><button type="button"><Icon2 /></button></td>
            </tr>
          ))
        }
      </TableBody>
    </Container>
  );
}
