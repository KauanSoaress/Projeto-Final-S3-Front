import '../styles/Input.css'
import React, {ReactNode, useState} from 'react'

interface InputProps {
  name: string;
  children?: ReactNode;
  isPassword: boolean;
  handleChange(fieldToChange: string): void;
}

export const Inputs = ({name, isPassword, handleChange}: InputProps) => {

  const [showPass, setShowPass] = useState(false)

  const showPassword = () => {
    setShowPass(!showPass)
  }

  const [isEmpty, setIsEmpty] = useState(true)

  const hasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.currentTarget.value;
    handleChange(el);
  }

  const hasVal = (e: React.FormEvent<HTMLInputElement>) => {
    const el = e.currentTarget.value;

    if (el == null || el == "") {
      setIsEmpty(true)
    } else {
      setIsEmpty(false)
    }    
  }

  return (
    <>
      <div 
        className="wrap-input100 validate-input" 
        data-validate="Enter password"
      >
      {
        isPassword
        ?
        <span>
          <span 
            className="btn-show-pass"
            onClick={showPassword}
          >
            <i className = {showPass ? 'zmdi zmdi-eye-off' : 'zmdi zmdi-eye'}></i>
          </span>
          <input 
            id={name}
            onChange={hasVal}
            className={isEmpty ? 'input100' : 'input100 has-val'} 
            type={showPass ? 'text' : 'password'} 
            name={name}
            onBlur={hasChange}
          />
          <span 
            className="focus-input100" 
            data-placeholder={name}>
          </span>
        </span>
        :
        <span>
          <input 
            id={name}
            onChange={hasVal}
            className={isEmpty ? 'input100' : 'input100 has-val'} 
            type='text' 
            name={name}
            onBlur={hasChange}
          />
          <span 
            className="focus-input100" 
            data-placeholder={name}>
          </span>
        </span>
      }
    </div>
    </>
  )
}