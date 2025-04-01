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
  const [categoryBeingDeleted, setCategoryBeingDeleted] =
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
    setCategoryBeingDeleted(category);
    setIsDeleteCategoryModalOpen(true);
  }

  function closeDeleteCategoryModal() {
    setIsDeleteCategoryModalOpen(false);
    setCategoryBeingDeleted(null);
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
        categoryBeingDeleted &&
        !isNewCategoryModalOpen && (
          <DeleteCategoryModal
            onClose={closeDeleteCategoryModal}
            category={categoryBeingDeleted}
            reloadCategories={reloadCategories}
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
                <button type="button">
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
