// import React, { useState, useEffect } from 'react';

// const Guess = () => {
// var words = [
//   "ability", "able", "about", "above", "accept", "according", "account", "across", "action", "activity",
//   "actually", "address", "admit", "adult", "affect", "after", "again", "against", "agency", "agent",
//   "agree", "agreement", "ahead", "allow", "almost", "alone", "along", "already", "also", "although",
//   "always", "among", "amount", "analysis", "animal", "another", "answer", "anyone", "anything", "appear",
//   "apply", "approach", "area", "argue", "around", "arrive", "article", "artist", "assume", "attention",
//   "attorney", "audience", "author", "available", "avoid", "away", "baby", "back", "ball", "bank", "base",
//   "beat", "beautiful", "because", "become", "before", "begin", "behavior", "behind", "believe", "benefit",
//   "best", "better", "between", "beyond", "bill", "billion", "blue", "board", "body", "book", "born", "both",
//   "break", "bring", "brother", "budget", "build", "building", "business", "call", "camera", "campaign",
//   "candidate", "capital", "card", "care", "career", "carry", "case", "catch", "cause", "cell", "center",
//   "central", "century", "certain", "certainly", "chair", "challenge", "chance", "change", "character",
//   "charge", "check", "child", "choice", "choose", "church", "citizen", "city", "civil", "claim", "class",
//   "clear", "clearly", "close", "coach", "cold", "collection", "college", "color", "come", "commercial",
//   "common", "community", "company", "compare", "computer", "concern", "condition", "conference", "consider",
//   "consumer", "contain", "continue", "control", "cost", "could", "country", "couple", "course", "court",
//   "cover", "create", "cultural", "culture", "current", "customer", "dark", "data", "daughter", "dead", "deal",
//   "debate", "decade", "decide", "decision", "deep", "defense", "degree", "democratic", "describe", "design",
//   "despite", "detail", "determine", "develop", "difference", "different", "difficult", "dinner", "direction",
//   "director", "discover", "discuss", "discussion", "disease", "doctor", "door", "down", "draw", "dream",
//   "drive", "drop", "during", "each", "early", "east", "easy", "economic", "economy", "edge", "education",
//   "effect", "effort", "eight", "either", "election", "else", "employee", "energy", "enjoy", "enough", "enter",
//   "entire", "especially", "establish", "even", "evening", "event", "ever", "every", "everybody", "everyone",
//   "everything", "evidence", "exactly", "example", "executive", "exist", "expect", "experience", "expert",
//   "explain", "face", "fact", "factor", "fall", "family", "fast", "father", "federal", "feel", "feeling", "field",
//   "fight", "figure", "fill", "film", "final", "finally", "financial", "find", "fine", "finger", "finish", "fire",
//   "firm", "first", "fish", "five", "floor", "focus", "follow", "food", "foot", "force", "foreign", "forget",
//   "form", "former", "forward", "four", "free", "friend", "from", "front", "full", "fund", "future", "game",
//   "garden", "general", "generation", "girl", "give", "glass", "goal", "good", "government", "great", "green",
//   "ground", "group", "grow", "growth", "guess", "hair", "half", "hand", "happen", "happy", "have", "head",
//   "health", "hear", "heart", "heat", "heavy", "help", "here", "herself", "high", "himself", "history", "hold",
//   "home", "hope", "hospital", "hotel", "hour", "house", "however", "huge", "human", "hundred", "husband", "idea",
//   "identify", "image", "imagine", "impact", "important", "improve", "include", "including", "increase", "indeed",
//   "indicate", "individual", "industry", "inside", "instead", "interest", "interview", "into", "investment",
//   "involve", "issue", "item", "itself", "join", "just", "keep", "kind", "kitchen", "know", "knowledge", "land",
//   "language", "large", "last", "late", "later", "laugh", "lawyer", "lead", "leader", "learn", "least", "leave",
//   "left", "legal", "less", "letter", "level", "life", "light", "like", "likely", "line", "list", "listen", "little",
//   "live", "local", "long", "look", "lose", "loss", "love", "machine", "magazine", "main", "maintain", "major",
//   "majority", "make", "manage", "management", "manager", "many", "market", "marriage", "material", "matter",
//   "maybe", "mean", "measure", "media", "medical", "meet", "meeting", "member", "memory", "mention", "message",
//   "method", "middle", "might", "military", "million", "mind", "minute", "miss", "mission", "model", "modern",
//   "moment", "money", "month", "more", "morning", "most", "mother", "mouth", "move", "movement", "movie", "much",
//   "music", "must", "myself", "name", "nation", "national", "natural", "nature", "near", "nearly", "necessary",
//   "need", "network", "never", "news", "newspaper", "next", "nice", "night", "none", "north", "note", "nothing",
//   "notice", "number", "occur", "offer", "office", "officer", "official", "often", "once", "only", "onto", "open",
//   "operation", "option", "order", "other", "others", "outside", "over", "owner", "page", "pain", "painting",
//   "paper", "parent", "part", "particular", "partner", "party", "pass", "past", "patient", "pattern", "peace",
//   "people", "perform", "perhaps", "period", "person", "personal", "phone", "physical", "pick", "picture",
//   "piece", "place", "plan", "plant", "play", "player", "point", "policy", "poor", "popular", "population",
//   "position", "positive", "possible", "power", "practice", "prepare", "present", "president", "pressure", "pretty",
//   "prevent", "price", "private", "probably", "problem", "process", "produce", "product", "production", "professor",
//   "program", "project", "property", "protect", "prove", "provide", "public", "pull", "purpose", "push", "quality",
//   "question", "quickly", "quite", "race", "radio", "raise", "range", "rate", "rather", "reach", "read", "ready",
//   "real", "reality", "realize", "really", "reason", "receive", "recent", "recently", "recognize", "record",
//   "reduce", "reflect", "region", "relate", "remain", "remember", "remove", "report", "represent", "require",
//   "research", "resource", "respond", "response", "rest", "result", "return", "reveal", "rich", "right", "rise",
//   "risk", "road", "rock", "role", "room", "rule", "safe", "same", "save", "scene", "school", "science", "scientist",
//   "score", "season", "seat", "second", "section", "security", "seek", "seem", "sell", "send", "senior", "sense",
//   "series", "serious", "serve", "service", "seven", "several", "shake", "share", "short", "shot", "should",
//   "shoulder", "show", "side", "sign", "similar", "simple", "simply", "since", "sing", "single", "sister", "site",
//   "situation", "size", "skill", "skin", "small", "smile", "social", "society", "soldier", "some", "somebody",
//   "someone", "something", "sometimes", "song", "soon", "sort", "sound", "source", "south", "southern", "space",
//   "speak", "special", "specific", "speech", "spend", "sport", "spring", "staff", "stage", "stand", "standard",
//   "star", "start", "state", "statement", "station", "stay", "step", "still", "stock", "stop", "store", "story",
//   "strategy", "street", "strong", "structure", "student", "study", "stuff", "style", "subject", "success",
//   "successful", "such", "suddenly", "suggest", "summer", "support", "sure", "surface", "system", "table", "take",
//   "talk", "task", "teach", "teacher", "team", "technology", "television", "tell", "tend", "term", "test", "than",
//   "thank", "that", "their", "them", "themselves", "then", "theory", "there", "these", "they", "thing", "think",
//   "third", "this", "those", "though", "thought", "thousand", "threat", "three", "through", "throughout", "throw",
//   "thus", "time", "today", "together", "tonight", "total", "tough", "toward", "town", "trade", "training",
//   "travel", "treat", "treatment", "tree", "trip", "trouble", "truth", "turn", "type", "under", "understand",
//   "unit", "until", "upon", "usually", "value", "various", "very", "view", "visit", "voice", "vote", "wait", "walk",
//   "wall", "want", "watch", "water", "wear", "week", "weight", "well", "west", "western", "what", "whatever",
//   "when", "where", "whether", "which", "while", "whole", "whom", "whose", "wide", "wife", "will", "wind",
//   "window", "wish", "with", "within", "without", "woman", "wonder", "word", "work", "worker", "world", "worry",
//   "would", "write", "writer", "wrong", "yard", "yeah", "year", "young", "your", "yourself"
// ]

