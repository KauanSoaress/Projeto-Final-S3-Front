import '../styles/RegisterButton.css'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface RegisterButtonProps {
  children: ReactNode;
  link: string;
}

export const RegisterButton = ({children, link}: RegisterButtonProps) =>{
  return (
    <>
      <Link to={link} className='register-button'>{children}</Link>
    </>
  )
}


