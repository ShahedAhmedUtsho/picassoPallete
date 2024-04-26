
'use client'
import { Envelope, FacebookLogo, GoogleLogo, Lock } from 'phosphor-react'
import { Button, Card, Divider, Icon, Input, Label } from 'keep-react'
import { Link } from 'react-router-dom'

 const Login = () => {
  return (
    <Card className="max-w-sm">
      <Card.Content className="space-y-3">
        <Card.Header>
          <Card.Title>Create an account</Card.Title>
          <Card.Description>If you don&apos;t have any account then just <Link to="/register" className='font-semibold'>Register</Link></Card.Description>
        </Card.Header>
       
        
        <form className="space-y-2">
          <fieldset className="space-y-1">
            <Label htmlFor="email">Email*</Label>
            <div className="relative">
              <Input id="email" type="email" placeholder="Enter email" className="ps-11" />
              <Icon>
                <Envelope size={19} color="#AFBACA" />
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