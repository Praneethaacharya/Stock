


// // import React from 'react';
// // // import styles from "./Experience.module.css"
// // import stocks from "../data/stocks.json";

// // const App = () => {
  
// //   return (
// //         <div className="bg-gray-200 flex flex-col">
// //           {
// //             stocks.map((stockItem, id) => {
// //               function getRandomArbitrary(min, max) {
// //                 return Math.floor(Math.random() * (max - min) + min);
// //               }
// //               const randomWidth = getRandomArbitrary(stockItem.min, stockItem.max)/10;
// //               return <div className="justify center items-center">
// //                 <h3>{`${stockItem.title}`}</h3>
// //                 <p>{`${stockItem.Buy}`}</p>        
// //                 <div style={{ width: `${randomWidth}px`, height: "40px", backgroundColor: `${stockItem.color}` }}>{getRandomArbitrary(stockItem.min,stockItem.max)}</div>        
// //                 </div>
// //             })
// //           }
// //         </div>
// //   )
// // }

// // export default App


// import React, { useState, useEffect } from 'react';
// import stocks from "../data/stocks.json";

// const App = () => {
//   const [randomNumbers, setRandomNumbers] = useState([]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const newRandomNumbers = stocks.map(stockItem => {
//         const randomNumber = getRandomArbitrary(stockItem.min, stockItem.max);
//         return { ...stockItem, randomNumber };
//       });
//       setRandomNumbers(newRandomNumbers);
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array means this effect runs once on mount

//   function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
//   }
  

//   return (
//     <div className="bg-gray-200 flex flex-row">
//       {
//         randomNumbers.map((stockItem, id) => (
//           <div key={id} className="flex justify-center items-center">
//             <div style={{ width: `${stockItem.randomNumber / 20}px`, height: "40px", backgroundColor: stockItem.randomNumber < stockItem.Buy ? 'red' : 'green', margin:"20px"}}>
//               {stockItem.randomNumber}
//             </div>
//             <div style={{ width: `${stockItem.randomNumber / 10}px`, height: "40px", backgroundColor: `${stockItem.color}` }}>
//               {/* <p>{stockItem.Buy}</p> */}
//               <h3>{stockItem.title}</h3>
//             </div>
//           </div>
//         ))
//       }
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import stocks from "../data/stocks.json";

const App = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRandomNumbers = stocks.map(stockItem => {
        const randomNumber = getRandomArbitrary(stockItem.min, stockItem.max);
        return { ...stockItem, randomNumber };
      });
      setRandomNumbers(newRandomNumbers);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className=" flex flex-col h-screen justify-center align-middle items-center bg-red-200">
    <h3 className='justify-normal text-center text-orange-950 text-5xl mb-36'>Stock market value:</h3>
      <div className="flex flex-wrap">
        {
          randomNumbers.map((stockItem, id) => (
            <div>
            <div key={id} className="flex justify-center items-center">
              <div style={{ width: "60px", justifyContent:'center', textAlign:"center", height: "40px", borderRadius:"20px", backgroundColor: stockItem.randomNumber < stockItem.Buy ? '#EF4040' : '#87A922', margin: "20px" }}>
                {stockItem.randomNumber}
              </div>
            </div>
            <div key={id} className="flex justify-center items-center">
            <div style={{ width: `${stockItem.randomNumber / 10}px`, justifyContent:'center', textAlign:"center", height: "40px", borderRadius:"7px",  backgroundColor: `${stockItem.color}` }}>
              {/* <p>{stockItem.Buy}</p> */}
              <h3>{stockItem.title}</h3>
            </div>
            </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
