<template>
  <div class="row justify-center">
    <q-card class="quick-actions-card q-pa-md full-width-card">
      <!-- Título del Card -->
      <div class="row items-center q-mb-none q-pa-sm">
        <q-icon :name="props.icon" size="32px" class="q-mr-sm" />
        <h4 class="q-ma-none text-bold">{{ props.title }}</h4>
      </div>

      <!-- Botones estilo tabs/redondeados -->
      <div class="row q-col-gutter-sm q-mt-md q-mb-md justify-center flex-wrap">
        <q-btn
          v-for="(action, index) in actions"
          :key="index"
          :label="action.label"
          :icon="action.icon"
          unelevated
          rounded
          @click="$emit('action-click', action.id)"
          class="tab-button flex-grow"
        />
      </div>
    </q-card>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: 'dashboard' },
  actions: {
    type: Array,
    default: () => [
      { id: 'agenda', label: 'Ver Agenda', icon: 'calendar_today' },
      { id: 'clientes', label: 'Gestionar Clientes', icon: 'manage_accounts' },
      { id: 'servicios', label: 'Gestionar Servicios', icon: 'build' },
    ],
  },
})
</script>

<style scoped>
.full-width-card {
  width: 100%;
  max-width: 1900px; /* Opcional: para no exceder en pantallas grandes */
  min-width: 280px; /* Responsivo en pantallas pequeñas */
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(-1);
}

.tab-button {
  flex: 1 1 150px; /* Crece y se achica según el espacio disponible */
  margin: 4px 0;
}
</style>
