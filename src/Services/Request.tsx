export const requestApi = async (url: string, method: string = "GET") => {
    let response = await fetch(url, {method:method})
    let result = response.json();
    return result;
}