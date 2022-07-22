import { useRouter } from 'next/router';
import 'styles/global.css'
import { AppProps } from 'next/app'
import React from 'react';
import dynamic from "next/dynamic";

const DynamicParticleWallpaper = dynamic(
  () =>
      import("components/Particles").then(
          (module) => module.ParticleWallpaper,
      ),
  {
      ssr: false,
  },
);

const MyApp = ({
  Component, 
  pageProps,
}: AppProps) => {    
    const router = useRouter();
    const [pageLoading, setPageLoading] = React.useState<boolean>(false);
    React.useEffect(() => {
        const handleStart = () => { setPageLoading(true); };
        const handleComplete = () => { setPageLoading(false); };
    
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
      }, [router]);

  return (
    pageLoading ? (<div>Loading</div>): <Component {...pageProps} />
  )
}

export default MyApp;