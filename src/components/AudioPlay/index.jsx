import styled from 'styled-components';
import Download from './Download';
import PlayBar from './PlayBar';
import WaveForm from './WaveForm';

const AudioPlay = ({ track, setTrackNumber }) => {
  return (
    <AudioPlayWrapper>
      <WaveForm />
      <PlayBar track={track} setTrackNumber={setTrackNumber} />
      <Download track={track} />
    </AudioPlayWrapper>
  );
};

export default AudioPlay;

const AudioPlayWrapper = styled.div``;
