import ItemLista from "./itemLista";

function App() {
  const listaMercado = ["Banana"];

  return (
    <>
      <h1>Lista De Mercado</h1>
      <input type="text" placeholder="Digite um item" />
      <button>Adicionar</button>

      <ul>
        <li>
          <ItemLista />
          <ItemLista />
          <ItemLista />
          <ItemLista />
        </li>
      </ul>
    </>
  );
}

export default App;
