<template>
  <q-layout view="lHh lpr lFf">
    <HeaderComponent :title="title" :icon="icon" :placeholder="placeholder" :tabs="tabs" />

    <q-page-container style="padding-top: 0">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

import HeaderComponent from 'src/components/HeaderComponent.vue'

const title = 'BarberPro Admin'
const icon = 'content_cut'
const placeholder = 'Barberia y Estética S.A.S'

const tabs = ref([
  { name: 'home', icon: 'home', label: 'Dashboard', to: '/dashboard' },
  { name: 'agenda', icon: 'calendar_today', label: 'Agenda' },
  { name: 'clientes', icon: 'group', label: 'Clientes' },
  { name: 'servicios', icon: 'content_cut', label: 'Servicios' },
  { name: 'configuracion', icon: 'settings', label: 'Configuración' },
  { name: 'salir', icon: 'exit_to_app', label: 'Salir', to: '/home' },
  //{ name: 'reportes', icon: 'bar_chart', label: 'Reportes' },
])
</script>
