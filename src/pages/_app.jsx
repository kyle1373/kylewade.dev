import Aos from 'aos';
import { useEffect } from 'react';
import '../styles/index.scss';
import dynamic from 'next/dynamic'
import ContextProvider from '../Context/ContextProvider';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

function MyApp({ Component, pageProps }) {

  const removeCursorComponents = [
    "Resume"
  ]
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  console.log(Component.name)
  return (
    <>
      {!removeCursorComponents.includes(Component.name) && <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="104, 35, 184"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={1.2}
      />}
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}

export default MyApp
