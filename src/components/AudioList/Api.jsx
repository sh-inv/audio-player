export async function getAudioList() {
  const res = await fetch('../../../public/Data/Audio/audio.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(() => alert('통신에 실패하였습니다.'));

  return res.json();
}
