import db from "@/lib/db"
export default async () => {
    const alunos = await db.query("select * from aluno")
 return (<>
    <h1>Lista de alunos</h1>
    <div>
      {
         alunos.rows.map( 
            a => (
               <div>
                  <h2>{a.name}</h2>
               </div>
            ) 
         )
      }
   </div>
 </>);
}