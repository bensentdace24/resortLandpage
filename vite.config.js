export default defineConfig({
  base: "/samal-sands-preview/",
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
