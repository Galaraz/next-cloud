// ./pages/ssr.tsx
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from "next";
import Place from '../img/place.svg';
import { descriptionDefault, urlImgs, urlSite, titleSite, urlFavicon, cloudflareLoader } from '../utils';

export const config = {
  runtime: "experimental-edge",
};

export const getServerSideProps = async () => {
  const apiId = "992";
  const apiUrl = "https://dev.infoimoveis.com.br/webservice/hotsites.php";
  const corpo = await JSON.stringify({
    acoes: [
      { metodo: "destaques", params: [{ resultados: "4" }] },
      { metodo: "ultimasnoticias", params: [{ resultados: "4" }] },
    ], id: apiId
  });


  return {
    props: {

     
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

const Home: NextPage<{ uuid: any; }> = ({ uuid }) => {


  const { destaques, ultimasnoticias } = uuid
  let renderSkeletonList = [];
  for (let i = 0; i < 4; i++) {
    renderSkeletonList[i] = i;
  }


  return (

    <>

      <div>

        <Head>
        <link rel="apple-touch-icon" sizes="57x57" href={ `${urlFavicon}apple-icon-57x57.png`} />
        <link rel="apple-touch-icon" sizes="60x60" href={ `${urlFavicon}apple-icon-60x60.png`} />
        <link rel="apple-touch-icon" sizes="72x72" href={ `${urlFavicon}apple-icon-72x72.png`} />
        <link rel="apple-touch-icon" sizes="76x76" href={ `${urlFavicon}apple-icon-76x76.png`} />
        <link rel="apple-touch-icon" sizes="114x114" href={ `${urlFavicon}apple-icon-114x114.png`} />
        <link rel="apple-touch-icon" sizes="120x120" href={ `${urlFavicon}apple-icon-120x120.png`} />
        <link rel="apple-touch-icon" sizes="144x144" href={ `${urlFavicon}apple-icon-144x144.png`} />
        <link rel="apple-touch-icon" sizes="152x152" href={ `${urlFavicon}apple-icon-152x152.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={ `${urlFavicon}apple-icon-180x180.png`} />
        <link rel="icon" type="image/png" sizes="192x192"  href={ `${urlFavicon}android-icon-192x192.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={ `${urlFavicon}favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="96x96" href={ `${urlFavicon}favicon-96x96.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={ `${urlFavicon}favicon-16x16.png`} />
        <link rel="manifest" href={ `${urlFavicon}manifest.json`} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={ `${urlFavicon}ms-icon-144x144.png`} />
        <meta name="theme-color" content="#ffffff" />

        {/* <!-- Primary Meta Tags --> */}
        <title>{titleSite}</title>
        <meta name="title" content={titleSite} />
        <meta name="description" content={descriptionDefault} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={urlSite} />
        <meta property="og:title" content={titleSite} />
        <meta property="og:description" content={descriptionDefault} />
        <meta property="og:image" content={`${urlFavicon}padrao.png`} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={urlSite} />
        <meta property="twitter:title" content={titleSite} />
        <meta property="twitter:description" content={descriptionDefault} />
        <meta property="twitter:image" content={`${urlFavicon}padrao.png`} />
        </Head>

        <main className="main">


          <div className="container py-4 px-4 px-sm-0">
            <div className="d-none d-md-block  ">
              {/* <Image src={logo} alt="logo" /> */}
            </div>
            <div className="pb-3 pb-md-5">
              <h2 className="color-primary font-28 m-0 pb-2">Imóveis em Destaque</h2>
              <p className="font-14 w-50 pr-0 pr-md-5">Confira em nossos principais imóveis aquele que mais se adeque as suas necessidades</p>
            </div>
            <div className="row">

              {destaques.map((dest: { id: React.Key | null | undefined; imagem: any; tipo: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; finalidade: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; valor: any; valor_condominio: any; dormitorios: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; banheiros: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; area: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; bairro: any; cidade: any; uf: any; }) => (

                <div key={dest.id} className="col-12 col-md-6 col-xl-3 py-3 py-xl-0">

                  <Link href={`/imovel/${dest.id}`} className="d-flex flex-column shadow h-100 item-grid" >

                    <div className="foto position-relative"><Image loader={cloudflareLoader} src={`${urlImgs}/${dest.imagem}`} width={290} height={200} alt="imovel" /></div>
                    <div className="d-flex flex-grow-1 flex-column px-3 py-3">

                      <div className="flex-grow-2">
                        <div className="font-12 font-md-11 line-height-100">{dest.finalidade}{dest.tipo && <small className="ml-1 font-italic opacity-50">({dest.tipo})</small>}</div>
                        <div className="font-20 color-primary">
                          {dest.valor ? (
                            <b>R$ {(dest.valor)}</b>
                          ) :
                            (
                              <b>SEM VALOR</b>
                            )}
                        </div>
                        {dest.valor_condominio && <div className="font-12 font-md-11 line-height-100 color-secondary">Condomínio: R$ {(dest.valor_condominio)}</div>}
                      </div>

                      <div className="d-flex infos flex-grow-1 align-items-center py-3">
                        <div className="d-flex">
                          {dest.dormitorios != 0 && <div className="info info-dormitorios font-12 font-md-11 line-height-100 pr-3"><div>{dest.dormitorios}</div></div>}
                          {dest.banheiros != 0 && <div className="info info-banheiros font-12 font-md-11 line-height-100 pr-3"><div>{dest.banheiros}</div></div>}
                          {dest.area != 0 && <div className="info info-area font-12 font-md-11 line-height-100 pr-3"><div>{dest.area} m<sup>2</sup></div></div>}
                        </div>
                      </div>

                      <div className="endereco font-12 line-height-130">
                        <Image loader={cloudflareLoader} src={Place} width={72} height={16} alt="" />
                        {`${dest.bairro} | ${dest.cidade}/${dest.uf}`}
                      </div>

                    </div>

                  </Link>

                </div>

              ))}

            </div>
          </div>

          <div className="container py-5 px-4 px-sm-0">
            <div className="pb-3 pb-md-5">
              <h2 className="color-primary font-28 m-0 pb-2">Notícias Imobiliárias</h2>
              <p className="font-14 w-50 pr-0 pr-md-5">Fique por dentro das últimas notícias do setor imobiliário.</p>
            </div>


            <div className="row">
             {ultimasnoticias.map((noti: { id: React.Key | null | undefined; imagem: any; titulo: string | number | boolean | React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; resumo: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; }) => (
                <div key={noti.id} className="col-12 col-md-6 col-xl-3 py-3 py-xl-0">

                  <Link href={`/noticia/${noti.id}`} className="d-flex flex-column shadow h-100 item-grid-noticia">

                    <div className="foto"><Image loader={cloudflareLoader} src={`${urlImgs}/${noti.imagem}`} width={290} height={200} alt="noticia" /></div>
                    <div className="d-flex flex-grow-1 flex-column px-3 py-3">
                      <div className="flex-grow-1"><h2 className="font-14 line-height-130 color-secondary m-0">{noti.titulo}</h2></div>
                      <div className="py-3"><p className="m-0 font-14 line-height-130">{noti.resumo}</p></div>
                      <div className="ler-mais color-primary"><span className="line-height-100 font-14">LER MATÉRIA COMPLETA</span></div>
                    </div>

                  </Link>

                </div>
              ))}

            </div>

          </div>
        </main>
      </div>
    </>
  );
};

export default Home;