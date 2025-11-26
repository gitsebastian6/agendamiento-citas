<template>
  <div class="row justify-left position-fixed text-subtitle bg-page-top bg-page">
    <h5>Panel de administración y estadisticas de tu barberia</h5>
  </div>
  <div class="row q-col-gutter-md justify-center q-pa-lg bg-page">
    <q-col v-for="(card, index) in cards" :key="index" class="size-box">
      <CardsComponent
        :icon="card.icon"
        :iconColor="card.iconColor"
        :label="card.label"
        :value="card.value"
      />
    </q-col>
  </div>
  <q-separator class="q-my-xl" />
  <!-- Tarjetas de acción (card de abajo) -->
  <div class="row justify-center q-col-gutter-md">
    <q-col v-for="(card, index) in cards2" :key="index" class="size-box2">
      <CardActionComponent
        :title="card.title"
        :icon="card.icon"
        :placeholder="card.placeholder"
        @click="() => console.log(`Acción de: ${card.title}`)"
      />
    </q-col>
  </div>
  <q-separator class="q-my-xl" />
  <FComponent />
  <router-view />
</template>

<script setup>
import CardActionComponent from 'src/components/CardActionComponent.vue'
import CardsComponent from 'src/components/CardsComponent.vue'
import FComponent from 'src/components/FComponent.vue'

import { ref } from 'vue'

const cards = ref([
  { icon: 'people', iconColor: '#4caf50', label: 'Clientes Registrados', value: 1200 },
  { icon: 'content_cut', iconColor: '#2196f3', label: 'Servicios Disponibles', value: 35 },
  { icon: 'calendar_today', iconColor: '#ff9800', label: 'Total Citas', value: 45 },
  { icon: 'schedule', iconColor: '#673ab7', label: 'Citas Pendientes', value: 12 },
])

const cards2 = ref([
  {
    title: 'Acciones rapidas',
    icon: 'flash_on',
    placeholder: '',
  },
])
</script>

<style scoped lang="scss">
.bg-page-top {
  padding-left: 4%;
  padding-top: 150px !important;
}

.size-box {
  width: 50%;
  height: 50%;
}
.size-box2 {
  width: 95%;
  width: flex;
}
</style>
