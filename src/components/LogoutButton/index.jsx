import { Button } from '@/components/ui/button'

export const LogoutButton = () => {
  const onLogout = () => {
    localStorage.clear()
    location.reload()
  }
  return <Button onClick={onLogout}>Logout</Button>
}
