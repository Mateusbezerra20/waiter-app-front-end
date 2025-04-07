import {
  Caption,
  Container,
  Quantity,
  TableBody,
  TableHead,
} from "../../../components/tableStyles";
import { pagesIcons } from "../../../components/icons/pageIconsMaps";
import { ICategory } from "../../../entities/Category";
import { useState } from "react";
import { Button } from "../../../components/Button";
import { NewCategoryModal } from "./NewCategoryModal";
import { DeleteCategoryModal } from "./DeleteCategoryModal";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import { EditCategoryModal } from "./EditCategoryModal";

interface CategoriesTableProps {
  data: ICategory[];
  reloadCategories: () => void;
}

export function CategoriesTable({
  data,
  reloadCategories,
}: CategoriesTableProps) {
  const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState(false);
  const [isDeleteCategoryModalOpen, setIsDeleteCategoryModalOpen] =
    useState(false);
  const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);
  const [categoryBeingHandled, setCategoryBeingHandled] =
    useState<ICategory | null>(null);

  const PencilIcon = pagesIcons.pencil;
  const TrashIcon = pagesIcons.trash;

  function openNewCategoryModal() {
    setIsNewCategoryModalOpen(true);
  }

  function closeNewCategoryModal() {
    setIsNewCategoryModalOpen(false);
  }

  function openDeleteCategoryModal(category: ICategory) {
    setCategoryBeingHandled(category);
    setIsDeleteCategoryModalOpen(true);
  }

  function closeDeleteCategoryModal() {
    setIsDeleteCategoryModalOpen(false);
    setCategoryBeingHandled(null);
  }

  function openEditCategoryModal(category: ICategory) {
    setCategoryBeingHandled(category);
    setIsEditCategoryModalOpen(true);
  }

  function closeEditCategoryModal() {
    setIsEditCategoryModalOpen(false);
    setCategoryBeingHandled(null);
  }

  return (
    <>
      {isNewCategoryModalOpen && (
        <NewCategoryModal
          onRegistry={reloadCategories}
          handleClose={closeNewCategoryModal}
        />
      )}
      {isDeleteCategoryModalOpen &&
        categoryBeingHandled &&
        !isNewCategoryModalOpen && (
          <DeleteCategoryModal
            onClose={closeDeleteCategoryModal}
            category={categoryBeingHandled}
            reloadCategories={reloadCategories}
          />
        )}
      {isEditCategoryModalOpen &&
        !isDeleteCategoryModalOpen &&
        !isNewCategoryModalOpen &&
        categoryBeingHandled && (
          <EditCategoryModal
            category={categoryBeingHandled}
            handleClose={closeEditCategoryModal}
            onRegistry={reloadCategories}
          />
        )}
      <Container>
        <Caption>
          <strong>Categorias</strong>
          <Quantity>{data.length}</Quantity>

          <Button
            label="Nova Categoria"
            variant="secondary"
            onClick={openNewCategoryModal}
          />
        </Caption>
        <TableHead>
          <tr>
            <th scope="col" style={{ width: 40 }}>
              Emoji
            </th>
            <th scope="col">Nome</th>
            <th scope="col">Ações</th>
          </tr>
        </TableHead>
        <TableBody>
          {data.map((category) => (
            <tr key={category._id}>
              <td>{category.icon}</td>
              <td>{capitalizeFirstLetter(category.name)}</td>
              <td>
                <button
                  type="button"
                  onClick={() => openEditCategoryModal(category)}
                >
                  <PencilIcon />
                </button>
                <button
                  type="button"
                  onClick={() => openDeleteCategoryModal(category)}
                >
                  <TrashIcon />
                </button>
              </td>
            </tr>
          ))}
        </TableBody>
      </Container>
    </>
  );
}
