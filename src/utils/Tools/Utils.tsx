import { MoneyFormat } from '@Interface/UtilsInterface';

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