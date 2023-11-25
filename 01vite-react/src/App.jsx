// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [inputText, setInputText] = useState('');
//   const [displayText, setDisplayText] = useState('');

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleButtonClick = () => {
//     setDisplayText(inputText);
//   };

//   return (
//     <div className="app">
//       <div className="before-button">
//         <h3 className="section-title">Before Button Click:</h3>
//         <input
//           type="text"
//           className="input-field"
//           placeholder="Enter some text"
//           value={inputText}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button onClick={handleButtonClick} className="action-button">
//         Change State
//       </button>
//       <div className="after-button">
//         {displayText && (
//           <div className="after-content">
//             <h3 className="section-title after-title">After Button Click:</h3>
//             <h3 className="displayed-text">{displayText}</h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [inputText, setInputText] = useState('');
//   const [isButtonClicked, setIsButtonClicked] = useState(false);

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleButtonClick = () => {
//     setIsButtonClicked(true);
//   };

//   return (
//     <div className="app">
//       <div className="before-button">
//         <h3 className="section-title">Before Button Click:</h3>
//         <input
//           type="text"
//           className="input-field"
//           placeholder="Enter some text"
//           value={inputText}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button onClick={handleButtonClick} className="action-button">
//         Change State
//       </button>
//       <div className="after-button">
//         {isButtonClicked && (
//           <div className="after-content">
//             <h3 className="section-title after-title">After Button Click:</h3>
//             <h3 className="displayed-text">{inputText}</h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <div className="app">
      <div className="before-button">
        <h3 className="section-title">Enter Text:</h3>
        <input
          type="text"
          className="input-field"
          placeholder="Enter some text"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleButtonClick} className="action-button">
        Click to Change State
      </button>
      <div className="after-button">
        {isButtonClicked && (
          <div className="after-content">
            <h3 className="section-title after-title">After:</h3>
            <h3 className="displayed-text">{inputText}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
