const getSong = (stepsArray) => {
  const stepsMix = stepsArray.toString()
  const songList = {
    "retail,foot-traffic,slow": {
      "songUrl": "https://p.scdn.co/mp3-preview/fc662ffa82300f0d99ab1bd9dff38273bb71e71a",
      "artist": "Corinne Bailey Rae",
      "title": "Put Your Records On",
      "genre": "-",
      "bpm": 0,
      "popularity": 0,
      "danceability": 0,
      "energy": 0
    },
    "retail,foot-traffic,moderate": {
      "songUrl": "https://p.scdn.co/mp3-preview/a42d5e9f6f5c3375db9723bb2356239351eead31",
      "artist": "Adore You - Harry Styles",
      "title": "Adore You",
      "genre": "-",
      "bpm": 0,
      "popularity": 0,
      "danceability": 0,
      "energy": 0
    },
    "retail,foot-traffic,faster": {
      "songUrl": "https://p.scdn.co/mp3-preview/2494e1f152f8984226c6a4207346d90db548da42",
      "artist": "Avicii",
      "title": "Wake Me Up (Radio Edit)",
      "genre": "-",
      "bpm": 0,
      "popularity": 0,
      "danceability": 0,
      "energy": 0
    },
    "hotel,weather,raining": {
      "songUrl": "https://p.scdn.co/mp3-preview/e740001442baf69bdfdc01e21d86ddd7ceb2ac94",
      "artist": "The North Sea Trio",
      "title": "Imagination",
      "genre": "-",
      "bpm": 0,
      "popularity": 0,
      "danceability": 0,
      "energy": 0
    },
    "hotel,weather,cloudy": {
      "songUrl": "https://p.scdn.co/mp3-preview/407b29d20b81d42c89570db94711c26b2c63712a",
      "artist": "Brian Simpson",
      "title": "Moonlit Ocean",
      "genre": "-",
      "bpm": 0,
      "popularity": 0,
      "danceability": 0,
      "energy": 0
    },
    "hotel,weather,sunny": {
      "songUrl": "https://p.scdn.co/mp3-preview/6a4675e989b0413d5bf33c5a3387330105219201",
      "artist": "Zachary Breaux",
      "title": "Cafe Reggio",
      "genre": "-",
      "bpm": 0,
      "popularity": 0,
      "danceability": 0,
      "energy": 0
    },
    "restaurant,consumer-rotation,low": {
      "songUrl": "https://p.scdn.co/mp3-preview/c40e2bbe83e0e35b0dec944aec41212a4da75692",
      "artist": "Groove Da Praia",
      "title": "Is This Love",
      "genre": "-",
      "bpm": 0,
      "popularity": 0,
      "danceability": 0,
      "energy": 0
    },
    "restaurant,consumer-rotation,mid": {
      "songUrl": "https://p.scdn.co/mp3-preview/869b47099e7777663bad4aa224e8e48f95c187ed",
      "artist": "Four80East",
      "title": "Cookie Strut",
      "genre": "-",
      "bpm": 0,
      "popularity": 0,
      "danceability": 0,
      "energy": 0
    },
    "other,foot-traffic,slow": {
      "songUrl": "https://p.scdn.co/mp3-preview/2eed95a3c08cd10669768ce60d1140f85ba8b951",
      "artist": "James Arthur",
      "title": "Say You Won't Let Go",
      "genre": "-",
      "bpm": 0,
      "popularity": 0,
      "danceability": 0,
      "energy": 0
    },
    "other,foot-traffic,moderate": {
      "songUrl": "https://p.scdn.co/mp3-preview/0666d3aff1443bbec65d688122fb77d2fe39fb25",
      "artist": "Clobie Caillat",
      "title": "Fallin' For You",
      "genre": "-",
      "bpm": 0,
      "popularity": 0,
      "danceability": 0,
      "energy": 0
    },
    "other,foot-traffic,faster": {
      "songUrl": "https://p.scdn.co/mp3-preview/5a0318e6c43964786d22b9431af35490e96cff3d",
      "artist": "Bruno Mars",
      "title": "Locked Out Of Heaven",
      "genre": "-",
      "bpm": 0,
      "popularity": 0,
      "danceability": 0,
      "energy": 0
    }
  }
  return songList[stepsMix]
}
