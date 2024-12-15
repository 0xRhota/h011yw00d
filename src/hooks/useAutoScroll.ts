import { useCallback } from 'react';

export function useAutoScroll(ref: React.RefObject<HTMLElement>) {
  return useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [ref]);
}