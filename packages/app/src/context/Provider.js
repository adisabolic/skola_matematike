import React from 'react';
import { Provider as SampleProvider } from './SampleContext';
import {Provider as AuthProvider} from './Auth';

const Provider = ({ children }) => {
  return <SampleProvider><AuthProvider>{children}</AuthProvider></SampleProvider>;
};

export default Provider;
