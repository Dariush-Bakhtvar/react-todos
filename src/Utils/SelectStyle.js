const Colors = {
  All: "#F3C623",
  Business: "#00c7c7",
  Personal: "#F24C4C",
  Family: "#844685",
  Work: "#05FF97",
};
export const selectStyles = {
  container: (styles) => ({
    ...styles,
    "@media only screen and (min-width: 320px) and (max-width:480px)": {
      ...styles["@media only screen and(min-width: 320px) and (max-width:480px)"],
      height: 16,
      marginBottom: 14,
    },
  }),
  singleValue: (provided, { data }) => ({
    ...provided,
    color: Colors[data.value] ? Colors[data.value] : "defaultColor",
  }),
  control: (base) => ({
    ...base,
    border: '0 !important',
    // This line disable the blue border
    boxShadow: '0 !important',
    '&:hover': {
      border: '0 !important'
    },
    height: 25,
    background: "rgba(51, 55, 72, 0.6)",
    "@media only screen and (min-width: 320px) and (max-width:480px)": {
      ...base["@media only screen and(min-width: 320px) and (max-width:480px)"],
      height: 16,
      marginBottom: 14,
    },
  }),
  menu: (style) => ({
    ...style,
    background: "rgba(51, 55, 72, 0.6)",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    "svg": {
      fill: "#f2f2f294",
      transition: 'all 0.6s ease-in-out',
      '&:hover': {
        fill: "#f2f2f2",
        transition: 'all 0.6s ease-in-out',
      }
    }
  }),
  option: (provided, Option) => ({
    ...provided,
    '&:hover': {
      background: Option.color,
    }
  }),
};