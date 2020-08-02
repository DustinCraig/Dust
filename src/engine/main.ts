/* *
 * main.ts contains the render loop and various other modules that actually make the engine run
 * */
import { GlInstance as gl } from '../utils/gl'
import { Shader } from '../engine/shader/index'
import { REFRESH_RATE } from '../constants'

let rendering: boolean = false

export function getRenderingStatus(): boolean {
  return rendering
}

export function startRendering(): void {
  rendering = true
}

export function stopRendering(): void {
  rendering = false
}

function render(): void {
  console.log('render')
}

function renderLoop(): void {
  if (rendering) render()
  window.setTimeout(renderLoop, REFRESH_RATE)
}

/* Initialize properties */
;(() => {
  /* Default viewport max screen size? */
  gl.setViewport(window.innerWidth, window.innerHeight)
  gl.clear()

  /* Attach window listeners */
  window.addEventListener('resize', () => {
    gl.setViewport(window.innerWidth, window.innerHeight)
  })

  /* Begin the render loop */
  renderLoop()
})()
