import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AudioList from '../../components/AudioList';
import AudioPlay from '../../components/AudioPlay';
import AudioRecord from '../../components/AudioRecord';

const Main = () => {
  const [err, setErr] = useState(false);
  const [isRecord, setIsRecord] = useState(false);
  const [audioFile, setAudioFile] = useState('play');
  const location = useLocation();

  useEffect(() => {
    const navTitle = location.pathname;
    if (navTitle === '/') {
      setAudioFile('play');
      setIsRecord(false);
    } else if (navTitle === '/record') {
      setAudioFile('record');
      setIsRecord(true);
    } else {
      setErr(true);
    }
  }, [location]);

  return err ? (
    <div>에러</div>
  ) : (
    <PlayScreenWrapper>
      <div className='audio-list-content'>
        <AudioList audioFile={audioFile} />
      </div>
      <div className='audio-detail-content'>
        <AudioPlay audioFile={audioFile} />
        {isRecord && <AudioRecord />}
      </div>
    </PlayScreenWrapper>
  );
};

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

export default Main;