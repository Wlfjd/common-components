import { useState } from 'react';

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenStatus = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggle: toggleOpenStatus };
};

export default useToggle;
