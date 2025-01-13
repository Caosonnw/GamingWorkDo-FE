import LoginForm from '@/app/(public)/(auth)/login/login-form'
import React, { Suspense } from 'react'

export default function Login() {
  return (
    <>
      <section className='common-banner-sec'>
        <div className='container max-w-[1280px] px-[15px]'>
          <div className='common-banner-content'>
            <div className='back-btn-wrapper'>
              <a href='/' className='back-btn'>
                <span className='svg-ic'>
                  <svg xmlns='http://www.w3.org/2000/svg' width={11} height={5} viewBox='0 0 11 5' fill='white'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M10.5791 2.28954C10.5791 2.53299 10.3818 2.73035 10.1383 2.73035L1.52698 2.73048L2.5628 3.73673C2.73742 3.90636 2.74146 4.18544 2.57183 4.36005C2.40219 4.53467 2.12312 4.53871 1.9485 4.36908L0.133482 2.60587C0.0480403 2.52287 -0.000171489 2.40882 -0.000171488 2.2897C-0.000171486 2.17058 0.0480403 2.05653 0.133482 1.97353L1.9485 0.210321C2.12312 0.0406877 2.40219 0.044729 2.57183 0.219347C2.74146 0.393966 2.73742 0.673036 2.5628 0.842669L1.52702 1.84888L10.1383 1.84875C10.3817 1.84874 10.5791 2.04609 10.5791 2.28954Z'
                      fill='white'
                    />
                  </svg>
                </span>
                Back to home
              </a>
            </div>
            <div className='section-title'>
              <h2>Account</h2>
            </div>
            <p>
              {' '}
              Welcome to gaming – where every login is a new adventure. Gear up, dive in, and conquer your quests. Your
              journey to greatness starts now!{' '}
            </p>
          </div>
        </div>
      </section>
      <section className='login-page pt-[70px]'>
        <div className='container max-w-[1280px] px-[15px]'>
          <div className='flex justify-center'>
            <div className='w-full lg:w-8/12 md:w-10/12'>
              <div className='text-center'>
                <h2>Login</h2>
              </div>
              <Suspense fallback={<div>Loading...</div>}>
                <LoginForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
