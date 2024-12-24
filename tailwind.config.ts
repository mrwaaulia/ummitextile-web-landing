module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Untuk direktori Next.js dengan app folder
    "./pages/**/*.{js,ts,jsx,tsx}", // Jika Anda masih menggunakan pages folder
    "./components/**/*.{js,ts,jsx,tsx}", // Komponen custom
    "./node_modules/flowbite/**/*.js", // Tambahkan ini
  ],
  theme: {
    colors: {
      primary: "#0D47A1",
      secondary: "#cca856",
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Tambahkan plugin Flowbite
  ],
};
