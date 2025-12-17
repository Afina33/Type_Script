import Input from "components/Input/Input";
import {
  PageWrapper,
  Card,
  Text,
  ErrorText,
  SearchContainer,
  Container,
  UniversitiesGrid,
  UniversityCard,
  UniversityName,
  UniversityDetail,
  } from "./styles";
import Button from "components/Button/Button";

function Homework_11() {
  return (
    <PageWrapper>
      <Card>
        <Text>University Search</Text>
        <SearchContainer>
          <Input
            name={""}
            label="Country"
            placeholder="Enter Country for searching uneversities"
            id={""}
          />
          <Button name={"Get Universities"}></Button>
        </SearchContainer>
        <Container>
          <ErrorText></ErrorText>
          <Text></Text>
          <UniversitiesGrid>
            <UniversityCard>
              <UniversityName>имя института</UniversityName>
              <UniversityDetail>данные</UniversityDetail>
              <UniversityDetail>данные</UniversityDetail>
              <UniversityDetail>данные</UniversityDetail>
            </UniversityCard>
          </UniversitiesGrid>
        </Container>
      </Card>
    </PageWrapper>
  );
}
export default Homework_11;
