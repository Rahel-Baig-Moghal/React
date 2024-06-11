import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function emojiInfo(emojipedia) {

  return <Entry
    key={emojipedia.id}
    name={emojipedia.name}
    meaning={emojipedia.meaning}
    emoji={emojipedia.emoji}
  />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojiInfo)}</dl>
    </div>
  );
}

export default App;
