import React from 'react'

export default function Story() {
  return (
    <section className='our-story-sec pb-[70px] pt-[70px] bg-black text-white'>
      <div className='container mx-auto max-w-[1280px]'>
        <div className='flex flex-col md:flex-row items-center'>
          {/* Left Column */}
          <div className='md:w-6/12 w-full px-4'>
            <div className='story-left-col'>
              <div className='flex flex-col md:flex-row'>
                {/* Left Image */}
                <div className='md:w-6/12 w-full px-2'>
                  <div className='story-left-img img-rasio'>
                    <img src='/img/story-left-img.webp' alt='story-img' loading='lazy' className='w-full' />
                  </div>
                </div>
                {/* Right Image */}
                <div className='md:w-6/12 w-full px-2'>
                  <div className='story-right-img img-rasio'>
                    <img src='/img/story-right-img.webp' alt='story-img' loading='lazy' className='w-full' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='md:w-6/12 w-full px-4 mt-6 md:mt-0'>
            <div className='story-right-col'>
              <div className='section-title'>
                <div className='sub-title'>
                  <span>How We Do</span>
                </div>
                <h2 className='!leading-[50px] !text-white'>From Pixels To Play: Sharing Our Story</h2>
                <p className='mt-[15px]'>
                  With hardware, tools are what enable a person to install, remove, or perform other actions on the
                  components within their computer.
                </p>
              </div>
              <ul>
                <li>Our gaming offerings cater to your every desire</li>
                <li>Forge lasting friendships with like-minded gamers who share your passion and enthusiasm</li>
                <li>
                  Join us in fostering a vibrant and inclusive gaming culture that celebrates diversity and empowers
                  players to connect, compete, and grow
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
