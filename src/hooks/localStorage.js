import { useEffect } from 'react';
import { useState } from 'react';

export const useLocalStorage = (key, defaultContacts) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultContacts;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