//   const [randomword, setrandomword] = useState('');
//   const [input, setinput] = useState('');
//   const [stars, setStars] = useState([]);
//   const [incorrectGuesses, setIncorrectGuesses] = useState(0);
//   const [guessed, setGuessed] = useState(false);
//   const [usedLetters, setUsedLetters] = useState([]);
//   const [statusMessage, setStatusMessage] = useState('');

//   const [stars, setStars] = useState(() => {
//     let lettersToReveal = 1;

//     if (randomword.length > 4 && randomword.length <= 8) {
//       lettersToReveal = 2;
//     } else if (randomword.length > 8) {
//       lettersToReveal = 3;
//     }

//     let indexes = [];
//     while (indexes.length < lettersToReveal) {
//       let rand = Math.floor(Math.random() * randomword.length);
//       if (!indexes.includes(rand)) indexes.push(rand);
//     }

//     return randomword.split("").map((ch, i) =>
//       indexes.includes(i) ? ch : "*"
//     );
//   });

//   useEffect(() => {
//     const newRandomNum = Math.floor(Math.random() * words.length);
//     setrandomword(words[newRandomNum]);
//     generateStars(words[newRandomNum].length);
//   }, []);

//   const generateStars = (length) => {
//     let newStars = [];
//     for (let i = 0; i < length; i++) {
//       newStars.push('*');
//     }
//     setStars(newStars);
//   };

