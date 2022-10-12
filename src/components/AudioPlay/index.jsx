import styled from 'styled-components';
import Download from './Download';
import PlayBar from './PlayBar';
import WaveForm from './WaveForm';

const AudioPlay = ({ track, setTrack, handleClickNext, hadleClickPre }) => {
  return (
    <AudioPlayWrapper>
      <WaveForm />
      <PlayBar track={track} setTrack={setTrack} handleClickNext={handleClickNext} hadleClickPre={hadleClickPre} />
      <Download />
    </AudioPlayWrapper>
  );
};

export default AudioPlay;

const AudioPlayWrapper = styled.div``;
