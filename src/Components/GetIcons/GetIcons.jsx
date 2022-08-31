import * as Icons from "react-icons/fa";

/* Your icon name from database data can now be passed as prop */
const GetIcons = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return <Icons.FaEyeSlash />;
  }

  return <IconComponent />;
};

export default GetIcons;