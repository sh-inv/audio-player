import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AudioList from '../../components/AudioList';
import AudioPlay from '../../components/AudioPlay';
import AudioRecord from '../../components/AudioRecord';
import PlayList from '../../../public/Data/Audio/audio.json';
import axios from 'axios';

const Main = () => {
  const [err, setErr] = useState(false);
  const [isRecord, setIsRecord] = useState(false);
  const [trackNumber, setTrackNumber] = useState(0);
  const [track, setTrack] = useState('');
  const [trackList, setTrackList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const navTitle = location.pathname;
    if (navTitle === '/') {
      setTrackList('play');
      setIsRecord(false);
    } else if (navTitle === '/record') {
      setTrackList('record');
      setIsRecord(true);
    } else {
      setErr(true);
    }
  }, [location]);

  useEffect(() => {
    trackList.map(trackInfo => {
      if (trackInfo.id === Number(trackNumber)) {
        setTrack(trackInfo);
      }
    });
  }, [trackNumber]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { lists },
        } = await axios.get('../../../public/Data/Audio/audio.json');
        setTrackList(lists);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return err ? (
    <div>에러</div>
  ) : (
    <PlayScreenWrapper>
      <div className='audio-list-content'>
        <AudioList trackList={trackList} setTrackNumber={setTrackNumber} />
      </div>
      <div className='audio-detail-content'>
        <AudioPlay track={track} setTrackNumber={setTrackNumber} />
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
