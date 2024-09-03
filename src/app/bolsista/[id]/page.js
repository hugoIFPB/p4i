import { getBolsistasById } from '../../../lib/bolsistas';

export default async function BolsistaView({ params }) {
    const bolsista = await getBolsistasById(params.id);
  return (
    <div>
      <h1>Dados do Aluno</h1> 
      <p><strong>ID:</strong> {bolsista.id}</p>
      <p><strong>Nome:</strong> {bolsista.nome}</p>
    </div>
  );
}
