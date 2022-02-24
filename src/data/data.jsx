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

export {
  propertyTypes,
  companyTypes,
  financePurpose,
  productType,
  financeLength,
  initialValues,
};
