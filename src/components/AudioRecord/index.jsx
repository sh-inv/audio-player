import React, { useState } from 'react';
import styled from 'styled-components';

const AudioRecord = () => {
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [isRecord, setOnRec] = useState(true);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioData, setAudioData] = useState();
  const [maxRecordTime, setMaxRecordTime] = useState(60);
  const [newRecord, setNewRecord] = useState('');
  const selectObject = [
    {
      name: '1 min',
      value: 1,
    },
    {
      name: '3 min',
      value: 3,
    },
    {
      name: '5 min',
      value: 5,
    },
    {
      name: '10 min',
      value: 10,
    },
    {
      name: '30 min',
      value: 30,
    },
  ];

  const recordTime = e => {
    setMaxRecordTime(e.target.value * 60);
  };

  const onRecAudio = () => {
    // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }
    // 마이크 사용 권한 획득
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        // 3분(180초) 지나면 자동으로 음성 저장 및 녹음 중지
        if (e.playbackTime > maxRecordTime) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          // 메서드가 호출 된 노드 연결 해제
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            setAudioData(e.data);
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });
  };

  // 사용자가 음성 녹음을 중지 했을 때
  const offRecAudio = () => {
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    media.ondataavailable = function (e) {
      setAudioData(e.data);
      setOnRec(true);
    };

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    // 미디어 캡처 중지
    media.stop();

    // 메서드가 호출 된 노드 연결 해제
    analyser.disconnect();
    source.disconnect();

    // if (audioData) {
    //   const audioUrl = URL.createObjectURL(audioData); // 출력된 링크에서 녹음된 오디오 확인 가능
    //   setNewRecord(audioUrl);
    // }

    // File 생성자를 사용해 파일로 변환
    const sound = new File([audioData], 'voiceRecord', {
      lastModified: new Date().getTime(),
      type: 'audio',
    });
    setNewRecord(sound);
    console.log(sound); // File 정보 출력
  };

  const recordURL = () => {
    if(audioData){
      setNewRecord(URL.createObjectURL(audioData));
    } else {
      alert('녹음파일이 없습니다!');
    }
  };
  console.log('adsf', audioData);

  return (
    <Record>
      <img
        className='record-btn'
        src={!isRecord ? 'https://user-images.githubusercontent.com/104422865/195544014-8286f4e9-4826-4b2c-9983-7971e239d642.png' : 'https://cdn-icons-png.flaticon.com/512/3138/3138411.png'}
        onClick={isRecord ? onRecAudio : offRecAudio}
      />
      <div>
        녹음 가능 시간:
        <select onChange={recordTime}>
          {selectObject.map(object => (
            <option key={object.name} value={object.value}>
              {object.name}
            </option>
          ))}
        </select>
      </div>
      {audioData && <a className='click-to-download' href={newRecord} download onClick={recordURL}>
        음성녹음 다운로드
      </a>}
    </Record>
  );
};

const Record = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .on-record {
    font-size: 14px;
    color: #939393;
  }

  .record-btn {
    width: 150px;
    height: 150px;
    margin: 20px 0;
    cursor: pointer;
  }

  .click-to-download {
    margin: 20px 0;
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 10px;
    color: #000000;
    text-decoration: none;
  }
`;

export default AudioRecord;
