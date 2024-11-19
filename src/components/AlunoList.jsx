export default function AlunoList({ alunos, onDeleteAluno }) {
    return (
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            <span>{aluno.name} - {aluno.project} (Início: {aluno.start_date})</span>
            <button style={{backgroundColor:"transparent", color:"#f00"}}
              onClick={() => onDeleteAluno(aluno.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    )
  }