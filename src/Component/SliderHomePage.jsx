import './SliderHomePage.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';

function SlideHomePage()
{
    return(
        <>
        <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                spaceBetween={30}
                centeredSlides={true}
                parallax={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Parallax,Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className=''>
                    <div className='absolute bottom-32  border left-40  border-red-600 font-bold'>
                        <div className="title" data-swiper-parallax="-300">
                            Slide 1
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Subtitle
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>
                        </div>
                    </div>
                    <div className='opacity-30'>

                        <img src='https://wallpapers.com/images/hd/study-background-csdn2xd7eo43wtho.jpg' alt='slider' />
                    </div>

                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='absolute bottom-32  border left-40  border-red-600 font-bold'>
                        <div className="title" data-swiper-parallax="-300">
                            Slide 1
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Subtitle
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>
                        </div>
                    </div>
                    <div className='opacity-30'>
                        <img src='https://static.vecteezy.com/system/resources/previews/030/521/373/non_2x/beautiful-back-to-school-background-images-made-with-generative-ai-photo.jpg' alt='slider' />

                    </div>

                </SwiperSlide>

                <SwiperSlide className=''>
                    <div className='absolute bottom-32  border left-40  border-red-600 font-bold'>
                        <div className="title" data-swiper-parallax="-300">
                            Slide 1
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Subtitle
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>
                        </div>
                    </div>
                    <div className='opacity-30'>

                        <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/graduation-g5fb7f204c_1280_1200x768.png?VersionId=x.lyT2Qc.ZSgCiF_8aR_vpCl4dp9Wvk3&size=690:388' alt='slider' />
                    </div>

                </SwiperSlide>


                <SwiperSlide className=''>
                    <div className='absolute bottom-32  border left-40  border-red-600 font-bold'>
                        <div className="title" data-swiper-parallax="-300">
                            Slide 1
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Subtitle
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>
                        </div>
                    </div>
                    <div className='opacity-30'>

                        <img src='https://png.pngtree.com/thumb_back/fw800/background/20240116/pngtree-education-to-learn-study-in-world-graduated-student-studying-abroad-international-image_15596749.jpg' alt='slider' />
                    </div>

                </SwiperSlide>


                <SwiperSlide className=''>
                    <div className='absolute bottom-32  border left-40  border-red-600 font-bold'>
                        <div className="title" data-swiper-parallax="-300">
                            Slide 1
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Subtitle
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>
                        </div>
                    </div>
                    <div className='opacity-30'>

                        <img src='https://a2sinstitute.com/new-img/banner/addmission-banner.png' alt='slider 1' />
                    </div>

                </SwiperSlide>



            </Swiper>

           
        </>
    )
}


export default SlideHomePage;