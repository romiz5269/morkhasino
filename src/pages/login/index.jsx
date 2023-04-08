import LogoSvg from 'Components/global/svg/logo/LogoSvg'
import { useNotif } from 'hooks/toast/useNotif'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginForm from 'Validations/Login/LoginForm'

const LoginPage = () => {

  const loginStatus = useSelector(state => state.users.status)
  const dispatch = useDispatch()
  useNotif(loginStatus,true)
  // useEffect(()=>{
  //   if(loginStatus.type === "error" && loginStatus.message){
  //     toast.error(loginStatus.message, {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //       rtl:true,
  //       style:{fontFamily:'yekanbakh',fontSize:"15px"}
  //       });
  //   }
  //   const timeout = setTimeout(()=>{
  //     dispatch(resetLoginStatus())
  //   },5000)
  //   return () => clearTimeout(timeout)
  // },[loginStatus])

  return (
    <div className=' grid grid-cols-12'>
      <div className='md:col-span-4 col-span-12 md:px-20 md:h-auto h-full  flex flex-col items-center  relative '>
        <div className=' absolute hidden md:block w-[800px] h-full test  -left-28 z-10'>asdasd</div>
        <div className=' absolute hidden md:block w-[800px] h-full  b1 -left-28 z-20'>asdasd</div>
        <div className='bg-white md:absolute  md:w-[700px] w-full h-full b2 md:-left-28 z-30 flex flex-col items-center md:px-32 px-4 pt-20 space-y-20'>
          <LogoSvg width='200' height='100'/>
          <LoginForm />
        </div>
        
      </div>
      <div className='col-span-8 hidden bg-secondary min-h-screen md:flex flex-col items-center justify-center'>
        <img src='./images/png/login/login.png' />
      </div>
    </div>
  )
}

export default LoginPage
