import { toast } from "react-toastify";
import { Button } from "../../../../components/Button";
import { Modal } from "../../../../components/Modal";
import { ICategory } from "../../../../entities/Category";
import { api } from "../../../../utils/api";
import capitalizeFirstLetter from "../../../../utils/capitalizeFirstLetter";
import { Actions, CategoryInfo, Content } from "./styles";
import { useState } from "react";

interface DeleteCategoryModal {
  onClose: () => void;
  category: ICategory;
  reloadCategories: () => void;
}

export function DeleteCategoryModal({
  onClose,
  category,
  reloadCategories,
}: DeleteCategoryModal) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteCategory() {
    setIsLoading(true);
    try {
      await api.delete(`/categories/${category._id}`);

      toast.success(
        `Categoria "${category.name} ${category.icon}" foi deletada.`,
      );
      reloadCategories();
    } catch {
      toast.error("Ocorreu um erro ao deletar a categoria.");
    } finally {
      setIsLoading(false);
      onClose();
    }
  }

  return (
    <Modal title="Excluir Categoria" handleClose={onClose}>
      <Content>
        <span>Tem certeza que deseja excluir a categoria?</span>
        <CategoryInfo>
          <strong>{category.icon}</strong>{" "}
          {capitalizeFirstLetter(category.name)}
        </CategoryInfo>
      </Content>
      <Actions>
        <Button
          label="Manter Categoria"
          variant="secondary"
          onClick={onClose}
        />
        <Button
          label="Excluir Categoria"
          onClick={handleDeleteCategory}
          isLoading={isLoading}
        />
      </Actions>
    </Modal>
  );
}
