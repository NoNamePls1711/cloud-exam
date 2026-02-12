<template>
  <q-page class="flex flex-center column">
    <h4>Backend API Demo</h4>

    <q-btn label="Call API" color="primary" @click="callApi" />

    <div v-if="response" class="q-mt-md">
      <pre>{{ response }}</pre>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const response = ref(null)

const callApi = async () => {
  try {
    const res = await axios.get(
      import.meta.env.VITE_API_URL + '/api/demo'
    )
    response.value = res.data
  } catch (err) {
    response.value = err.message
  }
}
</script>
