import { useNavigate } from "react-router-dom";
import { ClientsContainer, ButtonControl, Title, ClientsLink } from "./style";
import Button from "components/Button/Button";

export default function Clients() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const BmW = () => {
    navigate("/clients/bmw");
  };
  const MercedesBenz = () => {
    navigate("/clients/mercedesBenz");
  };
  const Volkswagen = () => {
    navigate("/clients/volkswagen");
  };
  return (
    <ClientsContainer>
      <Title>Наши клиенты:</Title>
      <ClientsLink onClick={BmW}>BMW</ClientsLink>
      <ClientsLink onClick={MercedesBenz}>Mercedes-Benz</ClientsLink>
      <ClientsLink onClick={Volkswagen}>Volkswagen</ClientsLink>
      <ButtonControl>
        <Button name="Go to Home" onClick={goToHome} />
      </ButtonControl>
    </ClientsContainer>
  );
}
