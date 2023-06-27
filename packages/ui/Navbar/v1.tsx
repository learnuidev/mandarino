import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, MicIcon } from 'ui/icons'

export function Navbar () {
  const pathName = usePathname()
  return (
    <div className='z-50 absolute px-2 pt-[14px] dark:text-gray-500 flex flex-col justify-center items-center'>
      <Link
        className={`${
          pathName === '/' ? 'dark:text-white' : 'dark:text-gray-600'
        } my-4 flex flex-col justify-center items-center hover:dark:text-white transition`}
        href='/'
      >
        <HomeIcon className='h-8 w-8' />
      </Link>
      <Link
        className={`${
          pathName === '/speak' ? 'dark:text-white' : 'dark:text-gray-600'
        } my-4 flex flex-col justify-center items-center hover:dark:text-white transition`}
        href='/speak'
      >
        <MicIcon className='h-8 w-8' />
      </Link>
    </div>
  )
}
