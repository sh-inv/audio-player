import styled from 'styled-components';
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PlayList from '../../../../public/Data/Audio/audio.json';

const PlayBar = ({ track, setTrack, handleClickNext, hadleClickPre }) => {
  return (
    <StyledContainer>
      <AudioPlayer autoPlay={false} src={PlayList.lists[track].src} onPlay={e => console.log('onPlay')} showSkipControls onClickPrevious={hadleClickPre} onClickNext={handleClickNext} />
    </StyledContainer>
    // other props here
  );
};
export default PlayBar;

const StyledContainer = styled.div`
  display: inline;
  width: 100%;
  padding: 10px;

  .rhap_container {
    display: flex;
    width: 100%;
    background-color: white;
    .rhap_main-controls-button {
      color: #5092cd;
    }
    .rhap_container {
      height: 20vh;
      border: 1px solid pink;
    }
    .rhap_progress-indicator {
    }
    .rhap_additional-controls {
    }
  }
`;
