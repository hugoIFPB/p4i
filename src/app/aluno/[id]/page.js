import db from "@/lib/db";

export default async ({params}) => {
    const aluno = await db.query(
        "select * from aluno where id = "+params.id
    );
    return (
        <>
            <h1>Página do aluno: 
                {aluno.rows[0].name}
            </h1>
            <p>O aluno faz parte do projeto 
                {aluno.rows[0].project}
            </p>
        </>
    )
}