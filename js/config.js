/**
 * Tailwind CSS Configuration
 * Custom theme colors and fonts for the application
 */
if (typeof tailwind !== 'undefined') {
	tailwind.config = {
		theme: {
			extend: {
				colors: {
					base: "#0b1220",
					surface: "#111827",
					card: "#1f2937",
					accent: "#22d3ee",
					accent2: "#a855f7",
					text: "#e5e7eb",
					muted: "#94a3b8"
				},
				fontFamily: {
					heading: ["Podkova", "serif"],
					body: ["Maven Pro", "sans-serif"]
				}
			}
		}
	};
}

