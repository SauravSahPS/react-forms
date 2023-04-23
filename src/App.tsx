//import Forms from "./component/Forms";
//import FormsReactHookForms from "./component/FormsReactHookForms";
//import FormsWithZodValidation from "./component/FormsWithZodValidation";

import { useState } from "react";
import ProductListUseEffects from "./component/ProductListUseEffects";

const App = () => {
  const [category, setCategory] = useState("");

  return (
    <>
      <div>
        <select
          className="form-select"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=""> </option>
          <option value="Housing">Housing </option>
          <option value="Clothing">Clothing </option>
        </select>
        <ProductListUseEffects category={category} />
      </div>
    </>
  );
};

export default App;
