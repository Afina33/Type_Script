import styled from "@emotion/styled";


export const BlogManagementWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 30px;
`;

export const ManagementTextArea = styled.textarea`
width: 300px;
min-height: 100px;
color: #2907e8ff;
border: solid 1px #2907e8ff;
:hover{
    border-color: rgba(105, 73, 218, 1);
}
`;

export const ButtonControl = styled.div`
    width: 170px;
`; 