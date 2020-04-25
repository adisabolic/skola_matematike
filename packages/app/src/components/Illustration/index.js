import React from 'react';

import { PageWrapper, IllustrationWrapper } from './style';

// For best results the SVG should have a proportional height of 400
import { ReactComponent as NotFoundSVG } from './undraw_good_team_m7uu.svg';
import { ReactComponent as NotFoundAltSVG } from './undraw_elements_cipa.svg';
import { ReactComponent as ErrorSVG } from './undraw_server_down_s4lk.svg';
import { Button } from 'antd';

export const NotFoundIllustration = ({ text }) => {
  return (
    <IllustrationWrapper>
      <NotFoundSVG />
      <p>{text}</p>
    </IllustrationWrapper>
  );
};

export const NotFoundAltIllustration = ({ text, small = false }) => {
  const width = small ? 400 : undefined;
  return (
    <IllustrationWrapper>
      <NotFoundAltSVG width={width} />
      <p>{text}</p>
    </IllustrationWrapper>
  );
};

export const ErrorIllustration = ({ text, small = false }) => {
  const width = small ? 400 : undefined;

  return (
    <PageWrapper>
      <IllustrationWrapper>
        <ErrorSVG width={width} />
        <p>{text}</p>
        <IllustrationWrapper>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
            }}
          >
            Reload
          </Button>
        </IllustrationWrapper>
      </IllustrationWrapper>
    </PageWrapper>
  );
};
