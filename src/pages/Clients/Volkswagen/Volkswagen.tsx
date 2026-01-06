import { useNavigate } from "react-router-dom";
import { ButtonControl, WrapperFirma } from "../style";
import Button from "components/Button/Button";

export default function Volkswagen() {
  const navigete = useNavigate();
  const goBack = () => {
    navigete(-1);
  };
  return (
    <WrapperFirma>
      <h1>Volkswagen</h1>
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </WrapperFirma>
  );
}
