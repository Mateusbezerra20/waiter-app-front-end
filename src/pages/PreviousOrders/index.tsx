import { Header } from "../../components/Header";
import { HistoryTable } from "./components/HistoryTable";

export function PreviousOrders() {
  return (
    <>
      <Header
        title="Histórico"
        description="Visualize pedidos anteriores"
        pageIcon="order"
      />
      <HistoryTable />
    </>
  );
}
