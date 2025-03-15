import { useEffect, useMemo, useState } from "react";

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

  const tableReadyProducts = useMemo(() => {
    const prod = products.map((product) => {
      const productsCategory = categories.find(
        (category) => category._id === product.category,
      );
      return {
        ...product,
        category: `${productsCategory?.icon} ${productsCategory?.name}`,
      };
    });

    return prod;
  }, [products, categories]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    api.get("/categories").then((response) => {
      setCategories(response.data);
    });
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
          data={tableReadyProducts}
          onNewProduct={() => setIsModalOpen(true)}
        />
      ) : (
        <CategoriesTable data={categories} />
      )}
    </>
  );
}
