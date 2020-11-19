import axios from "axios";

/**
 * Caso for rodar em um aparelho físico
 * Precisa alterar a baseURL para o ip do seu computador
 * Ex.: 'http://192.168.0.111:3333'
 */
const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;