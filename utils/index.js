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


const moneyFormatter = (valor) => { 
    // eslint-disable-next-line
    return parseFloat(valor).toFixed(2).replace('.',',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
}

const existsOrError = (value) => {
    if(!value) return false;
    if(Array.isArray(value) && value.length === 0) return false;
    if(typeof value === 'string' && !value.trim()) return false;

    return true;
}

const IsEmail = (email) => { 
    // eslint-disable-next-line
    var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;var check=/@[\w\-]+\./;var checkend=/\.[a-zA-Z]{2,3}$/;if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}else {return true;} 
}

const notify = (tipo, mensagem) => {

    if (tipo === 'sucesso') {
        toast.success(mensagem, {
            position: toast.POSITION.BOTTOM_RIGHT,
            //className: 'foo-bar',
            autoClose: 5000
        });            
    } else if (tipo === 'erro') {
        toast.error(mensagem, {
            position: toast.POSITION.BOTTOM_RIGHT,
            //className: 'foo-bar',
            autoClose: 5000
        });
    } else if (tipo === 'aviso') {
        toast.warn(mensagem, {
            position: toast.POSITION.BOTTOM_RIGHT,
            //className: 'foo-bar' ,
            autoClose: 5000
        });
    }

}

const isMobile = (celular) => {
    const numero = celular.replace('-', '').replace('(', '').replace(')', '').replace(' ', '').replace('_', '');
    const telefones_blacklist = ['000000000', '111111111','222222222','333333333','444444444','555555555','666666666','777777777','888888888','999999999'];
    let validaBlacklist = true;
    telefones_blacklist.forEach(function(valida){
            if(valida === numero.substr(2,9)){
                validaBlacklist = false;
                return false;
            }
        }
    );
    
    if(numero.length === 11 && numero.substr(2,1) === '9' && validaBlacklist){ 
        return true; 
    }else{ 
        return false;  
    } 
}

const handleUrl = (url) => {    
    const urlArr = url.replace('?','').split('&');
    const objeto = {}
    urlArr.map(item => {        
        if (item.split('=')[0] === "pg") {                    
            const value = item.split('=')[1];
            objeto["pagina"] = value;
        } else if (item.split('=')[0] === "ordenacao") {            
            const value = item.split('=')[1];
            objeto["ordenacao"] = value;
        }        
    });
    return objeto;
}


function verificarCreci(creci){
   
    if (creci) {
        let result = creci.substr(-1).toUpperCase();
        if (result === 'J'){
           return "Nossos Corretores";
        }
        else{
          return "Perfil do Corretor";
        }
    }
    return '';
 }
 
export { 
    apiUrl,     
    apiId, 
    urlImgs, 
    urlSite,
    descriptionDefault,
    moneyFormatter, 
    existsOrError,     
    IsEmail, 
    isMobile, 
    notify, 
    titleSite, 
    itensPorPagina,    
    verificarCreci,
    handleUrl,
    scrollTopDist,
    headerFixed,
    gaId,
    reloadTime,
    urlFavicon,
    urlFacebook,
    urlInstagram
}
