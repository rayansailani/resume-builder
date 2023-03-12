const inputFieldsConfig = [
  {
    label: "About me",
    value: "aboutMe",
    index: "aboutMe",
    change: null,
  },
  {
    label: "Link",
    value: "links",
    index: "link",
    change: null,
  },
  {
    label: "Education",
    value: "education",
    index: "education",
    change: null,
  },
  {
    label: "Experience(s)",
    value: "experience",
    index: "exp",
    change: null,
  },
  {
    label: "Projects",
    value: "projects",
    index: "projs",
    change: null,
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
    ],
  },
  link: {
    fields: [{ label: "Link", type: "text" }],
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

export {
  inputFieldsConfig, 
  customFieldInputConfig,
}