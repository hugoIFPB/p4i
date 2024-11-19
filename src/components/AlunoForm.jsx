import { useState } from 'react'

export default function AlunoForm({ onAddAluno }) {
  const [name, setName] = useState('')
  const [project, setProject] = useState('')
  const [startDate, setStartDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddAluno({ name, project, startDate })
    setName('')
    setProject('')
    setStartDate('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Aluno"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Projeto"
        value={project}
        onChange={(e) => setProject(e.target.value)}
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <button type="submit">
        Adicionar Aluno
      </button>
    </form>
  )
}