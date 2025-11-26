<template>
  <div class="q-pa-sm">
    <q-header elevated class="bg-white header-bordered">
      <div class="row justify-between items-center q-col-gutter-md q-pa-sm">
        <!-- Columna izquierda: Avatar + Título + Placeholder -->
        <q-col cols="12" sm="6" class="row items-center no-wrap">
          <q-avatar v-if="props.icon" size="60px" square class="avatar-square">
            <q-icon :name="props.icon" size="35px" />
          </q-avatar>

          <div class="column q-ml-md q-pa-none">
            <div class="text-title">
              {{ props.title }}
            </div>

            <div v-if="props.placeholder" class="q-m-none text-caption text-grey-7">
              {{ props.placeholder }}
            </div>
          </div>
        </q-col>

        <!-- Columna derecha: Botones dinámicos -->
        <q-col cols="12" sm="6" class="row items-center justify-end no-wrap">
          <q-btn
            v-for="item in props.tabs"
            :key="item.name"
            flat
            class="tab-button q-mx-xs row items-center no-wrap"
            @click="go(item.to)"
          >
            <q-icon :name="item.icon" class="q-mr-xs" />

            <!-- Texto SOLO en pantallas mayores a XS -->
            <span class="button-label gt-xs">
              {{ item.label }}
            </span>
          </q-btn>
        </q-col>
      </div>
    </q-header>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  title: String,
  icon: String,
  placeholder: String,
  tabs: Array,
})

function go(path) {
  router.push(path)
}
</script>

<style scoped>
/* Borde y sombra dorada */
.header-bordered {
  position: fixed;
  padding-top: 0;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.25);
}

/* Título con gradiente dorado */

/* Avatar cuadrado con fondo dorado */
.avatar-square {
  background: linear-gradient(90deg, #d97706, #ffc003);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Icono negro adentro */
.avatar-square .q-icon {
  color: black !important;
}
.body {
  font-family: 'Nunito', sans-serif;
}
</style>
