import { InputsContainer, PageWrapper, Title } from './styles'
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { ContactUsValues } from './types';

const  validationSchema = Yup.object().shape({
    [ContactUsValues.FELL_NAME]: Yup.string().required('Поле "Name" обязательное для ввода').min(3).max(50),
    [ContactUsValues.PHONE]: Yup.string().required('Поле "Phone" обязательное для ввода').min(4).max(20),
    [ContactUsValues.EMAIL]: Yup.string().required('Поле "Email" обязательное для ввода').email('Это поле должен быть в формате "Email"').min(6).max(60),

});

export default function ContactUs() {
    const formik = useFormik({
        initialValues: {
            [ContactUsValues.FELL_NAME]: "",
            [ContactUsValues.PHONE]: "",
            [ContactUsValues.EMAIL]: "",
        },
        validationSchema: validationSchema,
        validateOnChange: false,
        onSubmit: (values, helpers) => {
            console.log(values, helpers);
            alert(`Вашь Email: ${values.email} 
                   Ваше имя: ${values.name} 
                   Вашь номер телефона: ${values.phone}`);
        }
    });
    
    return (
      <PageWrapper onSubmit={formik.handleSubmit}>
        <Title>Contact us</Title>
        <InputsContainer>
          <Input
            id="email-id"
            name={ContactUsValues.EMAIL}
            placeholder="Your email"
            label="Email"
            value={formik.values[ContactUsValues.EMAIL]}
            onChange={formik.handleChange}
            error={formik.errors[ContactUsValues.EMAIL]}
          />
          <Input
            id="name-id"
            name={ContactUsValues.FELL_NAME}
            placeholder="Your full name"
            label="Full name"
            value={formik.values[ContactUsValues.FELL_NAME]}
            onChange={formik.handleChange}
            error={formik.errors[ContactUsValues.FELL_NAME]}
          />
          <Input
            id="email-id"
            name={ContactUsValues.PHONE}
            placeholder="Your phone number"
            label="Phone"
            value={formik.values[ContactUsValues.PHONE]}
            onChange={formik.handleChange}
            error={formik.errors[ContactUsValues.PHONE]}
          />
        </InputsContainer>
        <Button name="SEND REQUEST" type="submit" />
      </PageWrapper>
    );
}