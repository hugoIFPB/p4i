import { getBolsistasById } from '../../../lib/bolsistas';

export default async function BolsistaView({ params }) {
    const bolsista = await getBolsistasById(params.id);
  return (
    <div>
      <p><strong>Olá, {bolsista.nome}</strong></p>
    </div>
  );
}
