import Card from "./components/Card";
import { useState } from "react";
import styles from "./index.modules.css";

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [colorList, setColorList] = useState([]);
  const [colorName, setcolorName] = useState("");
  const [colorHexidecimal, setcolorHexidecimal] = useState("");
  const [inputValue, setInputValue] = useState("");
  const handlerColorSubmit = (event) => {
    event.preventDefault();

    const newColor = {
      name: colorName,
      colorHex: colorHexidecimal,
    };
    setColorList((OldColorList) => [...OldColorList, newColor]);
  };
  const colorListedStatus = () => {
    const colorsList = colorList.map((color) => {
      return color;
    });
    setColorList(colorsList);
  };

  return (
    <div className="App">
      <form onSubmit={handlerColorSubmit}>
        <h1>ADICIONAR NOVA COR</h1>
        <p>Nome</p>
        <div className={styles.input}>
          <input
            type="text"
            name="name"
            id="name"
            value={colorName}
            onChange={(event) => setcolorName(event.target.value)}
            minLength={3}
            onBlur={(e) => setInputValue(e.target.value)}
          />
        </div>
        <p>Cor</p>
        <div className={styles.input}>
          <input
            type="text"
            name="colorHex"
            id="colorHex"
            placeholder="Insira sua cor no formato Hexadecimal"
            value={colorHexidecimal}
            onChange={(event) => setcolorHexidecimal(event.target.value)}
            minLength={6}
            onBlur={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <h1>CORES FAVORITAS</h1>
      <div className={styles.cards}>
        {colorList &&
          colorList.map((color, index) => {
            return (
              <Card
                key={index}
                color={color}
                colorListedStatus={() => colorListedStatus(color)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
