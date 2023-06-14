import { NextPage } from 'next';
import Head from 'next/head';

import styled from '@emotion/styled';

import { Main } from '@/pages/styled';

const Task = styled.div`
  height: 400px;
  width: 400px;

  border-radius: 8px;
  background: #e36161;

  display: flex;
  justify-content: center;
  align-items: center;

  #content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    cursor: pointer;

    > div {
    }

    #large,
    #medium,
    #small {
      position: absolute;
      border-radius: 100%;
      background-color: #fff;
      box-shadow: 0.5rem 0.5rem 1rem #00000055;
      animation: ease 4.5s infinite;
    }

    #small {
      height: 2rem;
      width: 2rem;

      @keyframes small-in {
        0% {
          transform: scale(0%);
        }
        20% {
          transform: scale(0%);
        }
        40% {
          transform: scale(99%);
        }
        50% {
          transform: scale(100%);
        }
        60% {
          transform: scale(99%);
        }
        80% {
          transform: scale(0%);
        }
        100% {
          transform: scale(0%);
        }
      }

      animation-name: small-in;
    }

    #medium {
      height: 4rem;
      width: 4rem;

      @keyframes medium-in {
        0% {
          transform: scale(0%);
        }
        10% {
          transform: scale(0%);
        }
        30% {
          transform: scale(99%);
        }
        50% {
          transform: scale(100%);
        }
        70% {
          transform: scale(99%);
        }
        90% {
          transform: scale(0%);
        }
        100% {
          transform: scale(0%);
        }
      }

      animation-name: medium-in;
    }

    #large {
      height: 6rem;
      width: 6rem;

      @keyframes large-in {
        0% {
          transform: scale(0%);
        }
        20% {
          transform: scale(99%);
        }
        50% {
          transform: scale(100%);
        }
        80% {
          transform: scale(99%);
        }
        100% {
          transform: scale(0%);
        }
      }

      animation-name: large-in;
    }
  }
`;

export const Day004: NextPage = () => (
  <Task>
    <div id="content">
      <div id="large"></div>
      <div id="medium"></div>
      <div id="small"></div>
    </div>
  </Task>
);

const Page: NextPage = () => (
  <>
    <Head>
      <title>CSS Challenge 004</title>
    </Head>
    <Main>
      <Day004 />
    </Main>
  </>
);

export default Page;
