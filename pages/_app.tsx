import { useRouter } from 'next/router';
import 'styles/global.css'
import { AppProps } from 'next/app'
import React from 'react';
import 'bootstrap-5.0.2-dist/css/bootstrap.min.css';

const MyApp = ({
  Component, 
  pageProps,
}: AppProps) => {    
    const router = useRouter();
    const [pageLoading, setPageLoading] = React.useState<boolean>(false);
    React.useEffect(() => {
        const handleStart = () => { setPageLoading(true); console.log("loading");};
        const handleComplete = () => { setPageLoading(false); console.log("finished");};
    
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
      }, [router]);

  return (
    pageLoading ? (<div>Loading</div>): <Component {...pageProps} />
  )
}

export default MyApp;