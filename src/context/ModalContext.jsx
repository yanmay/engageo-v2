import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext({ open: false, openModal: () => {}, closeModal: () => {} });

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener('open-audit-modal', handleOpen);
    return () => window.removeEventListener('open-audit-modal', handleOpen);
  }, []);

  return (
    <ModalContext.Provider value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}>
      {children}
    </ModalContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useModal() {
  return useContext(ModalContext);
}
