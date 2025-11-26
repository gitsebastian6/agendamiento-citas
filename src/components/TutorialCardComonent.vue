<template>
  <q-card class="my-card q-pa-md q-mb-md">
    <!-- Título -->
    <q-card-section class="text-h3 text-bold text-center text-black q-pa-sm q-mb-md">
      {{ title }}
    </q-card-section>

    <!-- Lista de pasos -->
    <q-card-section>
      <q-list>
        <q-item v-for="(item, index) in list" :key="index" clickable>
          <q-item-section avatar>
            <q-avatar color="amber-8" text-color="black text-extra-bold">
              {{ index + 1 }}
            </q-avatar>
          </q-item-section>
          <q-item-section class="text-h6">
            {{ item }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  list: { type: Array, required: true },
})
</script>

<style scoped>
.my-card {
  border: #ffc003 1px solid;
  border-radius: 12px;
  background-color: #ffffff;
  max-width: 650px;
  margin: auto;
}
.q-list--bordered {
  border-radius: 0;
}
</style>
