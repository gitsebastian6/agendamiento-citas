<template>
  <div class="login-container bg-page">
    <div class="login-card">
      <h2 class="login-title">Ingresa tus credenciales</h2>

      <q-input filled v-model="username" label="Usuario" />
      <q-input filled v-model="password" type="password" label="Contraseña" />

      <q-btn class="login-btn" label="Ingresar" to="/dashboard" unelevated no-caps />
      <q-btn class="back-btn" label="Volver al inicio" to="/home" no-caps />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>

<style>
/* Fondo completo centrado */
.login-container {
  height: 100vh;
  display: grid;
  place-items: center;
  background: #f8fafc;
  padding: 16px;
}

/* Card principal */
.login-card {
  width: 100%;
  max-width: 520px; /* más grande y profesional */
  background: white;
  padding: 48px 40px;
  border-radius: 18px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
}

/* Título profesional en una sola línea */
.login-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: #334155;
  text-align: center;
  white-space: nowrap; /* fuerza una sola línea */
  overflow: hidden;
  text-overflow: ellipsis; /* seguridad en pantallas MUY pequeñas */
  margin-bottom: 10px;
}

/* Botón dorado profesional */
.login-btn {
  background: linear-gradient(90deg, #d97706, #ffc003);
  color: black;
  border-radius: 14px;
  padding: 14px;
  font-weight: 700;
  transition: 0.25s ease;
  width: 100%;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.35);
}

.login-btn:hover {
  transform: translateY(-2px);
}

/* Botón secundario */
.back-btn {
  border: 2px solid #e2e8f0;
  border-radius: 14px;
  padding: 12px;
  color: #64748b;
  font-weight: 600;
  width: 100%;
}
.back-btn:hover {
  transform: translateY(-2px);
}

/* Responsividad */
@media (max-width: 768px) {
  .login-card {
    max-width: 420px;
    padding: 36px 28px;
  }

  .login-title {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .login-card {
    max-width: 100%;
    padding: 28px 20px;
  }

  .login-title {
    font-size: 1.4rem;
  }
}
.q-field__control {
  font-size: 1rem;
  color: #d97706;
}
</style>
