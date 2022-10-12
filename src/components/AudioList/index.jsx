import styled from 'styled-components';
import { getAudioList } from './Api';
import { useState, useEffect } from 'react';

const AudioList = ({ trackList, setTrackNumber }) => {
  return (
    <StyledContainer>
      <h1>AUDIO LIST</h1>
      {trackList.map(item => (
        <ul>
          <li
            key={item.id}
            id={item.id}
            onClick={e => {
              setTrackNumber(e.target.id);
            }}
          >
            <h2>Title :</h2>
            {item.title}
          </li>
        </ul>
      ))}
    </StyledContainer>
  );
};

export default AudioList;

const StyledContainer = styled.div`
  margin: 10px;
  text-align: center;
  h1 {
    font-size: 1.6em;
    margin-bottom: 10px;
  }
  li {
    display: flex;
    width: 100%;
    border: 1px solid gray;
    font-size: 1em;
    padding: 10px;
    margin-bottom: 10px;
    :hover {
      border: 2px solid #5092cd;
    }
  }
  h2 {
    margin-right: 10px;
  }
`;
