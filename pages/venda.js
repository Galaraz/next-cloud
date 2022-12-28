import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

//import ReactGA from 'react-ga';
//import ContentHeade from '../components/ContentHeader';
// import Select from 'react-select';
import Paginate from 'react-js-pagination';


import { descriptionDefault, urlImgs, urlSite, moneyFormatter, titleSite, itensPorPagina, handleUrl, urlFavicon } from '../utils';

import Place from '../img/place.svg';
import SmFoto from '../img/sm-foto.jpg';
import Sm1Foto from '../img/sm-1foto.jpg';


export default function Venda(props) {
 const result = props.busca


 const {pagina_atual,total_registros,imoveis} = result;

    const [ pagina, setPagina ] = useState(pagina_atual);
    const [ busca, setBusca ] = useState('');

    useEffect(() => {
        // if (props.location.search) {
        //     const search = handleUrl(props.location.search);
        //     search.pagina && setPagina(parseInt(search.pagina));
        //     search.ordenacao && setFiltrado(parseInt(search.ordenacao));
        //     getDados(search);
        // } else {
        //     getDados({});
        // }
        handleScroll();        

        //ReactGA.initialize(gaId, {debug: false});
        //ReactGA.pageview(props.location.pathname);

    },[]);
   


    function handlePaginacao(value) {         
        setPagina(value);
        setBusca(value);        
    }

 

    function handleScroll() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

 

    return (
        <>
            <Head>
                
                <link rel="apple-touch-icon" sizes="57x57" href={ `${urlFavicon}apple-icon-57x57.png`} />
                <link rel="apple-touch-icon" sizes="60x60" href={ `${urlFavicon}apple-icon-60x60.png` } />
                <link rel="apple-touch-icon" sizes="72x72" href={ `${urlFavicon}apple-icon-72x72.png` } />
                <link rel="apple-touch-icon" sizes="76x76" href={ `${urlFavicon}apple-icon-76x76.png` } />
                <link rel="apple-touch-icon" sizes="114x114" href={ `${urlFavicon}apple-icon-114x114.png` } />
                <link rel="apple-touch-icon" sizes="120x120" href={ `${urlFavicon}apple-icon-120x120.png` } />
                <link rel="apple-touch-icon" sizes="144x144" href={ `${urlFavicon}apple-icon-144x144.png` } />
                <link rel="apple-touch-icon" sizes="152x152" href={ `${urlFavicon}apple-icon-152x152.png` } />
                <link rel="apple-touch-icon" sizes="180x180" href={ `${urlFavicon}apple-icon-180x180.png` } />
                <link rel="icon" type="image/png" sizes="192x192"  href={ `${urlFavicon}android-icon-192x192.png` } />
                <link rel="icon" type="image/png" sizes="32x32" href={ `${urlFavicon}favicon-32x32.png` } />
                <link rel="icon" type="image/png" sizes="96x96" href={ `${urlFavicon}favicon-96x96.png` } />
                <link rel="icon" type="image/png" sizes="16x16" href={ `${urlFavicon}favicon-16x16.png` } />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content={ `${urlFavicon}ms-icon-144x144.png` } />
                <meta name="theme-color" content="#ffffff" />

                <meta name="description" content={descriptionDefault} />
                <meta name="og:site_name" property="og:site_name" content={titleSite} />
                <meta name="og:title" property="og:title" content={`Venda | ${titleSite}`} />
                <meta name="og:url" property="og:url" content={`${urlSite}/venda`} />
                <meta name="og:description" property="og:description" content={descriptionDefault} />                             
                <meta name="og:image" property="og:image" content={`${urlFavicon}padrao.png`} />
                <meta name="og:image:width" property="og:image:width" content="300" />
                <meta name="og:image:height" property="og:image:height" content="300" />
                <title>Venda | {titleSite}</title>
            </Head>
            
            <div className="main">
                
                {/* <ContentHeade title="Imóveis para Venda"  />  */}

                <div className="container px-4 px-sm-0">

                                    
                    {total_registros > 0 ? (                        
                        <>                            

                        { (imoveis && imoveis.length > 0 ) && (
                            <>                            
                            <header className= "d-flex topo-grid justify-content-between align-items-md-center flex-column flex-md-row pt-2 pt-md-5">
                                <div className="d-none d-md-block font-14 font-md-18 qtde text-right text-md-left pr-0 pr-md-5">                                      
                                    <b className="pr-2 pl-2 pl-md-0">{total_registros > 1 ? `${total_registros} imóveis` : `${total_registros} imóvel` }</b>
                                </div>
                                <div className="pt-3 pt-md-0">  
                                   {/* <Select className="select filtro" classNamePrefix="react-select" defaultInputValue={filtrado ? filtrado : ''} onChange={(e) => handleOrdenacao(e.value)} name="" placeholder="FILTRAR" options={filtros} />  */}
                                </div>
                            </header>
                            
                            <div className="row pt-2 pb-5">
                                
                                { imoveis.map(imovel => {
                                    return (
                                        <div key={imovel.id} className="col-12 col-md-6 col-xl-3 py-4">
                                            <Link href={`/imovel/${imovel.id}`} className="d-flex flex-column shadow h-100 item-grid">                                        
                                                <div className="foto position-relative">
                                                    { imovel.imagem ? <Image src={`${urlImgs}/${imovel.imagem}`} alt={imovel.tipo} width="320" height="200" />  : ""}
                                                    { !imovel.imagem  && imovel.maisimagens ? <Image src={Sm1Foto} alt={imovel.tipo} width="320" height="200" /> : "" }
                                                    { !imovel.imagem  && !imovel.maisimagens ? <Image src={SmFoto} alt={imovel.tipo} width="300" height="200" /> : "" }      
                                                    {/* <Skeleton className="skeleton-absolute" /> */}
                                                </div>
                                                <div className="d-flex flex-grow-1 flex-column px-3 py-3">
                                                    
                                                    <div className="flex-grow-2">
                                                        <div className="font-12 font-md-11 line-height-100">{imovel.finalidade}{imovel.tipo && <small className="ml-1 font-italic opacity-50">({imovel.tipo})</small>}</div>
                                                        <div className="font-20">
                                                            { imovel.valor ? (
                                                                <b>R$ {moneyFormatter(imovel.valor)}</b>
                                                            ) :
                                                            (
                                                                <b>Consulte-nos</b> 
                                                            ) }
                                                            
                                                        </div>
                                                        { imovel.valor_condominio && <div className="font-12 font-md-11 line-height-100">Condomínio: R$ {moneyFormatter(imovel.valor_condominio)}</div> }
                                                    </div>

                                                    <div className="d-flex infos flex-grow-1 align-items-center py-3">
                                                        <div className="d-flex">
                                                            { imovel.dormitorios != 0 && <div className="info info-dormitorios font-12 font-md-11 line-height-100 pr-3"><div>{imovel.dormitorios}</div></div> }
                                                            { imovel.banheiros != 0 && <div className="info info-banheiros font-12 font-md-11 line-height-100 pr-3"><div>{imovel.banheiros}</div></div> }
                                                            { imovel.area != 0 && <div className="info info-area font-12 font-md-11 line-height-100 pr-3"><div>{imovel.area} m<sup>2</sup></div></div> }
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="endereco font-12 line-height-130">
                                                        <Image src={Place} alt="" width="100" height="100" />
                                                        {`${imovel.bairro} | ${imovel.cidade}/${imovel.uf}`}
                                                    </div>                                            
                                                </div>                                        
                                            </Link>
                                        </div>
                                    );

                                }) }

                            </div>

                            { total_registros > itensPorPagina && (
                                <div className="d-flex justify-content-center pt-2 pb-5 pagination-container">
                                    <Paginate                                     
                                        hideFirstLastPages={true}
                                        activePage={pagina ? pagina : 1}
                                        itemsCountPerPage={itensPorPagina}
                                        totalItemsCount={total_registros}
                                        pageRangeDisplayed={5}                                    
                                        onChange={e => handlePaginacao(e)}
                                    /> 
                                </div> 
                            ) }
                            

                            </>                     
                        ) }
                        </>
                    
                    ) : (
                        <div className="text-center py-5 my-5 font-32 opacity-50">Nenhum imóvel</div>                        
                    )}

                </div>       

            </div> 

        </>
    );
}

export async function getServerSideProps() {
 
    const resposta = await fetch(urlSite+"/api/venda")
    const list = await resposta.json()
     
    
    return {
      props: list, // will be passed to the page component as props
    }
  }