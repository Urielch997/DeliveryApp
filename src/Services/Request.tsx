type method = "POST" | "GET" | "PUT" | "DELETE"

export const requestApi = async (url: string, method: method = "GET", body: Object = {}) => {
  const token = localStorage.getItem("token")
  let headers = null;
  if (token !== "") {
    headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };
  } else {
    headers = {
      "Content-Type": "application/json"
    };
  }

  let contentRequest = method === "GET" ? { method: method } : { method: method, body: JSON.stringify(body) }
  let response = await fetch(url, { ...contentRequest, headers })
  let result = response.json();
  return result;
}