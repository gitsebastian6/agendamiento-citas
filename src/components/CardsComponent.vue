<template>
  <q-card class="stat-card q-pa-md row items-center justify-between">
    <!-- Icono + Texto a la izquierda -->
    <div class="row items-center">
      <div class="icon-box" :style="{ color: iconColor }">
        <q-icon :name="props.icon" size="32px" />
      </div>

      <div class="column justify-center q-ml-sm">
        <div class="label">
          {{ props.label }}
        </div>
      </div>
    </div>

    <!-- Número a la derecha -->
    <div class="value">
      {{ props.value }}
    </div>
  </q-card>
</template>

<script setup>
const props = defineProps({
  icon: { type: String, required: true },
  iconColor: { type: String, default: '#000' },
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
})
</script>

<style scoped>
.stat-card {
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  min-height: 110px;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.stat-card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.icon-box {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.label {
  font-size: 0.85rem;
  color: #6b6b6b;
}

.value {
  font-size: 1.8rem;
  font-weight: 700;
}
</style>
