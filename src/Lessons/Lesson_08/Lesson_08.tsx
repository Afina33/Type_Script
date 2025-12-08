import Button from 'components/Button/Button';
import { ButtonControl, PageWrapper, Paragraph } from './styles';

export default function Lesson_08(){
    return(
        <PageWrapper>
            <Paragraph>Lesson 08</Paragraph>
            <ButtonControl><Button name='Go back'/></ButtonControl>
            <ButtonControl><Button isRed name='Delete'/></ButtonControl>
        </PageWrapper>
    );
}