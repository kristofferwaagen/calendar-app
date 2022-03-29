const baseURL = 'https://localhost:3000'

export const fetchEvents = async () => {
    const response = await fetch(`${baseURL}/event`)
    return await response.json()
}

export const storeEvent = async (event) => {
    return await fetch(`${baseURL}/event`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(event)
    })
}

export const mutateEvent = async (event, id) => {
    return await fetch(`${baseURL}/event/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(event)
    })
}

export const destroyEvent = async (id) => {
    return await fetch(`${baseURL}/event/${id}`, {
        method: 'DELETE'
    })
}