// Possible code to use GraphQl Context to save user notes and stats rather than local storage. Needs to be updated with the stats and notes section in Profile


// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { SAVE_TEXTAREA } from "../utils/mutations";

// const ProfileTextarea = ()  => {
//     const [RPEInput, setRPEInput] = useState("");
//     const [HRVInput, setHRVInput] = useState("");
//     const [BMIInput, setBMIInput] = useState("");

//     const [saveTextarea, { loading, error, data }] = useMutation(SAVE_TEXTAREA);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         saveTextarea({
//           variables: {
//             text: `${RPEInput} ${HRVInput} ${BMIInput}`,
//           },
//         });
//         setRPEInput("");
//         setHRVInput("");
//         setBMIInput("");
//       };

//     return (
//         <div className="w-full border-t mt-10">
//             <form onSubmit={handleSubmit} className="px-2 py-2 m-2 text-slate-500 dark:text-white">
//                 <div className="flex">
//                     <p className="mb-3 mr-2 font-brand text-4xl mt-5">
//                         Stats
//                     </p>
//                 </div>

//                 <textarea
//                     value={RPEInput}
//                     onChange={(event) => setRPEInput(event.target.value)}
//                     id="RPEInput"
//                     name="RPEInput"
//                     rows="1"
//                     type="text"
//                     className="w-full text-gray-500 dark:text-white bg-inherit focus:outline-none focus:ring-0"
//                     placeholder="RPE"
//                 ></textarea>

//                 <br />

//                 <textarea
//                     value={HRVInput}
//                     onChange={(event) => setHRVInput(event.target.value)}
//                     id="HRVInput"
//                     name="HRVInput"
//                     rows="1"
//                     type="text"
//                     className="w-full text-gray-500 dark:text-white bg-inherit focus:outline-none focus:ring-0"
//                     placeholder="HRV"
//                 ></textarea>

//                 <br />

//                 <textarea
//                     value={BMIInput}
//                     onChange={(event) => setBMIInput(event.target.value)}
//                     id="BMIInput"
//                     name="BMIInput"
//                     rows="1"
//                     type="text"
//                     className="w-full text-gray-500 dark:text-white bg-inherit focus:outline-none focus:ring-0"
//                     placeholder="BMI"
//                 ></textarea>

//                 <br />

//                 <input
//                     type="submit"
//                     value="Save"
//                     className="hover:cursor-pointer"
//                 />

//                 {loading && <p>Loading...</p>}
//                 {error && <p>Error: {error.message}</p>}
//                 {data && <p>Textarea saved!</p>}
            

//             </form>
//         </div>
        
//     );
// }

// export default ProfileTextarea;