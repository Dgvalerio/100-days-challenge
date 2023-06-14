import { FC } from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import styled from '@emotion/styled';

import { Container, Main } from '@/pages/styled';

const Task = styled(Container)`
  background: linear-gradient(45deg, #433da0, #4dc4c8);
  font-family: 'Courier New', 'Courier', sans-serif;
  text-transform: uppercase;

  #content {
    #numbers {
      display: flex;
      flex-direction: row;

      > div {
        &#n0,
        &#n1 {
          width: 24px;
          border-radius: 3px;
          background-color: #fff;
        }

        &#n0 {
          z-index: 2;
          margin-left: -18px;
          height: calc(24px * 2);
          transform: rotate(45deg);
        }

        &#n1 {
          z-index: 3;
          margin-left: -6px;
          height: calc(24px + 52px + 24px);
          box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
        }

        &#n2,
        &#n3 {
          box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
          width: calc(24px + 52px + 24px);
          height: calc(24px + 52px + 24px);
          border-radius: 100%;
          border: #fff 24px solid;
        }

        &#n2 {
          z-index: 2;
          margin-left: -6px;
        }

        &#n3 {
          z-index: 1;
          margin-left: -14px;
        }
      }
    }

    h1,
    h2 {
      line-height: 0;
      letter-spacing: 0;
    }

    #title,
    #sub-title {
      display: flex;
      justify-content: space-between;
    }

    #title {
      margin-top: -20px;
      margin-bottom: -35px;

      h1 {
        font-weight: 600;
        font-size: 5.4rem;
        letter-spacing: -6px;
      }
    }

    #sub-title {
      h2 {
        font-size: 1.65rem;
      }
    }

    color: #fff;
  }
`;

export const Day001: FC = () => (
  <Task>
    <div id="content">
      <div id="numbers">
        <div id="n0"></div>
        <div id="n1"></div>
        <div id="n2"></div>
        <div id="n3"></div>
      </div>
      <div id="title">
        <h1>D</h1>
        <h1>a</h1>
        <h1>y</h1>
        <h1>s</h1>
      </div>
      <div id="sub-title">
        <h2>css</h2> <h2>challenge</h2>
      </div>
    </div>
  </Task>
);

const Page: NextPage = () => (
  <>
    <Head>
      <title>100 Days Challenge - Day 001</title>
    </Head>
    <Main>
      <Day001 />
    </Main>
  </>
);

export default Page;
