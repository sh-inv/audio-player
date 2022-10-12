import styled from 'styled-components';
import { getAudioList } from './Api';
import { useState, useEffect } from 'react';

const AudioList = ({ trackList, setTrackNumber }) => {
  // useEffect();

  return (
    <div>
      AudioList
      <button
        id={1}
        onClick={e => {
          setTrackNumber(e.target.id);
        }}
      >
        버튼
      </button>
    </div>
  );
};

export default AudioList;
