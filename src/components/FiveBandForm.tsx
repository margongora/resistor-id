import { useForm } from '@tanstack/react-form';
import { availableColors, validResistors } from '../lib/constants';
import { useState } from 'react';

const FiveBandForm = () => {
  const [resistance, setResistance] = useState<number | undefined>(undefined);
  const [mult, setMult] = useState<string | null>('');
  const [tolerance, setTolerance] = useState<number>(0);
  const [isValid, setIsValid] = useState(true);

  const form = useForm({
    defaultValues: {
      firstColor: 'Black',
      secondColor: 'Black',
      thirdColor: 'Black',
      fourthColor: 'Black',
      fifthColor: 'Gold'
    },
    onSubmit({ value }) {
      const resultColors = Array.from(Object.values(value)).map((colorName) => {
        return availableColors.filter((color) => color.name === colorName).at(0)!;
      });

      const calcRes = (
        resultColors[0].digit! * 100 + resultColors[1].digit! * 10 + resultColors[2].digit!
      ) * resultColors[3].multiplier!;

      if (validResistors.filter((resistor) => calcRes.toString().includes(resistor.value)).length === 0) {
        setIsValid(false);
      } else setIsValid(true);

      if (calcRes >= 1000000000) setResistance(calcRes / 1000000000);
      else if (calcRes >= 1000000) setResistance(calcRes / 1000000);
      else if (calcRes >= 1000) setResistance(calcRes / 1000);
      else setResistance(calcRes);

      setMult((calcRes! >= 1000000000) ? 'G' : (calcRes! >= 1000000) ? 'M' : (calcRes! >= 1000) ? 'k' : null);

      setTolerance(resultColors[4].tolerance!);
    }
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className='flex flex-row flex-wrap gap-4 justify-around p-2 text-black items-center text-center'>
          <form.Field
            name='firstColor'
            children={(field) => (
              <div className='flex flex-col gap-2'>
                <label className='text-white' htmlFor={field.name}>First Band</label>
                <select
                  className='m-2 p-2 rounded-lg hover:cursor-pointer'
                  name={field.name}
                  id={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}>
                  {availableColors.filter(value => value.digit !== null).map((color, index) => {
                    return (
                      <option
                        key={index}
                        value={color.name}
                      >{color.name}</option>
                    )
                  })}
                </select>
                <div className='rounded-lg border-black border-4 py-2' style={{
                  backgroundColor: field.state.value.toLowerCase()
                }} />
              </div>
            )}
          />
          <form.Field
            name='secondColor'
            children={(field) => (
              <div className='flex flex-col gap-2'>
                <label className='text-white' htmlFor={field.name}>Second Band</label>
                <select
                  className='m-2 p-2 rounded-lg hover:cursor-pointer'
                  name={field.name}
                  id={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}>
                  {availableColors.filter(value => value.digit !== null).map((color, index) => {
                    return (
                      <option
                        key={index}
                        value={color.name}
                      >{color.name}</option>
                    )
                  })}
                </select>
                <div className='rounded-lg border-black border-4 py-2' style={{
                  backgroundColor: field.state.value.toLowerCase()
                }} />
              </div>
            )}
          />
          <form.Field
            name='thirdColor'
            children={(field) => (
              <div className='flex flex-col gap-2'>
                <label className='text-white' htmlFor={field.name}>Third Band</label>
                <select
                  className='m-2 p-2 rounded-lg hover:cursor-pointer'
                  name={field.name}
                  id={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}>
                  {availableColors.filter(value => value.digit !== null).map((color, index) => {
                    return (
                      <option
                        key={index}
                        value={color.name}
                      >{color.name}</option>
                    )
                  })}
                </select>
                <div className='rounded-lg border-black border-4 py-2' style={{
                  backgroundColor: field.state.value.toLowerCase()
                }} />
              </div>
            )}
          />
          <form.Field
            name='fourthColor'
            children={(field) => (
              <div className='flex flex-col gap-2'>
                <label className='text-white' htmlFor={field.name}>Fourth Band</label>
                <select
                  className='m-2 p-2 rounded-lg hover:cursor-pointer'
                  name={field.name}
                  id={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}>
                  {availableColors.filter(value => value.multiplier !== null).map((color, index) => {
                    return (
                      <option
                        key={index}
                        value={color.name}
                      >{color.name}</option>
                    )
                  })}
                </select>
                <div className='rounded-lg border-black border-4 py-2' style={{
                  backgroundColor: field.state.value.toLowerCase()
                }} />
              </div>
            )}
          />
          <form.Field
            name='fifthColor'
            children={(field) => (
              <div className='flex flex-col gap-2'>
                <label className='text-white' htmlFor={field.name}>Fifth Band</label>
                <select
                  className='m-2 p-2 rounded-lg'
                  name={field.name}
                  id={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}>
                  {availableColors.filter(value => value.tolerance !== null).map((color, index) => {
                    return (
                      <option
                        className={`bg-${color.name.toLowerCase()} text-${color.name.toLowerCase()}`}
                        key={index}
                        value={color.name}
                      >{color.name}</option>
                    )
                  })}
                </select>
                <div className='rounded-lg border-black border-4 py-2' style={{
                  backgroundColor: field.state.value.toLowerCase()
                }} />
              </div>
            )}
          />
        </div>
        <button className='bg-red-600 m-2 p-2 rounded-lg hover:bg-red-700' type='submit' value='Submit'>Compute Resistor Info</button>
      </form>
      {resistance !== undefined && (
        <div className='flex flex-col text-center'>
          <p>{resistance.toString()}{mult}Ω {tolerance.toString()}%</p>
          {!isValid && (
            <p>This is not a standard resistor.</p>
          )}
        </div>
      )}
    </>
  )
}

export default FiveBandForm;