import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { FiDownload } from 'react-icons/fi';

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
        <p>오디오 파일 확장자를 선택하고 다운로드 받으세요.</p>
        <select name='' id='' onChange={e => setAudioType(e.target.value)} value={audioType}>
          <option value='mp3'>mp3 (default)</option>
          <option value='wav'>wav</option>
          <option value='webm'>webm</option>
        </select>
        <p className='down-button'>
          {/* <DownloadButton href={trackUrl}>
            <FiDownload />
          </DownloadButton> */}
          <DownloadButton href={trackUrl}>오디오파일 다운로드</DownloadButton>
        </p>
      </AudioTypeBox>
    </DownloadWrapper>
  );
};

export default Download;

const DownloadWrapper = styled.div`
  display: flex;
  border: 4px solid;
  border-image: linear-gradient(0deg, #f0ff00 20%, #58cffb 80%);
  border-image-slice: 1;
`;

const AudioTypeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 10px;

  select {
    width: 28vw;
    height: 5vh;
    text-align: center;
    border: none;
  }

  p {
    margin-bottom: 10px;
  }

  .down-button {
    width: 180px;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #000000;
    border-radius: 10px;
  }
`;

const DownloadButton = styled.a`
  justify-content: center;
  width: 20px;
  height: 20px;
  padding-left: 3px;
  bottom: 0;
  color: black;

  svg {
    width: 23px;
    height: 17px;
  }
`;
