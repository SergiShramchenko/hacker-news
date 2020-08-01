import styled from 'styled-components';

export const StoryWrapper = styled.section`
  padding-top: 10px;
  margin-bottom: 10px;
  border-top: 1px solid #cccccc;
  &:first-of-type {
    border-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;
  a {
    color: #2e2e2c;
    background-color: #2e2e2c;
    text-decoration: none;

    &:hover,
    &:focus {
      outline: none;
      background-color: #f8dc3d;
      transition: all 0.2s ease-in;
    }
  }
`;

export const StoryMeta = styled.div`
  padding-bottom: 8px;
  padding-top: 8px;
  font-size: 15px;

  > span:not(:first-child):before {
    content: '•'
    margin: 0 7px;
  }
  .story__meta-bold {
    font-weight: bold;
  }
  `;

export const StoryMetaElement = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.color};
`;