//   const newword = () => {
//     const newRandomNum = Math.floor(Math.random() * words.length);
//     setrandomword(words[newRandomNum]);
//     generateStars(words[newRandomNum].length);
//     console.log(words[newRandomNum])
//     setinput('');
//     setIncorrectGuesses(0);
//     setGuessed(false);
//     setUsedLetters([]);
//     setStatusMessage('');
//   };

//   const handleInputChange = (e) => {
//     const letter = e.target.value;
//     if (letter.length > 1 || usedLetters.includes(letter)) return;
//     setinput(letter);
//   };

//   const handleSubmit = () => {
//     if (!input || usedLetters.includes(input)) return;

//     let newStars = [...stars];
//     let correctGuess = false;

//     for (let i = 0; i < randomword.length; i++) {
//       if (randomword[i] === input.toLowerCase()) {
//         newStars[i] = input;
//         correctGuess = true;
//       }
//     }

//     if (!correctGuess) {
//       setIncorrectGuesses(prev => {
//         const newCount = prev + 1;
//         if (newCount >= 8) {
//           setStars(randomword.split(''));
//           setGuessed(true);
//           setStatusMessage('You Lose!');
//         }
//         return newCount;
//       });
//     }

//     setStars(newStars);
//     setUsedLetters((prev) => [...prev, input]);
//     setinput('');

//     if (newStars.join('') === randomword) {
//       setGuessed(true);
//       setStatusMessage('You Win!');
//     }

//     // if (incorrectGuesses + 1 >= 8) {
//     //   setStars(randomword.split(''));
//     //   setGuessed(true);
//     //   setStatusMessage('You Lose!');
//     // }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSubmit();
//     }
//   };

