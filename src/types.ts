import { Webus } from './index'

export {}

declare global {
  const webus: Webus
  interface Window {
    webus: Webus
  }
}
