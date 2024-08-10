import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function App() {
  return (
    <div className='font-primaryRegular'>
      <Header />

      <div className='relative h-[calc(100dvh-112px)] grid grid-cols-3 grid-rows-3'>
        <div className='col-start-1 col-end-2 row-start-1 row-end-3 bg-green-500'></div>
        <div className='col-start-2 col-end-4 row-start-1 row-end-2 bg-yellow-500'></div>
        <div className='col-start-2 col-end-3 row-start-2 row-end-3 bg-red-500'></div>
        <div className='col-start-3 col-end-4 row-start-2 row-end-4 bg-blue-500'></div>
        <div className='col-start-1 col-end-3 row-start-3 row-end-4 bg-purple-500'></div>
      </div>

      <Footer />
    </div>
  )
}
