import * as Yup from "yup";
const validationSchema = Yup.object({
  regName: Yup.string().required("required"),
  companyType: Yup.string().required("required"),
  regNo: Yup.number().integer().typeError("please enter a valid number"),
  firstName: Yup.string().required("required"),
  lastName: Yup.string().required("required"),
  email: Yup.string().required("required").email("Invalid email format"),
  address1: Yup.string().required("required"),
  city: Yup.string().required("required"),
  postCode: Yup.string().required("required"),
  country: Yup.string().required("required"),
  propertyType: Yup.string().required("required"),
  propertyValue: Yup.number()
    .integer()
    .typeError("please enter a valid amount")
    .required("required"),
  financeAmount: Yup.number()
    .integer()
    .typeError("please enter a valid amount")
    .required("required"),
  financePurpose: Yup.string().required("required"),
  productType: Yup.string().required("required"),
  financeLength: Yup.string().required("required"),
});

export default validationSchema;
