import { Caption, Container, TableBody, TableHead } from '../../../../components/tableStyles';
import { pagesIcons } from '../../../../components/icons/pageIconsMaps';
import { IProduct } from '../../../../entities/Product';
import formatCurrency from '../../../../utils/formatCurrency';
import { ProductImage } from './styles';
import { Button } from '../../../../components/Button';

interface ProductsTableProps {
  data: IProduct[];
  onNewProduct: () => void;
}

export function ProductsTable({ data, onNewProduct }: ProductsTableProps) {
  const Icon1 = pagesIcons.pencil;
  const Icon2 = pagesIcons.trash;

  return (
    <Container>
      <Caption>
        <strong>Products</strong>
        <div>{data.length}</div>

        <Button label="Novo Produto" variant="secondary" onClick={onNewProduct}/>
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
        {
          data.map((product) => (
            <tr key={product._id}>
              <td>
                <ProductImage src={`${import.meta.env.VITE_API_URL}/uploads/${product.imagePath}`} alt="produto" />
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{formatCurrency(product.price)}</td>
              <td><button type="button"><Icon1 /></button><button type="button"><Icon2 /></button></td>
            </tr>
          ))
        }
      </TableBody>
    </Container>
  );
}
