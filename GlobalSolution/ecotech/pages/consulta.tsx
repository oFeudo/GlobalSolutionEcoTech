import { useState } from 'react';

export default function Consulta() {
  const [filters, setFilters] = useState({ nome: '', tipoFonte: '', custo: '' });
  const [resultados, setResultados] = useState<any[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const buscarDados = async () => {
    try {
      const queryParams = new URLSearchParams(filters as any).toString();
      const response = await fetch(`/api/consulta?${queryParams}`);
      const data = await response.json();
      setResultados(data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <div>
      <h1>Consulta de Projetos</h1>
      <div>
        <label>Nome:</label>
        <input type="text" name="nome" value={filters.nome} onChange={handleInputChange} />

        <label>Tipo de Fonte:</label>
        <select name="tipoFonte" value={filters.tipoFonte} onChange={handleInputChange}>
          <option value="">Selecione</option>
          <option value="Solar">Solar</option>
          <option value="Eólica">Eólica</option>
        </select>

        <label>Custo Máximo:</label>
        <input type="number" name="custo" value={filters.custo} onChange={handleInputChange} />

        <button onClick={buscarDados}>Buscar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo de Fonte</th>
            <th>Custo</th>
            <th>Região</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((row, index) => (
            <tr key={index}>
              <td>{row.NOME}</td>
              <td>{row.TIPO}</td>
              <td>{row.CUSTO}</td>
              <td>{row.REGIAO}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
