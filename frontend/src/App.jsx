import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [itens, setItens] = useState([]);

  const fetchItens = async () => {
    const res = await axios.get("http://localhost:5000/items");
    setItens(res.data);
  };

  const enviarItem = async () => {
    await axios.post("http://localhost:5000/items", { nome, descricao });
    setNome("");
    setDescricao("");
    fetchItens();
  };

  useEffect(() => {
    fetchItens();
  }, []);

  return (
    <div>
      <h1>Cadastro de Itens</h1>
      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <button onClick={enviarItem}>Cadastrar</button>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            {item.nome} - {item.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
