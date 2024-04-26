
'use client'
import { Envelope, FacebookLogo, GoogleLogo, Lock } from 'phosphor-react'
import { Button, Card, Divider, Icon, Input, Label } from 'keep-react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'

 const Login = () => {
const {AuthLogIn,user,closeModal,setUser,isSuccessOpen,openSuccessModal,setIsSuccessOpen,setModelMessage,setModelHead,modelHead,modelMessage,setLoading,loading} = useContext(AuthContext)

  const handleLogin = event =>{
    event.preventDefault()

if(user !== null ){
  console.log("already log in") ;
  event.target.reset()
  return
}

    const form = event.target ;
    const email = form.email.value ;
    const password = form.password.value ;
    console.log(email,password)


AuthLogIn(email,password)
.then(res=>{
  console.log(res.user ,"login Successfully")
  form.reset()
  setUser(res.user)
  
setModelHead("Login Successfully")
setModelMessage(
  <>
    Welcome back{' '}
    <span className='font-semibold text-blue-500'>
      {res.user.displayName}
    </span>
  </>
);
openSuccessModal()





})
.catch(error => {
console.log("error from login " , error.message)
})

  }
  return (
    <Card className="max-w-sm">
      <Card.Content className="space-y-3">
        <Card.Header>
          <Card.Title>Sign In</Card.Title>
          <Card.Description>If you don&apos;t have any account then just <Link to="/register" className='font-semibold'>Register</Link></Card.Description>
        </Card.Header>
       
        
        <form onSubmit={handleLogin} className="space-y-2">
          <fieldset className="space-y-1">
            <Label htmlFor="email">Email*</Label>
            <div className="relative">
              <Input required name='email' id="email" type="email" placeholder="Enter email" className="ps-11" />
              <Icon>
                <Envelope size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="password">Password*</Label>
            <div className="relative">
              <Input required name='password' id="password" placeholder="Enter password" type="password" className="ps-11" />
              <Icon>
                <Lock size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <Button className="!mt-3 block w-full" size="xs" color="secondary" variant="outline">
            Sign In
          </Button>
        </form>
        <Divider>Or</Divider>
        <div className="flex items-center justify-between gap-3">
          <Button size="xs" variant="outline" color="secondary" className="w-full">
            <GoogleLogo size={20} className="mr-1.5" />
            Google
          </Button>
          <Button size="xs" variant="outline" color="secondary" className="w-full">
            <FacebookLogo size={20} className="mr-1.5" />
            Facebook
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}



export default Login;