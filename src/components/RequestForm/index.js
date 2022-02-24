import { Formik, Form } from "formik";
import React from "react";
import Header from "../Header";
import {
  propertyTypes,
  companyTypes,
  financePurpose,
  productType,
  financeLength,
  initialValues,
} from "../../data/data";

import validationSchema from "../../data/validationSchema";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import SubmitButton from "../SubmitButton";
import RadioButton from "../RadioButton";
import Input from "../Input";
import Select from "../Select";

const useStyles = makeStyles((theme) => ({
  formTemplate: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const onSubmit = (values) => {
  console.log("form data", values);
};
export default function RequestForm() {
  const classes = useStyles();
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
                    <Input name="regName" label="Registered Name" required />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Select
                      name="companyType"
                      label="Company Type"
                      options={companyTypes}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input name="regNo" label="Company Number" />
                  </Grid>
                  {/* Auth Signatory */}
                  <Grid item xs={12}>
                    <Typography color="primary">
                      Authorised Signatory
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Input name="firstName" label="First Name" required />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Input name="lastName" label="Last Name" required />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Input name="email" label="Email" required />
                  </Grid>
                  {/* Property Details */}
                  <Grid item xs={12}>
                    <Typography color="primary">Property Details</Typography>{" "}
                  </Grid>

                  <Grid item xs={12}>
                    <Input name="projectName" label="Project Name" />{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <Input name="address1" label="Address" required />{" "}
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Input name="city" label="City" required />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Input name="postCode" label="Post Code" required />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Input name="country" label="Country" required />
                  </Grid>
                  <Grid item xs={12}>
                    <RadioButton
                      name="propertyType"
                      legend="Property Type"
                      options={propertyTypes}
                      row
                      required
                    />{" "}
                  </Grid>

                  {/* Fin details */}
                  <Grid item xs={12}>
                    <Typography color="primary">Finance Details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Input
                      name="propertyValue"
                      label="Property Value"
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Input
                      name="financeAmount"
                      label="Finance Amount"
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <RadioButton
                      name="financePurpose"
                      legend="Finance Purpose"
                      options={financePurpose}
                      required
                      row
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <RadioButton
                      name="productType"
                      legend="Product Type"
                      options={productType}
                      required
                      row
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Select
                      name="financeLength"
                      label="Length of Finance"
                      options={financeLength}
                      required
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
