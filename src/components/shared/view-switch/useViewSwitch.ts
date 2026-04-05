import type { ComponentSwitchViewTypes } from './types'
import { cardOrientationsEnum, switchViewTypesEnum } from './types'
import { computed, ref } from 'vue'

export function useCardsView() {
  const activeCardsView = ref(switchViewTypesEnum.list)

  const getCardsView = computed(() => `_${activeCardsView.value}-view`)

  function changeCardsView(view: ComponentSwitchViewTypes) {
    activeCardsView.value = view
  }

  const cardType = computed(() =>
    activeCardsView.value === switchViewTypesEnum.grid
      ? cardOrientationsEnum.vertical
      : cardOrientationsEnum.horizontal,
  )

  return {
    activeCardsView,
    getCardsView,
    changeCardsView,
    cardType,
  }
}
