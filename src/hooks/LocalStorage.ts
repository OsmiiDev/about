'use client';

import {useState, useEffect, SetStateAction, Dispatch} from 'react';

function getStorageValue(key: string, defaultValue: string) {
  if (typeof window === 'undefined') return defaultValue;

  const localStorage = window?.localStorage ?? null;
  if (!localStorage) {
    return defaultValue;
  }

  const saved = localStorage.getItem(key);
  return saved ?? defaultValue;
}

export const useLocalStorage = (
    key: string,
    defaultValue: string,
): [string, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const localStorage = window?.localStorage ?? null;
    if (!localStorage) {
      return;
    }

    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};
