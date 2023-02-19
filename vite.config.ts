import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/OnlineCV/',
  build: {
    emptyOutDir:true,
    /* lib: {
      entry: 'src/my-element.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    }, */
  },
})
