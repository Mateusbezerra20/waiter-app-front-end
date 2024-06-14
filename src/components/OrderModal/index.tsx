import { Actions, OrderDetails, StatusContainer } from './styles';
import { Order } from '../types/Order';

import formatCurrency from '../../utils/formatCurrency';
import { useEffect } from 'react';
import { Modal } from '../Modal';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
  onCancelOrder: () => Promise<void>;
  onChangeOrderStatus: () => Promise<void>;
  isLoading: boolean;
}

export function OrderModal(props: OrderModalProps) {
  const {visible, order, onClose, onCancelOrder, onChangeOrderStatus, isLoading} = props;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if(event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, [onClose]);

  if(!visible || !order) {
    return null;
  }

  const total = order.products.reduce((previousValue, {quantity, product}) => {
    return previousValue + (quantity * product.price);
  }, 0);

  return (
    <Modal title={`Mesa ${order.table}`} handleClose={onClose}>
      <StatusContainer>
        <small>Status do pedido</small>
        <div>
          <span>
            {order.status === 'WAITING' && '🕑'}
            {order.status === 'IN_PRODUCTION' && '🧑🏽‍🍳'}
            {order.status === 'DONE' && '✅'}
          </span>
          <strong>
            {order.status === 'WAITING' && 'Fila de espera'}
            {order.status === 'IN_PRODUCTION' && 'Em preparação'}
            {order.status === 'DONE' && 'Pronto'}
          </strong>
        </div>
      </StatusContainer>

      <OrderDetails>
        <strong>Itens</strong>

        <div className="order-items">
          {order.products.map(({_id, quantity, product}) => (
            <div className="item" key={_id}>
              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${product.imagePath}`}
                alt={product.name}
                width="56"
                height="28.51"
              />

              <span className="quantity">{quantity}x</span>

              <div className="product-details">
                <strong>{product.name}</strong>
                <span>{formatCurrency(product.price)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="total">
          <span>Total</span>
          <strong>{formatCurrency(total)}</strong>
        </div>
      </OrderDetails>

      <Actions>
        {order.status !== 'DONE' ? (
          <button
            type="button"
            className="primary"
            disabled={isLoading}
            onClick={onChangeOrderStatus}
          >
            <span>
              {order.status === 'WAITING' && '🧑🏽‍🍳'}
              {order.status === 'IN_PRODUCTION' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Iniciar Preparo'}
              {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
            </strong>
          </button>
        ) : null }

        <button
          type="button"
          className="secondary"
          onClick={onCancelOrder}
          disabled={isLoading}
        >
          <strong>Cancelar Pedido</strong>
        </button>
      </Actions>
    </Modal>
  );
}
