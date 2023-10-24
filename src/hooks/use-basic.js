import { useState } from 'react';

const useBasicInput = () => {
  const [entredText, setEnteredText] = useState;

  return { entredText };
};

export default useBasicInput;
