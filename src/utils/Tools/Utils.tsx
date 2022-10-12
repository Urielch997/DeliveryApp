import { MoneyFormat } from '@Interface/UtilsInterface';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';

/**
 * Convertir entero a decimales de money
 */
 export const convertMoney = ({text,currency = "USD", format = "en-US"} :MoneyFormat):string => {
    const formatterDolar = new Intl.NumberFormat(format, {
      style: "currency",
      currency: currency,
    });
    let numero = text || 0
    return formatterDolar.format(numero);
  };

  export const iconProps = (icon:IconDefinition) =>{
    return icon as IconProp;
  }

  /**
   * 
   * @param src : carga script en el dom ;
   * @returns retorna la construccion del script;
   */
export const loadScript = (src:string) => new Promise((resolve, reject):void => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve({ok:true})
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve({ok:true})
    script.onerror = (err) => reject(err)
    document.body.appendChild(script)
  })


  /**
   * Obtener valores retornados por query string a traves de la url
   * @param name nombre del parametro de busqueda
   * @returns valor que contiene por el query string
   */
export  const getUrlParameter = (name:string) =>{
    let location = window.location;
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const scrollTop = () =>{
  window.scrollTo({top:0,behavior:"smooth"});
}
