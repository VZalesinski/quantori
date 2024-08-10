import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Menu } from '@/components/Menu'
import { LoginButton } from '@/components/LoginButton'
import useFetchUserData from '@/hooks/useFetchUserData'

export const Header = () => {
  const { data } = useFetchUserData()

  return (
    <header className='px-6 h-[72px] py-4 flex items-center justify-between bg-slate-500'>
      <div className='flex items-center gap-x-4'>
        <Avatar>
          <AvatarImage
            src={data ? data.image : 'https://github.com/shadcn.png'}
          />
        </Avatar>

        <Tabs defaultValue='home' className='w-[400px] hidden md:block'>
          <TabsList>
            <TabsTrigger value='home'>Home</TabsTrigger>
            <TabsTrigger value='contact'>Contact</TabsTrigger>
            <TabsTrigger value='about'>About</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className='hidden md:block'>
        <LoginButton />
      </div>

      <div className='md:hidden'>
        <Menu />
      </div>
    </header>
  )
}
