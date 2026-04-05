export function formatMoney(value: number | null) {
  if (!value) return 0

  return `$ ${(+value).toLocaleString('ru-RU')}`
}
