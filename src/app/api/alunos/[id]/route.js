import { NextResponse } from 'next/server'
import pool from "@/lib/db";

export async function DELETE(request, { params }) {
  try {
    const { id } = params
    const client = await pool.connect()
    await client.query('DELETE FROM aluno WHERE id = $1', [id] )
    client.release()
    return NextResponse.json({ message: 'Aluno removido com sucesso' })
  } catch (error) {
    console.error('Erro removendo aluno:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}