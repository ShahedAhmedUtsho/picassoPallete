

'use client'
import { Envelope, FacebookLogo, GoogleLogo, Lock ,User ,Image} from 'phosphor-react'
import { Button, Card, Divider, Icon, Input, Label } from 'keep-react'
import { Link } from 'react-router-dom'

 const  Register = () => {
  return (
    <Card className="max-w-sm">
      <Card.Content className="space-y-3">
        <Card.Header>
          <Card.Title>Create an account</Card.Title>
          <Card.Description>If you  have  account then just <Link to="/login" className='font-semibold'>Login</Link></Card.Description>
        </Card.Header>
       
        
        <form className="space-y-2">
        <fieldset className="space-y-1">
            <Label htmlFor="name">Email*</Label>
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
            <Label  htmlFor="photoURL">Email*</Label>
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