export const requestApi = async (url: string, method: string = "GET",body:Object = {}) => {
    const headers = {
        "Content-Type": "application/json"
      };
    let contentRequest = method === "GET" ? {method:method} : {method:method,body:JSON.stringify(body)}
    let response = await fetch(url,{...contentRequest,headers})
    let result = response.json();
    return result;
}