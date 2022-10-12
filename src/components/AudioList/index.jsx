import styled from 'styled-components';
import { getAudioList } from './Api';
import { useState, useEffect } from 'react';

const AudioList = ({ trackList, setTrackNumber }) => {
  // useEffect();

  return (
    <div>
      AudioList
<<<<<<< HEAD
      {/* <button
=======
      <button
>>>>>>> develop/merge
        id={1}
        onClick={e => {
          setTrackNumber(e.target.id);
        }}
      >
        버튼
<<<<<<< HEAD
      </button> */}
      {/* {trackList.map(item => (
        <li>{item}</li>
      ))} */}
=======
      </button>
>>>>>>> develop/merge
    </div>
  );
};

export default AudioList;
