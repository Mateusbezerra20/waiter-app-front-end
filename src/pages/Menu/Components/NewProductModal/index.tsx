import { ChangeEvent, useMemo, useState } from "react";
import { z } from "zod";
import { toast } from "react-toastify";

import { Content, Footer } from "./styles";
import { useErrors } from "../../../../hooks/useErrors";

import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { Button } from "../../../../components/Button";
import { InputCurrency } from "../../../../components/InputCurrency";

import { ImageIcon } from "../../../../components/icons/ImageIcon";
import { CheckIcon } from "../../../../components/icons/CheckIcon";

import { IPostProduct } from "../../../../entities/PostProduct";

import noImage from "../../../../assets/images/no-image.png";
import { ingredientes } from "../../../../assets/ingredients";
import { ICategory } from "../../../../entities/Category";
import { currencyStringToNumber } from "../../../../utils/currencyStringToNumber";

interface NewProductModalProps {
  categories: ICategory[];
  handleClose: () => void;
  handleSubmit: (props: IPostProduct) => Promise<void>;
}

interface IIngredient {
  icon: string;
  name: string;
}

const nameSchema = z.string().min(1, { message: "Informe o nome do produto" });
const descriptionSchema = z
  .string()
  .min(1, { message: "Adicione uma descrição ao produto" });

const priceSchema = z.string().min(1);

export function NewProductModal({
  categories,
  handleClose,
  handleSubmit,
}: NewProductModalProps) {
  const [selectedIngredients, setSelectedIngredients] = useState<IIngredient[]>(
    [],
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [imageFile, setImageFile] = useState<File>();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { errors, addError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const filteredIngredients = useMemo(
    () =>
      ingredientes.filter((ingrediente) =>
        ingrediente.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [searchTerm],
  );

  const isButtonEnabled = !!(
    selectedCategory &&
    imageFile &&
    productName &&
    productDescription &&
    productPrice &&
    errors.length < 1
  );

  async function handleSubmitData() {
    setIsLoading(true);

    try {
      await handleSubmit({
        name: productName,
        description: productDescription,
        category: selectedCategory,
        ingredients: selectedIngredients,
        image: imageFile!,
        price: currencyStringToNumber(productPrice),
      });
    } catch {
      toast.error("Falha ao cadastrar o novo produto");
    } finally {
      setIsLoading(false);
      handleClose();
    }
  }

  function handleToggleIngredientOption(ingredient: IIngredient) {
    setSelectedIngredients((prevState) => {
      const selected = prevState.find((item) => item.name === ingredient.name);
      if (!selected) {
        const newValue = [...prevState, ingredient];
        return newValue;
      }

      const newValue = prevState.filter(
        (item) => item.name !== ingredient.name,
      );
      return newValue;
    });
  }

  function handleChangeImage(event: ChangeEvent<HTMLInputElement>) {
    const imgFile = event.target.files?.[0];
    setImageFile(imgFile);
  }

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    const fieldValue = event.target.value;

    setProductName(fieldValue);
    const parsedValue = nameSchema.safeParse(fieldValue);

    if (!parsedValue.success) {
      const message = parsedValue.error.errors[0].message;
      addError({ field: "name", message });
    } else {
      removeError("name");
    }
  }

  function handleChangeDescription(event: ChangeEvent<HTMLInputElement>) {
    const fieldValue = event.target.value;
    setProductDescription(fieldValue);
    const parsedValue = descriptionSchema.safeParse(fieldValue);

    if (!parsedValue.success) {
      const message = parsedValue.error.errors[0].message;
      addError({ field: "description", message });
    } else {
      removeError("description");
    }
  }

  function handleChangePrice(fieldValue: string) {
    setProductPrice(fieldValue);
    const parsedValue = priceSchema.safeParse(fieldValue);

    if (!parsedValue.success) {
      const message = parsedValue.error.errors[0].message;
      addError({ field: "price", message });
    } else {
      removeError("price");
    }
  }

  function handleChangeSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    const fieldValue = event.target.value;
    setSearchTerm(fieldValue);
  }

  return (
    <Modal title="Novo Produto" handleClose={handleClose}>
      <Content>
        <section className="product-info">
          <div className="image-input-container">
            <h5>Imagem</h5>
            <div>
              <img
                src={imageFile ? URL.createObjectURL(imageFile) : noImage}
                alt="imagem do produto"
              />

              <label htmlFor="image">
                <ImageIcon />
                <span>Alterar Imagem</span>
              </label>

              <input
                type="file"
                id="image"
                accept="image/png, image/jpeg"
                onChange={handleChangeImage}
              />
            </div>
          </div>

          <Input
            name="name"
            label="Nome do produto"
            onChange={handleChangeName}
            errorMessage={getErrorMessageByFieldName("name")}
          />
          <Input
            name="description"
            label="Descrição"
            onChange={handleChangeDescription}
            errorMessage={getErrorMessageByFieldName("description")}
          />

          <div id="category-price-group">
            <InputCurrency
              value={Number(productPrice)}
              onChange={handleChangePrice}
            />

            <div id="categories-selection">
              <label htmlFor="category-select">
                <span>Categoria</span>
                <select
                  name="categories"
                  id="category-select"
                  onChange={(event) => setSelectedCategory(event.target.value)}
                >
                  <option value="">Selecione a categoria</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {`${category.icon} ${category.name}`}
                    </option>
                  ))}
                </select>
                <div className="arrow"></div>
              </label>
            </div>
          </div>
        </section>

        <section className="ingredients-selection">
          <header>
            <h5>Ingredientes</h5>
            <Button label="Novo Ingrediente" variant="secondary" />
          </header>

          <div id="search-ingredients-container">
            <Input
              name="search"
              label="Busque o ingrediente"
              placeholder="Ex: Mussarela"
              onChange={handleChangeSearchTerm}
            />
            <div id="ingredients-list">
              {filteredIngredients.map((ingredient) => (
                <div key={ingredient.name}>
                  <span>{`${ingredient.icon} ${ingredient.name}`}</span>
                  <button
                    onClick={() => handleToggleIngredientOption(ingredient)}
                  >
                    <CheckIcon
                      selected={selectedIngredients.includes(ingredient)}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Content>
      <Footer>
        <Button
          label={isLoading ? "Salvando" : "Salvar"}
          isLoading={isLoading}
          disabled={!isButtonEnabled}
          onClick={handleSubmitData}
        />
      </Footer>
    </Modal>
  );
}
