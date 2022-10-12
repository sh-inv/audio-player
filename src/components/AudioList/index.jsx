import styled from 'styled-components';

const AudioList = ({ trackList, setTrackNumber }) => {
  return (
    <StyledContainer>
      <h1>AUDIO LIST</h1>
      <ul>
        {trackList.map(item => (
          <li
            key={item.title}
            id={item.id}
            onClick={e => {
              setTrackNumber(e.target.id);
            }}
          >
            <h2>Title :</h2>
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
    margin-bottom: 10px;
    font-size: 1.6em;
  }
  li {
    display: flex;
    width: 100%;
    padding: 7px;
    margin-bottom: 10px;
    border: 1px solid gray;
    font-size: 1em;
    :hover {
      border: 2px solid #5092cd;
    }
  }
  h2 {
    margin-right: 10px;
  }
`;
