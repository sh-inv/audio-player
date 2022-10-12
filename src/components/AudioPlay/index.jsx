import styled from 'styled-components';
import WaveForm from './WaveForm';
import PlayBar from './PlayBar';
import Download from './Download';

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
