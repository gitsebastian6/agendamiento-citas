<template>
  <div class="column items-center q-mt-md bg-page">
    <!-- Título -->
    <h1 class="text-title-big q-mb-">BarberPro</h1>
    <!-- Subtítulo -->
    <h5 class="text-subtitle">Tu barbería profesional - Reserva tu cita o gestiona tu negocio</h5>
    <!-- Botones responsivos centrados -->
    <div class="row justify-center q-mt-md q-gutter-md q-gutter-md-sm q-gutter-lg-xl">
      <q-btn class="tab-button-edit" icon="event" label="Reservar Cita" unelevated no-caps />

      <q-btn class="tab-button" icon="shield" label="Acceso Admin" to="/login" no-caps />
    </div>
    <!-- Tarjeta de tutorial -->
    <div class="items-center q-mt-xl q-pt-md">
      <TutorialCardComonent title="¿Cómo funciona?" :list="tutorialSteps" />
    </div>
    <!-- Footer -->
    <FComponent />
  </div>
  <router-view />
</template>

<script setup>
import FComponent from 'src/components/FComponent.vue'
import TutorialCardComonent from 'src/components/TutorialCardComonent.vue'
import { ref } from 'vue'

const tutorialSteps = ref([
  'Selecciona el servicio que deseas.',
  'Elige la fecha y el horario que menjor te convenga.',
  'Introduce tus datos de contacto.',
  '¡Listo!. teconfirmaremos tu cita pronto.',
])
</script>
<style>
.text-title-big {
  font-size: 8rem;
  background: linear-gradient(90deg, #ffc003, #d97706);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 900;
}

/* Subtítulo centrado y más consistente */
.text-subtitle {
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  max-width: 700px;
}

/* Botón dorado */
.tab-button-edit {
  background: linear-gradient(90deg, #d97706, #ffc003);
  color: black;
  border-radius: 14px;
  padding: 14px 34px;
  font-size: 1.2rem;
  font-weight: 700;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.35);
  transition: 0.25s ease;
}

.tab-button-edit:hover {
  transform: translateY(-2px);
}

/* Botón Admin */
.tab-button {
  background: white;
  color: #444;
  border-radius: 14px;
  padding: 14px 34px;
  font-size: 1.2rem;
  font-weight: 700;
  transition: 0.25s ease;
}

.tab-button:hover {
  background: linear-gradient(90deg, #d97706, #ffc003);
  transform: translateY(-2px);
  text-decoration: none;
  color: black;
}

/* --------------------------- */
/*      RESPONSIVIDAD          */
/* --------------------------- */

/* Tablets */
@media (max-width: 1024px) {
  .text-title-big {
    font-size: 6rem;
  }
  .text-subtitle {
    font-size: 1.2rem;
  }
}

/* Móviles grandes */
@media (max-width: 768px) {
  .text-title-big {
    font-size: 4.2rem;
  }
  .text-subtitle {
    font-size: 1.1rem;
  }
}

/* Móviles pequeños */
@media (max-width: 480px) {
  .text-title-big {
    font-size: 3rem;
  }
  .text-subtitle {
    font-size: 1rem;
  }
}
/* .q-btn--outline:before {
  border-radius: 0px;
} */
</style>
