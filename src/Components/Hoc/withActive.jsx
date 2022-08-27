import { useState } from 'react';
const withActive = (WrappedComponent) => {
  const UpdatedComponent = (props) => {
    const [isActive, setActive] = useState(false);
    const isActiveToggler = () => {
      setActive(!isActive);
    }
    return <WrappedComponent {...props} isActive={isActive} setActive={isActiveToggler} />
  }
  return UpdatedComponent;
}

export default withActive