import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ["@mui/material", "@mui/utils", "@mui/base", "@emotion/react", "@emotion/styled", "@mui/icons-material"],
  },
});
