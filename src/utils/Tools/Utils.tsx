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

export const loadScript = (src:string) => new Promise((resolve, reject):void => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve({ok:true})
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve({ok:true})
    script.onerror = (err) => reject(err)
    document.body.appendChild(script)
  })

  export  const getUrlParameter = (name:string) =>{
    let location = window.location;
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};