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

interface CategoriesTableProps {
  data: ICategory[];
  reloadCategories: () => void;
}

export function CategoriesTable({
  data,
  reloadCategories,
}: CategoriesTableProps) {
  const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState(false);
  const Icon1 = pagesIcons.pencil;
  const Icon2 = pagesIcons.trash;

  function openNewCategoryModal() {
    setIsNewCategoryModalOpen(true);
  }

  function closeNewCategoryModal() {
    setIsNewCategoryModalOpen(false);
  }

  return (
    <>
      {isNewCategoryModalOpen && (
        <NewCategoryModal
          onRegistry={reloadCategories}
          handleClose={closeNewCategoryModal}
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
              <td>{category.name}</td>
              <td>
                <button type="button">
                  <Icon1 />
                </button>
                <button type="button">
                  <Icon2 />
                </button>
              </td>
            </tr>
          ))}
        </TableBody>
      </Container>
    </>
  );
}
