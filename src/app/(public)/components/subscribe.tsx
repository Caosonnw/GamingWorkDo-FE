import React from 'react'

export default function Subscribe() {
  return (
    <section className='pb-[70px]'>
      <div className='container mx-auto max-w-[1280px]'>
        <div className='newsletter-inner'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='md:w-9/12 w-full'>
              <div className='newsletter-left-col'>
                <div className='section-title'>
                  <div className='sub-title'>
                    <span> Subscribe Us</span>
                  </div>
                  <h2 className='!leading-[50px]'>
                    Subscribe newsletter and <b>get -20% off</b>
                  </h2>
                  <p className='text-[#838383]'>
                    Almost three-quarters of dedicated PC gamers say their main motivation to upgrade is improving
                    gaming experiences.
                  </p>
                </div>
                <form method='post' id='contact_form' className='newsletter-form'>
                  <div className='newsletter-form-inner'>
                    <input type='hidden' name='contact[tags]' value='newsletter' />
                    <div className='newsletter-form__field-wrapper'>
                      <div className='field form-inputs flex'>
                        <input
                          type='email'
                          className='field__input form-control'
                          placeholder='Enter email address...'
                        />
                        <button className='newsletter-form__button field__button btn' id='Subscribe'>
                          <span>send message</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='md:w-5/12 w-full'>
              <div className='newsletter-right-col'>
                <img src='/img/subscriber-img.webp' alt='subscriber-img' loading='lazy' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
