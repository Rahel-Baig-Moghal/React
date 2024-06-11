# Emojipedia

This project is a simple React application that displays a list of emojis with their names and meanings, similar to an emoji dictionary. The application uses components to render each emoji entry and map through the emojipedia data.

## Project Structure

```
.
├── node_modules
├── public
├── src
│   ├── components
│   │   ├── App.jsx
│   │   ├── Entry.jsx
│   ├── emojipedia.js
│   ├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Components

### App Component

The `App` component is the main component that renders the header and the emoji dictionary by mapping through the `emojipedia` data.

### Entry Component

The `Entry` component is used to display individual emoji entries. Each entry shows the emoji, its name, and its meaning.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download and install them from [Node.js](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/emojipedia.git
   ```

2. Navigate to the project directory:

   ```bash
   cd emojipedia
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To run the application locally, use the following command:

```bash
npm run dev
```

This will start the development server and open the application in your default web browser.

### Building for Production

To build the application for production, use the following command:

```bash
npm run build
```

This will create a `build` directory with the production-ready files.

## Usage

1. Open the application in your browser. You will see a list of emojis with their names and meanings.
2. You can update the `emojipedia.js` file to add more emojis or modify the existing ones.

## Files

### `src/components/App.jsx`

```jsx
import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function emojiInfo(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
      emoji={emojipedia.emoji}
    />
  );
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
```

### `src/components/Entry.jsx`

```jsx
import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Entry;
```

### `src/emojipedia.js`

This file contains the emoji data. You can add more emoji objects to the array.

```jsx
const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl”. Stands for “rolling on the floor, laughing”."
  }
];

export default emojipedia;
```

### `src/index.js`

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
```

## Contributing

If you have suggestions for improving this project or want to report a bug, feel free to create an issue or submit a pull request.
