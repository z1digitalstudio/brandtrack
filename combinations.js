const getSong = (stepsArray) => {
  const stepsMix = stepsArray.toString()
  const songList = {
    'retail,weather,raining': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'retail,weather,cloudy': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/08/audio_5fd3e66ac3.mp3",
      artist: "Artist number Two",
      title: "Caffeine",
      genre: "Jazz",
      bpm: 120,
      popularity: 42,
      danceability: 74,
      energy: 80,
    },
    'retail,weather,sunny': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/03/audio_6700efb297.mp3",
      artist: "Artist number Three",
      title: "Where is my head",
      genre: "Pop",
      bpm: 128,
      popularity: 63,
      danceability: 88,
      energy: 92,
    },
    'retail,foot-traffic,slow': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'retail,foot-traffic,moderate': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'retail,foot-traffic,faster': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'retail,consumer-rotation,low': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'retail,consumer-rotation,mid': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'retail,consumer-rotation,high': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'hotel,weather,raining': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'hotel,weather,cloudy': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'hotel,weather,sunny': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'hotel,foot-traffic,slow': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'hotel,foot-traffic,moderate': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'hotel,foot-traffic,faster': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'hotel,consumer-rotation,low': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'hotel,consumer-rotation,mid': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'hotel,consumer-rotation,high': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'restaurant,weather,raining': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'restaurant,weather,cloudy': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'restaurant,weather,sunny': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'restaurant,foot-traffic,slow': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'restaurant,foot-traffic,moderate': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'restaurant,foot-traffic,faster': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'restaurant,consumer-rotation,low': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'restaurant,consumer-rotation,mid': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'restaurant,consumer-rotation,high': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'other,weather,raining': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'other,weather,cloudy': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'other,weather,sunny': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'other,foot-traffic,slow': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'other,foot-traffic,moderate': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'other,foot-traffic,faster': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'other,consumer-rotation,low': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'other,consumer-rotation,mid': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
    'other,consumer-rotation,high': {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/17/audio_ae4d57086a.mp3",
      artist: "Artist number One",
      title: "The best song",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60,
    },
  }
  return songList[stepsMix]
}
