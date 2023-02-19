import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/online-cv/',
  build: {
    emptyOutDir:true,
    /* lib: {
      entry: 'src/my-element.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    }, */
    rollupOptions: {
      output:{
        assetFileNames:`assets/[name][extname]`
      }
    },
  },
})
