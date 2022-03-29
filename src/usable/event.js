import { ref, onMounted } from 'vue'
import { fetchEvents, storeEvent, muteateEvent, destroyEvent } from '../api/eventTracker'

export default function useEvents() {
    const getEvents = ref([])

    const setEvents = async () => {
        getEvents.value = await fetchEvents
    }

    const createEvent = async (event) => {
        storeEvent(event)
    }

    const updateEvent = async (event, id) => {
        muteateEvent(event, id)
    }

    const deleteEvent = async (id) => {
        destroyEvent(id)
    }

    onMounted(setEvents)

    return {
        getEvents,
        setEvents,
        createEvent,
        updateEvent,
        deleteEvent,
    }
}