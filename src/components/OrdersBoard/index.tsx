import { useState } from 'react';
import { toast } from 'react-toastify';

import { api } from '../../utils/api';
import { OrderModal } from '../OrderModal';
import { Order } from '../types/Order';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Array<Order>;
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

// Paramos em 1:30

export function OrdersBoard(props: OrdersBoardProps){
  const { title, icon, orders, onCancelOrder, onChangeOrderStatus} = props;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeStatusOrder() {
    setIsLoading(true);

    const newStatus = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status: newStatus });

    toast.success(`Status do pedido da mesa ${selectedOrder?.table} foi alterado!`);
    onChangeOrderStatus(selectedOrder!._id, newStatus);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeStatusOrder}
        isLoading={isLoading}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {
            orders.map(order => {
              return (
                <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
                  <strong>Mesa {order.table}</strong>
                  <span>{order.products.length} itens</span>
                </button>
              );
            })
          }
        </OrdersContainer>
      )}
    </Board>
  );
}
