import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* Tutaj dodaj kod dla układu strony */}
      <header>
        <h1>Moja strona</h1>
        {/* Dodaj inne elementy nagłówka */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Dodaj stopkę strony */}
        <p>Stopka strony</p>
      </footer>
    </div>
  );
};

export default Layout;
