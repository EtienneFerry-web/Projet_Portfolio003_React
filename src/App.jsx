import { useRef } from 'react';
import { Navbar } from './components/Navbar';

import {
  Page1, Page2, Page3, Page4, Page5, Page6,
  Page7, Page8, Page9, Page10, Page11, Page12
} from './Pages';

function App() {
  const scrollRef = useRef(null);

  return (
    <>
      <Navbar scrollRef={scrollRef} totalPages={12} />
      <div
        ref={scrollRef}
        className="font-sans text-black overflow-x-hidden h-screen overflow-y-scroll snap-y snap-mandatory"
      >
        <div data-page="1"><Page1 /></div>
        <div data-page="2"><Page2 /></div>
        <div data-page="3"><Page3 /></div>
        <div data-page="4"><Page4 /></div>
        <div data-page="5"><Page5 /></div>
        <div data-page="6"><Page6 /></div>
        <div data-page="7"><Page7 /></div>
        <div data-page="8"><Page8 /></div>
        <div data-page="9"><Page9 /></div>
        <div data-page="10"><Page10 /></div>
        <div data-page="11"><Page11 /></div>
        <div data-page="12"><Page12 /></div>
      </div>
    </>
  );
}

export default App;
