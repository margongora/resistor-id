import { useForm } from '@tanstack/react-form';
import { availableColors } from '../lib/types';
import { useState } from 'react';

const Form = () => {
  const [resistance, setResistance] = useState<number | undefined>(undefined);

  const form = useForm({
    defaultValues: {
      firstColor: 'Black',
      secondColor: 'Black',
      thirdColor: 'Black',
      fourthColor: 'Black'
    },
    onSubmit({ value }) {
      const resultColors = Array.from(Object.values(value)).map((colorName) => {
        return availableColors.filter((color) => color.name === colorName).at(0)!;
      });

      setResistance((resultColors[0].digit! * 10 + resultColors[1].digit!) * resultColors[2].multiplier!);
    }

  });

  return (
    <div className='border-4 border-white rounded-2xl align-middle m-4 p-4 flex flex-col gap-4'>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className='flex flex-row gap-x-4 justify-around p-2 text-black items-center text-center'>
          <form.Field
            name='firstColor'
            children={(field) => (
              <div className='flex flex-col gap-2'>
                <label className='text-white' htmlFor={field.name}>First Band</label>
                <select
                  className='m-2 p-2 rounded-lg'
                  name={field.name}
                  id={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}>
                  {availableColors.filter(value => value.digit !== null).map((color, index) => {
                    return (
                      <option
                        selected={index === 0}
                        key={index}
                        value={color.name}
                      >{color.name}</option>
                    )
                  })}
                </select>
              </div>
            )}
          />
          <form.Field
            name='secondColor'
            children={(field) => (
              <div className='flex flex-col gap-2'>
                <label className='text-white' htmlFor={field.name}>Second Band</label>
                <select
                  className='m-2 p-2 rounded-lg'
                  name={field.name}
                  id={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}>
                  {availableColors.filter(value => value.digit !== null).map((color, index) => {
                    return (
                      <option
                        selected={index === 0}
                        key={index}
                        value={color.name}
                      >{color.name}</option>
                    )
                  })}
                </select>
              </div>
            )}
          />
          <form.Field
            name='thirdColor'
            children={(field) => (
              <div className='flex flex-col gap-2'>
                <label className='text-white' htmlFor={field.name}>Third Band</label>
                <select
                  className='m-2 p-2 rounded-lg'
                  name={field.name}
                  id={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}>
                  {availableColors.filter(value => value.multiplier !== null).map((color, index) => {
                    return (
                      <option
                        selected={index === 0}
                        key={index}
                        value={color.name}
                      >{color.name}</option>
                    )
                  })}
                </select>
              </div>
            )}
          />
          <form.Field
            name='fourthColor'
            children={(field) => (
              <div className='flex flex-col gap-2'>
                <label className='text-white' htmlFor={field.name}>Fourth Band</label>
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
                        selected={index === 0}
                        key={index}
                        value={color.name}
                      >{color.name}</option>
                    )
                  })}
                </select>
              </div>
            )}
          />
        </div>
        <button className='bg-red-600' type='submit' value='Submit'>Test</button>
      </form>
      {resistance !== undefined && (
        <div >
          {resistance}
        </div>
      )}
    </div>
  )
}

export default Form;