import ItemLista from "./itemLista";

function App() {
  const listaMercado = ["Banana", "maca"];

  return (
    <>
      <h1>Lista De Mercado</h1>
      <input type="text" placeholder="Digite um item" />
      <button>Adicionar</button>

      <ul>
        {listaMercado.map(() => {})}
        <ItemLista />
        <ItemLista />
        <ItemLista />
        <ItemLista />
      </ul>
    </>
  );
}

export default App;
