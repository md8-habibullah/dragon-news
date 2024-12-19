import moment from 'moment'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center py-2 gap-2 '>
        <img className='w-[600px]' src= {logo} alt="" />
        <h2 className='text-2xl'>Journalism Without Fear or Favour</h2>
        <p>
            {
                moment().format("dddd, MMMM Do YYYY")
            }
        </p>
      </div>
    </div>
  )
}
