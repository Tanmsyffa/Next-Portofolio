import { ThemeProvider } from 'next-themes';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import SmoothScroll from '../components/SmoothScroll';
import ThreeBackground from '../components/ThreeBackground';
import '../styles/globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      <SmoothScroll>
        <div
          className={`${outfit.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground relative`}
        >
          <ThreeBackground />
          <div className="relative z-10">
            <Component {...pageProps} />
          </div>
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default MyApp;