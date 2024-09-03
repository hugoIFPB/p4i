import db from './db';

export async function getBolsistasById(id) {
    
        console.log(process.env.POSTGRES_URL);
        const result = await db.query('SELECT * FROM bolsista WHERE id = $1', [id]);
        return result.rows[0];
}
