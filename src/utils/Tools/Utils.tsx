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