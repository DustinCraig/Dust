/* *
 * main.ts contains the render loop and various other modules that actually make the engine run
 * */
import { GlInstance } from '../utils/gl'
import { Shader } from '../engine/shader/index'
import { REFRESH_RATE } from '../constants'
import { Sprite } from './sprite/index'

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

function drawSprite(sprite: Sprite) {
  const gl = GlInstance.gl
  gl.bindTexture(gl.TEXTURE_2D, sprite.glTexture)

  /* TODO: add more logic to this */
}

function render(): void {
  const square: Sprite = new Sprite()
  square.texture = 'https://webglfundamentals.org/webgl/resources/star.jpg'

  /* Rendering of scene */
  GlInstance.clear()

  /**********************/
}

function renderLoop(): void {
  if (rendering) render()
  window.setTimeout(renderLoop, REFRESH_RATE)
}

/* Initialize properties */
;(() => {
  /* Default viewport max screen size? */
  GlInstance.setViewport(window.innerWidth, window.innerHeight)
  GlInstance.clear()

  /* Attach window listeners */
  window.addEventListener('resize', () => {
    GlInstance.setViewport(window.innerWidth, window.innerHeight)
  })

  /* Put a unit quad in the buffer */
  const quad: number[] = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]
  const quadBuffer: WebGLBuffer | null = GlInstance.gl.createBuffer()
  if (!quadBuffer) return
  GlInstance.gl.bindBuffer(GlInstance.gl.ARRAY_BUFFER, quadBuffer)
  GlInstance.gl.bufferData(
    GlInstance.gl.ARRAY_BUFFER,
    new Float32Array(quad),
    GlInstance.gl.STATIC_DRAW
  )

  /* Put a textured quad in the buffer  */
  const texBuffer: WebGLBuffer | null = GlInstance.gl.createBuffer()
  if (!texBuffer) return
  GlInstance.gl.bindBuffer(GlInstance.gl.ARRAY_BUFFER, texBuffer)
  GlInstance.gl.bufferData(
    GlInstance.gl.ARRAY_BUFFER,
    new Float32Array(quad),
    GlInstance.gl.STATIC_DRAW
  )

  /* Begin the render loop */
  renderLoop()
})()
