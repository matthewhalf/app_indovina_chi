import AvatarCard  from './components/AvatarCard'

const App = () => {

  return (
    <>
      <div className="flex justify-center mt-10">
        <h1 className='font-extrabold text-5xl text-green-vogue-100 ' >App Indovina chi</h1>
      </div>
      <div className='grid grid-cols-3 place-items-center gap-4 font-bold text-green-vogue-50 text-xl mt-10'>
          <AvatarCard />
      </div>
    </>
  )
}

export default App
