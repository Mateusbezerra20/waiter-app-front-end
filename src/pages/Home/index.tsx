import { Header } from "../../components/Header";
import { Orders } from "../../components/Orders";

export function Home() {
  return (
    <>
      <Header
        title="Home"
        description="Acompanhe os pedidos dos clientes"
        pageIcon="home"
      />
      <Orders />
    </>
  );
}
