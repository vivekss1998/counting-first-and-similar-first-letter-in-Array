import React, { useEffect, useState } from "react";

const FirstLetterCounter = () => {
  const initialArray = [
    "vivek",
    "ram",
    "ram",
    "cick",
    "vivek",
    "sham",
    "cric",
    "vivek"
  ];
  const [array] = useState(initialArray);

  const counts = array.reduce((letterCounts, item) => {
    const firstLetter = item.charAt(0).toLowerCase();
    letterCounts[firstLetter] = (letterCounts[firstLetter] || 0) + 1;
    return letterCounts;
  }, {});

  return (
    <div>
      <h2>First Letter Counts:</h2>
      <ul>
        {Object.entries(counts).map(([letter, count]) => (
          <li key={letter}>
            {letter}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirstLetterCounter;
