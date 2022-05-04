// Find total length of music playlist:
const PLAYLIST = {
    playlistName: 'My Jams!',
    songList: [
      { songName: 'I\'m My Own Grandpa', artistName: 'The Hills Have Eyes', songLength: 3.5 },
      { songName: 'Not Around', artistName: 'Drake', songLength: 4 },
      { songName: 'Naked Swim', artistName: 'Blisss', songLength: 6.9 },
      { songName: 'Get Off My Lawn!', artistName: 'Clint Westwood', songLength: 3 },
      { songName: 'Better than U', artistName: 'Free Brittney!', songLength: 6 },
      { songName: 'Till the Cows Come Home', artistName: 'yung MaCdOnAlD', songLength: 5.5 }
    ]
  };
  
  
  // DISPLAY PLAYLIST NAME:
  console.log(`Playlist Name: ${PLAYLIST.playlistName}`);
  
  
  // GET TOTAL LENGTH OF PLAYLIST:
  // FIRST, push song lengths to their own array:
  let songLengthsArray = [];
  for (i = 0; i < PLAYLIST.songList.length; i++) {
    songLengthsArray.push(PLAYLIST.songList[i].songLength);
  }
  
  // SECOND, use .reduce() to get length of playlist:
  const PLAYLIST_LENGTH = songLengthsArray.reduce((acc, cv) => {
    return acc + cv;
  }); 
  console.log(`Total length: ${PLAYLIST_LENGTH} minutes`);
  
  
  // GET NUMBER OF SONGS IN PLAYLIST:
  console.log(`Total songs: ` + songLengthsArray.length);
  
  
  // GET AVERAGE LENGTH OF SONG IN PLAYLIST:
  const AVG_SONG_LENGTH = () => {
    return (PLAYLIST_LENGTH / songLengthsArray.length).toFixed(1);
  }
  console.log(`Average song length: ${AVG_SONG_LENGTH()} minutes`);
  
  
  // FIND THE SHORTEST & LONGEST SONGS:
  // First, sort PLAYLIST into ascending order, based on songLength:
  let playlistSorted = PLAYLIST.songList.sort((a, b) => {
    return a.songLength - b.songLength;
  });
  
  // Shortest song:
  let shortestSong = playlistSorted[0];
  console.log(`The shortest song is '${shortestSong.songName}' by ${shortestSong.artistName} and it is ${shortestSong.songLength} minutes long.`);
  
  // Longest song:
  let longestSong = playlistSorted[playlistSorted.length - 1];
  console.log(`The longest song is '${longestSong.songName}' by ${longestSong.artistName} and it is ${longestSong.songLength} minutes long.`);