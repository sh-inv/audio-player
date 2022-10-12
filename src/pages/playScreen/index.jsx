import styled from 'styled-components';
import AudioList from '../../components/AudioList';
import AudioPlay from '../../components/AudioPlay';

const PlayScreen = () => {
  return (
    <PlayScreenWrapper>
      <div className='audio-list-content'>
        <AudioList />
      </div>
      <div className='audio-detail-content'>
        <AudioPlay />
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
    margin: 5px 0px;
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
