/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "t-",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        colors: {
            green: {
                DEFAULT: "var(--green-primary)",
                1: "var(--green-1)",
                2: "var(--green-2)",
                3: "var(--green-3)",
            },
            black: {
                1: "var(--black-1)",
                2: "var(--black-2)",
                3: "var(--black-3)",

                main: "var(--black-main)",
            },
            red: {
                error: "var(--red-error)",
                2: "var(--red-2)",
                3: "var(--red-3)",
                4: "var(--red-4)",
            },
            gray: {
                1: "var(--gray-1)",
                2: "var(--gray-2)",
                3: "var(--gray-3)",
                4: "var(--gray-4)",
                5: "var(--gray-5)",
                6: "var(--gray-6)",
                7: "var(--gray-7)",
                8: "var(--gray-8)",
                9: "var(--gray-9)",
                10: "var(--gray-10)",
                11: "var(--gray-11)",
                12: "var(--gray-12)",
                13: "var(--gray-13)",
            },
            text: {
                1: "var(--text-1)",
            },
            white: {
                1: "var(--white-1)",
                2: "var(--white-2)",
            },

            blue: {
                1: "var(--blue-1)",
                2: "var(--blue-2)",
                3: "var(--blue-3)",
                4: "var(--blue-4)",
                5: "var(--blue-5)",
            },

            transparent: "transparent",
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    lighter: "var(--primary-lighter)",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                default: "1px 1px 8px 0 rgba(0, 0, 0, 0.15)",
                greenSm: "1px 1px 8px 0 rgba(5, 209, 112, 0.25)",
                greenMd: "1px 1px 8px 0 rgba(5, 209, 112, 0.25)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                typewriter: {
                    to: {
                        left: "100%",
                    },
                },

                blink: {
                    "0%": {
                        opacity: "0",
                    },
                    "0.1%": {
                        opacity: "1",
                    },
                    "50%": {
                        opacity: "1",
                    },
                    "50.1%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "0",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                typewriter: "typewriter 2s steps(11) forwards",
                caret: "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
