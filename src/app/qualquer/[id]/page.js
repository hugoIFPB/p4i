import { getBolsistasById } from '@/lib/bolsistas';

export default async ({params})=> { 
    const bolsista = await getBolsistasById(params.id);
    return (
    <>
        <h1>{bolsista.nome}</h1>
    </>
)};