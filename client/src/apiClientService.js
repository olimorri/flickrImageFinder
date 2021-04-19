export function getImages() {
  return fetch(`http://localhost:3001/photos`).then((response) => response.json());
}
