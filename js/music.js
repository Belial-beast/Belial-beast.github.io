const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#FF0000',
    audio: [
      {
        name: "纸短情长",
        artist: '徐梦圆',
        url: 'https://music.163.com/song/media/outer/url?id=516076896.mp3',
        cover: 'https://p3.music.126.net/AAq1qOhfyrClGK1mg3mGYQ==/18776360067593424.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'https://music.163.com/song/media/outer/url?id=1434570079.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});
