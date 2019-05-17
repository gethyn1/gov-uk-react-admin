import React, { useState } from 'react'
import { H1 } from '@govuk-react/heading'
import FormGroup from '@govuk-react/form-group'
import LabelText from '@govuk-react/label-text'
import Input from '@govuk-react/input'
import Button from '@govuk-react/button'
import { AppLayout } from '../../layouts'

const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const setFieldState = (setStateCallback) => (event) => setStateCallback(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ username, password })
  }

  return (
    <AppLayout>
      <H1>Login</H1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <LabelText htmlFor="username">Username</LabelText>
          <Input name="username" value={username} onChange={setFieldState(setUsername)} />
        </FormGroup>
        <FormGroup>
          <LabelText htmlFor="password">Password</LabelText>
          <Input type="password" name="password" value={password} onChange={setFieldState(setPassword)} />
        </FormGroup>
        <Button>Login</Button>
      </form>
    </AppLayout>
  )
}

export {
  Login
}
