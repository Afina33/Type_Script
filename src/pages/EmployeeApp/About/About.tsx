import Button from "components/Button/Button";

import { PageWrapper, ButtonControl } from "./styles";
import { useNavigate } from "react-router-dom";

function About() {
  const navigete = useNavigate();
  const goToHomePage = () => {
    navigete("/");
  };

  const goBack = () => {
    navigete(-1);
  };
  return (
    <PageWrapper>
      Information about company
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
      <ButtonControl>
        <Button name="Go to Home page" onClick={goToHomePage} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default About;
