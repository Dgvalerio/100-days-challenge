import { FC, useState } from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import styled from '@emotion/styled';

import { Container, Main } from '@/pages/styled';

const Task = styled(Container)`
  background: #3fae81;

  #content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    cursor: pointer;

    #line-1,
    #line-2,
    #line-3 {
      background-color: #fff;
      height: 8px;
      width: 82px;
      border-radius: 3px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      animation-timing-function: ease;
      animation-duration: 0.7s;
    }

    #line-1 {
      @keyframes line-1-in {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: translateY(23px) rotate(0deg);
        }
        100% {
          transform: translateY(23px) rotate(45deg);
        }
      }

      @keyframes line-1-out {
        100% {
          transform: rotate(0deg);
        }
        50% {
          transform: translateY(23px) rotate(0deg);
        }
        0% {
          transform: translateY(23px) rotate(45deg);
        }
      }

      &.opened {
        animation-name: line-1-in;
        transform: translateY(23px) rotate(45deg);
      }

      &.closed {
        animation-name: line-1-out;
      }
    }

    #line-2 {
      @keyframes line-2-in {
        0% {
          transform: scale(100%);
        }
        100% {
          transform: scale(0%);
        }
      }

      @keyframes line-2-out {
        100% {
          transform: scale(100%);
        }
        0% {
          transform: scale(0%);
        }
      }

      &.opened {
        animation-name: line-2-in;
        transform: scale(0%);
      }

      &.closed {
        animation-name: line-2-out;
      }
    }

    #line-3 {
      @keyframes line-3-in {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-23px);
        }
        100% {
          transform: translateY(-23px) rotate(135deg);
        }
      }

      @keyframes line-3-out {
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-23px);
        }
        0% {
          transform: translateY(-23px) rotate(135deg);
        }
      }

      &.opened {
        animation-name: line-3-in;
        transform: translateY(-23px) rotate(135deg);
      }

      &.closed {
        animation-name: line-3-out;
      }
    }
  }
`;

export const Day002: FC = () => {
  const [state, setState] = useState('');

  const animate = (): void =>
    setState((prev) => (prev === 'opened' ? 'closed' : 'opened'));

  return (
    <Task>
      <div id="content" onClick={animate}>
        <div id="line-1" className={state}></div>
        <div id="line-2" className={state}></div>
        <div id="line-3" className={state}></div>
      </div>
    </Task>
  );
};

const Page: NextPage = () => (
  <>
    <Head>
      <title>100 Days Challenge - Day 002</title>
    </Head>
    <Main>
      <Day002 />
    </Main>
  </>
);

export default Page;
