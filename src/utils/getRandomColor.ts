export function getRamdonColor(): string {
  const colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50']

  const iRandom = Math.floor(Math.random() * colors.length)
  return colors[iRandom]
}
