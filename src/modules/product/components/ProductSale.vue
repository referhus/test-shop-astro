<script lang="ts" setup></script>

<template>
  <div class="product-sale flex-item flex-row">
    <img
      src="/icons/percent.svg"
      alt="sale icon"
      loading="lazy"
    />
    <span class="text_s">Sale</span>
  </div>
</template>

<style lang="scss">
  .product-sale {
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 4px;
    background: var(--color-black);
    color: var(--color-white);

    img {
      width: 16px;
      height: 16px;
    }
  }
</style>
