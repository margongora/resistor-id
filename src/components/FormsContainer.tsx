import { useState } from "react";
import ResistorFormTabs from "./ResistorFormTabs";
import NumberForm from "./NumberForm";

const FormsContainer = () => {
  const forms = [<ResistorFormTabs />, <NumberForm />];
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <div className='m-4 p-4 flex flex-row text-center justify-center list-none'>
        {forms.map((_, index) => {
          return (
            <li
              className="m-2 basis-1/2 py-2 bg-black rounded-2xl hover:cursor-pointer"
              key={index}
              onClick={() => setActiveTab(index)}
            >{(!index) ? 'Search by colors' : 'Search by numbers'}</li>
          )
        })}
      </div>
      <div className='border-4 border-white rounded-2xl align-middle m-4 p-4 flex flex-col text-center gap-4'>
        {forms[activeTab]}
      </div>
    </>
  );
}

export default FormsContainer;