import { ChangeEvent, useState } from "react";
import { z } from "zod";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { EmojiInput, Form, FormGroup } from "./styles";
import { useErrors } from "../../../../hooks/useErrors";
import { EmojiSelector } from "../EmojiSelector";
import { api } from "../../../../utils/api";
import { toast } from "react-toastify";
import { ICategory } from "../../../../entities/Category";

interface EditCategoryModalProps {
  category: ICategory;
  handleClose: () => void;
  onRegistry: () => void;
}

const nameSchema = z
  .string()
  .min(1, { message: "Informe o nome da categoria." });

export function EditCategoryModal({
  handleClose,
  onRegistry,
  category,
}: EditCategoryModalProps) {
  const [name, setName] = useState(category.name);
  const [emoji, setEmoji] = useState(category.icon);
  const [isLoading, setIsloading] = useState(false);

  const { addError, removeError, getErrorMessageByFieldName } = useErrors();

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsloading(true);

    try {
      await api.put(`/categories/${category._id}`, {
        name,
        icon: emoji,
      });

      setIsloading(false);
      handleClose();
      toast.success("Categoria editada.");
      onRegistry();
    } catch {
      toast.error("Ocorreu um erro ao editar categoria.");
    }
  }

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setName(value);
    const parsedValue = nameSchema.safeParse(value);

    if (parsedValue.success) {
      removeError("name");
    } else {
      const message = parsedValue.error.errors[0].message;
      addError({ field: "name", message });
    }
  }

  function handleSelectEmoji(emoji: string) {
    setEmoji(emoji);
  }

  return (
    <Modal title="Nova Categoria" handleClose={handleClose}>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            name="name"
            label="Nome da Categoria"
            placeholder="Ex: Lanches"
            value={name}
            errorMessage={getErrorMessageByFieldName("name")}
            onChange={handleChangeName}
            style={{ width: "100%" }}
          />
          <EmojiInput>
            <span>Emoji</span>
            <EmojiSelector value={emoji} onSelect={handleSelectEmoji} />
          </EmojiInput>
        </FormGroup>
        <Button
          type="submit"
          label="Salvar Alterações"
          disabled={!name}
          isLoading={isLoading}
        />
      </Form>
    </Modal>
  );
}
