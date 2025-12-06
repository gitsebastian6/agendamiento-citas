<template>
  <q-dialog v-model="visible" persistent>
    <q-card style="min-width: 360px; max-width: 520px">
      <!-- Título -->
      <q-card-section>
        <div class="text-h6">
          {{ mode === 'create' ? 'Nueva Cita' : 'Editar Cita' }}
        </div>
      </q-card-section>

      <q-card-section>

        <q-form @submit.prevent="save">

          <!-- CLIENTE -->
          <q-select v-model="form.client" :options="clientOptions" label="Cliente *" outlined dense
            :rules="[val => !!val || 'Requerido']" />

          <!-- SERVICIO -->
          <q-select class="q-mt-md" v-model="form.service" :options="serviceOptions" label="Servicio *" outlined dense
            :rules="[val => !!val || 'Requerido']" />

          <!-- FECHA -->
          <q-input class="q-mt-md" v-model="form.date" type="date" label="Fecha *" outlined dense
            :rules="[val => !!val || 'Requerido']" />

          <!-- HORAS -->
          <div class="row q-col-gutter-md q-mt-md">
            <div class="col">
              <q-input v-model="form.start" label="Hora inicio *" type="time" outlined dense
                :rules="[val => !!val || 'Requerido']" />
            </div>
            <div class="col">
              <q-input v-model="form.end" label="Hora fin *" type="time" outlined dense
                :rules="[val => !!val || 'Requerido']" />
            </div>
          </div>

          <!-- ESTADO -->
          <q-select class="q-mt-md" v-model="form.status" :options="statusOptions" label="Estado" dense outlined
            emit-value map-options />

          <!-- NOTAS -->
          <q-input type="textarea" autogrow v-model="form.notes" class="q-mt-md" label="Notas" outlined />

          <!-- BOTONES -->
          <div class="row justify-end q-mt-lg">
            <q-btn flat label="Cancelar" color="grey-7" @click="close" />
            <q-btn class="q-ml-sm tab-button" label="Guardar" type="submit" />
            <q-btn v-if="mode === 'edit'" class="q-ml-sm" color="negative" flat label="Eliminar" @click="deleteItem" />
          </div>

        </q-form>

      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  mode: String,
  appointment: Object,
  statusOptions: Array,
  clientOptions: Array,
  serviceOptions: Array
})

const emit = defineEmits(["update:modelValue", "save", "delete"])

const visible = ref(props.modelValue)
watch(() => props.modelValue, v => visible.value = v)
watch(visible, v => emit("update:modelValue", v))

const form = reactive({
  client: "",
  service: "",
  date: "",
  start: "",
  end: "",
  status: "",
  notes: ""
})

watch(() => props.appointment, appt => {
  Object.assign(form, appt)
}, { immediate: true })

const save = () => {
  emit("save", { ...form })
  close()
}

const deleteItem = () => {
  emit("delete", { ...form })
  close()
}

const close = () => (visible.value = false)
</script>
<style scoped>
.tab-button {
  background: linear-gradient(90deg, #d97706, #ffc003);
}

.tab-button:hover {
  background: linear-gradient(90deg, #ffc003, #d97706);
}
</style>
