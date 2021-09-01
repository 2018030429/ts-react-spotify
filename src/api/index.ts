type Params = {
  url: string,
  params?: any,
  method: any,
  body?: any,
  headers: any
}

export default function apiCall({
  url,
  body,
  headers,
  method
}: Params) {
  return fetch(url, { 
    method, 
    body, 
    headers, 
  })
}