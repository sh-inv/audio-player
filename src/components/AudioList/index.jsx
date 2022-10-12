import styled from 'styled-components';
import { getAudioList } from './Api';
import { useState, useEffect } from 'react';

const AudioList = ({ track, setTrack }) => {
  const [list, setList] = useState({});

  useEffect(() => {
    getAudioList().then(json => setList(json));
  }, []);

  // console.log(list.lists[track].title);

  return (
    <div>
      AudioList
      {/* <div>
        {list.title.map(song => (
          <li value={song} key={id}>
            {song}
          </li>
        ))}
      </div> */}
    </div>
  );
};

export default AudioList;
