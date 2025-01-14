'use client'

export default function Partner() {
  const partners = [
    '/img/partner-logo-img.webp',
    '/img/partner-logo-img.webp',
    '/img/partner-logo-img.webp',
    '/img/partner-logo-img.webp',
    '/img/partner-logo-img.webp',
    '/img/partner-logo-img.webp'
  ]
  return (
    <section className='shopify-section partner-logo-sec mx-auto bg-[#010101] pb-[70px]'>
      <div className='slider-container container max-w-[1280px] py-[15px]'>
        <div className='slider-track flex justify-center px-[20px] gap-20'>
          {partners.map((logo, index) => (
            <div className='slide max-w-[95px] w-full block' key={index}>
              <img src={logo} className='w-full h-full' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
