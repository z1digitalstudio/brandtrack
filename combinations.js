const getSong = (stepsArray) => {
  const stepsMix = stepsArray.toString()
  const songList = {
    "retail,weather,raining": {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/03/audio_6700efb297.mp3",
      artist: "William_King",
      title: "Ambient Classical Guitar",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "retail,weather,cloudy": {
      songUrl: "https://cdn.pixabay.com/audio/2023/03/19/audio_9311bc02e5.mp3",
      artist: "SoulProdMusic",
      title: "Smoke",
      genre: "Jazz",
      bpm: 120,
      popularity: 42,
      danceability: 74,
      energy: 80
    },
    "retail,weather,sunny": {
      songUrl: "https://cdn.pixabay.com/audio/2022/11/22/audio_febc508520.mp3",
      artist: "AlexiAction",
      title: "Lifelike",
      genre: "Pop",
      bpm: 128,
      popularity: 63,
      danceability: 88,
      energy: 92
    },
    "retail,foot-traffic,slow": {
      songUrl: "https://cdn.pixabay.com/audio/2022/11/11/audio_684ca37dc0.mp3",
      artist: "Evgeny_Bardyuzha",
      title: "Password Infinity",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "retail,foot-traffic,moderate": {
      songUrl: "https://cdn.pixabay.com/audio/2022/10/18/audio_31c2730e64.mp3",
      artist: "Olexy",
      title: "The Beat of Nature",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "retail,foot-traffic,faster": {
      songUrl: "https://cdn.pixabay.com/audio/2022/10/14/audio_9939f792cb.mp3",
      artist: "DayFox",
      title: "Weekends",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "retail,consumer-rotation,low": {
      songUrl: "https://cdn.pixabay.com/audio/2022/10/12/audio_061cead49a.mp3",
      artist: "Amaksi",
      title: "Tuesday (Glitch Soft Hip-hop)",
      genre: genre,
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "retail,consumer-rotation,mid": {
      songUrl: "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3",
      artist: "Alex Grohl",
      title: "Electronic Rock (King Around Here)",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "retail,consumer-rotation,high": {
      songUrl: "https://cdn.pixabay.com/audio/2021/07/27/audio_6623aaf984.mp3",
      artist: "Lesfm",
      title: "Chilled Acoustic Indie Folk Instrumental B",
      genre: "Jazz",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "hotel,weather,raining": {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/03/audio_6700efb297.mp3",
      artist: "William_King",
      title: "Ambient Classical Guitar",
      genre: "Pop",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "hotel,weather,cloudy": {
      songUrl: "https://cdn.pixabay.com/audio/2023/03/19/audio_9311bc02e5.mp3",
      artist: "SoulProdMusic",
      title: "Smoke",
      genre: "Indie",
      bpm: 120,
      popularity: 42,
      danceability: 74,
      energy: 80
    },
    "hotel,weather,sunny": {
      songUrl: "https://cdn.pixabay.com/audio/2022/11/22/audio_febc508520.mp3",
      artist: "AlexiAction",
      title: "Lifelike",
      genre: "Pop",
      bpm: 128,
      popularity: 63,
      danceability: 88,
      energy: 92
    },
    "hotel,foot-traffic,slow": {
      songUrl: "https://cdn.pixabay.com/audio/2022/11/11/audio_684ca37dc0.mp3",
      artist: "Evgeny_Bardyuzha",
      title: "Password Infinity",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "hotel,foot-traffic,moderate": {
      songUrl: "https://cdn.pixabay.com/audio/2022/10/18/audio_31c2730e64.mp3",
      artist: "Olexy",
      title: "The Beat of Nature",
      genre: genre,
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "hotel,foot-traffic,faster": {
      songUrl: "https://cdn.pixabay.com/audio/2022/10/14/audio_9939f792cb.mp3",
      artist: "DayFox",
      title: "Weekends",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "hotel,consumer-rotation,low": {
      songUrl: "https://cdn.pixabay.com/audio/2022/10/12/audio_061cead49a.mp3",
      artist: "Amaksi",
      title: "Tuesday (Glitch Soft Hip-hop)",
      genre: "Jazz",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "hotel,consumer-rotation,mid": {
      songUrl: "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3",
      artist: "Alex Grohl",
      title: "Electronic Rock (King Around Here)",
      genre: "Pop",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "hotel,consumer-rotation,high": {
      songUrl: "https://cdn.pixabay.com/audio/2021/07/27/audio_6623aaf984.mp3",
      artist: "Lesfm",
      title: "Chilled Acoustic Indie Folk Instrumental B",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "restaurant,weather,raining": {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/03/audio_6700efb297.mp3",
      artist: "William_King",
      title: "Ambient Classical Guitar",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "restaurant,weather,cloudy": {
      songUrl: "https://cdn.pixabay.com/audio/2023/03/19/audio_9311bc02e5.mp3",
      artist: "SoulProdMusic",
      title: "Smoke",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "restaurant,weather,sunny": {
      songUrl: "https://cdn.pixabay.com/audio/2022/11/22/audio_febc508520.mp3",
      artist: "AlexiAction",
      title: "Lifelike",
      genre: genre,
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "restaurant,foot-traffic,slow": {
      songUrl: "https://cdn.pixabay.com/audio/2022/11/11/audio_684ca37dc0.mp3",
      artist: "Evgeny_Bardyuzha",
      title: "Password Infinity",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "restaurant,foot-traffic,moderate": {
      songUrl: "https://cdn.pixabay.com/audio/2022/10/18/audio_31c2730e64.mp3",
      artist: "Olexy",
      title: "The Beat of Nature",
      genre: "Jazz",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "restaurant,foot-traffic,faster": {
      songUrl: "https://cdn.pixabay.com/audio/2022/10/14/audio_9939f792cb.mp3",
      artist: "DayFox",
      title: "Weekends",
      genre: "Pop",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "restaurant,consumer-rotation,low": {
      songUrl: "https://cdn.pixabay.com/audio/2022/10/12/audio_061cead49a.mp3",
      artist: "Amaksi",
      title: "Tuesday (Glitch Soft Hip-hop)",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "restaurant,consumer-rotation,mid": {
      songUrl: "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3",
      artist: "Alex Grohl",
      title: "Electronic Rock (King Around Here)",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "restaurant,consumer-rotation,high": {
      songUrl: "https://cdn.pixabay.com/audio/2021/07/27/audio_6623aaf984.mp3",
      artist: "Lesfm",
      title: "Chilled Acoustic Indie Folk Instrumental B",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "other,weather,raining": {
      songUrl: "https://cdn.pixabay.com/audio/2023/04/03/audio_6700efb297.mp3",
      artist: "William_King",
      title: "Ambient Classical Guitar",
      genre: genre,
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "other,weather,cloudy": {
      songUrl: "https://cdn.pixabay.com/audio/2023/03/19/audio_9311bc02e5.mp3",
      artist: "SoulProdMusic",
      title: "Smoke",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "other,weather,sunny": {
      songUrl: "https://cdn.pixabay.com/audio/2022/11/22/audio_febc508520.mp3",
      artist: "AlexiAction",
      title: "Lifelike",
      genre: "Jazz",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "other,foot-traffic,slow": {
      songUrl: "https://cdn.pixabay.com/audio/2022/11/11/audio_684ca37dc0.mp3",
      artist: "Evgeny_Bardyuzha",
      title: "Password Infinity",
      genre: "Pop",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "other,foot-traffic,moderate": {
      songUrl: "https://cdn.pixabay.com/audio/2022/10/18/audio_31c2730e64.mp3",
      artist: "Olexy",
      title: "The Beat of Nature",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "other,foot-traffic,faster": {
      songUrl: "https://cdn.pixabay.com/audio/2022/10/14/audio_9939f792cb.mp3",
      artist: "DayFox",
      title: "Weekends",
      genre: "Pop",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "other,consumer-rotation,low": {
      songUrl: "https://cdn.pixabay.com/audio/2022/10/12/audio_061cead49a.mp3",
      artist: "Amaksi",
      title: "Tuesday (Glitch Soft Hip-hop)",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "other,consumer-rotation,mid": {
      songUrl: "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3",
      artist: "Alex Grohl",
      title: "Electronic Rock (King Around Here)",
      genre: genre,
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    },
    "other,consumer-rotation,high": {
      songUrl: "https://cdn.pixabay.com/audio/2021/07/27/audio_6623aaf984.mp3",
      artist: "Lesfm",
      title: "Chilled Acoustic Indie Folk Instrumental B",
      genre: "Indie",
      bpm: 90,
      popularity: 55,
      danceability: 68,
      energy: 60
    }
  }
  return songList[stepsMix]
}
