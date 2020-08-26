/* Shader generator */
import { GlInstance } from '../../utils/gl'
import {
  POSITION_ATTRIBUTE_LOCATION,
  TEXTURE_ATTRIBUTE_LOCATION,
} from './../../constants'
import { UniformLocations } from './uniforms'
import { AttributeLocations } from './attributes'
import { mat3 } from '../math/matrix'

function getStandardUniformLocations(program: WebGLProgram): UniformLocations {
  return {
    modelMatrix: <WebGLUniformLocation>(
      GlInstance.gl.getUniformLocation(program, 'uMatrix')
    ),
  }
}

function getStandardAttributeLocations(
  program: WebGLProgram
): AttributeLocations {
  return {
    position: GlInstance.gl.getAttribLocation(program, 'aPos'),
    textureCoordinates: GlInstance.gl.getAttribLocation(program, 'aTex'),
  }
}

function loadShader(type: number, source: string): WebGLShader | null {
  const shader: WebGLShader | null = GlInstance.gl.createShader(type)
  if (shader === null) return null

  GlInstance.gl.shaderSource(shader, source)
  GlInstance.gl.compileShader(shader)

  /* Error check shader */
  if (!GlInstance.gl.getShaderParameter(shader, GlInstance.gl.COMPILE_STATUS)) {
    GlInstance.gl.deleteShader(shader)
    return null
  }
  return shader
}

function createShaderProgram(
  vertexShaderSource: string,
  fragmentShaderSource: string
): WebGLProgram | null {
  /* Load Shaders */
  const vertexShader: WebGLShader | null = loadShader(
    GlInstance.gl.VERTEX_SHADER,
    vertexShaderSource
  )
  if (vertexShader === null) return null

  const fragmentShader: WebGLShader | null = loadShader(
    GlInstance.gl.FRAGMENT_SHADER,
    fragmentShaderSource
  )
  if (fragmentShader === null) return null
  /**************/

  /* Create shader program and attach newly constructed shaders */
  const program: WebGLProgram | null = GlInstance.gl.createProgram()
  if (program === null) return null

  GlInstance.gl.attachShader(program, vertexShader)
  GlInstance.gl.attachShader(program, fragmentShader)
  /**************************************************************/

  /* Bind Predefined shader locations */
  GlInstance.gl.bindAttribLocation(program, POSITION_ATTRIBUTE_LOCATION, 'aPos')
  GlInstance.gl.bindAttribLocation(program, TEXTURE_ATTRIBUTE_LOCATION, 'aTex')
  /************************************/

  /* Link and validate program */
  GlInstance.gl.linkProgram(program)
  if (!GlInstance.gl.getProgramParameter(program, GlInstance.gl.LINK_STATUS)) {
    GlInstance.gl.deleteProgram(program)
    return null
  }

  GlInstance.gl.validateProgram(program)
  if (
    !GlInstance.gl.getProgramParameter(program, GlInstance.gl.VALIDATE_STATUS)
  ) {
    GlInstance.gl.deleteProgram(program)
    return null
  }
  /*****************************/

  /* Cleanup */
  GlInstance.gl.deleteShader(vertexShader)
  GlInstance.gl.deleteShader(fragmentShader)
  /***********/

  return program
}

export class Shader {
  program: WebGLProgram | null
  uniformLocations?: UniformLocations
  attributeLocations?: AttributeLocations

  constructor(vertexShaderSource: string, fragmentShaderSource: string) {
    this.program = createShaderProgram(vertexShaderSource, fragmentShaderSource)
    if (this.program) {
      this.uniformLocations = getStandardUniformLocations(this.program)
      this.attributeLocations = getStandardAttributeLocations(this.program)
    }
  }

  activate(): void {
    GlInstance.gl.useProgram(this.program)
  }

  deactivate(): void {
    GlInstance.gl.useProgram(null)
  }

  setModelMatrix(m: mat3): void {
    if (this.uniformLocations)
      GlInstance.gl.uniformMatrix3fv(
        <UniformLocations>this.uniformLocations.modelMatrix,
        false,
        new Float32Array(m)
      )
  }
}
