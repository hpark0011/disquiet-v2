import { useEffect } from 'react';
import { createSwapy } from 'swapy';

export const useSwappy = () => {
  useEffect(() => {
    const swapyContainer = document.querySelector('.swapy-container')!;
    const swapy = createSwapy(swapyContainer, {
      animation: 'dynamic', // or spring or none
    });
    swapy.onSwap(({ data }) => {
      localStorage.setItem('slotItem', JSON.stringify(data.object));
    });

    return () => {
      swapy.destroy();
    };
  }, []);
};
