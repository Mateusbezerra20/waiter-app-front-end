import { useCallback, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { CategoriesTable } from "./Components/CategoriesTable";
import { Sections } from "./Components/Sections";
import { ProductsTable } from "./Components/ProductsTable";
import { api } from "../../utils/api";
import { NewProductModal } from "./Components/NewProductModal";

import { IProduct } from "../../entities/Product";
import { ICategory } from "../../entities/Category";
import { IPostProduct } from "../../entities/PostProduct";
import { toast } from "react-toastify";

export function Menu() {
  const [activeSection, setActiveSection] = useState<"products" | "categories">(
    "products",
  );
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          api.get("/products"),
          api.get("/categories"),
        ]);

        setProducts(productsResponse.data);
        setCategories(categoriesResponse.data);
      } catch {
        toast.error("Ocorreu um erro ao carregar os produtos e categorias.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const reloadProducts = useCallback(() => {
    setIsLoading(true);
    api.get("/products").then((response) => setProducts(response.data));
    setIsLoading(false);
  }, []);

  function changeActiveSection(section: string) {
    setActiveSection(section as "products" | "categories");
  }

  async function handleSaveNewProdut(product: IPostProduct) {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("ingredients", JSON.stringify(product.ingredients));
    formData.append("image", product.image);

    const resp = await api.post("/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const savedProduct = resp.data;

    reloadProducts();

    toast.success(`Produto ${savedProduct.name} foi cadastrado!`);
  }

  return (
    <>
      <Header
        title="Cardápio"
        description="Gerencie os produtos do seu estabelecimento"
        pageIcon="menu"
      />
      {isModalOpen && (
        <NewProductModal
          categories={categories}
          handleSubmit={handleSaveNewProdut}
          handleClose={() => setIsModalOpen(false)}
        />
      )}
      <Sections
        activeSection={activeSection}
        changeSection={changeActiveSection}
      />
      {activeSection === "products" ? (
        <ProductsTable
          data={products}
          categories={categories}
          onNewProduct={() => setIsModalOpen(true)}
          reloadProducts={reloadProducts}
          isLoading={isLoading}
        />
      ) : (
        <CategoriesTable data={categories} />
      )}
    </>
  );
}
