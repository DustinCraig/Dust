in vec4 aPos;
in vec2 aTex;

uniform mat4 uMatrix;

out vec2 vTex;

void main(void) {
  gl_Position = uMatrix * aPos;
  vTex = aTex;
}

