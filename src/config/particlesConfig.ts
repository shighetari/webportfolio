// src/config/particlesConfig.ts
const particlesConfig: IOptions = {
    particles: {
        color: {
            value: "#583beb" // Base color of particles, can be any CSS color value
        },
        shadow: {
            enable: true,
            color: "#e6e6e6", // Color of the glow
            blur: 15 // How much glow you want around the particles
        },
        number: {
            value: 50, // Adjust number of particles (bubbles) as needed
            density: {
                enable: true,
                value_area: 800 // Spread the bubbles more sparsely
            }
        },
        size: {
            value: 40, // Size of the bubbles
            random: true, // Random bubble sizes
            anim: {
                enable: true,
                speed: 2,
                size_min: 10,
                sync: false
            }
        },
        move: {
            enable: true,
            speed: 1.5, // How fast the bubbles move
            direction: "none" as const, // 'as const' makes TypeScript treat "none" as a literal type rather than a string
            random: true, // Movement is random and fluid
            straight: false, // They'll move in a wavy pattern
            out_mode: "out", // Bubbles will reappear when going outside the canvas
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false // Disable lines between particles to maintain the bubble look
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "bubble" // Bubbles will grow on hover
            },
            onClick: {
                enable: true,
                mode: "repulse" // Bubbles will scatter on click
            }
        },
        modes: {
            bubble: {
                distance: 250,
                size: 80, // Bubbles grow larger when hovered
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            repulse: {
                distance: 400,
                duration: 0.4
            }
        }
    },
    retina_detect: true // Enable retina display support
};

export default particlesConfig;
