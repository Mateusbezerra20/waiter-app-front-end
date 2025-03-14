export default function formatCurrency(value: number) {
  /** Converte o número para o formato BRL */
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
