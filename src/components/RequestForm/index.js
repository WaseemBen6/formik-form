import { Formik, Form } from "formik";
import React from "react";
import Header from "../Header";

import * as Yup from "yup";
import FormikControl from "../FormikControl";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import SubmitButton from "../SubmitButton";

const useStyles = makeStyles((theme) => ({
  formTemplate: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

export default function RequestForm() {
  const classes = useStyles();

  const propertyTypes = [
    { key: "Residential", value: "residential" },
    { key: "Commericial", value: "commericial" },
    { key: "Mixed Use", value: "mixed" },
  ];

  const companyTypes = [
    { key: "Limited Company", value: "ltd" },
    { key: "Limited Partnership", value: "partnership" },
    { key: "Sole Trader", value: "sole" },
  ];

  const financePurpose = [
    { key: "Refinancing", value: "refinancing" },
    { key: "New Purchase", value: "purchase" },
  ];

  const productType = [
    { key: "Bridge Finance", value: "bridge" },
    { key: "Buy to Let", value: "BTL" },
    { key: "Refurbishment", value: "refurb" },
  ];

  const financeLength = [
    { key: "12 Months", value: "12Mths" },
    { key: "18 Months", value: "18Mths" },
    { key: "24 Months", value: "24Mths" },
    { key: "36 Months", value: "36Mths" },
  ];

  const initialValues = {
    regName: "",
    companyType: "",
    regNo: "",
    firstName: "",
    lastName: "",
    email: "",
    projectName: "",
    address1: "",
    city: "",
    postCode: "",
    country: "",
    propertyType: "",
    propertyValue: "",
    financeAmount: "",
    financePurpose: "",
    productType: "",
    financeLength: "",
  };

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

  const onSubmit = (values) => {
    console.log("form data", values);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formTemplate}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <Grid container spacing={2}>
                  {/*Buyer Details  */}
                  <Grid item xs={12}>
                    <Typography color="primary">Buyer Details</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <FormikControl
                      control="input"
                      name="regName"
                      label="Registered Name"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormikControl
                      control="select"
                      name="companyType"
                      label="Company Type"
                      options={companyTypes}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormikControl
                      control="input"
                      name="regNo"
                      label="Company Number"
                    />
                  </Grid>
                  {/* Auth Signatory */}
                  <Grid item xs={12}>
                    <Typography color="primary">
                      Authorised Signatory
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FormikControl
                      control="input"
                      name="firstName"
                      label="First Name"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FormikControl
                      control="input"
                      name="lastName"
                      label="Last Name"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FormikControl control="input" name="email" label="Email" />
                  </Grid>
                  {/* Property Details */}
                  <Grid item xs={12}>
                    <Typography color="primary">Property Details</Typography>{" "}
                  </Grid>

                  <Grid item xs={12}>
                    <FormikControl
                      control="input"
                      name="projectName"
                      label="Project Name"
                    />{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <FormikControl
                      control="input"
                      name="address1"
                      label="Address"
                    />{" "}
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FormikControl control="input" name="city" label="City" />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FormikControl
                      control="input"
                      name="postCode"
                      label="Post Code"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FormikControl
                      control="input"
                      name="country"
                      label="Country"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormikControl
                      control="radio"
                      name="propertyType"
                      legend="Property Type"
                      options={propertyTypes}
                      row
                    />{" "}
                  </Grid>

                  {/* Fin details */}
                  <Grid item xs={12}>
                    <Typography color="primary">Finance Details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <FormikControl
                      control="input"
                      name="propertyValue"
                      label="Property Value"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikControl
                      control="input"
                      name="financeAmount"
                      label="Finance Amount"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormikControl
                      control="radio"
                      name="financePurpose"
                      legend="Finance Purpose"
                      options={financePurpose}
                      row
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormikControl
                      control="radio"
                      name="productType"
                      legend="Product Type"
                      options={productType}
                      row
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormikControl
                      control="select"
                      name="financeLength"
                      label="Length of Finance"
                      options={financeLength}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SubmitButton>Submit</SubmitButton>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}
