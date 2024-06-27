'use client'

import React, { createContext, useState, useContext } from 'react';
import useMousePosition from '../../animations/cursor/useMousePosition';

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const { x, y } = useMousePosition();

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');
  const navTextEnter = () => setCursorVariant('navText');

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant, x, y, textEnter, textLeave, navTextEnter }}>
      {children}
    </CursorContext.Provider>
  );
};




