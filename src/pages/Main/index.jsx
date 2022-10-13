import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import AudioList from '../../components/AudioList';
import AudioPlay from '../../components/AudioPlay';
import AudioRecord from '../../components/AudioRecord/index.jsx';

const Main = () => {
  const location = useLocation();
  const [trackList, setTrackList] = useState([]);
  const [trackNumber, setTrackNumber] = useState(0);
  const [track, setTrack] = useState('');
  const [isRecord, setIsRecord] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const navTitle = location.pathname;
    let url = '/Data/Audio/';
    if (navTitle === '/') {
      fetchData(url + 'playList.json');
      setIsRecord(false);
    } else if (navTitle === '/record') {
      fetchData(url + 'audioRecord.json');
      setIsRecord(true);
    } else {
      setErr(true);
    }
  }, [location]);

  const fetchData = url => {
    (async () => {
      try {
        const {
          data: { lists },
        } = await axios.get(url);
        setTrackList(lists);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  useEffect(() => {
    trackList.map(trackInfo => {
      if (trackInfo.id === Number(trackNumber)) {
        setTrack(trackInfo);
      }
    });
  }, [trackNumber]);

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
    height: 100%;
  }

  .audio-list-content {
    width: 35%;
    background: linear-gradient(to right, #f0ff00, #58cffb);
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
