import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    color: #202020;
    background-color: #fafafe;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;

export const StoriesContainerWrapper = styled.main`
  max-width: 1140px;
  padding: 20px 15px;
  margin: auto;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .search-title {
    width: 50%;
    height: 30px;
    text-indent: 10px;
    border-radius: 3px;
    background-color: #dadada;
    border: none;
    transition: all 0.2s ease-out;

    &:focus {
      outline: none;
      background-color: #dadada42;
      transition: all 0.2s ease-in;
    }
  }

  .options {
    display: flex;
    justify-content: flex-end;

    &__name {
      font-size: 13px;
      background-color: #bedaf3;
      // background-color: #a7d6ff;
      padding: 5px 10px 5px 10px;
      letter-spacing: 1px;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.2s ease-out;

      &:hover {
        background-color: #dae2e8;
        transition: all 0.2s ease-in;
      }
    }
  }
`;
