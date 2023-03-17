import spinner from './assets//loading-gif.gif';
const Spinner = () => {
    return (
        <div className='w-100 mt-10'>
            <img src={spinner} alt="Loading..." width={50} className='text-center mx-auto'/>
        </div>
    )
}

export default Spinner
