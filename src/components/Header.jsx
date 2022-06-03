import React from "react";

import Presupuesto from "./Presupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) => {
  return (
    <header>
      <h1>Control de Gastos</h1>

      {isValidPresupuesto ? (
        <p>Control Presupuesto</p>
      ) : (
        <Presupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
