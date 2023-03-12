const inputFieldsConfig = [
  {
    label: "About me",
    value: "aboutMe",
    index: "aboutMe",
    change: null,
    extendable: false,
  },
  {
    label: "Education",
    value: "education",
    index: "education",
    change: null,
    extendable: true,
  },
  {
    label: "Experience(s)",
    value: "experience",
    index: "exp",
    change: null,
    extendable: true,
  },
  {
    label: "Projects",
    value: "projects",
    index: "projs",
    change: null,
    extendable: true,
  },
];

const customFieldInputConfig = {
  aboutMe: {
    fields: [
      {
        label: "Name",
        type: "text",
      },
      {
        label: "Ph number",
        type: "text",
      },
      {
        label: "Email address",
        type: "email",
      },
      {
        label: "Link",
        type: "text",
      },
    ],
  },
  education: {
    fields: [
      { label: "Degree", type: "text" },
      { label: "Institute", type: "text" },
      { label: "Year of graduation", type: ["year"] },
    ],
  },
  exp: {
    fields: [
      { label: "Role", type: "text" },
      { label: "Company", type: "text" },
      { label: "Description", type: "textarea" },
      { label: "Start", type: ["month", "year"] },
      { label: "End", type: ["month", "year"] },
    ],
  },
  projs: {
    fields: [
      { label: "Project Name", type: "text" },
      { label: "Desription", type: "textarea" },
      { label: "Tools used", type: "textarea" },
    ],
  },
};

export { inputFieldsConfig, customFieldInputConfig };
