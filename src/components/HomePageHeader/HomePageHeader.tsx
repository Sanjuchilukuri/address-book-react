import Button from '../Button/Button';

function HomePageHeader() {
  return (
    <header className={`d-flex justify-content-between align-items-center border-bottom p-1 px-2`}>
        <h2 className="cursor-pointer h4 text-capitalize">Address Book</h2>
        <div className='d-flex gap-2'>
            <Button  
                onClick={()=>{alert("clicked")}} 
                size={'btn--small'} 
                color={'btn--sky-blue'}
            >
                Sign In
            </Button>
            <Button  
                onClick={()=>{alert("clicked")}} 
                size={'btn--small'} 
                color={''}
                extraClases='border border-2'
            >
                Sign Up
            </Button>
        </div>
    </header>
  )
}

export default HomePageHeader