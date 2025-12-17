import { useState } from "react";
import axios from "axios";
import type { University } from "./types";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import {
  Card,
  Container,
  ErrorText,
  PageWrapper,
  SearchContainer,
  UniversitiesGrid,
  UniversityCard,
  UniversityDetail,
  UniversityName,
  Text,
} from "./styles";

export function Lesson_11() {
  const [country, setCountry] = useState("");
  const [universities, setUniversities] = useState<University[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <PageWrapper>
      <Card>
        <Text>University Search"</Text>
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
