import styled from 'styled-components';
import WaveSurfer from 'wavesurfer.js';
import { useEffect, useRef, useState } from 'react';

const WaveForm = ({ track }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    if (track) {
      const options = formWaveSurferOptions(waveformRef.current);
      wavesurfer.current = WaveSurfer.create(options);
      wavesurfer.current.load(track.src);
      wavesurfer.current.on('ready', function () {
        if (wavesurfer.current) {
          wavesurfer.current.play();
          wavesurfer.current.setVolume(0.5);
        }
      });
      return () => wavesurfer.current.destroy();
    }
  }, [track.src]);

  const handlePlayPause = () => {
    wavesurfer.current.playPause();
  };

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

  return (
    <WaveFormWrapper>
      <div id='waveform' ref={waveformRef}></div>
    </WaveFormWrapper>
  );
};

export default WaveForm;

const WaveFormWrapper = styled.div``;
