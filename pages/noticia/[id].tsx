import Head from 'next/head';


import { apiUrl,  apiId,  titleSite, } from '../../utils';

export default function Noticia(props: any) {    

    

   
    return (
        <>        
            <Head>

       
                <title>{ `Notícia | ${titleSite}` }</title>
            </Head>

        
             <h1>noticia</h1>
     

                          

             
        </>
            
    );
}



export async function getServerSideProps(context: { query: any; }) {
  const {query} = context;
   
    const corpo = await JSON.stringify( {
      acoes: [                        
        { metodo: "noticia", params:  [{ registro: query.id }] },
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