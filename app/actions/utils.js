export function request_content(method, body = null) {
  let content =  {
    method: method,
    headers: {
      "authorization": localStorage.getItem('bcjwt'),
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }

  if (body) {
    content = {...content, body};
  }
  return content;
}
