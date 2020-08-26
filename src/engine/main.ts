/* *
 * main.ts contains the render loop and various other modules that actually make the engine run
 * */
import { GlInstance, gl } from '../utils/gl'
import { Shader } from '../engine/shader/index'
import { REFRESH_RATE } from '../constants'
import { Sprite } from './sprite/index'
import Circle from './circle.png'

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
  gl.bindTexture(gl.TEXTURE_2D, sprite.glTexture)
  // gl.useProgram(sprite)
  /* TODO: add more logic to this */
}

function render(): void {
  const square: Sprite = new Sprite()
  square.texture = Circle
  square.shader.activate()

  // const positionLocation: number = gl.getAttribLocation()
  /* Rendering of scene */
  GlInstance.clear()
  gl.bindBuffer(gl.ARRAY_BUFFER, GlInstance.quadBuffer)
  gl.enableVertexAttribArray(
    square.shader.attributeLocations?.position
      ? square.shader.attributeLocations.position
      : 0
  )
  gl.vertexAttribPointer(
    square.shader.attributeLocations?.position
      ? square.shader.attributeLocations.position
      : 0,
    2,
    gl.FLOAT,
    false,
    0,
    0
  )
  gl.bindBuffer(gl.ARRAY_BUFFER, GlInstance.quadBuffer)
  /**********************/
}

function renderLoop(): void {
  if (rendering) render()
  window.setTimeout(renderLoop, REFRESH_RATE)
}

/* Initialize properties */
;(() => {
  /* Setup/Use default shader */
  // const shader: Shader =

  /* Default viewport max screen size? */
  GlInstance.setViewport(window.innerWidth, window.innerHeight)
  GlInstance.clear()

  /* Attach window listeners */
  window.addEventListener('resize', () => {
    GlInstance.setViewport(window.innerWidth, window.innerHeight)
  })

  /* Put a unit quad in the buffer */
  const quad: number[] = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]

  gl.bindBuffer(gl.ARRAY_BUFFER, GlInstance.quadBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(quad), gl.STATIC_DRAW)

  /* Put a textured quad in the buffer  */
  // const texBuffer: WebGLBuffer | null = gl.createBuffer()
  if (!texBuffer) return
  gl.bindBuffer(GlInstance.gl.ARRAY_BUFFER, texBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(quad), gl.STATIC_DRAW)

  /* Begin the render loop */
  renderLoop()
})()
