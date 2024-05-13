import { useForm } from "@tanstack/react-form";
import { availableColors } from "../lib/types";

const NumberForm = () => {
  const form = useForm({
    defaultValues: {
      hundreds: 0,
      tens: 0,
      ones: 0,
      prefix: '',
      tolerance: 5,
      temp: 250
    },
    onSubmit({ value }) {
      console.log(value)

      // TODO: handle 4-color case
      // TODO: handle 5-color case
      // TODO: handle 6-color case
    }
  })

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className='flex flex-row flex-wrap justify-center text-black gap-4'>
          <form.Field
            name='hundreds'
            children={(field) => (
              <input
                className='rounded-lg m-2 p-2'
                name={field.name}
                id={field.name}
                value={field.state.value}
                type='number'
                onChange={(e) => field.handleChange(parseInt(e.target.value))}
                min={0}
                max={9}
              />
            )}
          />
          <form.Field
            name='tens'
            children={(field) => (
              <input
                className='rounded-lg m-2 p-2'
                name={field.name}
                id={field.name}
                value={field.state.value}
                type='number'
                onChange={(e) => field.handleChange(parseInt(e.target.value))}
                min={0}
                max={9}
              />
            )}
          />
          <form.Field
            name='ones'
            children={(field) => (
              <input
                className='rounded-lg m-2 p-2'
                name={field.name}
                id={field.name}
                value={field.state.value}
                type='number'
                onChange={(e) => field.handleChange(parseInt(e.target.value))}
                min={0}
                max={9}
              />
            )}
          />
          <form.Field
            name='prefix'
            children={(field) => (
              <select
                className='rounded-lg m-2 p-2'
                name={field.name}
                id={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              >
                <option value=''></option>
                <option value='k'>k</option>
                <option value='M'>M</option>
              </select>
            )}
          />
          <form.Field
            name='tolerance'
            children={(field) => (
              <select
                className='rounded-lg m-2 p-2'
                name={field.name}
                id={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(parseInt(e.target.value))}
              >
                {availableColors.filter(color => color.tolerance !== null).map((color, index) => (
                  <option key={index} value={color.tolerance!}>{color.tolerance!}</option>
                ))}
              </select>
            )}
          />
          <form.Field
            name='temp'
            children={(field) => (
              <select
                className='rounded-lg m-2 p-2'
                name={field.name}
                id={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(parseInt(e.target.value))}
              >
                {availableColors.filter(color => color.temp_coeff !== null).map((color, index) => (
                  <option key={index} value={color.temp_coeff!}>{color.temp_coeff!}</option>
                ))}
              </select>
            )}
          />
        </div>
        <button className='bg-red-600 m-2 p-2 rounded-lg hover:bg-red-700' type='submit' value='Submit'>Compute Resistor Info</button>
      </form>
    </>
  )
}

export default NumberForm;