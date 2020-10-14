export const vertexShader = `
    #define GLSLIFY 1
    // Common uniforms
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;
    uniform float u_frame;

    // Common varyings
    varying vec3 v_position;
    varying vec3 v_normal;

    /*
    * The main program
    */
    void main() {
        // Calculate the new vertex position to simulate a wave effect
        float effect_intensity = 2.0 * u_mouse.x / u_resolution.x;
        vec3 new_position = position + effect_intensity * (0.5 + 0.5 * cos(position.x + 4.0 * u_time)) * normal;

        // Calculate the modelview position
        vec4 mv_position = modelViewMatrix * vec4(new_position, 1.0);

        // Save the varyings
        v_position = mv_position.xyz;
        v_normal = normalize(normalMatrix * normal);

        // Vertex shader output
        gl_Position = projectionMatrix * mv_position;
    }
`;

export const fragmentShader = `
    #define GLSLIFY 1
    // Common uniforms
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;
    uniform float u_frame;

    // Common varyings
    varying vec3 v_position;
    varying vec3 v_normal;

    /*
    *  Calculates the normal vector at the given position
    *
    *  Uses this fix for some mobiles:
    *  https://stackoverflow.com/questions/20272272/standard-derivatives-from-fragment-shader-dfdx-dfdy-dont-run-correctly-in-a
    */
    vec3 calculateNormal(vec3 position) {
        vec3 fdx = vec3(dFdx(position.x), dFdx(position.y), dFdx(position.z));
        vec3 fdy = vec3(dFdy(position.x), dFdy(position.y), dFdy(position.z));
        vec3 normal = normalize(cross(fdx, fdy));

        if (!gl_FrontFacing) {
            normal = -normal;
        }

        return normal;
    }

    /*
    *  Calculates the diffuse factor produced by the light illumination
    */
    float diffuseFactor(vec3 normal, vec3 light_direction) {
        float df = dot(normalize(normal), normalize(light_direction));

        if (gl_FrontFacing) {
            df = -df;
        }

        return max(0.0, df);
    }

    /*
    * The main program
    */
    void main() {
        // Calculate the new normal vector
        vec3 new_normal = calculateNormal(v_position);

        // Use the mouse position to define the light direction
        float min_resolution = min(u_resolution.x, u_resolution.y);
        vec3 light_direction = -vec3((u_mouse - 0.5 * u_resolution) / min_resolution, 0.25);

        // Set the surface color
        vec3 surface_color = vec3(0.980, 0.888, 0.719);

        // Apply the light diffusion factor
        // surface_color *= diffuseFactor(new_normal, light_direction);

        // Fragment shader output
        gl_FragColor = vec4(surface_color, 1.0);

    }
`;
