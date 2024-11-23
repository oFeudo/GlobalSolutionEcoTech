import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Importa os estilos globais

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
