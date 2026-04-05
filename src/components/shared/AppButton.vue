<script setup lang="ts"></script>

<template>
  <button class="app-button text_m">
    <slot />
  </button>
</template>

<style scoped lang="scss">
  .app-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px;
    border-radius: 8px;
    box-sizing: border-box;
    background: var(--color-black);
    color: var(--color-white);
    text-align: center;
    transition: 0.3s;

    @media (max-width: 920px) {
      padding: 6px;
    }
  }
</style>
