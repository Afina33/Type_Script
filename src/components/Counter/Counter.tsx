import Button from "components/Button/Button";
import { type CounterProps } from "./types";
import { CounterButton, CounterComponent, CounterP } from "./styles";

function Counter({count, onMinus, onPlus}: CounterProps) {

  return (
    <CounterComponent>
      <CounterButton>
        <Button name="-" onClick={onMinus} />
      </CounterButton>
      <CounterP>{count}</CounterP>
      <CounterButton>
        <Button name="+" onClick={onPlus} />
      </CounterButton>
    </CounterComponent>
  );
}

export default Counter;
