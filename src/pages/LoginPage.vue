<template>
  <div class="login-container bg-page">
    <div class="login-card">
      <h2 class="login-title">Ingresa tus credenciales</h2>

      <q-input filled v-model="username" label="Usuario" />
      <q-input filled v-model="password" type="password" label="Contraseña" />

      <q-btn class="login-btn" label="Ingresar" @click="login" unelevated no-caps />
      <q-btn class="back-btn" label="Volver al inicio" @click="back" unelevated no-caps />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

/*Redirige al dashboard de la sección de administración*/
function login() {
  router.push('/admin/dashboard')
}
/*Redirige a la página de inicio*/
function back() {
  router.push('/home')
}

const username = ref('')
const password = ref('')
</script>

<style scoped>
/* Fondo centrado (no usar height:100vh para evitar romper layouts posteriores) */
.login-container {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f8fafc;
  padding: 16px;
}

/* Card */
.login-card {
  width: 100%;
  max-width: 520px;
  background: white;
  padding: 48px 40px;
  border-radius: 18px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
}

/* Titulo */
.login-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: #334155;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
}

/* Botón principal */
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
</style>
