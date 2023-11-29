import Axios from "axios";

const apiDeputados = Axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2'
})

export default apiDeputados