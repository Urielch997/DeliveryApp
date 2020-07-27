import { useState, useEffect } from "react";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [sourceData, setSourceData] = useState([]);

  const filter = () => {
    const value = searchValue.toLowerCase().trim().split(" ");
    const filteredData = sourceData.filter((item, i) => {
      let res = false;
      for (const prop in item) {
        if (value.length === 1) {
          // una sola palabra
          const valueTC = String(item[prop]).toLocaleLowerCase();
          const valueToCompare = valueTC.includes(value[0]);
          const valueToCompareMod = valueTC
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(value[0]);

          if (valueToCompare || valueToCompareMod) res = true;
        } else {
          // al menos 2 palabras de busqueda
          let coincidencias = 0;
          value.forEach((value, i) => {
            const valueTC = String(item[prop]).toLocaleLowerCase();
            const valueToCompare = valueTC.includes(value);
            const valueToCompareMod = valueTC
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(value);
            if (valueToCompare || valueToCompareMod) coincidencias++;
          });

          if (coincidencias >= value.length) res = true;
        }
      }
      return res;
    });
    setFiltered(filteredData);
  };

  useEffect(() => {
    filter();
  }, [searchValue, sourceData]);

  return [filtered, setSearchValue, setSourceData];
};

export default useSearch;
