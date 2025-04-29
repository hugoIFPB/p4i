
import { NextResponse } from 'next/server'
import pool from "../../../lib/db";

export async function GET() {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM aluno')
    client.release()
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Erro listando alunos:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { name, project, startDate } = await request.json()
    const client = await pool.connect()
    await client.query(
      'INSERT INTO aluno (name, project, start_date) VALUES ($1, $2, $3)',
      [name, project, startDate]
    )
    client.release()
    return NextResponse.json({ status: 201 })
  } catch (error) {
    console.error('Error adding aluno:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}