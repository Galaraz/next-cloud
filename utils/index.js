import { toast } from 'react-toastify';

const apiId = "992";
const apiUrl = "https://dev.infoimoveis.com.br/webservice/hotsites.php";
const urlImgs = "https://static-dev.infoimoveis.com.br"; 
const urlSite = "http://localhost:3000/";
//const urlSite = "https://next-hotsite.pages.dev/";  
const urlFavicon = "https://next-hotsite.pages.dev/favicon/";
const urlFacebook = "";
const urlInstagram = "";
const titleSite = "Site Teste";
const descriptionDefault = "Encontre em nossos imóveis aquele que mais se adeque as suas necessidades.";
const itensPorPagina = 12;
const headerFixed = true;
const scrollTopDist = 200;
const gaId = '';
const reloadTime = 5000;


const normalizeSrc = src => {
    return src.startsWith('/') ? src.slice(1) : src;
  };
  
  const cloudflareLoader = ({ src, width, quality }) => {
    const params = [`width=${width}`];
    if (quality) {
      params.push(`quality=${quality}`);
    }
    const paramsString = params.join(',');
    return `${urlImgs}/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
  };

 
export { 
    apiUrl,     
    apiId, 
    urlImgs, 
    urlSite,
    descriptionDefault,
    titleSite, 
    itensPorPagina,    
    scrollTopDist,
    headerFixed,
    gaId,
    reloadTime,
    urlFavicon,
    urlFacebook,
    urlInstagram,
    cloudflareLoader
}
