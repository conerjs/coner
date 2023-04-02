export const test = (text: string) => {
  const dom = document.querySelector('#app')
  if (dom !== null) {
    dom.textContent = text
  }
}

const webus = {
  test
}

export type Webus = typeof webus

export default webus
