import { GlInstance } from './../../utils/gl'
import { vec2 } from './../math/vector'
/* Sprite needs a position, size and texture */

export class Sprite {
  private _name: string = 'New Sprite'
  private _position: vec2 = [0, 0]
  private _size: vec2 = [0, 0]
  private _visible: boolean = true
  private _texture: string = ''

  private _textureInternal: WebGLTexture = <WebGLTexture>(
    GlInstance.gl.createTexture()
  )

  constructor() {}

  private createTexture(): void {
    GlInstance.gl.bindTexture(GlInstance.gl.TEXTURE_2D, this._textureInternal)
    GlInstance.gl.texImage2D(
      GlInstance.gl.TEXTURE_2D,
      0,
      GlInstance.gl.RGBA,
      1,
      1,
      0,
      GlInstance.gl.RGBA,
      GlInstance.gl.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 255, 255])
    )
    const isPowerOfTwo: boolean = false
    /* Add logic to check whether or not images are powers of two */

    if (!isPowerOfTwo) {
      GlInstance.gl.texParameteri(
        GlInstance.gl.TEXTURE_2D,
        GlInstance.gl.TEXTURE_WRAP_S,
        GlInstance.gl.CLAMP_TO_EDGE
      )
      GlInstance.gl.texParameteri(
        GlInstance.gl.TEXTURE_2D,
        GlInstance.gl.TEXTURE_WRAP_T,
        GlInstance.gl.CLAMP_TO_EDGE
      )
      GlInstance.gl.texParameteri(
        GlInstance.gl.TEXTURE_2D,
        GlInstance.gl.TEXTURE_MIN_FILTER,
        GlInstance.gl.LINEAR
      )
      const image: HTMLImageElement = new Image()
      image.onload = () => {
        GlInstance.gl.bindTexture(
          GlInstance.gl.TEXTURE_2D,
          this._textureInternal
        )
        GlInstance.gl.texImage2D(
          GlInstance.gl.TEXTURE_2D,
          0,
          GlInstance.gl.RGBA,
          GlInstance.gl.RGBA,
          GlInstance.gl.UNSIGNED_BYTE,
          image
        )
      }
      /* TODO: request CORS if not same origin */
      image.src = this._texture
    }
  }

  set size(s: vec2) {
    this._size = s
  }
  get size(): vec2 {
    return this._size
  }

  set position(p: vec2) {
    this._position = p
  }
  get position(): vec2 {
    return this._position
  }

  set name(n: string) {
    this._name = n
  }
  get name() {
    return this._name
  }

  set visible(v: boolean) {
    /* TODO: restrict visibilty for some sprites? */
    this._visible = v
  }
  get visible() {
    return this._visible
  }

  set texture(t: string) {
    this._texture = t
  }
  get texture() {
    return this._texture
  }
}
