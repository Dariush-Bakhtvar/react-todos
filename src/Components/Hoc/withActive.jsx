import { useState } from 'react';
const withActive = (WrappedComponent) => {
  const UpdatedComponent = (props) => {
    const [isActive, setIsActive] = useState(false);
    const isActiveToggler = () => {
      setIsActive(!isActive);
    }
    return <WrappedComponent {...props} isActive={isActive} setIsActive={isActiveToggler} />
  }
  return UpdatedComponent;
}

export default withActive