/* Shader generator */
import { GlInstance } from '../../utils/gl'

function loadShader(type: number, source: string): WebGLShader | null {
  const shader = <WebGLShader>GlInstance.gl.createShader(type)
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
) {
  const vertexShader: WebGLShader | null = loadShader(
    GlInstance.gl.VERTEX_SHADER,
    vertexShaderSource
  )
  const fragmentShader: WebGLShader | null = loadShader(
    GlInstance.gl.FRAGMENT_SHADER,
    fragmentShaderSource
  )
}

export class Shader {}
