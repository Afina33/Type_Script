import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";

import { useContext } from "react";
import { MainContext } from "../Main/Main";


function Content() {

  const userData = useContext(MainContext);

  return (
    <ContentWrapper>
      <ContentTitle>Content Component </ContentTitle>
      {userData && (
        <>
          <ContentInfo>Fullname: {userData.fullName}</ContentInfo>
          <ContentInfo>Age: {userData.age}</ContentInfo>
          <ContentInfo>Job: {userData.jobPosition}</ContentInfo>
        </>
      )}
    </ContentWrapper>
  );
}

export default Content;
