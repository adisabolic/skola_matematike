import React from 'react';
import { Provider as SampleProvider } from './SampleContext';

const Provider = ({ children }) => {
  return <SampleProvider>{children}</SampleProvider>;
};

export default Provider;
