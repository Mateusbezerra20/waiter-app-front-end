import {
  Caption,
  Container,
  Quantity,
  TableBody,
  TableHead,
} from "../../../../components/tableStyles";
import { pagesIcons } from "../../../../components/icons/pageIconsMaps";
import { IProduct } from "../../../../entities/Product";
import formatCurrency from "../../../../utils/formatCurrency";
import { ProductImage } from "./styles";
import { Button } from "../../../../components/Button";
import { useState } from "react";
import { DeleteProductModal } from "../DeleteProductModal";
import { Loader } from "../../../../components/Loader";
import { EditProductModal } from "../EditProductModal";
import { ICategory } from "../../../../entities/Category";

interface ProductsTableProps {
  data: IProduct[];
  reloadProducts: () => void;
  onNewProduct: () => void;
  categories: ICategory[];
  isLoading: boolean;
}

export function ProductsTable({
  data,
  onNewProduct,
  reloadProducts,
  isLoading,
  categories,
}: ProductsTableProps) {
  const [isDeleteProductModalOpen, setIsDeleteProductModalOpen] =
    useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [productBeingDeleted, setProductBeingDeleted] =
    useState<IProduct | null>();

  const EditIcon = pagesIcons.pencil;
  const DeleteIcon = pagesIcons.trash;

  function openDeleteProductModal(product: IProduct) {
    setProductBeingDeleted(product);
    setIsDeleteProductModalOpen(true);
  }

  function closeDeleteProductModal() {
    setProductBeingDeleted(null);
    setIsDeleteProductModalOpen(false);
  }

  function openEditProductModal(product: IProduct) {
    setProductBeingDeleted(product);
    setIsEditProductModalOpen(true);
  }

  function closeEditProductModal() {
    setProductBeingDeleted(null);
    setIsEditProductModalOpen(false);
  }

  return (
    <>
      {isDeleteProductModalOpen && (
        <DeleteProductModal
          product={productBeingDeleted}
          handleClose={closeDeleteProductModal}
          reloadProducts={reloadProducts}
        />
      )}
      {isEditProductModalOpen && productBeingDeleted && (
        <EditProductModal
          categories={categories}
          product={productBeingDeleted}
          handleClose={closeEditProductModal}
          reloadProducts={reloadProducts}
        />
      )}
      <Container>
        <Caption>
          <strong>Products</strong>
          <Quantity>{isLoading ? <Loader size={2} /> : data.length}</Quantity>

          <Button
            label="Novo Produto"
            variant="secondary"
            onClick={onNewProduct}
          />
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
          {data.map((product) => (
            <tr key={product._id}>
              <td>
                <ProductImage
                  src={`${import.meta.env.VITE_API_URL}/uploads/${product.imagePath}`}
                  alt="produto"
                />
              </td>
              <td>{product.name}</td>
              <td>
                {categories.find(
                  (category) => category._id === product.category,
                )?.icon +
                  " " +
                  categories.find(
                    (category) => category._id === product.category,
                  )?.name}
              </td>
              <td>{formatCurrency(product.price)}</td>
              <td>
                <button
                  type="button"
                  onClick={() => openEditProductModal(product)}
                >
                  <EditIcon />
                </button>
                <button
                  type="button"
                  onClick={() => openDeleteProductModal(product)}
                >
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </TableBody>
      </Container>
    </>
  );
}
