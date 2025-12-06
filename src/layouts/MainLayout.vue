<template>
  <q-layout view="lHh lpr lFf">
    <q-header elevated class="bg-white header-bordered">
      <div class="header-content row items-center justify-between full-width">

        <!-- IZQUIERDA -->
        <div class="row items-center">
          <q-avatar v-if="icon" size="60px" square class="avatar-square">
            <q-icon :name="icon" size="35px" />
          </q-avatar>

          <div class="column q-ml-md">
            <div class="text-title">{{ title }}</div>
            <div v-if="placeholder" class="text-caption text-grey-7">{{ placeholder }}</div>
          </div>
        </div>

        <!-- DERECHA -->
        <div class="row items-center justify-end">
          <q-btn v-for="item in tabs" :key="item.name" flat class="tab-button header-btn q-ml-sm" @click="go(item.to)">
            <q-icon :name="item.icon" class="q-mr-xs" />
            <span class="button-label gt-xs">{{ item.label }}</span>
          </q-btn>
        </div>

      </div>
    </q-header>

    <q-page-container><router-view /></q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const title = "BarberPro Admin"
const icon = "content_cut"
const placeholder = "Barbería y Estética S.A.S"

const tabs = ref([
  { name: "home", icon: "home", label: "Dashboard", to: "/admin/dashboard" },
  { name: "agenda", icon: "calendar_today", label: "Agenda", to: "/admin/agenda" },
  { name: "clientes", icon: "group", label: "Clientes" },
  { name: "servicios", icon: "content_cut", label: "Servicios" },
  { name: "configuracion", icon: "settings", label: "Configuración" },
  { name: "salir", icon: "exit_to_app", label: "Salir", to: "/home" }
])

const go = (path) => path && router.push(path)
</script>

<style scoped>
/* Botones tabs */
.tab-button {
  background: white;
  color: black;
  border-radius: 10px;
}

/* Hover dorado */
.tab-button:hover {
  background: linear-gradient(90deg, #d97706, #ffc003);
  transform: translateY(-2px);
}

.header-bordered {
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.25);
}

.header-content {
  min-height: 80px;
  padding: 0 12px;
  flex-wrap: wrap;
}

/* Avatar */
.avatar-square {
  background: linear-gradient(90deg, #d97706, #ffc003);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-square .q-icon {
  color: black !important;
}

.text-title {
  font-size: 1.6rem;
  font-weight: 700;
}

/* Botones */
.header-btn {
  min-height: 36px !important;
  padding: 4px 10px !important;
  font-size: 0.85rem !important;
}

.header-btn .q-icon {
  font-size: 20px !important;
}



.button-label {
  margin-left: 2px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .header-content {
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
  }

  .header-content>.row:last-child {
    width: 100%;
    margin-top: 10px;
    justify-content: flex-start;
  }

  .header-btn {
    margin: 6px 6px 0 0;
  }
}
</style>
