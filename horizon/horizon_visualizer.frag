// Horizon Visualizer Fragment
precision mediump float;
uniform float u_time;
uniform vec3 u_tide; // echo shift mirror strengths
varying vec2 v_uv;

void main() {
  float pulse = 0.5 + 0.5 * sin(u_time * 1.7);
  vec3 col = vec3(
    u_tide.x * (0.6 + 0.4 * sin(v_uv.x * 9.0 + u_time)),
    u_tide.y * (0.6 + 0.4 * cos(v_uv.y * 7.0 - u_time)),
    u_tide.z * (0.5 + 0.5 * pulse)
  );
  gl_FragColor = vec4(col, 0.74);
}
