import styled from 'styled-components';
import { RiFileMusicLine } from 'react-icons/ri';

const AudioList = ({ trackList, setTrackNumber }) => {
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
            <h2>
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
  margin: 10px;
  text-align: center;
  h1 {
    background: -webkit-linear-gradient(left, #f0ff00, #58cffb);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 10px;
    font-size: 1.9em;
    font-weight: bold;
  }
  ul {
    width: 200px;
  }
  li {
    display: flex;
    width: 100%;
    padding: 7px;
    margin-bottom: 10px;
    border: 1px solid gray;
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
