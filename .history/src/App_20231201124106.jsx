
import './App.css'


function App() {
  

  return (
    <>
    <div className="flex items-center justify-center h-screen bg-[#3F3F46]">
      <div className='bg-[#24242A] p-2 mx-6 rounded-2xl'>
        <div className='flex flex-col md:flex-row rounded-l-xl'>
        <img src='../src/assets/images/image.jpg' alt='' className='object-fill rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none  hover:scale-105
        duration-200 hover:rounded-xl'/>
        <div className='p-6 md:p-12'>
          <h2 className='font-serif text-xl font-medium text-center text-white md:text-left'>
            Get diet and fitness tips in your inbox
          </h2>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
