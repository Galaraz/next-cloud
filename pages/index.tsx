// ./pages/ssr.tsx
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import Place from '../img/place.svg';
import { descriptionDefault, urlImgs, urlSite, moneyFormatter, titleSite, urlFavicon } from '../utils';

export const config = {
  runtime: "experimental-edge",
};

export const getServerSideProps = async () => {
  const apiId = "992";
  const apiUrl = "https://dev.infoimoveis.com.br/webservice/hotsites.php";
  const corpo = await JSON.stringify( {
    acoes: [                        
      { metodo: "destaques", params: [ { resultados: "4" }] },
      { metodo: "ultimasnoticias", params: [ { resultados: "4" }] },
    ], id: apiId
  });

  return {
    props: {
      
      runtime: process.env.NEXT_RUNTIME,
      
      uuid: await fetch(
        apiUrl,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: corpo
        }
      ).then((response) =>
        response.json()
      ),
    },
  };
};

const Home: NextPage<{ runtime: string; uuid: any; }> = ({ runtime, uuid,}) => {
 
  const {destaques} = uuid
  let renderSkeletonList = [];
  for (let i = 0; i < 4; i++) {
      renderSkeletonList[i] = i;        
  }


  return (
    <> 
    
    <div className={styles.container}>
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo!! {" "}
          <a href="https://nextjs.org">Next.js, Rodando na  {runtime}!</a>
        </h1>

        <div className="container py-4 px-4 px-sm-0">
                 <div  className="d-none d-md-block  ">
                  {/* <Image src={logo} alt="logo" /> */}
                  </div>
                    <div className="pb-3 pb-md-5">
                        <h2 className="color-primary font-28 m-0 pb-2">Imóveis em Destaque</h2>
                        <p className="font-14 w-50 pr-0 pr-md-5">Confira em nossos principais imóveis aquele que mais se adeque as suas necessidades</p>
                    </div>
                   
                 

                    <div className="row">
                        
                        { destaques.map((dest: { id: React.Key | null | undefined; imagem: any; tipo: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; finalidade: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; valor: any; valor_condominio: any; dormitorios: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; banheiros: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; area: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; bairro: any; cidade: any; uf: any; }) => (
                            
                            <div key={dest.id} className="col-12 col-md-6 col-xl-3 py-3 py-xl-0">
                                
                                <Link href={`/imovel/${dest.id}`} className="d-flex flex-column shadow h-100 item-grid" > 
                                            
                                    <div className="foto position-relative"><Image src={`${urlImgs}/${dest.imagem}`}width={300} height={50}  alt="imovel" /></div>
                                    <div className="d-flex flex-grow-1 flex-column px-3 py-3">
                                        
                                        <div className="flex-grow-2">
                                            <div className="font-12 font-md-11 line-height-100">{dest.finalidade}{dest.tipo && <small className="ml-1 font-italic opacity-50">({dest.tipo})</small>}</div>
                                            <div className="font-20 color-primary">
                                                { dest.valor ? (
                                                    <b>R$ {moneyFormatter(dest.valor)}</b>
                                                ) :
                                                (
                                                    <b>SEM VALOR</b>
                                                ) }                                                    
                                            </div>
                                            { dest.valor_condominio && <div className="font-12 font-md-11 line-height-100 color-secondary">Condomínio: R$ {moneyFormatter(dest.valor_condominio)}</div> }
                                        </div>

                                        <div className="d-flex infos flex-grow-1 align-items-center py-3">
                                            <div className="d-flex">
                                                { dest.dormitorios != 0 && <div className="info info-dormitorios font-12 font-md-11 line-height-100 pr-3"><div>{dest.dormitorios}</div></div> }
                                                { dest.banheiros != 0 && <div className="info info-banheiros font-12 font-md-11 line-height-100 pr-3"><div>{dest.banheiros}</div></div> }
                                                { dest.area != 0 && <div className="info info-area font-12 font-md-11 line-height-100 pr-3"><div>{dest.area} m<sup>2</sup></div></div> }
                                            </div>
                                        </div>
                                        
                                        <div className="endereco font-12 line-height-130">
                                            <Image src={Place} width={72} height={16} alt=""  />
                                            {`${dest.bairro} | ${dest.cidade}/${dest.uf}`}
                                        </div>
                                        
                                    </div>
                                                          
                                </Link>
                                
                            </div>

                        )) }

                    </div>
                </div>

      </main>
    </div>
    </>
  );
};

export default Home;