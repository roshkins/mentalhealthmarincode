export function checkHttpResponseJson(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}
