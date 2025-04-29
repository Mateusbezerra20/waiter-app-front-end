import { NumericFormat } from "react-number-format";

import { Wrapper } from "./styles";

interface InputCurrencyProps {
  value?: number;
  onChange: (value: string) => void;
}

export function InputCurrency({ value, onChange }: InputCurrencyProps) {
  return (
    <Wrapper>
      <span>Preço</span>
      <NumericFormat
        defaultValue={value}
        onChange={(event) => onChange(event.target.value)}
        className="input-currency"
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        decimalScale={2}
        allowLeadingZeros={false}
      />
    </Wrapper>
  );
}
