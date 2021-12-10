import styled from 'styled-components'

// Navbar Styles
export const HomeStyle = styled.div`
  h1 {
    color: white;
    font: 700 3rem Poppins, sans-serif;
    margin-bottom: 3rem;
  }

  button.no-select {
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .no-select {
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .sucess-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;
    justify-items: center;
    text-align: center;
  }

  .msg-sucess {
    color: #ffffff;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    padding-top: 0;
  }

  .msg-sucess-2 {
    color: #fee705;
    font-size: 0.8rem;
  }

  .text-yellow {
    color: #fee705;
  }

  .text-ultrathin {
    font-weight: 300;
  }

  .text-thin {
    font-weight: 400;
  }

  .text-bold {
    font-weight: 700;
  }

    .text-ultra-sm {
      font-size: 90%;
    }

  .text-sm {
    font-size: 1.1rem;
  }

  .text-lg {
    font-size: 2.75rem;
  }

  .text-white {
    color: #ffffff;
  }

  .divider-right {
    margin-right: 2.5rem;
  }

  .divider-top {
    padding-top: 2.5rem;
  }
  .divider-left {
    margin-left: 2.5rem;
  }
  .divider-bottom {
    margin-bottom: 2.5rem;
  }

  .divider-custom {
    margin-bottom: -1.5rem;
  }

  .h-section {
    padding-top: 4.75rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100vh;
  }

  img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    pointer-events: none;
  }

  .img-start {
    width: 3.5rem;
    height: 100%;
    margin-bottom: -1rem;
  }

  .light {
    --mainColor: #64bcf4;
    --hoverColor: #5bacdf;
    /* --backgroundColor: #5600e1; */
    --darkOne: #312f3a;
    --darkTwo: #45424b;
    --lightOne: #ffffff;
    --lightTwo: #aaa;
  }

  .dark {
    --mainColor: #64bcf4;
    --hoverColor: #5bacdf;
    --backgroundColor: #192e3a;
    --darkOne: #f3f3f3;
    --darkTwo: #fff;
    --lightOne: #ccc;
    --lightTwo: #e7e3e3;
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  .stop-scrolling {
    height: 100%;
    overflow: hidden;
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 2560px) {
    .big-wrapper {
      position: relative;
      padding-top: 8rem;
      padding-bottom: auto;
      padding-right: 40rem;
      padding-left: 0;
      width: 100%;
      min-height: 100vh;
      overflow: hidden;
      background-color: var(--backgroundColor);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      justify-items: center;
      align-items: center;
    }

    .container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;
      text-align: start;
      max-width: 81rem;
      align-content: center;
      width: 100%;
      margin-left: 0;
      padding-right: 0;
      padding-left: 0;
    }

    button.btn {
      display: inline-block;
      text-transform: capitalize;
      color: #5600e1;
      z-index: 3;
      position: relative;
      background-color: #fee705;
      font: 700 2.65rem Poppins, sans-serif;

      padding: 1.2rem 1.75rem 1.2rem 1.75rem;
      margin-top: 1.2rem;
      border-radius: 8px;

      -webkit-box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57);
      box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57) !important;
      transition: 0.3s;

      justify-content: center;
      align-items: center;
      justify-self: center;
      justify-items: center;
      text-align: center;
    }

    button.btn:hover {
      transform: scale(1.05);
      background-color: #ffff59;
      cursor: pointer;
    }

    /* countdown init */
    .timer-container {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: flex-start;
      align-self: center;
      align-content: center;
    }

    .clock {
      position: relative;
      margin-top: -1rem;
      margin-left: -1rem;
      padding-right: 0rem;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: flex-start;
      align-content: flex-start;

      /* height: 180px; */
      /* width: 100%;
    max-width: 10rem; */
      color: #ffffff;
    }

    .clock section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: center;
      align-content: center;
      padding-top: 1.8rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0;
    }

    .clock section p {
      font-size: 5rem;
    }

    .clock span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: center;
      align-content: center;
      width: 100%;
      font-size: 4rem;
    }

    .clock section small {
      color: #ffffff;
      font-size: 1.5rem;
      text-shadow: none;
    }
    /* countdown end */

    .big-wrapper.active {
      background-color: transparent;
    }

    .big-wrapper.active {
      transform: translateY(0) rotate(-45deg);
    }

    .big-wrapper.active {
      transform: translateY(0) rotate(45deg);
    }

    .showcase-area .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
    }

    .big-title {
      font-size: 1.4rem;
      color: var(--darkOne);
      text-transform: capitalize;
      line-height: 1.4;
    }

    .text {
      color: var(--lightOne);
      font-size: 1.85rem;
      margin: 1.9rem 0 2.5rem;
      /* max-width: 600px; */
    }

    .img-start {
      width: 10rem;
      height: 100%;
      margin-bottom: -1rem;
    }

    .text-jornada {
      font-size: 8rem;
      margin-bottom: 5rem;
      margin-top: 4rem;
      width: 100%;
      white-space: nowrap;
      line-height: 2rem;
      text-align: start;
    }

    .text-desc {
      font-size: 3.75rem;
      margin-bottom: 3rem;
      /* max-width: 600px; */
      line-height: 4.5rem;
      text-align: start;
      white-space: nowrap;
    }

    .text-subs {
      font-size: 2.1rem;
      text-align: start;
      line-height: 1.5rem;
      width: 100%;
      white-space: nowrap;
    }

    .text-contador {
      font-size: 1.8rem;
      color: #ffffff;
      margin-top: 3rem;
      margin-bottom: -0.3rem;
      line-height: 1rem;
      text-align: start;
    }

    .showcase-area .btn {
      box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.05);
    }

    .rocket {
      width: auto;
      height: 92rem;
      padding-left: 1rem;
      padding-right: 1rem;
      position: absolute;
      animation-name: levitation;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      transform: translate(36rem, -64rem);
    }

    @keyframes levitation {
      0% {
        transform: translate(36rem, -67rem);
      }
      50% {
        transform: translate(36rem, -70rem);
      }
      100% {
        transform: translate(36rem, -67rem);
      }
    }
    /* modal css */
    .modalBackground {
        width: 130vw;
        height: 130vh;
        background-color: rgba(000, 000, 000, 0.7);
        z-index: 100;
        /* transform: translate(-6.7rem, -31rem); */
        top: -12rem;
        left: -15%;
        flex: 100%;
        overflow: hidden;
        display: flex;
        position: fixed;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .modalContainer {
        width: 40%;
        height: 60%;
        background-color: #5600e1;
        /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-right: 2rem;
        padding-left: 2rem;
        border-radius: 8px;
        flex-direction: column;
        overflow: visibility;
        display: flex;
        position: fixed;
      }

      .modalContainer .title {
        display: inline-block;
        text-align: center;
        margin-top: 1rem;
      }

      .header-popup {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: 3rem;
        /* border: 2px solid #ffffff; */
        position: relative;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .start-img-popup {
        display: flex;
        z-index: 3;
        position: relative;
        width: 8rem;
        height: 100%;
        /* margin-top: 1rem; */
        justify-items: center;
        text-align: center;
        justify-content: center;
        justify-self: center;
        align-self: center;
        align-content: center;
      }

      .text-jornada-popup {
        position: relative;
        z-index: 3;
        font-size: 4rem;
        margin-bottom: 1rem;
        padding-left: 0;
        padding-right: 0;
        margin-top: 1rem;
        line-height: 2rem;
        text-align: center;
        white-space: pre-line;
        /* overflow: hidden; */
        width: 100%;
        word-wrap: break-word;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .text-subs-popup {
        position: relative;
        padding-top: 0.4rem;
        padding-bottom: 1.4rem;
        font-size: 1.2rem;
        line-height: 1rem;
      }

      .form-section-popup {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        text-align: center;
      }

      .input-form {
        width: 100%;
        color: #884ff1;
        background-color: #4c0ab6;
        border-radius: 6px;
        padding-top: 1rem;
        padding-right: 1rem;
        padding-left: 1rem;
        padding-bottom: 1rem;
        margin-bottom: 0.8rem;
        font-size: 1rem;
      }

      .input-form::placeholder {
        color: #8847f1;
        font-size: 1rem;
        text-align: flex-start;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .input-form::focus {
        color: #8847f1;
        outline: 1px solid #fee705;
        border: none;
        background-color: #4c0ab6;
      }

      .input-form:-webkit-autofill {
        /* -webkit-box-shadow: 0 30px 30px 30px #4c0ab6 inset !important; */
        color: #884ff1 !important;
        background-color: #4c0ab6 !important;
      }

      .titleCloseBtn {
        display: flex;
        justify-content: flex-end;
        text-align: center;
        color: #ffffff;
      }

      .titleCloseBtn button {
        background-color: transparent;
        /* border: none; */
        font-size: 25px;
        cursor: pointer;
      }

      .close-button {
        width: 3rem;
        height: 3rem;
        display: flex;
        flex-direction: column;

        outline: 3px solid #ffffff;
        border-radius: 8px;

        padding-top: 1.1rem;
        padding-right: 1.1rem;
        padding-left: 1.1rem;
        padding-bottom: 1.1rem;

        position: relative;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .modalContainer .body {
        flex: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.7rem;
        text-align: center;
      }

      .modalContainer .footer {
        flex: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .security-popup {
        width: 100%;
        display: flex;
        position: relative;
        /* margin-top: -2.5rem; */
        padding-bottom: 1rem;
        padding-top: 1rem;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .cadeado-img {
        display: flex;
        z-index: 3;
        position: relative;
        width: 1.1rem;
        height: 100%;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .text-security {
        font-size: 1.1rem;
        padding-left: 0.6rem;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .modalContainer .footer button {
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: inline-block;
        text-transform: capitalize;
        color: #5600e1;
        z-index: 3;
        position: relative;
        background-color: #fee705;
        width: 100%;
        font: 700 1.2rem Poppins, sans-serif;

        padding: 1.2rem 1.2rem 1.2rem 1.2rem;
        border-radius: 8px;

        /* -webkit-box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57);
      box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57) !important; */
        transition: 0.3s;

        justify-content: center;
        align-items: center;
        justify-self: center;
        justify-items: center;
        text-align: center;
      }

      .modalContainer .footer button:hover {
        /* transform: scale(1.05); */
        background-color: #ffff59;
        cursor: pointer;
      }
      /* end modal */
  }

  @media screen and (max-width: 1920px) {
    .big-wrapper {
      position: relative;
      padding-top: 9rem;
      padding-bottom: auto;
      padding-right: 8rem;
      padding-left: -1rem;
      width: 100%;
      min-height: 100vh;
      overflow: hidden;
      background-color: var(--backgroundColor);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      justify-items: center;
      align-items: center;
    }

    .img-start {
      width: 8rem;
      height: 100%;
      margin-bottom: -1rem;
    }

    .container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;
      text-align: start;
      max-width: 81rem;
      align-content: center;
      width: 100%;
      margin-left: 0;
      padding-right: 0;
      padding-left: 0;
    }
    button.btn {
      display: inline-block;
      text-transform: capitalize;
      color: #5600e1;
      z-index: 3;
      position: relative;
      background-color: #fee705;
      font: 700 1.525rem Poppins, sans-serif;

      padding: 1.2rem 1.75rem 1.2rem 1.75rem;
      margin-top: 1.2rem;
      border-radius: 8px;

      -webkit-box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57);
      box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57) !important;
      transition: 0.3s;

      justify-content: center;
      align-items: center;
      justify-self: center;
      justify-items: center;
      text-align: center;
    }

    button.btn:hover {
      transform: scale(1.05);
      background-color: #ffff59;
      cursor: pointer;
    }

    /* countdown init */
    .timer-container {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: flex-start;
      align-self: center;
      align-content: center;
    }

    .clock {
      position: relative;
      margin-top: -1rem;
      margin-left: -1rem;
      padding-right: 0rem;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: flex-start;
      align-content: flex-start;

      /* height: 180px; */
      /* width: 100%;
    max-width: 10rem; */
      color: #ffffff;
    }

    .clock section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: center;
      align-content: center;
      padding-top: 1.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0;
    }

    .clock section p {
      font-size: 3rem;
    }

    .clock span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: center;
      align-content: center;
      width: 100%;
      font-size: 2.4rem;
    }

    .clock section small {
      color: #ffffff;
      font-size: 0.9rem;
      text-shadow: none;
    }
    /* countdown end */

    .big-wrapper.active {
      background-color: transparent;
    }

    .big-wrapper.active {
      transform: translateY(0) rotate(-45deg);
    }

    .big-wrapper.active {
      transform: translateY(0) rotate(45deg);
    }

    .showcase-area .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
    }

    .big-title {
      font-size: 1.4rem;
      color: var(--darkOne);
      text-transform: capitalize;
      line-height: 1.4;
    }

    .text {
      color: var(--lightOne);
      font-size: 1.85rem;
      margin: 1.9rem 0 2.5rem;
      /* max-width: 600px; */
    }

    .text-jornada {
      font-size: 5rem;
      margin-bottom: 3rem;
      margin-top: 2.75rem;
      text-align: start;
      white-space: wrap;
    }

    .text-desc {
      font-size: 2.375rem;
      margin-bottom: 2rem;
      /* max-width: 600px; */
      line-height: 2.975rem;
      text-align: start;
    }

    .text-subs {
      font-size: 1.3rem;
      text-align: start;
      /* max-width: 600px; */
    }

    .text-contador {
      font-size: 1.4rem;
      color: #ffffff;
      margin-top: 1.5rem;
      margin-bottom: -0.3rem;
      line-height: 1rem;
      text-align: start;
    }

    .showcase-area .btn {
      box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.05);
    }

    .rocket {
      width: auto;
      height: 65rem;
      padding-left: 1rem;
      padding-right: 1rem;
      position: absolute;
      animation-name: levitation;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      transform: translate(-12rem, -35rem);
    }

    @keyframes levitation {
      0% {
        transform: translate(18rem, -50rem);
      }
      50% {
        transform: translate(18rem, -52rem);
      }
      100% {
        transform: translate(18rem, -50rem);
      }
    }
    /* modal css */
    .modalBackground {
        width: 130vw;
        height: 130vh;
        background-color: rgba(000, 000, 000, 0.7);
        z-index: 100;
        /* transform: translate(-6.7rem, -31rem); */
        top: -9rem;
        left: -15%;
        flex: 100%;
        overflow: hidden;
        display: flex;
        position: fixed;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .modalContainer {
        width: 40%;
        height: 70%;
        background-color: #5600e1;
        /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-right: 2rem;
        padding-left: 2rem;
        border-radius: 8px;
        flex-direction: column;
        overflow: visibility;
        display: flex;
        position: fixed;
      }

      .modalContainer .title {
        display: inline-block;
        text-align: center;
        margin-top: 1rem;
      }

      .header-popup {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: -6rem;
        /* border: 2px solid #ffffff; */
        position: relative;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .start-img-popup {
        display: flex;
        z-index: 3;
        position: relative;
        width: 8rem;
        height: 100%;
        /* margin-top: 1rem; */
        justify-items: center;
        text-align: center;
        justify-content: center;
        justify-self: center;
        align-self: center;
        align-content: center;
      }

      .text-jornada-popup {
        position: relative;
        z-index: 3;
        font-size: 4rem;
        padding-left: 0;
        padding-right: 0;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        line-height: 2rem;
        text-align: center;
        white-space: pre-line;
        /* overflow: hidden; */
        width: 100%;
        word-wrap: break-word;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .text-subs-popup {
        position: relative;
        padding-top: 0.4rem;
        padding-bottom: 1.6rem;
        font-size: 1rem;
        line-height: 1.2rem;
      }

      .form-section-popup {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        text-align: center;
      }

      .input-form {
        width: 100%;
        color: #884ff1;
        background-color: #4c0ab6;
        border-radius: 6px;
        padding-top: 1.4rem;
        padding-right: 1rem;
        padding-left: 1rem;
        padding-bottom: 1.4rem;
        margin-bottom: 0.8rem;
        font-size: 1.2rem;
      }

      .input-form::placeholder {
        color: #8847f1;
        font-size: 1.2rem;
        text-align: flex-start;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .input-form::focus {
        color: #8847f1;
        font-size: 1.2rem;
        outline: 1px solid #fee705;
        border: none;
        background-color: #4c0ab6;
      }

      .input-form:-webkit-autofill {
        /* -webkit-box-shadow: 0 30px 30px 30px #4c0ab6 inset !important; */
        color: #884ff1 !important;
        background-color: #4c0ab6 !important;
      }

      .titleCloseBtn {
        display: flex;
        justify-content: flex-end;
        text-align: center;
        color: #ffffff;
      }

      .titleCloseBtn button {
        background-color: transparent;
        /* border: none; */
        font-size: 25px;
        cursor: pointer;
      }

      .close-button {
        width: 2rem;
        height: 2rem;
        display: flex;
        flex-direction: column;

        outline: 3px solid #ffffff;
        border-radius: 8px;

        padding-top: 1.25rem;
        padding-right: 1.2rem;
        padding-bottom: 1.15rem;
        padding-left: 1.25rem;

        position: relative;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .modalContainer .body {
        flex: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.7rem;
        text-align: center;
      }

      .modalContainer .footer {
        flex: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .security-popup {
        width: 100%;
        display: flex;
        position: relative;
        /* margin-top: -2.5rem; */
        padding-bottom: 1rem;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .cadeado-img {
        display: flex;
        z-index: 3;
        position: relative;
        width: 1.1rem;
        height: 100%;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .text-security {
        font-size: 1.1rem;
        padding-left: 0.6rem;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .modalContainer .footer button {
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: inline-block;
        text-transform: capitalize;
        color: #5600e1;
        z-index: 3;
        position: relative;
        background-color: #fee705;
        width: 100%;
        font: 700 1.2rem Poppins, sans-serif;

        padding: 1.2rem 1.2rem 1.2rem 1.2rem;
        border-radius: 8px;

        /* -webkit-box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57);
      box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57) !important; */
        transition: 0.3s;

        justify-content: center;
        align-items: center;
        justify-self: center;
        justify-items: center;
        text-align: center;
      }

      .modalContainer .footer button:hover {
        /* transform: scale(1.05); */
        background-color: #ffff59;
        cursor: pointer;
      }
      /* end modal */
  }

  @media screen and (max-width: 1720px) {
    .big-wrapper {
      position: relative;
      padding-top: 6rem;
      padding-bottom: auto;
      padding-right: 2rem;
      padding-left: -1rem;
      width: 100%;
      min-height: 100vh;
      overflow: hidden;
      background-color: var(--backgroundColor);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      justify-items: center;
      align-items: center;
      align-content: center;
      align-self: center;
    }

    .img-start {
      width: 7rem;
      height: 100%;
      margin-bottom: -1rem;
    }

    .container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;
      text-align: start;
      max-width: 81rem;
      align-content: center;
      width: 100%;
      margin-left: 0;
      padding-right: 0;
      padding-left: 0;
    }

    button.btn {
      display: inline-block;
      text-transform: capitalize;
      color: #5600e1;
      z-index: 3;
      position: relative;
      background-color: #fee705;
      font: 700 1.5rem Poppins, sans-serif;

      padding: 1.2rem 1.75rem 1.2rem 1.75rem;
      margin-top: 1.2rem;
      border-radius: 8px;

      -webkit-box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57);
      box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57) !important;
      transition: 0.3s;

      justify-content: center;
      align-items: center;
      justify-self: center;
      justify-items: center;
      text-align: center;
    }

    button.btn:hover {
      transform: scale(1.05);
      background-color: #ffff59;
      cursor: pointer;
    }

    /* countdown init */
    .timer-container {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: flex-start;
      align-self: center;
      align-content: center;
    }

    .clock {
      position: relative;
      margin-top: -1rem;
      margin-left: -1rem;
      padding-right: 0rem;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: flex-start;
      align-content: flex-start;

      /* height: 180px; */
      /* width: 100%;
    max-width: 10rem; */
      color: #ffffff;
    }

    .clock section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: center;
      align-content: center;
      padding-top: 1.4rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0;
    }

    .clock section p {
      font-size: 3rem;
    }

    .clock span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: center;
      align-content: center;
      width: 100%;
      font-size: 2.5rem;
    }

    .clock section small {
      color: #ffffff;
      font-size: 1rem;
      text-shadow: none;
    }
    /* countdown end */

    .big-wrapper.active {
      background-color: transparent;
    }

    .big-wrapper.active {
      transform: translateY(0) rotate(-45deg);
    }

    .big-wrapper.active {
      transform: translateY(0) rotate(45deg);
    }

    .showcase-area .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
    }

    .big-title {
      font-size: 1.4rem;
      color: var(--darkOne);
      text-transform: capitalize;
      line-height: 1.4;
    }

    .text {
      color: var(--lightOne);
      font-size: 1.85rem;
      margin: 1.9rem 0 2.5rem;
      /* max-width: 600px; */
    }

    .text-jornada {
      font-size: 5rem;
      margin-bottom: 3rem;
      margin-top: 2.4rem;
      text-align: start;
      white-space: wrap;
    }

    .text-desc {
      font-size: 2.3em;
      margin-bottom: 1rem;
      /* max-width: 600px; */
      line-height: 2.8rem;
      text-align: start;
    }

    .text-subs {
      font-size: 1.3rem;
      text-align: start;
      /* max-width: 600px; */
    }

    .text-contador {
      font-size: 1rem;
      color: #ffffff;
      margin-top: 1.5rem;
      margin-bottom: -0.3rem;
      line-height: 1rem;
      text-align: start;
    }

    .showcase-area .btn {
      box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.05);
    }

    .rocket {
      width: auto;
      height: 58rem;
      padding-left: 1rem;
      padding-right: 1rem;
      position: absolute;
      animation-name: levitation;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      transform: translate(-12rem, -34rem);
    }

    @keyframes levitation {
      0% {
        transform: translate(18rem, -45rem);
      }
      50% {
        transform: translate(18rem, -47rem);
      }
      100% {
        transform: translate(18rem, -45rem);
      }
    }

    /* modal css */
    .modalBackground {
        width: 130vw;
        height: 130vh;
        background-color: rgba(000, 000, 000, 0.7);
        z-index: 100;
        /* transform: translate(-6.7rem, -31rem); */
        top: -6rem;
        left: -15%;
        flex: 100%;
        overflow: hidden;
        display: flex;
        position: fixed;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .modalContainer {
        width: 40%;
        height: 80%;
        background-color: #5600e1;
        /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-right: 2rem;
        padding-left: 2rem;
        border-radius: 8px;
        flex-direction: column;
        overflow: visibility;
        display: flex;
        position: fixed;
      }

      .modalContainer .title {
        display: inline-block;
        text-align: center;
        margin-top: 1rem;
      }

      .header-popup {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: -4rem;
        /* border: 2px solid #ffffff; */
        position: relative;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .start-img-popup {
        display: flex;
        z-index: 3;
        position: relative;
        width: 6rem;
        height: 100%;
        padding-top: -2rem;
        justify-items: center;
        text-align: center;
        justify-content: center;
        justify-self: center;
        align-self: center;
        align-content: center;
      }

      .text-jornada-popup {
        position: relative;
        z-index: 3;
        font-size: 3.3rem;
        margin-bottom: 1rem;
        padding-left: 0;
        padding-right: 0;
        margin-top: 1rem;
        line-height: 2rem;
        text-align: center;
        white-space: pre-line;
        /* overflow: hidden; */
        width: 100%;
        word-wrap: break-word;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .text-subs-popup {
        position: relative;
        padding-top: 0.4rem;
        padding-bottom: 1rem;
        font-size: 0.95rem;
        line-height: 1rem;
      }

      .form-section-popup {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        text-align: center;
      }

      .input-form {
        width: 100%;
        color: #884ff1;
        background-color: #4c0ab6;
        border-radius: 6px;
        padding-top: 1.2rem;
        padding-right: 1rem;
        padding-left: 1rem;
        padding-bottom: 1.2rem;
        margin-bottom: 0.8rem;
        font-size: 1.2rem;
      }

      .input-form::placeholder {
        color: #8847f1;
        font-size: 1.2rem;
        text-align: flex-start;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .input-form::focus {
        color: #8847f1;
        outline: 1px solid #fee705;
        border: none;
        background-color: #4c0ab6;
      }

      .input-form:-webkit-autofill {
        /* -webkit-box-shadow: 0 30px 30px 30px #4c0ab6 inset !important; */
        color: #884ff1 !important;
        background-color: #4c0ab6 !important;
      }

      .titleCloseBtn {
        display: flex;
        justify-content: flex-end;
        text-align: center;
        color: #ffffff;
      }

      .titleCloseBtn button {
        background-color: transparent;
        /* border: none; */
        font-size: 25px;
        cursor: pointer;
      }

      .close-button {
        width: 2rem;
        height: 2rem;
        display: flex;
        flex-direction: column;

        outline: 3px solid #ffffff;
        border-radius: 8px;

        padding-top: 1.25rem;
        padding-right: 1.2rem;
        padding-bottom: 1.15rem;
        padding-left: 1.25rem;

        position: relative;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .modalContainer .body {
        flex: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.7rem;
        text-align: center;
      }

      .modalContainer .footer {
        flex: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .security-popup {
        width: 100%;
        display: flex;
        position: relative;
        /* margin-top: -2.5rem; */
        padding-bottom: 1rem;
        padding-top: 1rem;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .cadeado-img {
        display: flex;
        z-index: 3;
        position: relative;
        width: 1.1rem;
        height: 100%;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .text-security {
        font-size: 1.1rem;
        padding-left: 0.6rem;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .modalContainer .footer button {
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: inline-block;
        text-transform: capitalize;
        color: #5600e1;
        z-index: 3;
        position: relative;
        background-color: #fee705;
        width: 100%;
        font: 700 1.2rem Poppins, sans-serif;

        padding: 1.2rem 1.2rem 1.2rem 1.2rem;
        border-radius: 8px;

        /* -webkit-box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57);
      box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57) !important; */
        transition: 0.3s;

        justify-content: center;
        align-items: center;
        justify-self: center;
        justify-items: center;
        text-align: center;
      }

      .modalContainer .footer button:hover {
        /* transform: scale(1.05); */
        background-color: #ffff59;
        cursor: pointer;
      }
      /* end modal */

  }

  @media screen and (max-width: 1570px) {
    .big-wrapper {
      position: relative;
      padding-top: 3.75rem;
      padding-bottom: auto;
      padding-right: 3rem;
      padding-left: -1rem;
      width: 100%;
      min-height: 100vh;
      overflow: hidden;
      background-color: var(--backgroundColor);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      justify-items: center;
      align-items: center;
      align-content: center;
      align-self: center;
    }

    .img-start {
      width: 5rem;
      height: 100%;
      margin-bottom: -1rem;
    }

    .container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;
      text-align: start;
      max-width: 81rem;
      align-content: center;
      width: 100%;
      margin-left: 0;
      padding-right: 0;
      padding-left: 0;
    }
    button.btn {
      display: inline-block;
      text-transform: capitalize;
      color: #5600e1;
      z-index: 3;
      position: relative;
      background-color: #fee705;
      font: 700 1.4rem Poppins, sans-serif;

      padding: 1.2rem 1.75rem 1.2rem 1.75rem;
      margin-top: 1.2rem;
      border-radius: 8px;

      -webkit-box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57);
      box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57) !important;
      transition: 0.3s;

      justify-content: center;
      align-items: center;
      justify-self: center;
      justify-items: center;
      text-align: center;
    }

    button.btn:hover {
      transform: scale(1.05);
      background-color: #ffff59;
      cursor: pointer;
    }

    /* countdown init */
    .timer-container {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: flex-start;
      align-self: center;
      align-content: center;
    }

    .clock {
      position: relative;
      margin-top: -1rem;
      margin-left: -1rem;
      padding-right: 0rem;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: flex-start;
      align-content: flex-start;

      /* height: 180px; */
      /* width: 100%;
    max-width: 10rem; */
      color: #ffffff;
    }

    .clock section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: center;
      align-content: center;
      padding-top: 1.4rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0;
    }

    .clock section p {
      font-size: 2rem;
    }

    .clock span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: center;
      align-content: center;
      width: 100%;
      font-size: 2rem;
    }

    .clock section small {
      color: #ffffff;
      font-size: 0.825rem;
      text-shadow: none;
    }
    /* countdown end */

    .big-wrapper.active {
      background-color: transparent;
    }

    .big-wrapper.active {
      transform: translateY(0) rotate(-45deg);
    }

    .big-wrapper.active {
      transform: translateY(0) rotate(45deg);
    }

    .showcase-area .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
    }

    .big-title {
      font-size: 1.4rem;
      color: var(--darkOne);
      text-transform: capitalize;
      line-height: 1.4;
    }

    .text {
      color: var(--lightOne);
      font-size: 1.85rem;
      margin: 1.9rem 0 2.5rem;
      /* max-width: 600px; */
    }

    .text-jornada {
      font-size: 4.5rem;
      margin-bottom: 2rem;
      margin-top: 2rem;
      text-align: start;
      white-space: wrap;
    }

    .text-desc {
      font-size: 2.1rem;
      margin-bottom: 1rem;
      /* max-width: 600px; */
      line-height: 2.5rem;
      text-align: start;
    }

    .text-subs {
      font-size: 1.2rem;
      text-align: start;
      /* max-width: 600px; */
    }

    .text-contador {
      font-size: 0.825rem;
      color: #ffffff;
      margin-top: 1.5rem;
      margin-bottom: -0.3rem;
      line-height: 1rem;
      text-align: start;
    }

    .showcase-area .btn {
      box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.05);
    }

    .rocket {
      width: auto;
      height: 50rem;
      padding-left: 1rem;
      padding-right: 1rem;
      position: absolute;
      animation-name: levitation;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      transform: translate(-12rem, -34rem);
    }

    @keyframes levitation {
      0% {
        transform: translate(19rem, -37rem);
      }
      50% {
        transform: translate(19rem, -39rem);
      }
      100% {
        transform: translate(19rem, -37rem);
      }
    }

    /* modal css */
    .modalBackground {
        width: 130vw;
        height: 130vh;
        background-color: rgba(000, 000, 000, 0.7);
        z-index: 100;
        /* transform: translate(-6.7rem, -31rem); */
        top: -6rem;
        left: -15%;
        flex: 100%;
        overflow: hidden;
        display: flex;
        position: fixed;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .modalContainer {
        width: 40%;
        height: 80%;
        background-color: #5600e1;
        /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-right: 2rem;
        padding-left: 2rem;
        border-radius: 8px;
        flex-direction: column;
        overflow: visibility;
        display: flex;
        position: fixed;
      }

      .modalContainer .title {
        display: inline-block;
        text-align: center;
        margin-top: 1rem;
      }

      .header-popup {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: -3rem;
        /* border: 2px solid #ffffff; */
        position: relative;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .start-img-popup {
        display: flex;
        z-index: 3;
        position: relative;
        width: 5rem;
        height: 100%;
        margin-top: -14%;
        justify-items: center;
        text-align: center;
        justify-content: center;
        justify-self: center;
        align-self: center;
        align-content: center;
      }

      .text-jornada-popup {
        position: relative;
        z-index: 3;
        font-size: 2.75rem;
        margin-bottom: 1rem;
        padding-left: 0;
        padding-right: 0;
        margin-top: 1rem;
        line-height: 2rem;
        text-align: center;
        white-space: pre-line;
        /* overflow: hidden; */
        width: 100%;
        word-wrap: break-word;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .text-subs-popup {
        position: relative;
        padding-top: 0.4rem;
        padding-bottom: 1rem;
        font-size: 0.8rem;
        line-height: 1rem;
      }

      .form-section-popup {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        text-align: center;
      }

      .input-form {
        width: 100%;
        color: #884ff1;
        background-color: #4c0ab6;
        border-radius: 6px;
        padding-top: 1rem;
        padding-right: 1rem;
        padding-left: 1rem;
        padding-bottom: 1rem;
        margin-bottom: 0.8rem;
        font-size: 1.1rem;
      }

      .input-form::placeholder {
        color: #8847f1;
        font-size: 1.1rem;
        text-align: flex-start;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .input-form::focus {
        color: #8847f1;
        outline: 1px solid #fee705;
        border: none;
        background-color: #4c0ab6;
      }

      .input-form:-webkit-autofill {
        /* -webkit-box-shadow: 0 30px 30px 30px #4c0ab6 inset !important; */
        color: #884ff1 !important;
        background-color: #4c0ab6 !important;
      }

      .titleCloseBtn {
        display: flex;
        justify-content: flex-end;
        text-align: center;
        color: #ffffff;
      }

      .titleCloseBtn button {
        background-color: transparent;
        /* border: none; */
        font-size: 25px;
        cursor: pointer;
      }

      .close-button {
        width: 2rem;
        height: 2rem;
        display: flex;
        flex-direction: column;

        outline: 3px solid #ffffff;
        border-radius: 8px;

        padding-top: 1.25rem;
        padding-right: 1.2rem;
        padding-bottom: 1.15rem;
        padding-left: 1.25rem;

        position: relative;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .modalContainer .body {
        flex: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.7rem;
        text-align: center;
      }

      .modalContainer .footer {
        flex: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .security-popup {
        width: 100%;
        display: flex;
        position: relative;
        /* margin-top: -2.5rem; */
        padding-bottom: 1rem;
        padding-top: 1rem;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .cadeado-img {
        display: flex;
        z-index: 3;
        position: relative;
        width: 0.9rem;
        height: 100%;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .text-security {
        font-size: 0.8rem;
        padding-left: 0.6rem;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .modalContainer .footer button {
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: inline-block;
        text-transform: capitalize;
        color: #5600e1;
        z-index: 3;
        position: relative;
        background-color: #fee705;
        width: 100%;
        font: 700 1.2rem Poppins, sans-serif;

        padding: 1.2rem 1.2rem 1.2rem 1.2rem;
        border-radius: 8px;

        /* -webkit-box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57);
      box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57) !important; */
        transition: 0.3s;

        justify-content: center;
        align-items: center;
        justify-self: center;
        justify-items: center;
        text-align: center;
      }

      .modalContainer .footer button:hover {
        /* transform: scale(1.05); */
        background-color: #ffff59;
        cursor: pointer;
      }
      /* end modal */
  }

    @media screen and (max-width: 1240px) {
      .big-wrapper {
        position: relative;
        padding-top: 9%;
        padding-bottom: auto;
        padding-right: 3rem;
        padding-left: -1rem;
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
        background-color: var(--backgroundColor);
        display: flex;
        top: 50%;
        bottom: 50%;
        flex-direction: column;
        justify-content: space-between;
        justify-items: center;
        align-items: center;
      }

      .container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
        text-align: start;
        max-width: 81rem;
        align-content: center;
        width: 100%;
        margin-left: 0;
        padding-right: 0;
        padding-left: 0;
      }

      .img-start {
        width: 3.5rem;
        height: 100%;
        margin-bottom: -1rem;
      }

      button.btn {
        display: inline-block;
        text-transform: capitalize;
        color: #5600e1;
        z-index: 3;
        position: relative;
        background-color: #fee705;
        font: 700 1.05rem Poppins, sans-serif;

        padding: 1.2rem 1.75rem 1.2rem 1.75rem;
        margin-top: 1.2rem;
        border-radius: 8px;

        -webkit-box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57);
        box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57) !important;
        transition: 0.3s;

        justify-content: center;
        align-items: center;
        justify-self: center;
        justify-items: center;
        text-align: center;
      }

      button.btn:hover {
        transform: scale(1.05);
        background-color: #ffff59;
        cursor: pointer;
      }

      /* countdown init */
      .timer-container {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: flex-start;
        align-self: center;
        align-content: center;
      }

      .clock {
        position: relative;
        margin-top: -1rem;
        margin-left: -1rem;
        padding-right: 0rem;
        padding-bottom: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        align-self: flex-start;
        align-content: flex-start;

        /* height: 180px; */
        /* width: 100%;
        max-width: 10rem; */
        color: #ffffff;
      }

      .clock section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        align-self: center;
        align-content: center;
        padding-top: 1.4rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 0;
      }

      .clock section p {
        font-size: 2rem;
      }

      .clock span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        align-self: center;
        align-content: center;
        width: 100%;
        font-size: 2rem;
      }

      .clock section small {
        color: #ffffff;
        font-size: 0.825rem;
        text-shadow: none;
      }
      /* countdown end */

      .big-wrapper.active {
        background-color: transparent;
      }

      .big-wrapper.active {
        transform: translateY(0) rotate(-45deg);
      }

      .big-wrapper.active {
        transform: translateY(0) rotate(45deg);
      }

      .showcase-area .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: center;
      }

      .big-title {
        font-size: 1.4rem;
        color: var(--darkOne);
        text-transform: capitalize;
        line-height: 1.4;
      }

      .text {
        color: var(--lightOne);
        font-size: 1.85rem;
        margin: 1.9rem 0 2.5rem;
        /* max-width: 600px; */
      }

      .text-jornada {
        font-size: 3.5rem;
        margin-bottom: 1.2rem;
        text-align: start;
        white-space: wrap;
      }

      .text-desc {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        /* max-width: 600px; */
        line-height: 2.5rem;
        text-align: start;
      }

      .text-subs {
        font-size: 1.1rem;
        text-align: start;
        /* max-width: 600px; */
      }

      .text-contador {
        font-size: 0.825rem;
        color: #ffffff;
        margin-top: 1.5rem;
        margin-bottom: -0.3rem;
        line-height: 1rem;
        text-align: start;
      }

      .showcase-area .btn {
        box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.05);
      }

      .rocket {
        width: auto;
        height: 44rem;
        padding-left: 1rem;
        padding-right: 1rem;
        position: absolute;
        animation-name: levitation;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        transform: translate(-12rem, -36rem);
      }

      @keyframes levitation {
        0% {
          transform: translate(11rem, -36rem);
        }
        50% {
          transform: translate(11rem, -38rem);
        }
        100% {
          transform: translate(11rem, -36rem);
        }
      }

      /* modal css */
      .modalBackground {
        width: 130vw;
        height: 130vh;
        background-color: rgba(000, 000, 000, 0.7);
        z-index: 100;
        /* transform: translate(-6.7rem, -31rem); */
        top: -6rem;
        left: -15%;
        flex: 100%;
        overflow: hidden;
        display: flex;
        position: fixed;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .modalContainer {
        width: 50%;
        height: 80%;
        background-color: #5600e1;
        /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-right: 2rem;
        padding-left: 2rem;
        border-radius: 8px;
        flex-direction: column;
        overflow: visibility;
        display: flex;
        position: fixed;
      }

      .modalContainer .title {
        display: inline-block;
        text-align: center;
        margin-top: 1rem;
      }

      .header-popup {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: -3rem;
        padding-bottom: -8rem;
        /* margin-top: -3rem; */
        /* border: 2px solid #ffffff; */
        position: relative;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .start-img-popup {
        display: flex;
        z-index: 3;
        position: relative;
        width: 5rem;
        height: 100%;
        margin-top: -6rem;
        justify-items: center;
        text-align: center;
        justify-content: center;
        justify-self: center;
        align-self: center;
        align-content: center;
      }

      .text-jornada-popup {
        position: relative;
        z-index: 3;
        font-size: 2.75rem;
        margin-bottom: 1rem;
        padding-left: 0;
        padding-right: 0;
        margin-top: 1rem;
        line-height: 2rem;
        text-align: center;
        white-space: pre-line;
        /* overflow: hidden; */
        width: 100%;
        word-wrap: break-word;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .text-subs-popup {
        position: relative;
        padding-top: 0.4rem;
        padding-bottom: 1rem;
        font-size: 0.7rem;
        line-height: 1rem;
      }

      .form-section-popup {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        text-align: center;
      }

      .input-form {
        width: 100%;
        color: #884ff1;
        background-color: #4c0ab6;
        border-radius: 6px;
        padding-top: 0.9rem;
        padding-right: 0.9rem;
        padding-left: 0.9rem;
        padding-bottom: 0.9rem;
        margin-bottom: 0.8rem;
        font-size: 0.9rem;
      }

      .input-form::placeholder {
        color: #8847f1;
        font-size: 0.9rem;
        text-align: flex-start;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .input-form::focus {
        color: #8847f1;
        outline: 1px solid #fee705;
        border: none;
        background-color: #4c0ab6;
      }

      .input-form:-webkit-autofill {
        /* -webkit-box-shadow: 0 30px 30px 30px #4c0ab6 inset !important; */
        color: #884ff1 !important;
        background-color: #4c0ab6 !important;
      }

      .titleCloseBtn {
        display: flex;
        justify-content: flex-end;
        text-align: center;
        color: #ffffff;
      }

      .titleCloseBtn button {
        background-color: transparent;
        /* border: none; */
        font-size: 25px;
        cursor: pointer;
      }

      .close-button {
        width: 2rem;
        height: 2rem;
        display: flex;
        flex-direction: column;

        outline: 3px solid #ffffff;
        border-radius: 8px !important;

        padding-top: 1.25rem;
        padding-right: 1.2rem;
        padding-bottom: 1.15rem;
        padding-left: 1.25rem;

        position: relative;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .modalContainer .body {
        flex: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.7rem;
        text-align: center;
      }

      .modalContainer .footer {
        flex: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .security-popup {
        width: 100%;
        display: flex;
        position: relative;
        /* margin-top: -2.5rem; */
        padding-bottom: 1rem;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .cadeado-img {
        display: flex;
        z-index: 3;
        position: relative;
        width: 0.9rem;
        height: 100%;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .text-security {
        font-size: 0.8rem;
        padding-left: 0.6rem;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .modalContainer .footer button {
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: inline-block;
        text-transform: capitalize;
        color: #5600e1;
        z-index: 3;
        position: relative;
        background-color: #fee705;
        width: 100%;
        font: 700 1.2rem Poppins, sans-serif;

        padding: 1.2rem 1.2rem 1.2rem 1.2rem;
        border-radius: 8px;

        /* -webkit-box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57);
      box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57) !important; */
        transition: 0.3s;

        justify-content: center;
        align-items: center;
        justify-self: center;
        justify-items: center;
        text-align: center;
      }

      .modalContainer .footer button:hover {
        /* transform: scale(1.05); */
        background-color: #ffff59;
        cursor: pointer;
      }
      /* end modal */
    }

    @media screen and (max-width: 870px) {
      .big-wrapper {
        position: relative;
        padding-top: 22rem;
        padding-bottom: auto;
        padding-right: 2rem;
        padding-left: 2rem;
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
        background-color: var(--backgroundColor);
        display: flex;
        top: 50%;
        bottom: 50%;
        flex-direction: column;
        justify-content: space-between;
        justify-items: center;
        text-align: start;
        align-items: center;
      }

      .container {
        position: relative;
        /* max-width: 81rem; */
        width: 100%;
        margin: 0 auto;
        text-align: center;
        /* padding-right: 0;
    padding-left: 4rem; */
      }

      .img-start {
        z-index: 3;
        position: relative;
        width: 5rem;
        height: 100%;
      }

      .text-jornada {
        position: relative;
        z-index: 3;
        font-size: 3.585rem;
        margin-bottom: 1.2rem;
        margin-top: 1rem;
        line-height: 3.5rem;
        white-space: pre-line;
        width: 100%;
        text-align: center;
      }

      .text-desc {
        position: relative;
        z-index: 3;
        font-size: 1.575rem;
        margin-bottom: 1rem;
        padding-right: 1rem;
        padding-left: 1rem;
        width: 100%;
        line-height: 2.1rem;
        text-align: center;
      }

      .text-subs {
        position: relative;
        z-index: 3;
        font-size: 0.925rem;
        text-align: center;
        /* max-width: 600px; */
      }

      .text-contador {
        font-size: 0.9rem;
        color: #ffffff;
        margin-top: 1.825rem;
        margin-bottom: 0.325rem;
        /* margin-bottom: -0.3rem; */
        align-items: center;
        line-height: 1rem;
        text-align: center;
      }

      .timer-container {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        align-self: center;
        align-content: center;
      }

      .clock {
        position: relative;
        margin-top: -1.375rem;
        margin-left: 0;
        padding-right: 0rem;
        padding-bottom: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        align-self: center;
        align-content: center;

        /* height: 180px; */
        /* width: 100%;
    max-width: 10rem; */
        color: #ffffff;
      }

      .clock section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        align-self: center;
        align-content: center;
        padding-top: 1.4rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 0;
      }

      .clock section p {
        font-size: 2rem;
      }

      .clock span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        align-self: center;
        align-content: center;
        width: 100%;
        font-size: 2rem;
      }

      .clock section small {
        color: #ffffff;
        font-size: 0.825rem;
        text-shadow: none;
      }

      .shape-rocket {
        position: absolute;
        z-index: 2;
        background-color: #5600e1;
        width: 100vw;
        height: 20rem;
        transform: translate(0, -10rem);
        filter: blur(30px);
        text-align: center;
      }

      .rocket {
        z-index: 1;
        width: auto;
        height: 28rem;
        position: absolute;
        animation-name: levitation;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        transform: translate(-18rem, -39rem);
        margin-bottom: 10rem;
        margin-top: -20rem;
        text-align: center;
      }

      @keyframes levitation {
        0% {
          transform: translate(-15rem, -39rem);
        }
        50% {
          transform: translate(-15rem, -41rem);
        }
        100% {
          transform: translate(-15rem, -39rem);
        }
      }

      .big-wrapper.active .links {
        transform: translateX(0);
        box-shadow: 0 0 50px 2px rgba(0, 0, 0, 0.4);
      }

      .big-wrapper.active .overlay {
        pointer-events: all;
        opacity: 1;
      }

      .showcase-area {
        padding: 2.5rem 0;
        max-width: 700px;
        margin: 0 auto;
      }

      .showcase-area .container {
        grid-template-columns: 1fr;
        justify-content: center;
        grid-gap: 2rem;
      }

      .big-title {
        font-size: 1.1rem;
      }

      .text {
        font-size: 0.95rem;
        margin: 1.4rem 0 1.5rem;
      }

      .rocket {
        width: 100%;
        transform: none;
      }

      /* modal css */
      .modalBackground {
        width: 130vw;
        height: 130vh;
        background-color: rgba(000, 000, 000, 0.7);
        z-index: 100;
        /* transform: translate(-6.7rem, -31rem); */
        top: -6.2rem;
        left: -15.5%;
        flex: 100%;
        overflow: hidden;
        display: flex;
        position: fixed;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .modalContainer {
        width: 80%;
        height: 80%;
        background-color: #5600e1;
        /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-right: 2rem;
        padding-left: 2rem;
        border-radius: 8px;
        flex-direction: column;
        overflow: visibility;
        display: flex;
        position: fixed;
      }

      .modalContainer .title {
        display: inline-block;
        text-align: center;
        margin-top: 1rem;
      }

      .header-popup {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: -12%;
        /* border: 2px solid #ffffff; */
        position: relative;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .start-img-popup {
        display: flex;
        z-index: 3;
        position: relative;
        width: 5rem;
        height: 100%;
        margin-top: -5rem;
        justify-items: center;
        text-align: center;
        justify-content: center;
        justify-self: center;
        align-self: center;
        align-content: center;
      }

      .text-jornada-popup {
        position: relative;
        z-index: 3;
        font-size: 2.75rem;
        margin-bottom: 1rem;
        padding-left: 0;
        padding-right: 0;
        margin-top: 1rem;
        line-height: 2.5rem;
        text-align: center;
        white-space: pre-line;
        /* overflow: hidden; */
        width: 100%;
        word-wrap: break-word;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .text-subs-popup {
        position: relative;
        padding-top: 0.4rem;
        padding-bottom: 1rem;
        font-size: 0.9rem;
        line-height: 1rem;
      }

      .form-section-popup {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        text-align: center;
      }

      .input-form {
        width: 100%;
        color: #884ff1;
        background-color: #4c0ab6;
        border-radius: 6px;
        padding-top: 1rem;
        padding-right: 1rem;
        padding-left: 1rem;
        padding-bottom: 1rem;
        margin-bottom: 0.8rem;
        font-size: 1rem;
      }

      .input-form::placeholder {
        color: #8847f1;
        font-size: 1rem;
        text-align: flex-start;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .input-form::focus {
        color: #8847f1;
        outline: 1px solid #fee705;
        border: none;
        background-color: #4c0ab6;
      }

      .input-form:-webkit-autofill {
        /* -webkit-box-shadow: 0 30px 30px 30px #4c0ab6 inset !important; */
        color: #884ff1 !important;
        background-color: #4c0ab6 !important;
      }

      .titleCloseBtn {
        display: flex;
        justify-content: flex-end;
        text-align: center;
        color: #ffffff;
      }

      .titleCloseBtn button {
        background-color: transparent;
        /* border: none; */
        font-size: 25px;
        cursor: pointer;
      }

      .close-button {
        width: 2rem;
        height: 2rem;
        display: flex;
        flex-direction: column;

        outline: 3px solid #ffffff;
        border-radius: 8px !important;

        padding-top: 1.25rem;
        padding-right: 1.2rem;
        padding-bottom: 1.15rem;
        padding-left: 1.25rem;

        position: relative;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .modalContainer .body {
        flex: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.7rem;
        text-align: center;
      }

      .modalContainer .footer {
        flex: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .security-popup {
        width: 100%;
        display: flex;
        position: relative;
        /* margin-top: -2.5rem; */
        padding-bottom: 1rem;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .cadeado-img {
        display: flex;
        z-index: 3;
        position: relative;
        width: 0.9rem;
        height: 100%;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: center;
        text-align: center;
      }

      .text-security {
        font-size: 0.8rem;
        padding-left: 0.6rem;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .modalContainer .footer button {
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: inline-block;
        text-transform: capitalize;
        color: #5600e1;
        z-index: 3;
        position: relative;
        background-color: #fee705;
        width: 100%;
        font: 700 1.2rem Poppins, sans-serif;

        padding: 1.2rem 1.2rem 1.2rem 1.2rem;
        border-radius: 8px;

        /* -webkit-box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57);
      box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57) !important; */
        transition: 0.3s;

        justify-content: center;
        align-items: center;
        justify-self: center;
        justify-items: center;
        text-align: center;
      }

      .modalContainer .footer button:hover {
        /* transform: scale(1.05); */
        background-color: #ffff59;
        cursor: pointer;
      }
      /* end modal */
    }
  }

  @media screen and (max-width: 470px) {
    .big-wrapper {
      position: relative;
      padding-top: 16rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: auto;
      width: 100%;
      min-height: 100vh;
      overflow: hidden;
      background-color: var(--backgroundColor);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      justify-items: center;
      text-align: center;
      align-items: center;
    }

    .container {
      position: relative;
      /* max-width: 81rem; */
      width: 100%;
      text-align: center;
      /* margin: 0 auto; */
      /* padding-right: 0;
    padding-left: 4rem; */
    }

    .img-start {
      z-index: 3;
      position: relative;
      width: 5rem;
      height: 100%;
      text-align: center;
    }

    .text-jornada {
      position: relative;
      z-index: 3;
      font-size: 3.6rem;
      margin-bottom: 1.2rem;
      padding-left: 0;
      padding-right: 0;
      margin-top: 1rem;
      line-height: 3.5rem;
      text-align: center;
      white-space: pre-line;
      word-wrap: break-word;
      overflow: hidden;
      width: 100%;
    }

    .text-desc {
      position: relative;
      z-index: 3;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      padding-right: 1rem;
      padding-left: 1rem;
      width: 100%;
      line-height: 1.9rem;
      text-align: center;
    }

    .text-subs {
      position: relative;
      z-index: 3;
      font-size: 0.825rem;
      text-align: center;
      /* max-width: 600px; */
    }

    .text-contador {
      font-size: 0.9rem;
      color: #ffffff;
      margin-top: 1.825rem;
      margin-bottom: 0.325rem;
      /* margin-bottom: -0.3rem; */
      align-items: center;
      line-height: 1rem;
      text-align: center;
    }

    .timer-container {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      align-self: center;
      align-content: center;
    }

    .clock {
      position: relative;
      margin-top: -1rem;
      margin-left: 0;
      padding-right: 0rem;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: center;
      align-content: center;

      /* height: 180px; */
      /* width: 100%;
    max-width: 10rem; */
      color: #ffffff;
    }

    .clock section {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: center;
      align-content: center;
      padding-top: 1.4rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0;
    }

    .clock section p {
      font-size: 2rem;
    }

    .clock span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: center;
      align-content: center;
      width: 100%;
      font-size: 2rem;
    }

    .clock section small {
      color: #ffffff;
      font-size: 0.825rem;
      text-shadow: none;
    }

    .shape-rocket {
      position: absolute;
      z-index: 2;
      background-color: #5600e1;
      width: 100vw;
      height: 20rem;
      transform: translate(0, -10rem);
      filter: blur(30px);
    }

    .rocket {
      z-index: 1;
      text-align: center;
      width: auto;
      height: 28rem;
      position: absolute;
      animation-name: levitation;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      transform: translate(-18rem, -44rem);
      margin-bottom: 10rem;
      margin-top: -9rem;
    }

    @keyframes levitation {
      0% {
        transform: translate(-19rem, -46rem);
      }
      50% {
        transform: translate(-19rem, -48rem);
      }
      100% {
        transform: translate(-19rem, -46rem);
      }
    }

    .big-title {
      font-size: 0.9rem;
    }

    .text {
      padding: 1.1rem 0 1.5rem;
    }

    .showcase-area .btn {
      font-size: 0.8rem;
    }

    /* modal css */
    .modalBackground {
      width: 130vw;
      height: 130vh;
      background-color: rgba(000, 000, 000, 0.7);
      z-index: 100;
      /* transform: translate(-6.7rem, -31rem); */
      top: -18%;
      left: -15%;
      flex: 100%;
      overflow: hidden;
      display: flex;
      position: fixed;
      justify-content: center;
      justify-self: center;
      justify-items: center;
      align-content: center;
      align-self: center;
      align-items: center;
      text-align: center;
    }

    .modalContainer {
      width: 80%;
      height: 90%;
      background-color: #5600e1;
      /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
      padding-top: 2rem;
      padding-bottom: 2rem;
      padding-right: 2rem;
      padding-left: 2rem;
      border-radius: 8px;
      flex-direction: column;
      overflow: auto;
      display: flex;
      position: fixed;
    }

    .modalContainer .title {
      display: inline-block;
      text-align: center;
      margin-top: 1rem;
    }

    .header-popup {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-top: 0;
      /* border: 2px solid #ffffff; */
      position: relative;
      justify-content: center;
      justify-self: center;
      justify-items: center;
      align-content: center;
      align-self: center;
      align-items: center;
      text-align: center;
    }

    .start-img-popup {
      display: flex;
      z-index: 3;
      position: relative;
      width: 4rem;
      height: 100%;
      margin-top: 1rem;
      padding-top: -3rem;
      justify-items: center;
      text-align: center;
      justify-content: center;
      justify-self: center;
      align-self: center;
      align-content: center;
    }

    .text-jornada-popup {
      position: relative;
      z-index: 3;
      font-size: 3rem;
      margin-bottom: 1rem;
      padding-left: 0;
      padding-right: 0;
      margin-top: 1rem;
      line-height: 2.5rem;
      text-align: center;
      white-space: pre-line;
      /* overflow: hidden; */
      width: 100%;
      word-wrap: break-word;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .text-subs-popup {
      position: relative;
      padding-top: 0.4rem;
      padding-bottom: 1rem;
      font-size: 0.8rem;
      line-height: 1rem;
    }

    .form-section-popup {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      text-align: center;
    }

    .input-form {
        width: 100%;
        color: #884ff1;
        background-color: #4c0ab6;
        border-radius: 6px;
        padding-top: 1rem;
        padding-right: 1rem;
        padding-left: 1rem;
        padding-bottom: 1rem;
        margin-bottom: 0.8rem;
        font-size: 0.85rem;
      }

      .input-form::placeholder {
        color: #8847f1;
        font-size: 0.85rem;
        text-align: flex-start;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .input-form::focus {
        color: #8847f1;
        outline: 1px solid #fee705;
        border: none;
        background-color: #4c0ab6;
      }

      .input-form:-webkit-autofill {
        /* -webkit-box-shadow: 0 30px 30px 30px #4c0ab6 inset !important; */
        color: #884ff1 !important;
        background-color: #4c0ab6 !important;
      }

    .titleCloseBtn {
      display: flex;
      justify-content: flex-end;
      color: #ffffff;
    }

    .titleCloseBtn button {
      background-color: transparent;
      border: none;
      font-size: 25px;
      cursor: pointer;
    }

    .close-button {
      width: 2rem;
      height: 2rem;
      display: flex;
      flex-direction: column;

      outline: 3px solid #ffffff;
      border-radius: 8px !important;

      padding-top: 1.1rem;
      padding-right: 1.1rem;
      padding-left: 1.1rem;
      padding-bottom: 1.1rem;

      position: relative;
      justify-content: center;
      justify-self: center;
      justify-items: center;
      align-content: center;
      align-self: center;
      align-items: center;
      text-align: center;
    }

    .modalContainer .body {
      flex: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.7rem;
      text-align: center;
    }

    .modalContainer .footer {
      flex: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .security-popup {
      width: 100%;
      display: flex;
      position: relative;
      /* margin-top: -2.5rem; */
      padding-bottom: 1rem;
      justify-content: center;
      justify-self: center;
      justify-items: center;
      align-content: center;
      align-self: center;
      align-items: center;
      text-align: center;
    }

    .cadeado-img {
      display: flex;
      z-index: 3;
      position: relative;
      width: 0.8rem;
      height: 100%;
      justify-content: center;
      justify-self: center;
      justify-items: center;
      align-content: center;
      align-self: center;
      align-items: center;
      text-align: center;
    }

    .text-security {
      font-size: 0.7rem;
      padding-left: 0.4rem;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .modalContainer .footer button {
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
      display: inline-block;
      text-transform: capitalize;
      color: #5600e1;
      z-index: 3;
      position: relative;
      background-color: #fee705;
      width: 100%;
      font: 700 1rem Poppins, sans-serif;

      padding: 1.2rem 1.2rem 1.2rem 1.2rem;
      border-radius: 8px;

      /* -webkit-box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57);
      box-shadow: 0px 7px 43px 14px rgba(254, 231, 5, 0.57) !important; */
      transition: 0.3s;

      justify-content: center;
      align-items: center;
      justify-self: center;
      justify-items: center;
      text-align: center;
    }

    .modalContainer .footer button:hover {
      /* transform: scale(1.05); */
      background-color: #ffff59;
      cursor: pointer;
    }
    /* end modal */

`
