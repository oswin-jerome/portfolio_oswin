import NavBar from "@/components/navBar";
import { ReactNode } from "react";

const AppTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />

      {children}
    </div>
  );
};

export default AppTemplate;
