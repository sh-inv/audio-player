import styled from 'styled-components';
import AudioList from '../../components/AudioList';
import AudioWaveForm from '../../components/AudioWaveForm';
import AudioPlayBar from '../../components/AudioPlayBar';
import AudioDownLoad from '../../components/AudioDownLoad';

const PlayScreen = () => {
  return (
    <PlayScreenWrapper>
      <div className='audio-list-content'>
        <AudioList />
      </div>
      <div className='audio-detail-content'>
        <AudioWaveForm />
        <AudioPlayBar />
        <AudioDownLoad />
      </div>
    </PlayScreenWrapper>
  );
};

export default PlayScreen;

const PlayScreenWrapper = styled.div`
  display: flex;

  .audio-list-content,
  .audio-detail-content {
    display: flex;
    justify-content: center;
    margin: 5px;
    padding: 5px;
  }

  .audio-list-content {
    width: 35%;
    background-color: #d6d641;
  }

  .audio-detail-content {
    flex-direction: column;
    width: 65%;
    background-color: beige;
  }

  @media screen and (max-width: 890px) {
    flex-direction: column;

    .audio-list-content,
    .audio-detail-content {
      width: 100%;
    }
  }
`;
