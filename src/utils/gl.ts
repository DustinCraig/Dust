import { Shader } from './../engine/shader/index'
export class GlInstance {
  private static canvasId: string = 'glCanvas'

  private static init(): WebGL2RenderingContext {
    const canvas = <HTMLCanvasElement>document.getElementById(this.canvasId)
    GlInstance.gl = <WebGL2RenderingContext>canvas.getContext('webgl2')

    /* Create/compile predefined shaders */
    // GlInstance.staticSpriteShader = new Shader()
    /*************************************/
    return GlInstance.gl
  }

  private _quadBuffer!: WebGLBuffer | null

  public static gl: WebGL2RenderingContext = GlInstance.init()

  public static clear(): void {
    this.gl.clearColor(1, 0, 0, 1)
    this.gl.clear(this.gl.COLOR_BUFFER_BIT)
  }

  public static setViewport(w: number, h: number): void {
    const canvas = <HTMLCanvasElement>document.getElementById(this.canvasId)
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    canvas.width = w
    canvas.height = h
    this.gl.viewport(0, 0, w, h)
  }

  public static quadBuffer: WebGLBuffer | null = GlInstance.gl.createBuffer()
}

export const gl = GlInstance.gl
