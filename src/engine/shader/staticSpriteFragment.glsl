precision mediump float;

in vec2 vTex;

uniform sampler2D uTex;

void main(void) {
  gl_FragColor = texture2D(uTex, vTex);
}