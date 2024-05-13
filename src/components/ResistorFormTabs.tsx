import { useState } from "react";
import FourBandForm from "./FourBandForm";
import FiveBandForm from "./FiveBandForm";
import SixBandForm from "./SixBandForm";

const ResistorFormTabs = () => {
  const forms = [<FourBandForm />, <FiveBandForm />, <SixBandForm />];
  const [activeTab, setActiveTab] = useState(0);
  const [hover, setHover] = useState([false, false, false])

  return (
    <>
      <div className='flex flex-row text-center justify-center list-none text-white m-4 px-4 gap-4'>
        {forms.map((_, index) => {
          return (
            <li
              className='m-2 basis-1/3 py-2 rounded-2xl hover:cursor-pointer'
              key={index + 4}
              onClick={() => setActiveTab(index)}
              onMouseEnter={() => setHover(
                (index === 0)
                  ? [true, false, false]
                  : (index === 1)
                    ? [false, true, false]
                    : [false, false, true]
              )}
              onMouseLeave={() => setHover([false, false, false])}
              style={{
                backgroundColor: (activeTab === index || hover[index])
                  ? 'rgb(120, 113, 108)'
                  : 'rgb(12, 10, 9)',
              }}
            >
              {index + 4}
            </li>
          )
        })}

      </div>
      {forms[activeTab]}
    </>
  )
}

export default ResistorFormTabs;