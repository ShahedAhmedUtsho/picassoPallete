

'use client'
import { Envelope, Lock ,User ,Image} from 'phosphor-react'
import { Button, Card, Icon, Input, Label } from 'keep-react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { updateProfile } from 'firebase/auth'
import Auth from '../../Firebase/Firebase.config'

 const  Register = () => {
  const {AuthRegister,openSuccessModal,setModelMessage,setModelHead,setUser,
    setLoading, openErrorModal} = useContext(AuthContext)


  const handleRegister = event =>{
 
    event.preventDefault()
    const form = event.target ;
    const name =form.name.value ; 
    const email = form.email.value ;
    const password = form.password.value ;

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
  setUser(res.user)
  
  openSuccessModal()
  }).catch((error) => {
    console.log(error , "from update profile")
  });
  

  


})
.catch(error=> {
  const err = error.message ;
  console.log(err)
})








  }
  return (
    <Card className="max-w-sm">
      <Card.Content className="space-y-3">
        <Card.Header>
          <Card.Title>Create an account</Card.Title>
          <Card.Description>If you  have  account then just <Link to="/login" className='font-semibold'>Login</Link></Card.Description>
        </Card.Header>
       
        
        <form onSubmit={handleRegister} className="space-y-2">
        <fieldset className="space-y-1">
            <Label htmlFor="name">Name*</Label>
            <div className="relative">
              <Input name='name' id="name" type="text" placeholder="Enter full name" className="ps-11" />
              <Icon>
                <User size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="email">Email*</Label>
            <div className="relative">
              <Input name='email' id="email" type="email" placeholder="Enter email" className="ps-11" />
              <Icon>
                <Envelope size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label  htmlFor="photoURL">photoURL*</Label>
            <div className="relative">
              <Input id="photoURL" type="text" placeholder="Enter PhotoURL" className="ps-11" />
              <Icon>
                <Image size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="password">Password*</Label>
            <div className="relative">
              <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
              <Icon>
                <Lock size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <Button className="!mt-3 block w-full" size="xs" color="secondary" variant="outline">
            Create Account
          </Button>
        </form>
        
      </Card.Content>
    </Card>
  )
}




export default Register;