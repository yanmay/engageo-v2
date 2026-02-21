import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext({ open: false, openModal: () => {}, closeModal: () => {} });

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
