export const buildUrl = (path) => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL.replace(/\/+$/, '');
  const cleanPath = path.replace(/^\/+/, '');
  return `${baseUrl}/${cleanPath}`;
};