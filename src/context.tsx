import { createContext, useState, useContext } from 'react';

// Step 1: Define a type for the context value
interface AnimationContextType {
  state: string;
  onConnection: () => void;
  onPermission: () => void;
}

// Adjusted createContext call to use the defined type
const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState('start');
  const onConnection = () => {
    // Устанавливаем таймер на 3 секунды
    const timerId = setTimeout(() => {
      setState('connection');
      clearTimeout(timerId); // Очищаем таймер
    }, 10000);
  };
  const onPermission = () => {
    setState('permissions')
  };

  return (
    <AnimationContext.Provider value={{ state, onConnection, onPermission }}>
      {children}
    </AnimationContext.Provider>
  );
};
export const useAnimationContext = ():AnimationContextType => {
  if (!AnimationContext) {
    throw new Error('useAnimationContext must be used within a AnimationProvider');
  }
  return useContext(AnimationContext);
};