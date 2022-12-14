import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Download from './Download';

const AudioPlay = ({ track, setTrackNumber }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const playBarRef = useRef(null);

  useEffect(() => {
    if (track) {
      const options = formWaveSurferOptions(waveformRef.current);
      wavesurfer.current = WaveSurfer.create(options);
      wavesurfer.current.load(track.src);
      playBarRef.current.audio.current.pause();
      wavesurfer.current.on('ready', () => {
        if (wavesurfer.current) {
          playBarRef.current.audio.current.play();
          wavesurfer.current.play();
          wavesurfer.current.setVolume(0);
        }
      });
      return () => wavesurfer.current.destroy();
    }
  }, [track.src]);

  const formWaveSurferOptions = ref => ({
    container: ref,
    waveColor: '#e1eaff',
    progressColor: '#5092CD',
    cursorColor: '#5092CD',
    barWidth: 3,
    barRadius: 3,
    responsive: true,
    height: 300,
    normalize: true,
    partialRender: true,
  });

  const setSameTime = () => {
    const currentTime = playBarRef.current.audio.current.currentTime;
    wavesurfer.current.setCurrentTime(currentTime);
  };

  const onPlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.play();
    }
  };

  const onPause = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
    }
  };

  const onSeeked = () => {
    const currentTime = playBarRef.current.audio.current.currentTime;
    wavesurfer.current.setCurrentTime(currentTime);
  };

  const hadleClickPre = () => {
    setTrackNumber(prev => Number(prev) - 1);
  };

  const handleClickNext = () => {
    setTrackNumber(prev => Number(prev) + 1);
  };

  return (
    <AudioPlayWrapper>
      <WaveFormWrapper>
        <div id='waveform' ref={waveformRef}></div>
      </WaveFormWrapper>
      <PlayBaraWrapper>
        <AudioPlayer ref={playBarRef} header={track.title} src={track.src} autoPlay={false} showSkipControls onListen={setSameTime} onPlay={onPlay} onPause={onPause} onSeeked={onSeeked} onClickPrevious={hadleClickPre} onClickNext={handleClickNext} />
      </PlayBaraWrapper>
      <Download track={track} />
    </AudioPlayWrapper>
  );
};

export default AudioPlay;
const WaveFormWrapper = styled.div``;

const AudioPlayWrapper = styled.div``;

const PlayBaraWrapper = styled.div`
  display: inline;
  width: 100%;
  padding: 10px;

  .rhap_container {
    display: flex;
    width: 100%;
    height: 22vh;
    background: linear-gradient(to right, #f0ff00, #58cffb);
    border: none;
    box-shadow: none;

    svg {
      color: white;
    }

    .rhap_header {
      color: white;
      font-size: 20px;
      text-align: center;
      font-weight: bold;
    }
    .rhap_progress-filled {
      background-color: white;
    }
    .rhap_main-controls-button {
      color: white;
    }

    .rhap_progress-indicator {
      background: linear-gradient(to right, #f0ff00, #58cffb);
      box-shadow: none;
    }
    .rhap_volume-indicator {
      background: linear-gradient(to right, #f0ff00, #58cffb);
      box-shadow: none;
    }
  }
  .rhap_progress-indicator {
  }
  .rhap_additional-controls {
  }
`;
