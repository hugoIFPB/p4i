import db from './db';

export async function getBolsistasById(id) {
        const result = await db.query('SELECT * FROM bolsista WHERE id = $1', [id]);
        return result.rows[0];
}
