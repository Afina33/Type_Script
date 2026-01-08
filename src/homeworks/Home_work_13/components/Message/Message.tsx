import { MessageWrapper, TextMassage } from "./styles";
import { useContext } from "react";
import {BlogManagementContext} from 'homeworks/Home_work_13/components/BlogManagement/BlogManagement'


export default function Message(){
    const {massageData} = useContext(BlogManagementContext)
    return(
        <MessageWrapper>
            {massageData && <TextMassage>{massageData.massageText}</TextMassage>}
        </MessageWrapper>
    );
}