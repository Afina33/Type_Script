import { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";
import { v4 } from "uuid";
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
  const [country, setCountry] = useState<string>("");
  const [universities, setUniversities] = useState<University[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const DATA_COUNTRY_UNIVERSITY: string = `http://universities.hipolabs.com/search?country=${country}`;

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCountry(event.target.value);
  };

  const getCountry = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    setUniversities([]);
    setError(undefined);
    setLoading(true);

    try {
      const response = await axios.get<University[]>(DATA_COUNTRY_UNIVERSITY);
      setUniversities(response.data.slice(0, 15));
    } catch (error: any) {
      setUniversities([]);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Card>
        <Text>University Search"</Text>
        <SearchContainer onSubmit={getCountry}>
          <Input
            name={"searchCountry"}
            label="Country"
            placeholder="Enter Country for searching uneversities"
            id={"search"}
            onChange={onChange}
          />
          <Button
            type="submit"
            isDisabled={loading}
            name={"Get Universities"}
          />
        </SearchContainer>
        <Container>
          {!!error && <ErrorText>{error}</ErrorText>}

          <UniversitiesGrid>
            {universities.map((university: University) => (
              <UniversityCard key={v4()}>
                <UniversityName>{university.name}</UniversityName>

                <UniversityDetail>
                  Country: {university.country}
                </UniversityDetail>

                <UniversityDetail>
                  {university.web_pages.map((link: string) => {
                    return <a key={v4()} href={link}>Website</a>;
                  })}
                </UniversityDetail>
              </UniversityCard>
            ))}
          </UniversitiesGrid>
        </Container>
      </Card>
    </PageWrapper>
  );
}
