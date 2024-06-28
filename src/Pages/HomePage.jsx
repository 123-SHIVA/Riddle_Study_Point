import SlideHomePage from '../Component/SliderHomePage';
import './HomePage.css'




function HomePage() {
    return (
        <div className=" bg-black  ">


            {/* --------------------------------------Home Slider---------------------------------  */}
            <SlideHomePage/>
            

            {/* --------------------------------- */}
            {/* <div className='my-20'>
                <div className='w-full h-80'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN11xevqur83sBmF2eWEr9_FmHkQ4WKcGKxA&s' className='w-[70%] h-80 m-auto' alt='image' />
                </div>
            </div> */}


        </div>
    )
}

export default HomePage;