import React from 'react';
import Lottie from 'react-lottie';

import * as animationData from './lego-loader.json';
import { LoaderWrapper } from './style.js';

export const LegoLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LoaderWrapper>
      <Lottie options={defaultOptions} height={220} width={220} />;
    </LoaderWrapper>
  );
};
