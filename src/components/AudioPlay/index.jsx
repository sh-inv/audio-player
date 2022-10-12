import styled from 'styled-components';
import Download from './Download';
import PlayBar from './PlayBar';
import WaveForm from './WaveForm';

const AudioPlay = () => {
  return (
    <AudioPlayWrapper>
      <WaveForm />
      <PlayBar />
      <Download />
    </AudioPlayWrapper>
  );
};

export default AudioPlay;

const AudioPlayWrapper = styled.div``;
