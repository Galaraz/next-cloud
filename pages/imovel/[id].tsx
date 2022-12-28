import { apiId, apiUrl,  } from '../../utils';



export default function Imovel(props: any) {
 
 return(<h1>olamundo</h1>)
}

export async function getServerSideProps(context: { query: any; }) {
const {query} = context;
 
  const corpo = await JSON.stringify( {
    acoes: [                        
      { metodo: "dadosimovel", params:  [{ registro: query.id }] },
    ], id: apiId
  });
  const resposta = await fetch(
        
    apiUrl,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: corpo
    }
   
  )
 
  const list = await resposta.json()
    
  return {
    props: list, 
  }
}