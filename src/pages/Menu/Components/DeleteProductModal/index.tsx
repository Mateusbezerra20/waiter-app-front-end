import { toast } from "react-toastify";
import { Button } from "../../../../components/Button";
import { Modal } from "../../../../components/Modal";
import { IProduct } from "../../../../entities/Product";
import { api } from "../../../../utils/api";
import formatCurrency from "../../../../utils/formatCurrency";
import { Actions, Content, ProductDetails, ProductInfo } from "./styles";
import { useState } from "react";

interface DeleteProductModalProps {
  product: IProduct | null | undefined;
  handleClose: () => void;
  reloadProducts: () => void;
}

export function DeleteProductModal({
  handleClose,
  product,
  reloadProducts,
}: DeleteProductModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    try {
      setIsLoading(true);
      await api.delete(`products/${product?._id}`);

      toast.success(`Produto ${product?.name} foi deletado.`);
      reloadProducts();
    } catch {
      toast.error(`Erro ao deletar o produto ${product?.name}.`);
    } finally {
      setIsLoading(false);
      handleClose();
    }
  }

  return (
    <Modal title="Excluir Produto" handleClose={handleClose}>
      <Content>
        <p>Tem certeza que deseja excluir o produto?</p>
        <ProductInfo>
          <img
            src={`${import.meta.env.VITE_API_URL}/uploads/${product?.imagePath}`}
          />
          <ProductDetails>
            <span>{product?.category}</span>
            <strong>{product?.name}</strong>
            <span>{product?.price && formatCurrency(product?.price)}</span>
          </ProductDetails>
        </ProductInfo>
        <Actions>
          <Button label="Manter Produto" variant="secondary" />
          <Button
            label={isLoading ? "Excluindo" : "Excluir Produto"}
            onClick={handleSubmit}
            isLoading={isLoading}
          />
        </Actions>
      </Content>
    </Modal>
  );
}
