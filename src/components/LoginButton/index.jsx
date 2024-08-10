import { LogoutButton } from '@/components/LogoutButton'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useFetchUserData from '@/hooks/useFetchUserData'
import { useState } from 'react'

export const LoginButton = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const { fetchData } = useFetchUserData()
  const [token, setToken] = useState(localStorage.getItem('authToken'))

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30
        })
      })

      if (!response.ok) {
        const data = await response.json()
        setErrorMessage(data.message)
        return
      }

      const data = await response.json()
      const authToken = data.token

      localStorage.setItem('authToken', authToken)
      fetchData()
      setToken(token)
      location.reload()
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setUsername('')
      setPassword('')
    }
  }

  return token ? (
    <LogoutButton />
  ) : (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Login</Button>
        </DialogTrigger>
        <DialogContent className='font-primaryRegular sm:max-w-md cl text-white'>
          <DialogHeader>
            <DialogTitle className='text-white'>Login</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <p className='text-red-600 mt-3'>{errorMessage}</p>
            )}

            <div className='mt-3 grid w-full max-w-sm items-center gap-1.5'>
              <Label htmlFor='text'>Email</Label>
              <Input
                type='text'
                id='text'
                placeholder='Email'
                value={username}
                onChange={e => {
                  setUsername(e.target.value)
                  setErrorMessage(null)
                }}
                required
              />
            </div>

            <div className='mt-7 grid w-full max-w-sm items-center gap-1.5'>
              <div className='flex justify-between'>
                <Label htmlFor='password'>Password</Label>

                <div className='flex gap-2'>
                  <Checkbox
                    id='showPassword'
                    value={showPassword}
                    onClick={() => {
                      setShowPassword(!showPassword)
                      setErrorMessage(null)
                    }}
                  />
                  <Label htmlFor='showPassword'>Show password</Label>
                </div>
              </div>
              <Input
                type={showPassword ? 'text' : 'password'}
                id='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <DialogFooter className='mt-7 justify-end flex-row gap-3'>
              <DialogClose asChild>
                <Button type='button' variant='secondary'>
                  Close
                </Button>
              </DialogClose>

              <Button type='submit'>Login</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
