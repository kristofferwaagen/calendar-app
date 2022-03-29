<script setup>
import { ref, reactive } from 'vue'
import '@fullcalendar/core/vdom'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

const id = ref(0)

const options = reactive({
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
      left: 'prev,next,today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,listDay'
  },
  editable: true,
  selectable: true,
  weekends: true,
  select: (arg) => {
      id.value = id.value + 1

      const cal = arg.view.calendar
      cal.unselect()
      cal.addEvent({
          id: `${id.value}`,
          title: `New event ${id.value}`,
          start: arg.start,
          end: arg.end,
          allDay: true
      })
  },
  eventClick: (arg) => {
      console.log(arg.event.title)
  }
})
</script>
<template>
  <FullCalendar v-bind:options="options" />
</template>