//   return (
//     <div className="game-container">
//       <h2 className="game-title">Guess the Word!</h2>
//       <p className="stars-display">{stars.join(' ')}</p>
//       <div className="input-container">
//         <input
//           type="text"
//           value={input}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           maxLength="1"
//           className="input-field"
//         />
//         <button
//           onClick={handleSubmit}
//           disabled={guessed || incorrectGuesses >= 8}
//           className="submit-btn"
//         >
//           Submit
//         </button>
//         <button
//           onClick={newword}
//           disabled={!guessed}
//           className="new-word-btn"
//         >
//           New Word
//         </button>
//       </div>
//       <p className="incorrect-guesses">Incorrect guesses: {incorrectGuesses}/8</p>
//       <p className="used-letters">Used letters: {usedLetters.join(', ')}</p>
//       <p className="status-message">{statusMessage}</p>
//     </div>
//   );
// };

// export default Guess;

import React, { useState, useEffect } from 'react';

const Guess = () => {
  var words = [
    "ability", "able", "about", "above", "accept", "according", "account", "across", "action", "activity",
    "actually", "address", "admit", "adult", "affect", "after", "again", "against", "agency", "agent",
    "agree", "agreement", "ahead", "allow", "almost", "alone", "along", "already", "also", "although",
    "always", "among", "amount", "analysis", "animal", "another", "answer", "anyone", "anything", "appear",
    "apply", "approach", "area", "argue", "around", "arrive", "article", "artist", "assume", "attention",
    "attorney", "audience", "author", "available", "avoid", "away", "baby", "back", "ball", "bank", "base",
    "beat", "beautiful", "because", "become", "before", "begin", "behavior", "behind", "believe", "benefit",
    "best", "better", "between", "beyond", "bill", "billion", "blue", "board", "body", "book", "born", "both",
    "break", "bring", "brother", "budget", "build", "building", "business", "call", "camera", "campaign",
    "candidate", "capital", "card", "care", "career", "carry", "case", "catch", "cause", "cell", "center",
    "central", "century", "certain", "certainly", "chair", "challenge", "chance", "change", "character",
    "charge", "check", "child", "choice", "choose", "church", "citizen", "city", "civil", "claim", "class",
    "clear", "clearly", "close", "coach", "cold", "collection", "college", "color", "come", "commercial",
    "common", "community", "company", "compare", "computer", "concern", "condition", "conference", "consider",
    "consumer", "contain", "continue", "control", "cost", "could", "country", "couple", "course", "court",
    "cover", "create", "cultural", "culture", "current", "customer", "dark", "data", "daughter", "dead", "deal",
    "debate", "decade", "decide", "decision", "deep", "defense", "degree", "democratic", "describe", "design",
    "despite", "detail", "determine", "develop", "difference", "different", "difficult", "dinner", "direction",
    "director", "discover", "discuss", "discussion", "disease", "doctor", "door", "down", "draw", "dream",
    "drive", "drop", "during", "each", "early", "east", "easy", "economic", "economy", "edge", "education",
    "effect", "effort", "eight", "either", "election", "else", "employee", "energy", "enjoy", "enough", "enter",
    "entire", "especially", "establish", "even", "evening", "event", "ever", "every", "everybody", "everyone",
    "everything", "evidence", "exactly", "example", "executive", "exist", "expect", "experience", "expert",
    "explain", "face", "fact", "factor", "fall", "family", "fast", "father", "federal", "feel", "feeling", "field",
    "fight", "figure", "fill", "film", "final", "finally", "financial", "find", "fine", "finger", "finish", "fire",
    "firm", "first", "fish", "five", "floor", "focus", "follow", "food", "foot", "force", "foreign", "forget",
    "form", "former", "forward", "four", "free", "friend", "from", "front", "full", "fund", "future", "game",
    "garden", "general", "generation", "girl", "give", "glass", "goal", "good", "government", "great", "green",
    "ground", "group", "grow", "growth", "guess", "hair", "half", "hand", "happen", "happy", "have", "head",
    "health", "hear", "heart", "heat", "heavy", "help", "here", "herself", "high", "himself", "history", "hold",
    "home", "hope", "hospital", "hotel", "hour", "house", "however", "huge", "human", "hundred", "husband", "idea",
    "identify", "image", "imagine", "impact", "important", "improve", "include", "including", "increase", "indeed",
    "indicate", "individual", "industry", "inside", "instead", "interest", "interview", "into", "investment",
    "involve", "issue", "item", "itself", "join", "just", "keep", "kind", "kitchen", "know", "knowledge", "land",
    "language", "large", "last", "late", "later", "laugh", "lawyer", "lead", "leader", "learn", "least", "leave",
    "left", "legal", "less", "letter", "level", "life", "light", "like", "likely", "line", "list", "listen", "little",
    "live", "local", "long", "look", "lose", "loss", "love", "machine", "magazine", "main", "maintain", "major",
    "majority", "make", "manage", "management", "manager", "many", "market", "marriage", "material", "matter",
    "maybe", "mean", "measure", "media", "medical", "meet", "meeting", "member", "memory", "mention", "message",
    "method", "middle", "might", "military", "million", "mind", "minute", "miss", "mission", "model", "modern",
    "moment", "money", "month", "more", "morning", "most", "mother", "mouth", "move", "movement", "movie", "much",
    "music", "must", "myself", "name", "nation", "national", "natural", "nature", "near", "nearly", "necessary",
    "need", "network", "never", "news", "newspaper", "next", "nice", "night", "none", "north", "note", "nothing",
    "notice", "number", "occur", "offer", "office", "officer", "official", "often", "once", "only", "onto", "open",
    "operation", "option", "order", "other", "others", "outside", "over", "owner", "page", "pain", "painting",
    "paper", "parent", "part", "particular", "partner", "party", "pass", "past", "patient", "pattern", "peace",
    "people", "perform", "perhaps", "period", "person", "personal", "phone", "physical", "pick", "picture",
    "piece", "place", "plan", "plant", "play", "player", "point", "policy", "poor", "popular", "population",
    "position", "positive", "possible", "power", "practice", "prepare", "present", "president", "pressure", "pretty",
    "prevent", "price", "private", "probably", "problem", "process", "produce", "product", "production", "professor",
    "program", "project", "property", "protect", "prove", "provide", "public", "pull", "purpose", "push", "quality",
    "question", "quickly", "quite", "race", "radio", "raise", "range", "rate", "rather", "reach", "read", "ready",
    "real", "reality", "realize", "really", "reason", "receive", "recent", "recently", "recognize", "record",
    "reduce", "reflect", "region", "relate", "remain", "remember", "remove", "report", "represent", "require",
    "research", "resource", "respond", "response", "rest", "result", "return", "reveal", "rich", "right", "rise",
    "risk", "road", "rock", "role", "room", "rule", "safe", "same", "save", "scene", "school", "science", "scientist",
    "score", "season", "seat", "second", "section", "security", "seek", "seem", "sell", "send", "senior", "sense",
    "series", "serious", "serve", "service", "seven", "several", "shake", "share", "short", "shot", "should",
    "shoulder", "show", "side", "sign", "similar", "simple", "simply", "since", "sing", "single", "sister", "site",
    "situation", "size", "skill", "skin", "small", "smile", "social", "society", "soldier", "some", "somebody",
    "someone", "something", "sometimes", "song", "soon", "sort", "sound", "source", "south", "southern", "space",
    "speak", "special", "specific", "speech", "spend", "sport", "spring", "staff", "stage", "stand", "standard",
    "star", "start", "state", "statement", "station", "stay", "step", "still", "stock", "stop", "store", "story",
    "strategy", "street", "strong", "structure", "student", "study", "stuff", "style", "subject", "success",
    "successful", "such", "suddenly", "suggest", "summer", "support", "sure", "surface", "system", "table", "take",
    "talk", "task", "teach", "teacher", "team", "technology", "television", "tell", "tend", "term", "test", "than",
    "thank", "that", "their", "them", "themselves", "then", "theory", "there", "these", "they", "thing", "think",
    "third", "this", "those", "though", "thought", "thousand", "threat", "three", "through", "throughout", "throw",
    "thus", "time", "today", "together", "tonight", "total", "tough", "toward", "town", "trade", "training",
    "travel", "treat", "treatment", "tree", "trip", "trouble", "truth", "turn", "type", "under", "understand",
    "unit", "until", "upon", "usually", "value", "various", "very", "view", "visit", "voice", "vote", "wait", "walk",
    "wall", "want", "watch", "water", "wear", "week", "weight", "well", "west", "western", "what", "whatever",
    "when", "where", "whether", "which", "while", "whole", "whom", "whose", "wide", "wife", "will", "wind",
    "window", "wish", "with", "within", "without", "woman", "wonder", "word", "work", "worker", "world", "worry",
    "would", "write", "writer", "wrong", "yard", "yeah", "year", "young", "your", "yourself"
  ]
  const [randomword, setRandomword] = useState('');
  const [input, setInput] = useState('');
  const [stars, setStars] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [guessed, setGuessed] = useState(false);
  const [usedLetters, setUsedLetters] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');

  const generateStars = (word) => {
    let lettersToReveal = 1;
    if (word.length > 4 && word.length <= 8) {
      lettersToReveal = 2;
    } else if (word.length > 8) {
      lettersToReveal = 3;
    }

    let indexes = [];
    while (indexes.length < lettersToReveal) {
      let rand = Math.floor(Math.random() * word.length);
      if (!indexes.includes(rand)) indexes.push(rand);
    }

    return word.split("").map((ch, i) =>
      indexes.includes(i) ? ch : "*"
    );
  };

  useEffect(() => {
    const newRandomNum = Math.floor(Math.random() * words.length);
    const word = words[newRandomNum].toLowerCase();
    setRandomword(word);
    setStars(generateStars(word));
  }, []);

  const newword = () => {
    const newRandomNum = Math.floor(Math.random() * words.length);
    const word = words[newRandomNum].toLowerCase();
    setRandomword(word);
    setStars(generateStars(word));
    setInput('');
    setIncorrectGuesses(0);
    setGuessed(false);
    setUsedLetters([]);
    setStatusMessage('');
  };

  const handleInputChange = (e) => {
    const letter = e.target.value.toLowerCase();
    if (letter.length > 1 || usedLetters.includes(letter)) return;
    setInput(letter);
  };

  const handleSubmit = () => {
    if (!input || usedLetters.includes(input)) return;

    let newStars = [...stars];
    let correctGuess = false;

    for (let i = 0; i < randomword.length; i++) {
      if (randomword[i] === input) {
        newStars[i] = input;
        correctGuess = true;
      }
    }

    if (!correctGuess) {
      setIncorrectGuesses(prev => {
        const newCount = prev + 1;
        if (newCount >= 8) {
          setStars(randomword.split(''));
          setGuessed(true);
          setStatusMessage('You Lose!');
        }
        return newCount;
      });
    }

    setStars(newStars);
    setUsedLetters((prev) => [...prev, input]);
    setInput('');

    if (newStars.join('') === randomword) {
      setGuessed(true);
      setStatusMessage('You Win!');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="game-container">
      <h2 className="game-title">Guess the Word!</h2>
      <p className="stars-display">{stars.join(' ')}</p>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          maxLength="1"
          className="input-field"
        />
        <button
          onClick={handleSubmit}
          disabled={guessed || incorrectGuesses >= 8}
          className="submit-btn"
        >
          Submit
        </button>
        <button
          onClick={newword}
          disabled={!guessed}
          className="new-word-btn"
        >
          New Word
        </button>
      </div>
      <p className="incorrect-guesses">Incorrect guesses: {incorrectGuesses}/8</p>
      <p className="used-letters">Used letters: {usedLetters.join(', ')}</p>
      <p className="status-message">{statusMessage}</p>
    </div>
  );
};

export default Guess;
