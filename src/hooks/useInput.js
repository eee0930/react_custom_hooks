import { useState } from "react";

export const useInput = (initialValue, calidator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };

  return { value, onChange };
};
