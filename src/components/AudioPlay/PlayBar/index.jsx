import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const PlayBar = ({ track, setTrackNumber }) => {
  const handleClickNext = () => {
    setTrackNumber(prev => Number(prev) + 1);
  };

  const hadleClickPre = () => {
    setTrackNumber(prev => Number(prev) - 1);
  };
  return (
    <StyledContainer>
      <AudioPlayer header={track.title} autoPlay={false} src={track.src} showSkipControls onClickPrevious={hadleClickPre} onClickNext={handleClickNext} />
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
    height: 20%;
    background: linear-gradient(to right, #f0ff00, #58cffb);
    border: none;
    box-shadow: none;

    svg {
      color: white;
    }

    .rhap_header {
      color: white;
      font-size: 20px;
      text-align: center;
      font-weight: bold;
    }
    .rhap_progress-filled {
      background-color: white;
    }
    .rhap_main-controls-button {
      color: white;
    }

    .rhap_progress-indicator {
      background: linear-gradient(to right, #f0ff00, #58cffb);
      box-shadow: none;
    }
    .rhap_volume-indicator {
      background: linear-gradient(to right, #f0ff00, #58cffb);
      box-shadow: none;
    }
  }
  .rhap_progress-indicator {
  }
  .rhap_additional-controls {
  }
`;
