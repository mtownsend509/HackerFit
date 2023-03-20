import React, {
  useState,
} from "react";

import list from "../list.json";

import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from "react-icons/ai";



function Dropdown() {
    const [isOpen, setIsOpen] =
        useState(false);
    
 
    
    return (
        <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg">
            <button
                onClick={() =>
                    setIsOpen(
                        (prev) => !prev
                    )
                }
                className="bg-slate-400 dark:bg-slate-700 text-white p-4 w-full flex items-center justify-between font-bold text-md rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 "
            >
                Search for a muscle
                group to begin
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-8 " />
                ) : (
                    <AiOutlineCaretUp className="h-8 " />
                )}
            </button>
            {isOpen && (
                <div className="bg-slate-400 dark:bg-slate-700 text-white absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
                    {list.map(
                        (item, i) => (
                            <div
                                className="flex w-full justify-between hover:bg-slate-300 p-4 hover:text-slate-500 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4 "
                                key={i}
                
                            >
                                <button className="font-bold"
                                    
                                >
                                    {
                                        item.muscle_group
                                    }
                                </button>
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
   );
}


export default Dropdown;