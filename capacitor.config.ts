import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'counter.app',
  appName: 'counter-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
