import React, { createContext, useState } from "react";

export const BillContext = createContext();

const ContextProvider = ({ children }) => {
  const [BillPdfData, setBillPdfData] = useState({});
  return (
    <BillContext.Provider value={{ BillPdfData, setBillPdfData }}>
      {children}
    </BillContext.Provider>
  );
};

export default ContextProvider;
