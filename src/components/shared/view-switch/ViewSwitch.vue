<script setup lang="ts">
  import type { ComponentSwitchViewTypes } from './types'
  import { switchViewTypesEnum } from './types'
  import { toRefs } from 'vue'
  import { getActiveClass } from '@/utils/get-classes'

  const props = defineProps<{
    active: ComponentSwitchViewTypes
  }>()

  defineEmits(['changeView'])

  const { active } = toRefs(props)

  const buttons = [
    {
      slug: switchViewTypesEnum.grid,
      img: '/icons/grid.svg',
      label: 'Сетка',
    },
    {
      slug: switchViewTypesEnum.list,
      img: '/icons/list.svg',
      label: 'Список',
    },
  ]

  function getClassActive(slug: ComponentSwitchViewTypes) {
    return getActiveClass(slug === active.value)
  }
</script>

<template>
  <div
    class="view-switch"
    role="group"
    aria-label="Переключатель отображения карточек"
  >
    <button
      v-for="item in buttons"
      :key="item.slug"
      :aria-label="item.label"
      class="view-switch__button hover active-medium"
      @click="$emit('changeView', item.slug)"
    >
      <img
        class="view-switch__button-icon"
        :class="getClassActive(item.slug)"
        :src="item.img"
        alt="switch button"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .view-switch {
    display: flex;
    align-items: center;

    &__button {
      max-width: 30px;
      max-height: 30px;
      padding: 5px;
      background: transparent;

      &-icon {
        width: 100%;
      }

      ._active {
        filter: brightness(0) saturate(100%) invert(0%) sepia(14%)
          saturate(1058%) hue-rotate(335deg) brightness(92%) contrast(76%);
      }
    }
  }
</style>
