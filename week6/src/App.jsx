// import React, { useState } from "react";

import { BasicElement } from "./components/BasicElement";

// const App = () => {
//   const [title, setTitle] = useState("My Name is Tejas Bisen");
//   const handleChage = () => {
//     setTitle(Math.random());
//   };
//   return (
//     <>
//       <div>
//         <button onClick={handleChage}> Click me to change the title </button>
//         <Header title={title} />
//         <Header title="Tejas Bisen"/>
//         <Header title="Tushar Bisen"/>
//         <Header title="Kailash Bisen"/>
//       </div>
//     </>
//   );
// };

// // fixing the re-rendered component [removing the state from parent componet which is App]

// // function Header() {
// //   return (
// //     <>
// //       <div>
// //         <h4> Hey !! My Name is {title}</h4>
// //       </div>
// //     </>
// //   );
// // }

// // React Memoization [ React.useMemo]

// const Header = React.memo(function Header({ title }) {
//   return (
//     <>
//       <div> My Name is : {title}</div>
//     </>
//   );
// });

// export default App;

// // Re-Rendering the Component

// // Fixing the render
// // goal is to the  : minimizees

function App() {
  return (
    <>
      <BasicElement />
    </>
  );
}

export default App;
