import { ChangeEvent, useMemo, useState } from "react";
import { z } from "zod";
import { toast } from "react-toastify";

import { Content, Footer } from "./styles";
import { useErrors } from "../../../../hooks/useErrors";

import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { Button } from "../../../../components/Button";

import { ImageIcon } from "../../../../components/icons/ImageIcon";
import { CheckIcon } from "../../../../components/icons/CheckIcon";

import { ingredientes } from "../../../../assets/ingredients";
import { ICategory } from "../../../../entities/Category";
import { IProduct } from "../../../../entities/Product";
import { api } from "../../../../utils/api";

interface EditProductModalProps {
  categories: ICategory[];
  product: IProduct;
  handleClose: () => void;
  reloadProducts: () => void;
}

interface IIngredient {
  icon: string;
  name: string;
}

const nameSchema = z.string().min(1, { message: "Informe o nome do produto" });
const descriptionSchema = z
  .string()
  .min(1, { message: "Adicione uma descrição ao produto" });

const priceSchema = z.coerce.number();

export function EditProductModal({
  categories,
  product,
  handleClose,
  reloadProducts,
}: EditProductModalProps) {
  const [selectedIngredients, setSelectedIngredients] = useState<IIngredient[]>(
    product.ingredients,
  );
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    () => categories.find((category) => category._id === product.category)?._id,
  );
  const [imageFile, setImageFile] = useState<File>();
  const [productName, setProductName] = useState(product.name);
  const [productDescription, setProductDescription] = useState(
    product.description,
  );
  const [productPrice, setProductPrice] = useState(String(product.price));
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
    (imageFile || product.imagePath) &&
    productName &&
    productDescription &&
    productPrice &&
    errors.length < 1
  );

  async function handleSubmitData() {
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("description", productDescription);
      formData.append("price", productPrice);
      formData.append("ingredients", JSON.stringify(selectedIngredients));
      selectedCategory && formData.append("category", selectedCategory);
      imageFile && formData.append("image", imageFile);

      await api.put(`/products/${product._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      reloadProducts();
      toast.success(`Editado com sucesso!`);
    } catch {
      toast.error("Falha ao editar o produto");
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

  function handleChangePrice(event: ChangeEvent<HTMLInputElement>) {
    const fieldValue = event.target.value;

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
                src={
                  imageFile
                    ? URL.createObjectURL(imageFile)
                    : `${import.meta.env.VITE_API_URL}/uploads/${product.imagePath}`
                }
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
            value={productName}
            onChange={handleChangeName}
            errorMessage={getErrorMessageByFieldName("name")}
          />
          <Input
            name="description"
            label="Descrição"
            value={productDescription}
            onChange={handleChangeDescription}
            errorMessage={getErrorMessageByFieldName("description")}
          />

          <div id="category-price-group">
            <Input
              name="price"
              label="Preço"
              type="number"
              min={0}
              value={productPrice}
              onChange={handleChangePrice}
              errorMessage={getErrorMessageByFieldName("price")}
            />

            <div id="categories-selection">
              <label htmlFor="category-select">Categoria</label>
              <select
                name="categories"
                id="category-select"
                onChange={(event) => setSelectedCategory(event.target.value)}
              >
                {categories.map((category) => (
                  <option
                    key={category._id}
                    value={category._id}
                    selected={category._id === product.category}
                  >
                    {`${category.icon} ${category.name}`}
                  </option>
                ))}
              </select>
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
                      selected={
                        !!selectedIngredients.find(
                          (item) => item.name === ingredient.name,
                        )
                      }
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
