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
import { useState } from 'react'

export const LoginButton = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent className='font-primaryRegular sm:max-w-md cl text-white'>
        <DialogHeader>
          <DialogTitle className='text-white'>Login</DialogTitle>
        </DialogHeader>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' id='email' placeholder='Email' />
        </div>

        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <div className='flex justify-between'>
            <Label htmlFor='password'>Password</Label>

            <div className='flex gap-2'>
              <Checkbox
                id='showPassword'
                value={showPassword}
                onClick={() => setShowPassword(!showPassword)}
              />
              <Label htmlFor='showPassword'>Show password</Label>
            </div>
          </div>
          <Input
            type={showPassword ? 'text' : 'password'}
            id='password'
            placeholder='Password'
          />
        </div>
        <DialogFooter className='justify-end flex-row gap-3'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              Close
            </Button>
          </DialogClose>

          <Button type='button'>Login</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
