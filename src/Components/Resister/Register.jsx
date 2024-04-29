

'use client'

import { Button, Card, Icon, Input, Label } from 'keep-react'
import { Link,  useLocation,  useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { updateProfile } from 'firebase/auth'
import Auth from '../../Firebase/Firebase.config'
import { Envelope, FacebookLogo, GoogleLogo, Lock,GithubLogo, Cube,Pen ,User ,Image,Eye,EyeSlash} from 'phosphor-react'

 const  Register = () => {
  const navigate = useNavigate() ;
  const location = useLocation();
  const[visible,setVisible] = useState(true)
  const eysToggle = () =>{
    setVisible(!visible)

   }

   
  const {AuthRegister,openSuccessModal,setModelMessage,setModelHead,setUser,
    setLoading, openErrorModal,user} = useContext(AuthContext)
    const Navigate = useNavigate()

  const handleRegister = event =>{
 
    event.preventDefault()
    const form = event.target ;
    const name =form.name.value ; 
    const email = form.email.value ;
    const password = form.password.value ;


    if(user){
  


      setModelHead("Error");
    setModelMessage("you are already logged in")
    openErrorModal()
      event.target.reset()
      return
    }


    if (password.length < 6) {
      setModelMessage("Password must have at least 6 characters.");
  setModelHead("ERROR")
  openErrorModal()
      return ;
      
  } else if (!/[A-Z]/.test(password)) {
    setModelMessage("Password must have one uppercase letter.");
    setModelHead("ERROR")
    openErrorModal()
      return;
  } else if (!/[a-z]/.test(password)) {
    setModelMessage("Password must have  one lowercase letter.");
    setModelHead("ERROR")
    openErrorModal()
      return;
  } 
  






    const photoURL = form.photoURL.value
    console.log(name,email,photoURL,password)



AuthRegister(email,password)
.then(res=>{
  console.log(res.user);
  updateProfile(Auth.currentUser, {
    displayName: name, photoURL: photoURL ,
  }).then(() => {
    console.log("name and password upadated");
    form.reset()
  setModelHead("Account created successfully")
  setModelMessage(
    <>
      Welcome {' '}
      <span className='font-semibold text-blue-500'>
        {res.user.displayName}
      </span>
    
    </>
  );

  
  openSuccessModal()
  navigate(location?.state?location.state : '/')
  event.target.reset() 
Navigate('/')


  }).catch((error) => {
   
    setModelHead("Error");
    setModelMessage(error.message)
    openErrorModal()
   
  });
  

  


})
.catch(error=> {
  
  setModelHead("Error");
  setModelMessage(error.message)
  openErrorModal()
  
})








  }
  return (
    
    <div className={`border-[1px]  bg-cover bg-center md:bg-[url('https://i.ibb.co/4Kjv05C/dragon-dark-sky-fantasy-art-pr-1366x768.jpg')]    border-black  bg-transparent grid md:grid-cols-7   md:min-h-[90vh] lg:min-h-[90vh]  ` }>
    <div  className="py-10 hidden md:flex mt-5 md:mt-0 md:py-0 px-4 h-full md:col-span-3  flex-col gap-6 md:gap-5 lg:gap-10   justify-center  ">




    </div>






    <div className=" md:bg-transparent  h-full md:col-span-4 flex  justify-center items-center ">

    <Card className=" !w-[600px]  md:my-20 my-10 dark:text-fuchsia-50  rounded-sm border-none md:border-[1px] border-fuchsia-500 bg-transparent md:bg-[#ffffffca]  
     md:dark:bg-[#f8e7fcd3]
      ">
<Card.Content className="space-y-3">
<Card.Header>
  <Card.Title className='dark:text-fuchsia-400 md:dark:text-fuchsia-900'>Create an account</Card.Title>
  <Card.Description className='dark:text-fuchsia-700 md:dark:text-fuchsia-700 '>If you  have  account then just <Link to="/login" className='font-semibold dark:text-fuchsia-400 md:dark:text-fuchsia-700'>Login</Link></Card.Description>
</Card.Header>


<form onSubmit={handleRegister} className="space-y-2">
<fieldset className="space-y-1">
    <Label className='dark:text-fuchsia-700 md:dark:text-fuchsia-900' htmlFor="name">Name*</Label>
    <div className="relative">
      <Input required name='name' id="name" type="text" placeholder="Enter full name" className="ps-11 " />
      <Icon>
        <User size={19} color="#AFBACA" />
      </Icon>
    </div>
  </fieldset>
  <fieldset className="space-y-1">
    <Label className='dark:text-fuchsia-700 md:dark:text-fuchsia-900' htmlFor="email">Email*</Label>
    <div className="relative">
      <Input required name='email' id="email" type="email" placeholder="Enter email" className="ps-11" />
      <Icon>
        <Envelope size={19} color="#AFBACA" />
      </Icon>
    </div>
  </fieldset>
  <fieldset   className="space-y-1">
    <Label className='dark:text-fuchsia-900'  htmlFor="photoURL">photoURL*</Label>
    <div className="relative">
      <Input required id="photoURL" type="text" placeholder="Enter PhotoURL" className="ps-11" />
      <Icon>
        <Image size={19} color="#AFBACA" />
      </Icon>
    </div>
  </fieldset>
  <fieldset className="space-y-1">
    <Label className='dark:text-fuchsia-900' htmlFor="password">Password*</Label>
    <div className="relative">
      <Input required id="password" placeholder="Enter password" type={visible?"password":"text"} className="ps-11" />
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
  <Button className="!mt-3    bg-fuchsia-500  text-fuchsia-50 hover:bg-fuchsia-300 hover:text-black block w-full" size="xs" color="secondary" variant="outline">
    Create Account
  </Button>
</form>

</Card.Content>
</Card>

    </div>

    
</div>
    
  )
}




export default Register;