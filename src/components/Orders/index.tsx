import { useContext, useEffect, useState } from "react";
import socketIo from "socket.io-client";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard";
import { Order } from "../types/Order";
import { api } from "../../utils/api";
import { AuthContext } from "../../contexts/AuthContext";

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const { signout } = useContext(AuthContext);

  useEffect(() => {
    const socket = socketIo("https://waiterapp-api-d3kn.onrender.com", {
      transports: ["websocket"],
    });

    socket.on("orders@new", (order) => {
      setOrders((prevState) => prevState.concat(order));
    });
  }, []);

  useEffect(() => {
    api
      .get("/orders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((err) => {
        if (err instanceof AxiosError) {
          signout();
        } else {
          toast.error("Ocorreu um arro ao buscar os dados.");
        }
      });
  }, []);

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId),
    );
  }

  function handleChangeOrderStatus(
    orderId: string,
    newStatus: Order["status"],
  ) {
    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order,
      ),
    );
  }

  const waiting = orders.filter((order) => order.status === "WAITING");
  const inProduction = orders.filter(
    (order) => order.status === "IN_PRODUCTION",
  );
  const done = orders.filter((order) => order.status === "DONE");

  return (
    <Container>
      <OrdersBoard
        title="Fila de Espera"
        icon="🕑"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />
      <OrdersBoard
        title="Em preparação"
        icon="🧑🏽‍🍳"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />
      <OrdersBoard
        title="Pronto"
        icon="✅"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />
    </Container>
  );
}
