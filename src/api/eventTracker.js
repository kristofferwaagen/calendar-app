const baseURL = 'https://localhost:3000'

export const fetchEvents = async () => {
    const response = await fetch(`${baseURL}/events`)
    return await response.json()
}