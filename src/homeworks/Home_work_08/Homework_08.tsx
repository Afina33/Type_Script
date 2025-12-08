import Input from "components/Input/Input";
import { CounterButton, HomeworkComponent } from "./styles";
import Button from "components/Button/Button";

export default function Homework_08() {
    return(
        <HomeworkComponent>
            <Input placeholder="Введите сове имя" name="email" label="Введите email" error="Some error"/>
            <Input placeholder="Введите сове имя" name="name" label="Введите имя" disabled />
            <Input placeholder="Введите пароль" type="password" name="password" label="Введите пароль" />
            <CounterButton><Button name="Войти" isDisabled/></CounterButton>
            <CounterButton><Button name="Сборосить пароль" isRed/></CounterButton>
            <CounterButton><Button name="Войти с помощью телефона"/></CounterButton>
        </HomeworkComponent>
    )
}