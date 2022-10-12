import styled from 'styled-components';
import { getAudioList } from './Api';
import { useState, useEffect } from 'react';

const AudioList = ({ trackList, setTrackNumber }) => {
  // useEffect();

  return (
    <div>
      {trackList.map(item => (
        <ul>
          <li value={id} key={id}>
            {item}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AudioList;
