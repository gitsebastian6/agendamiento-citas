<template>
  <q-page class="bg-page q-pa-sm py-5">
    <div class="q-row w-full items-center justify-end">
      <!-- Título a la izquierda -->
      <div class="text-title text-bold">
        Agenda de citas
      </div>
      <div class="full-width text-subtitle q-pa-sm row items-center justify-between">
        Gestiona las citas de tu barbería de forma visual
        <!-- Botón a la derecha -->
        <div class="justify-end q-mx-0">
          <q-btn label="Reservar Cita" @click="openDialog" class="tab-button-register" />

          <CitaDialogComponent v-model="dialogVisible" :mode="'create'" :appointment="newAppointment"
            :status-options="statusOptions" @save="handleSave" />
        </div>
      </div>
    </div>
    <q-card flat bordered rounded class="q-pa-sm full-width">
      <div class="row items-center q-gutter-md">
        <span class="text-weight-small">Estados:</span>

        <div class="row items-center q-gutter-xs">
          <div class="dot bg-red"></div>
          <span>Pendiente</span>
        </div>

        <div class="row items-center q-gutter-xs">
          <div class="dot bg-green"></div>
          <span>Confirmado</span>
        </div>

        <div class="row items-center q-gutter-xs">
          <div class="dot bg-blue"></div>
          <span>Cancelado</span>
        </div>
      </div>
    </q-card>

    <q-card class="q-pa-md q-mt-md">
      <CalendarComponent />
    </q-card>

    <router-view />
  </q-page>
  <FComponent />
</template>
<script setup>
import { ref } from 'vue'
import CalendarComponent from 'src/components/CalendarComponent.vue'
import FComponent from 'src/components/FComponent.vue'
import CitaDialogComponent from 'src/components/CitaDialogComponent.vue'


// Estado reactivo
const dialogVisible = ref(false)
const newAppointment = ref({})
const statusOptions = ref(['Pendiente', 'Confirmada', 'Cancelada'])

function openDialog() {
  newAppointment.value = {} // reinicia el objeto de cita
  dialogVisible.value = true // abre el diálogo
}

function handleSave(appointment) {
  console.log('Cita guardada:', appointment)
  dialogVisible.value = false // cierra el diálogo
}

</script>
<style>
.inline-card {
  display: inline-block;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 2px;
}

.tab-button-register {
  background: linear-gradient(90deg, #d97706, #ffc003);
  color: black;
  border-radius: 10px;
}

.tab-button-register:hover {
  background: linear-gradient(90deg, #ffc003, #d97706);
  transform: translateY(-2px);
}
</style>
