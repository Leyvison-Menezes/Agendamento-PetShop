import { apiConfig } from "./api-config"

export async function loadSchedules({ date, hour }) {
    try {
        const response = await fetch(`${apiConfig.baseUrl}/schedules`)
        const data = response.json()

        // iniciando a filtragem por dia e hora...

        alert("Carregamento realizado com sucesso!")
    } catch (error) {
        alert("Não foi possível carregar os agendamentos!")
    }
}