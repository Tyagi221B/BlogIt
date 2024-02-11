import React, {useId} from 'react'

function Select({
    options, 
    //array hi milta hai vaise to , lekin by default array lelijiye , aaccha rheta hai baad me problem nahi aayegi
    label,
    className,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {/* yha par directly map nahi laga sakte kyo ki hosakta hai ki options me value hi na ho, crash karega re baba !!!!!! */}
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)

// yha par 2 syntax hai forward refrence Hook ko use karne ke liye , ek jo humne phele input component me kiya or dusra jo hume abhi yha par is file me use kiya .
