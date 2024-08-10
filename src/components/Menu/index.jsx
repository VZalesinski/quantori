import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import MenuIcon from '@/assets/menu-icon.svg'
import { LoginButton } from '@/components/LoginButton'

export const Menu = () => {
  return (
    <>
      <Sheet className='font-primaryRegular'>
        <SheetTrigger asChild>
          <Button variant='outline'>
            <img src={MenuIcon} className='w-4 h-4' />
          </Button>
        </SheetTrigger>
        <SheetContent side={'top'}>
          <SheetHeader className='flex flex-col items-center'>
            <SheetTitle className='font-primaryRegular'>Menu</SheetTitle>
            <Tabs defaultValue='home' className='font-primaryRegular'>
              <TabsList>
                <TabsTrigger value='home'>Home</TabsTrigger>
                <TabsTrigger value='contact'>Contact</TabsTrigger>
                <TabsTrigger value='about'>About</TabsTrigger>
              </TabsList>
            </Tabs>

            <LoginButton />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}
