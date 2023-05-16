const getSong = (stepsArray) => {
  const stepsMix = stepsArray.toString()
  const songList = {
    "retail,foot-traffic,slow": {
      "songUrl": "https://p.scdn.co/mp3-preview/fc662ffa82300f0d99ab1bd9dff38273bb71e71a",
      "artist": "Corinne Bailey Rae",
      "title": "Put Your Records On",
      "genre": "Soul",
      "bpm": 96,
      "popularity": 77,
      "danceability": 73.9,
      "energy": 51.1
    },
    "retail,foot-traffic,moderate": {
      "songUrl": "https://p.scdn.co/mp3-preview/a42d5e9f6f5c3375db9723bb2356239351eead31",
      "artist": "Adore You - Harry Styles",
      "title": "Adore You",
      "genre": "Pop",
      "bpm": 99,
      "popularity": 86,
      "danceability": 67.6,
      "energy": 77.1
    },
    "retail,foot-traffic,faster": {
      "songUrl": "https://p.scdn.co/mp3-preview/2494e1f152f8984226c6a4207346d90db548da42",
      "artist": "Avicii",
      "title": "Wake Me Up (Radio Edit)",
      "genre": "Pop Dance / EDM",
      "bpm": 124,
      "popularity": 87,
      "danceability": 52.7,
      "energy": 77.5
    },
    "hotel,weather,raining": {
      "songUrl": "https://p.scdn.co/mp3-preview/e740001442baf69bdfdc01e21d86ddd7ceb2ac94",
      "artist": "The North Sea Trio",
      "title": "Imagination",
      "genre": "Chill Jazz",
      "bpm": 118,
      "popularity": 57,
      "danceability": 49.1,
      "energy": 17.5
    },
    "hotel,weather,cloudy": {
      "songUrl": "https://p.scdn.co/mp3-preview/407b29d20b81d42c89570db94711c26b2c63712a",
      "artist": "Brian Simpson",
      "title": "Moonlit Ocean",
      "genre": "Chill Jazz",
      "bpm": 99,
      "popularity": 47,
      "danceability": 66.7,
      "energy": 57.4
    },
    "hotel,weather,sunny": {
      "songUrl": "https://p.scdn.co/mp3-preview/6a4675e989b0413d5bf33c5a3387330105219201",
      "artist": "Zachary Breaux",
      "title": "Cafe Reggio",
      "genre": "Chill Jazz",
      "bpm": 116,
      "popularity": 32,
      "danceability": 74.4,
      "energy": 66
    },
    "restaurant,consumer-rotation,low": {
      "songUrl": "https://p.scdn.co/mp3-preview/c40e2bbe83e0e35b0dec944aec41212a4da75692",
      "artist": "Groove Da Praia",
      "title": "Is This Love",
      "genre": "Bossa Nova",
      "bpm": 119,
      "popularity": 37,
      "danceability": 92.4,
      "energy": 48.7
    },
    "restaurant,consumer-rotation,mid": {
      "songUrl": "https://p.scdn.co/mp3-preview/869b47099e7777663bad4aa224e8e48f95c187ed",
      "artist": "Four80East",
      "title": "Cookie Strut",
      "genre": "Chill Jazz",
      "bpm": 98,
      "popularity": 48,
      "danceability": 73.5,
      "energy": 66
    },
    "restaurant,consumer-rotation,high": {
      "songUrl": "https://p.scdn.co/mp3-preview/cb53c587272e0148b8b1791749e6bf99a95bbd76",
      "artist": "Jafunk",
      "title": "Dazed",
      "genre": "Deep House / Nu Disco",
      "bpm": 112,
      "popularity": 38,
      "danceability": 85.7,
      "energy": 62.8
    },
    "other,foot-traffic,slow": {
      "songUrl": "https://p.scdn.co/mp3-preview/2eed95a3c08cd10669768ce60d1140f85ba8b951",
      "artist": "James Arthur",
      "title": "Say You Won't Let Go",
      "genre": "Pop",
      "bpm": 90,
      "popularity": 71,
      "danceability": 37.5,
      "energy": 60.3
    },
    "other,foot-traffic,moderate": {
      "songUrl": "https://p.scdn.co/mp3-preview/0666d3aff1443bbec65d688122fb77d2fe39fb25",
      "artist": "Clobie Caillat",
      "title": "Fallin' For You",
      "genre": "Pop",
      "bpm": 117,
      "popularity": 61,
      "danceability": 64,
      "energy": 79.4
    },
    "other,foot-traffic,faster": {
      "songUrl": "https://p.scdn.co/mp3-preview/5a0318e6c43964786d22b9431af35490e96cff3d",
      "artist": "Bruno Mars",
      "title": "Locked Out Of Heaven",
      "genre": "Pop / Pop Rock",
      "bpm": 143,
      "popularity": 88,
      "danceability": 72.6,
      "energy": 69.8
    }
  }

  return songList[stepsMix]
}
