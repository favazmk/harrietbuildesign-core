import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
}

const Layout = ({ children, showHeader = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grain-overlay" style={{ zIndex: 40 }} />
      {showHeader && <Header />}
      <main className={showHeader ? "flex-1 pt-16" : "flex-1"}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
