import styled from 'styled-components';
import { RiFileMusicLine } from 'react-icons/ri';
import { useState } from 'react';

const AudioList = ({ trackList, setTrackNumber }) => {
  const [active, setActive] = useState(false);

  return (
    <StyledContainer>
      <h1>- AUDIO LIST -</h1>
      <ul>
        {trackList.map(item => (
          <li
            key={item.title}
            id={item.id}
            onClick={e => {
              setTrackNumber(e.target.id);
            }}
          >
            <h2
              onClick={() => {
                setActive(!active);
              }}
            >
              <RiFileMusicLine />
            </h2>
            {item.title}
          </li>
        ))}
      </ul>
    </StyledContainer>
  );
};

export default AudioList;

const StyledContainer = styled.div`
  width: 50vw;
  margin: 5px;
  text-align: center;
  background-color: white;

  h1 {
    width: 100%;
    background: -webkit-linear-gradient(left, #f0ff00, #58cffb);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 10px;
    padding-top: 10px;
    font-size: 1.8em;
    font-weight: bold;
  }
  ul {
    display: inline-block;
    width: 200px;
    align-items: center;
  }
  li {
    display: flex;
    width: 100%;
    padding: 7px;
    margin-bottom: 10px;
    font-size: 1em;
    border: none;

    :hover {
      background: linear-gradient(to right, #f0ff00, #58cffb);
      cursor: pointer;
    }
  }
  h2 {
    margin-right: 10px;
  }
`;
