import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-purple-500'>Welcome to the world of GTA and GSAP</h1>
    </div>
  );
}

export default App;
