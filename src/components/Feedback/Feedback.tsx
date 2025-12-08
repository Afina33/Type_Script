import Button from "components/Button/Button";
import type { FeedBackProps } from './types';
import { ButtonwithcountContainer, FeedbackComponent, FeedbackControl, FeedbackCounter } from "./styles";



function Feedback({like, dislike, onLike, onDislike, resetResults}: FeedBackProps) {
  
  return (
    <FeedbackComponent>
      <FeedbackControl>
        <ButtonwithcountContainer>
          <Button name="Like" onClick={onLike} />
          <FeedbackCounter>{like}</FeedbackCounter>
        </ButtonwithcountContainer>
        <ButtonwithcountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <FeedbackCounter>{dislike}</FeedbackCounter>
        </ButtonwithcountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackComponent>
  );
}

export default Feedback;