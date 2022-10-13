import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Download = ({ track }) => {
  const [trackUrl, setTrackUrl] = useState('');
  const [audioType, setAudioType] = useState('mp3');

  useEffect(() => {
    if (track) {
      const fileExtension = track.src.split('.').pop();
      const trackUrl = track.src.replace(fileExtension, audioType);
      setTrackUrl(trackUrl);
    }
  }, [track, audioType]);

  return (
    <DownloadWrapper>
      <AudioTypeBox>
        <p>오디오 파일 확장자를 선택하세요.</p>
        <select name='' id='' onChange={e => setAudioType(e.target.value)} value={audioType}>
          <option value='mp3'>mp3 (default)</option>
          {/* <option value='wav'>wav</option> */}
          {/* <option value='webm'>webm</option> */}
        </select>
      </AudioTypeBox>
      <DownloadButton href={trackUrl}>Download</DownloadButton>
    </DownloadWrapper>
  );
};

export default Download;

const DownloadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AudioTypeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  p {
    margin-bottom: 10px;
  }
`;

const DownloadButton = styled.a`
  display: flex;
  justify-content: center;
  width: 60%;
  padding: 20px 0;
  background-color: white;
`;
