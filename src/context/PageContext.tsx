import { createContext, useState, ReactNode, useContext } from "react";

interface PageContextType {
  page: string;
  setPage: (page: string) => void;
  handleChangePage: (newPage: string) => void;
}

export const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState<string>("home");

  const handleChangePage = (newPage: string) => {
    setPage(newPage);
  };

  return (
    <PageContext.Provider value={{ page, handleChangePage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage debe usarse dentro de un PageProvider");
  }
  return context;
};
