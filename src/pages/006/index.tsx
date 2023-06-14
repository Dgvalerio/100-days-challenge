import { FC } from 'react';

import { NextPage } from 'next';
// eslint-disable-next-line camelcase
import { Open_Sans } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';

import styled from '@emotion/styled';

import { Container, Main } from '@/pages/styled';

const openSans = Open_Sans({ subsets: ['latin'] });

const Task = styled(Container)`
  background: linear-gradient(45deg, #ecbc6b, #c97c4d);

  #content {
    display: flex;
    width: 320px;
    height: 299px;

    background: #fff;
    color: #77634f;
    border-radius: 3px;

    span {
      margin-top: -6px;
      font-weight: 100;
      font-size: 11px;
    }

    #main {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      #infos {
        #image-group {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          #large-border,
          #medium-border {
            animation: ease 2s;
          }

          #large-border {
            animation-name: none;
            transform: rotate(90deg);

            display: flex;
            align-items: center;
            justify-content: center;

            height: 82px;
            width: 82px;

            border: 1px solid #786450;
            border-top-color: #fff;
            border-radius: 100%;
            margin-bottom: -79px;
          }

          #medium-border {
            animation-name: none;
            transform: rotate(270deg);

            display: flex;
            align-items: center;
            justify-content: center;

            height: 76px;
            width: 76px;

            border: 1px solid #77634f;
            border-top-color: #fff;
            border-radius: 100%;
            margin-bottom: -73px;
          }

          &:hover {
            #large-border {
              @keyframes large-border-in {
                0% {
                  transform: rotate(90deg);
                }
                100% {
                  transform: rotate(-270deg);
                }
              }

              transform: rotate(90deg);
              animation-name: large-border-in;
            }

            #medium-border {
              @keyframes medium-border-in {
                0% {
                  transform: rotate(270deg);
                }
                100% {
                  transform: rotate(630deg);
                }
              }

              transform: rotate(270deg);
              animation-name: medium-border-in;
            }
          }

          &:not(:hover) {
            #large-border {
              @keyframes large-border-out {
                0% {
                  transform: rotate(-270deg);
                }
                100% {
                  transform: rotate(90deg);
                }
              }

              transform: rotate(-270deg);
              animation-name: large-border-out;
            }

            #medium-border {
              @keyframes medium-border-out {
                0% {
                  transform: rotate(630deg);
                }
                100% {
                  transform: rotate(270deg);
                }
              }

              transform: rotate(630deg);
              animation-name: medium-border-out;
            }
          }

          #image {
            border-radius: 100%;
          }
        }

        display: flex;
        align-items: center;
        flex-direction: column;

        margin-bottom: 32px;

        b {
          margin-top: 16px;
          font-size: 15px;
          font-weight: 600;
        }
      }

      #button-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        button {
          width: 120px;
          font-size: 12px;
          font-weight: bold;
          color: #77634f;
          background-color: #fff;
          border: 1px solid #77634f;
          border-radius: 16px;
          padding: 6px 6px 7px;
          transition: 0.4s all;

          &:hover {
            background-color: #77634f;
            color: #fff;
          }
        }
      }
    }

    #panels {
      gap: 1px;
      display: flex;
      flex-direction: column;

      div {
        &:first-child {
          border-top-right-radius: 3px;
        }

        &:last-child {
          border-bottom-right-radius: 3px;
        }

        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        width: 120px;
        background-color: #f3e6dd;
        transition: 0.4s all;

        b {
          font-size: 18px;
          font-weight: 600;
        }

        &:hover {
          background: #e1cfc2;
        }
      }
    }
  }
`;

export const Day006: FC = () => (
  <Task>
    <div id="content">
      <div id="main">
        <div id="infos">
          <div id="image-group">
            <div id="large-border"></div>
            <div id="medium-border"></div>
            <Image
              id="image"
              alt="Jessica Potter"
              width={70}
              height={70}
              src="https://100dayscss.com/codepen/jessica-potter.jpg"
            />
          </div>
          <b>Jessica Potter</b>
          <span>Visual Artist</span>
        </div>
        <div id="button-group">
          <button>Follow</button>
          <button>Message</button>
        </div>
      </div>
      <div id="panels">
        <div>
          <b>523</b>
          <span>Posts</span>
        </div>
        <div>
          <b>1387</b>
          <span>Likes</span>
        </div>
        <div>
          <b>146</b>
          <span>Follower</span>
        </div>
      </div>
    </div>
  </Task>
);

const Page: NextPage = () => (
  <>
    <Head>
      <title>CSS Challenge 006</title>
    </Head>
    <Main className={openSans.className}>
      <Day006 />
    </Main>
  </>
);

export default Page;
