import { useEffect, useState } from 'react';
import '../styles/Typewriter.css';

const Typewriter = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <div className="typewriter">
      {displayedText}
      <span className="cursor">|</span>
    </div>
  );
};

export default Typewriter;
