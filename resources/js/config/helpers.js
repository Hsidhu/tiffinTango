import { axiosConfig } from "./constants";

export const getBase64FileReader = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
});

export const imageUrl = (uri) => {
    return `${axiosConfig.HOST_URL}${uri}`
}
