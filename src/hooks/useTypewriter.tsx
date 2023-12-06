import { useState, useEffect, useRef } from 'react';

const useTypewriter = (words: string[], typingDelay = 150, erasingDelay = 100, newWordDelay = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null); // Use useRef to manage the timer

  const handleTyping = () => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      timerRef.current = setTimeout(() => setSubIndex(subIndex - 1), newWordDelay);
    } else if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((index + 1) % words.length);
    } else if (reverse) {
      timerRef.current = setTimeout(() => setSubIndex(subIndex - 1), erasingDelay);
    } else {
      timerRef.current = setTimeout(() => setSubIndex(subIndex + 1), typingDelay);
    }
  };

  useEffect(() => {
    handleTyping();

    // Cleanup the timer when the component unmounts or dependencies change
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [subIndex, index, reverse, words]);

  return words[index].substring(0, subIndex);
};

export default useTypewriter;
