import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '../assets/styles/globals.css';
import { useRouter } from 'next/router';
import AppLayout from '../layouts/appLayout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
