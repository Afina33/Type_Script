import Button from "components/Button/Button";

import { useNavigate } from "react-router-dom";
import { ButtonControl, WrapperFirma } from "../style";

export default function Bmw() {
  const navigete = useNavigate();
  const goBack = () => {
    navigete(-1);
  };
  return (
    <WrapperFirma>
      <h1>BMW</h1>
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </WrapperFirma>
  );
}
