'use client'
import { useState, useEffect } from 'react'
import AlunoForm from '../../components/AlunoForm'
import AlunoList from '../../components/AlunoList'

export default function Home() {
  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    fetchAlunos()
  }, [])

  const fetchAlunos = async () => {
    const response = await fetch('/api/alunos')
    const data = await response.json()
    setAlunos(data)
  }

  const addAluno = async (aluno) => {
    const response = await fetch('/api/alunos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(aluno),
    })
    if (response.ok) {
      fetchAlunos() 
    }
  }

  const deleteAluno = async (id) => {
    const response = await fetch(`/api/alunos/${id}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      fetchAlunos()
    }
  }

  return (
    <div >
      <h1>Gerenciamento de Alunos</h1>
      <AlunoForm onAddAluno={addAluno} />
      <AlunoList alunos={alunos} onDeleteAluno={deleteAluno} />
    </div>
  )
}