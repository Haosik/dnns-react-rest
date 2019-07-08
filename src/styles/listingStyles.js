import styled from '@emotion/styled';

import { animateFadeIn } from './animations';
const defaultFadeIn = `${animateFadeIn} 0.7s ease-out`;

const breakpoints = [768, 1440];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const StyledList = styled.ul({
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: 0,
  textDecoration: 'none'
});

export const StyledItem = styled.li({
  display: 'flex',
  width: '150px',
  margin: '20px calc((100% - 150px)/2)',
  [mq[0]]: {
    margin: '20px calc((100% - (150px*3))/6)'
  },
  [mq[1]]: {
    margin: '20px calc((100% - (150px*6))/12)'
  },
  borderRadius: '4px',
  boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
  overflow: 'hidden',
  cursor: 'pointer',
  animation: defaultFadeIn,
  '& a': {
    display: 'block',
    width: '100%'
  },
  '& .albums-item__box': {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '150px'
  },
  '& h4, & h5': {
    height: '65px',
    margin: 0,
    padding: '8px',
    overflow: 'hidden'
  },
  '& h4': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px'
  },
  '& h5': {
    fontSize: '13px'
  },
  '& img': {
    maxWidth: '100%',
    maxHeight: '100%',
    animation: defaultFadeIn
  }
});
