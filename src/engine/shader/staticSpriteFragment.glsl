precision mediump float;

in vec2 vTex;

uniform sampler2D uTex;

void main(void) {
  gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0); //texture2D(uTex, vTex);
}