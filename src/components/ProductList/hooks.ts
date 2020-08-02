import { useEffect } from 'react';
import { throttle } from 'throttle-debounce';

export const useScrollFetch = (productPageUp: () => void) => {
  useEffect(() => {
    if (document) {
      const handleScroll = throttle(300, () => {
        const {
          scrollHeight,
          scrollTop,
          clientHeight,
        } = document.documentElement;
        if (scrollHeight - scrollTop === clientHeight) {
          productPageUp();
        }
      });
      document.addEventListener('scroll', handleScroll);
    }
  }, [productPageUp]);
};

export const useMemoryScroll = (scrollTop: number) => {
  useEffect(() => {
    window.scrollTo(0, scrollTop);
  }, [scrollTop]);
};
