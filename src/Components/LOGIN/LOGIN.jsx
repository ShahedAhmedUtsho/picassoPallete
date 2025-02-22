
'use client'

"use client";



import { Envelope, FacebookLogo, GoogleLogo, Lock,GithubLogo, Cube,Pen ,User ,Image,Eye,EyeSlash} from 'phosphor-react'

import { Button, Card, Divider, Icon, Input, Label } from 'keep-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { GithubAuthProvider, signInWithPopup,  GoogleAuthProvider } from 'firebase/auth';


import axios from 'axios';



 const Login = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const[visible,setVisible] = useState(true)
  const eysToggle = () =>{
    setVisible(!visible)

   }
  useEffect(() => {
    document.title ="PP - Login"
   
   }, [])
  
const {AuthLogIn,user,Auth,closeModal,openErrorModal,setUser,isSuccessOpen,openSuccessModal,setIsSuccessOpen,setModelMessage,setModelHead,modelHead,modelMessage,setLoading,loading} = useContext(AuthContext)

  const handleLogin = event =>{
    event.preventDefault()

if(user !== null ){
  


  setModelHead("Error");
setModelMessage("you are already logged in")
openErrorModal()
  event.target.reset()
  return
}

    const form = event.target ;
    const email = form.email.value ;
    const password = form.password.value ;
    


AuthLogIn(email,password)
.then(res=>{
  
const loggedInUser = res.user ;

const JwtUser = {email}
// get access token  

  axios.post('http://localhost:3000/jwt',JwtUser,
{
  withCredentials:true
})
  .then(res =>{
    const data = res.data ; 
    console.log(data)
    if(data.success){

navigate(location?.state?location.state : '/')
    }

  })
  .catch(error => {
    console.log(error.message ,"error mess") 
    return 
  })




console.log("in then")

  form.reset()
setModelHead("Login Successfully")
setModelMessage(
  <>
    Welcome back{' '}
    <span className='font-semibold text-blue-500'>
      {res.user.displayName}
    </span>
  </>
);


// navigate(location?.state?location.state : '/')

openSuccessModal()

})



.catch(error => {
console.log(error.message)
console.log("in catch")

setModelHead('Error')
setModelMessage(error.message)
openErrorModal()



})

  }





//github 





const githubProvider = new GithubAuthProvider()
const githubLogin = ()=>{



  setLoading(true)
  if(user !== null ){
  setModelHead("Error");
  setModelMessage("you are already logged in" );
  openErrorModal()
return

  }
  


  signInWithPopup(Auth,githubProvider)
  .then(res=>{
   const userName = res.user.displayName ;
    setModelMessage(<span>
  Welcome  <span className='font-semibold text-[#103cd9b6] capitalize'>{userName}</span>
</span>)

setModelHead("Login SuccessFull") ;
navigate(location?.state?location.state : '/')
openSuccessModal();
  })
  .catch(error => {
  
    const err =   error.message ;
setModelHead("Error");
setModelMessage({err})
openErrorModal()
  })
   
    

}
// google with github

//Google  





const googleProvider = new GoogleAuthProvider()
const GoogleLogin = ()=>{



  setLoading(true)
  if(user !== null ){
  setModelHead("Error");
  setModelMessage("you are already logged in" );
  openErrorModal()
return

  }
 

  


  signInWithPopup(Auth,googleProvider)
  .then(res=>{
   const userName = res.user.displayName ;
    setModelMessage(<span>
  Welcome  <span className='font-semibold text-[#103cd9b6] capitalize'>{userName}</span>
</span>)

setModelHead("Login SuccessFull");
navigate(location?.state?location.state : '/')
openSuccessModal();
  })
  .catch(error => {
  
    const err =   error.message ;
setModelHead("Error");
setModelMessage({err})
openErrorModal()
  })
   
    

}
// google with github













  return (
    <div className={`border-[1px]  bg-cover bg-center md:bg-[url('https://i.ibb.co/4Kjv05C/dragon-dark-sky-fantasy-art-pr-1366x768.jpg')]    border-black  bg-transparent grid md:grid-cols-7   md:min-h-[90vh] lg:min-h-[90vh]  ` }>
            <div  className="py-10 hidden md:flex mt-5 md:mt-0 md:py-0 px-4 h-full md:col-span-3  flex-col gap-6 md:gap-5 lg:gap-10   justify-center  ">
    



            </div>






            <div className=" md:bg-transparent  h-full md:col-span-4 flex justify-center items-center ">

            <Card className="max-w-sm  md:my-20 my-10 dark:text-fuchsia-50  rounded-sm border-none md:border-[1px] border-fuchsia-500 bg-transparent md:bg-[#ffffffca]  
     md:dark:bg-[#f8e7fcd3]
      ">
      <Card.Content className="space-y-3">
        <Card.Header>
          <Card.Title className='dark:text-fuchsia-400 md:dark:text-fuchsia-900'>Sign In</Card.Title>
          <Card.Description className='dark:text-fuchsia-700 md:dark:text-fuchsia-700'>If you don&apos;t have any account then just <Link to="/register" className='font-semibold text-fuchsia-600 dark:text-fuchsia-400 md:dark:text-fuchsia-700'>Register</Link></Card.Description>
        </Card.Header>
       
        
        <form onSubmit={handleLogin} className="space-y-2">
          <fieldset className="space-y-1">
            <Label  className='dark:text-fuchsia-700 md:dark:text-fuchsia-900' htmlFor="email">Email*</Label>
            <div className="relative">
              <Input required name='email' id="email" type="email" placeholder="Enter email" className="ps-11" />
              <Icon>
                <Envelope size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label  className='dark:text-fuchsia-700 md:dark:text-fuchsia-900' htmlFor="password">Password*</Label>
            <div className="relative">
              <Input required name='password' id="password" placeholder="Enter password" type={visible?"password":"text"} className="ps-11" />
              <Icon>
                <Lock size={19} color="#AFBACA" />
              </Icon>
              <div  onClick={eysToggle} className=' text-[#69707a] cursor-pointer absolute right-3 top-[27%]'>
                      {
                        visible? <EyeSlash  size={19} color="#69707a" />:  <Eye size={19} color="#69707a" />
                      }
                   
                    </div>
            </div>
          </fieldset>
          <Button className="!mt-3 block w-full bg-fuchsia-500  text-fuchsia-50 hover:bg-fuchsia-300 hover:text-black" size="xs" color="secondary" variant="outline">
            Sign In
          </Button>
        </form>
        <Divider>Or</Divider>
        <div className="flex items-center justify-between gap-3">
          <Button onClick={GoogleLogin} size="xs" variant="outline" color="secondary" className="w-full bg-[#4285f4] text-white">
            <GoogleLogo size={20} className="mr-1.5" />
            Google
          </Button>
          <Button onClick={githubLogin} size="xs" variant="outline" color="secondary" className="w-full  text-slate-900">
            <GithubLogo size={20} className="mr-1.5" />
           GitHub
          </Button>
        </div>
      </Card.Content>
    </Card>


            </div>

            
        </div>
  
    
   
  )
}



export default Login;