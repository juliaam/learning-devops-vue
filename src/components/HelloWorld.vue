<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <h1>Componente puramente visual para teste unitário de UI</h1>
  <div class="buttonContainer">
    <button class="button" @click="count--">Diminuir</button>
    <button class="button" @click="count++">Somar</button>
  </div>
  <p class="count">Contagem: {{ count }}</p>
</template>

<style lang="scss" scoped>

.buttonContainer {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.count {
  width: max-content;

  display: inline-block;

  padding-inline: 1.5rem;

  border-radius: 8px;

  color: black;
  font-size: 1.5rem;
  text-align: center;

  background-color: antiquewhite;
}
</style>
