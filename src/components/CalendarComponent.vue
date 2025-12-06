<template>
  <div class="q-pa-md">
    <!-- Calendario -->
    <FullCalendar ref="calendarRef" :options="calendarOptions" />

    <!-- Diálogo para crear/editar cita -->
    <CitaDialogComponent v-model="dialog.visible" :mode="dialog.mode" :appointment="selectedAppointment"
      :status-options="statusOptions" @save="handleSave" @delete="handleDelete" />
  </div>
  <router-view />
</template>

<script setup>
import { ref, reactive } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import CitaDialogComponent from './CitaDialogComponent.vue' // asegúrate de la ruta correcta

/* ---------- Estados ---------- */
const STATUS = {
  PENDIENTE: 'pendiente',
  CONFIRMADA: 'confirmada',
  CANCELADA: 'cancelada',
}

const statusOptions = [
  { label: 'Pendiente', value: STATUS.PENDIENTE },
  { label: 'Confirmada', value: STATUS.CONFIRMADA },
  { label: 'Cancelada', value: STATUS.CANCELADA },
]

/* ---------- Datos iniciales ---------- */
const appointments = ref([
  { id: '1', title: 'Consulta general', date: '2025-04-15', status: STATUS.CONFIRMADA },
  { id: '2', title: 'Control mensual', date: '2025-04-16', status: STATUS.PENDIENTE },
])

/* ---------- Calendar ref y utilidades ---------- */
const calendarRef = ref(null)

function colorByStatus(status) {
  if (status === STATUS.CONFIRMADA) return '#4caf50'
  if (status === STATUS.PENDIENTE) return '#2196f3'
  if (status === STATUS.CANCELADA) return '#f44336'
  return '#9e9e9e'
}

function mapEvents() {
  return appointments.value.map((a) => ({
    id: a.id,
    title: a.title,
    start: a.date,
    allDay: true,
    backgroundColor: colorByStatus(a.status),
    borderColor: colorByStatus(a.status),
    extendedProps: { status: a.status },
  }))
}

/* ---------- Dialog / Form state ---------- */
const dialog = reactive({
  visible: false,
  mode: 'create', // 'create' | 'edit'
  editId: null,
})

const selectedAppointment = reactive({
  title: '',
  date: '',
  status: STATUS.PENDIENTE,
})

/* ---------- Abrir diálogo ---------- */
function openCreate(dateStr) {
  dialog.mode = 'create'
  dialog.editId = null
  selectedAppointment.title = ''
  selectedAppointment.date = dateStr || ''
  selectedAppointment.status = STATUS.PENDIENTE
  dialog.visible = true
}

function openEdit(event) {
  const id = event.id || (event.event && event.event.id)
  const appt = appointments.value.find((a) => a.id === id)
  if (!appt) return
  dialog.mode = 'edit'
  dialog.editId = id
  selectedAppointment.title = appt.title
  selectedAppointment.date = appt.date
  selectedAppointment.status = appt.status
  dialog.visible = true
}

/* ---------- CRUD ---------- */
function handleSave(appt) {
  if (!appt.title || !appt.date) return

  if (dialog.mode === 'create') {
    const id = String(Date.now())
    appointments.value.push({ id, ...appt })
  } else if (dialog.mode === 'edit') {
    const idx = appointments.value.findIndex((a) => a.id === dialog.editId)
    if (idx !== -1) appointments.value[idx] = { id: dialog.editId, ...appt }
  }

  dialog.visible = false
  refreshCalendar()
}

function handleDelete() {
  if (dialog.mode !== 'edit') return
  appointments.value = appointments.value.filter((a) => a.id !== dialog.editId)
  dialog.visible = false
  refreshCalendar()
}

/* ---------- Refrescar calendario ---------- */
function refreshCalendar() {
  const cal = calendarRef.value?.getApi?.()
  if (!cal) return
  cal.removeAllEvents()
  cal.addEventSource(mapEvents())
}

/* ---------- Opciones del calendario ---------- */
const calendarOptions = {
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay',
  },
  selectable: true,
  editable: false,
  events: mapEvents(),

  dateClick(info) {
    openCreate(info.dateStr)
  },

  eventClick(info) {
    openEdit(info.event)
  },
}
</script>

<style scoped>
.fc .fc-toolbar-title {
  font-weight: 600;
}
</style>
