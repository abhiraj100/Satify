// import { IoIosStar } from "react-icons/io";
// import Sidebar from "./Page/Sidebar";

// function App() {
//   return (
//     <>
//       <div className="bg-sky-500 min-h-screen mx-auto">
//         <div className="container mx-auto flex">
//           <div className="w-1/12 flex flex-col">
//             <div>
//               <img src="Group 2@2x.png" className="w-[500px] h-[50px]" />
//             </div>
//             <Sidebar />
//           </div>
//           <div className="w-[90%] bg-white rounded-lg min-h-screen ml-4 flex flex-row">
//             <div className="mx-auto flex flex-col">
//               {/* left side */}
//               <div className="w-8/12 flex items-center justify-center m-6">
//                 <div className="relative bg-gradient-to-r from-[#0470B8] to-[#4FAFD7] rounded-md  w-[700px] h-[160px]">
//                   <h2 className="absolute z-50 text-white text-3xl px-4 py-2 ">
//                     Welcome to SATify <br />
//                     Your Ultimate SAT Preparation Companion!
//                   </h2>
//                   <img
//                     src="ReadingBook.png"
//                     className=" absolute bottom-0 z-10 w-[200px] "
//                   />
//                   <IoIosStar className="absolute text-[#6e5ac4] -gradient-to-r from-[#A195D6] to-[#2E00FF] top-2 right-0 w-[100px] h-[40px]" />
//                   <IoIosStar className="absolute text-[#6e5ac4] -gradient-to-r from-[#A195D6] to-[#2E00FF] top- right- w-[100px] h-[35px]" />
//                   <IoIosStar className="absolute text-[#6e5ac4] -gradient-to-r from-[#A195D6] to-[#2E00FF] top-[53%] right-24 w-[60px] h-[28px]" />
//                   <IoIosStar className="absolute text-[#6e5ac4] -gradient-to-r from-[#A195D6] to-[#2E00FF] bottom-2 right-4 w-[60px] h-[28px]" />
//                   <IoIosStar className="absolute text-[#6e5ac4] -gradient-to-r from-[#A195D6] to-[#2E00FF] bottom-2 right-36 w-[100px] h-[35px]" />
//                 </div>
//               </div>
//               {/* Button */}
//               <div className="justify-around flex ">
//                 <div className="w-[170px] bg-grey-500 h-[50px] rounded-xl text-center flex items-center justify-center text-white z-50 text-xl font-bold bg-[#0470B866] cursor-pointer relative overflow-hidden">
//                   Practice
//                 </div>
//                 <div className="w-[170px] bg-grey-500 h-[50px] rounded-xl text-center flex items-center justify-center text-white z-50 text-xl font-bold bg-[#0470B866] cursor-pointer relative overflow-hidden">
//                   My SAT
//                 </div>
//                 <div className="w-[170px] bg-grey-500 h-[50px] rounded-xl text-center flex items-center justify-center text-white z-50 text-xl font-bold bg-[#0470B866] cursor-pointer relative overflow-hidden">
//                   Test
//                 </div>
//               </div>
//             </div>

//             {/* right part */}
//             <div className="border border-l-2 border-r-2 border-b-2 border-grey-500 min-h-screen">

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


/*eslint-disable*/
import React from 'react'
import Home from './Page/Home'
import {Routes,Route} from 'react-router-dom'
import Level from './Page/Level';
import Profile from './Page/Profile';
import Quiz from './Page/Quiz';


const App = () => {
  return (
    <div className='bg-sky-500'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/level' element={<Level/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/quiz' element={<Quiz />}/>
        <Route path='/scoreboard' element={<Home/>}/>
        <Route path='*' element={<div>404 | Not Found</div>}/>
      </Routes>
    </div>
  )
}

export default App;

