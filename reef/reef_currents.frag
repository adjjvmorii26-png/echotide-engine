// Reef Currents Fragment Shader
precision mediump float;
uniform float u_time;
uniform float u_resonance[3];
varying vec2 v_uv;

void main() {
  float r = u_resonance[0] * sin(v_uv.x * 10.0 + u_time * 1.5);
  float g = u_resonance[1] * cos(v_uv.y * 8.0  - u_time * 1.2);
  float b = u_resonance[2] * sin((v_uv.x + v_uv.y) * 6.5 + u_time);
  float a = 0.5 + 0.4 * (abs(r) + abs(g) + abs(b)) / 3.0;
  gl_FragColor = vec4(abs(r), abs(g), abs(b), clamp(a, 0.22, 0.9));
}
