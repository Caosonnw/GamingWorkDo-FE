'use client'

import { Button } from '@/components/ui/button'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const products = [
  {
    id: 1,
    name: 'Cloud Alpha Gaming Headset',
    price: '$530.00',
    originalPrice: '$600.00',
    image:
      '//gaming-workdo.myshopify.com/cdn/shop/products/1_5d4b2eec-0d47-4696-bee8-9a3d1976a2e9.png?v=1671449145&width=1946',
    discount: '17%'
  },
  {
    id: 2,
    name: 'VR Headset With Headphones',
    price: '$860.00',
    originalPrice: '$900.00',
    image:
      '//gaming-workdo.myshopify.com/cdn/shop/products/1_5d4b2eec-0d47-4696-bee8-9a3d1976a2e9.png?v=1671449145&width=1946',
    discount: '4%'
  },
  {
    id: 3,
    name: 'HTC Vive Tracker (3.0) PC',
    price: '$560.00',
    originalPrice: '$780.00',
    image:
      '//gaming-workdo.myshopify.com/cdn/shop/products/1_5d4b2eec-0d47-4696-bee8-9a3d1976a2e9.png?v=1671449145&width=1946',
    discount: '28%'
  },
  {
    id: 4,
    name: 'HTC Vive Tracker (3.0) PC',
    price: '$560.00',
    originalPrice: '$780.00',
    image:
      '//gaming-workdo.myshopify.com/cdn/shop/products/1_5d4b2eec-0d47-4696-bee8-9a3d1976a2e9.png?v=1671449145&width=1946',
    discount: '28%'
  },
  {
    id: 5,
    name: 'HTC Vive Tracker (3.0) PC',
    price: '$560.00',
    originalPrice: '$780.00',
    image:
      '//gaming-workdo.myshopify.com/cdn/shop/products/1_5d4b2eec-0d47-4696-bee8-9a3d1976a2e9.png?v=1671449145&width=1946',
    discount: '28%'
  },
  {
    id: 6,
    name: 'HTC Vive Tracker (3.0) PC',
    price: '$560.00',
    originalPrice: '$780.00',
    image:
      '//gaming-workdo.myshopify.com/cdn/shop/products/1_5d4b2eec-0d47-4696-bee8-9a3d1976a2e9.png?v=1671449145&width=1946',
    discount: '28%'
  },
  {
    id: 7,
    name: 'HTC Vive Tracker (3.0) PC',
    price: '$560.00',
    originalPrice: '$780.00',
    image:
      '//gaming-workdo.myshopify.com/cdn/shop/products/1_5d4b2eec-0d47-4696-bee8-9a3d1976a2e9.png?v=1671449145&width=1946',
    discount: '28%'
  },
  {
    id: 8,
    name: 'HTC Vive Tracker (3.0) PC',
    price: '$560.00',
    originalPrice: '$780.00',
    image:
      '//gaming-workdo.myshopify.com/cdn/shop/products/1_5d4b2eec-0d47-4696-bee8-9a3d1976a2e9.png?v=1671449145&width=1946',
    discount: '28%'
  },
  {
    id: 9,
    name: 'HTC Vive Tracker (3.0) PC',
    price: '$560.00',
    originalPrice: '$780.00',
    image:
      '//gaming-workdo.myshopify.com/cdn/shop/products/1_5d4b2eec-0d47-4696-bee8-9a3d1976a2e9.png?v=1671449145&width=1946',
    discount: '28%'
  },
  {
    id: 10,
    name: 'HTC Vive Tracker (3.0) PC',
    price: '$560.00',
    originalPrice: '$780.00',
    image:
      '//gaming-workdo.myshopify.com/cdn/shop/products/1_5d4b2eec-0d47-4696-bee8-9a3d1976a2e9.png?v=1671449145&width=1946',
    discount: '28%'
  },
  {
    id: 11,
    name: 'HTC Vive Tracker (3.0) PC',
    price: '$560.00',
    originalPrice: '$780.00',
    image:
      '//gaming-workdo.myshopify.com/cdn/shop/products/1_5d4b2eec-0d47-4696-bee8-9a3d1976a2e9.png?v=1671449145&width=1946',
    discount: '28%'
  }
]

export default function Product() {
  return (
    <section className='shopify-section product-sec relative w-full mx-auto py-[70px]'>
      <div className='container max-w-[1280px]' data-type='featured-product'>
        <div className='section-title flex items-center justify-between'>
          <h2 className='!text-white'>
            <b>Best Seller</b> of the week
          </h2>
          <a href='/collections/all' className='btn btn-transparent'>
            Show products
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={17}
              height={17}
              viewBox='0 0 17 17'
              fill='rgba(131, 131, 131, 1)'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.0801 11.334L11.5042 11.9203C11.8709 12.4273 12.4637 12.7507 13.1277 12.7507C14.3316 12.7507 15.2631 11.6955 15.1137 10.5008L14.5652 6.11208C14.4322 5.04867 13.5283 4.25065 12.4566 4.25065H4.54294C3.47125 4.25065 2.56727 5.04867 2.43435 6.11208L1.88575 10.5008C1.73642 11.6955 2.66792 12.7507 3.87184 12.7507C4.53583 12.7507 5.12857 12.4273 5.49529 11.9203L5.91944 11.334H11.0801ZM10.3564 12.7507C10.9792 13.6116 11.9918 14.1673 13.1277 14.1673C15.1837 14.1673 16.7745 12.3653 16.5195 10.3251L15.9709 5.93636C15.7493 4.16401 14.2427 2.83398 12.4566 2.83398H4.54294C2.75679 2.83398 1.25016 4.16401 1.02862 5.93636L0.480024 10.3251C0.225003 12.3653 1.81579 14.1673 3.87184 14.1673C5.00767 14.1673 6.02032 13.6116 6.64311 12.7507H10.3564Z'
                fill='rgba(131, 131, 131, 1)'
              />
              <path
                d='M5.66797 5.66602C5.27677 5.66602 4.95964 5.98315 4.95964 6.37435V7.08268H4.2513C3.8601 7.08268 3.54297 7.39981 3.54297 7.79102C3.54297 8.18222 3.8601 8.49935 4.2513 8.49935H4.95964V9.20768C4.95964 9.59888 5.27677 9.91601 5.66797 9.91601C6.05917 9.91601 6.3763 9.59888 6.3763 9.20768V8.49935H7.08464C7.47584 8.49935 7.79297 8.18222 7.79297 7.79102C7.79297 7.39981 7.47584 7.08268 7.08464 7.08268H6.3763V6.37435C6.3763 5.98315 6.05917 5.66602 5.66797 5.66602Z'
                fill='rgba(131, 131, 131, 1)'
              />
              <path
                d='M12.75 7.08268C13.1412 7.08268 13.4583 6.76555 13.4583 6.37435C13.4583 5.98315 13.1412 5.66602 12.75 5.66602C12.3588 5.66602 12.0417 5.98315 12.0417 6.37435C12.0417 6.76555 12.3588 7.08268 12.75 7.08268Z'
                fill='rgba(131, 131, 131, 1)'
              />
              <path
                d='M11.3333 9.91601C11.7245 9.91601 12.0417 9.59888 12.0417 9.20768C12.0417 8.81648 11.7245 8.49935 11.3333 8.49935C10.9421 8.49935 10.625 8.81648 10.625 9.20768C10.625 9.59888 10.9421 9.91601 11.3333 9.91601Z'
                fill='rgba(131, 131, 131, 1)'
              />
            </svg>
          </a>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
          1920: { slidesPerView: 4 }
        }}
        className='product-card-slider !pb-[40px]'
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className='product-card grid__item card'>
              <div className='product-card-inner flex-card-inner'>
                <div className='product-card-image card__media'>
                  <a
                    href='/products/nintendo-switch-lite-turquoise'
                    title='Nintendo Switch Lite Turquoise'
                    className='default-img  img-wrapper product__media-item '
                  >
                    <img
                      src='//gaming-workdo.myshopify.com/cdn/shop/products/1-1.png?v=1671449884&width=1946'
                      width={1946}
                      height={1946}
                    />
                  </a>
                  <a
                    href='/products/nintendo-switch-lite-turquoise'
                    title='Nintendo Switch Lite Turquoise'
                    className='hover-img img-wrapper '
                  >
                    <img
                      src='//gaming-workdo.myshopify.com/cdn/shop/products/4_234d61a8-f4cc-4d23-9a6c-e9a3f295aa3e.png?v=1721384510&width=1946'
                      alt='Nintendo Switch Lite Turquoise'
                      width={1946}
                      height={1946}
                    />
                  </a>
                  <div className='product-label-wrp'>
                    <div className='pro-label'>New</div>
                    <div className='pro-label pro-discount'>37%</div>
                  </div>
                  <div className='time-counter flex items-center justify-center text-center'>
                    <div className='deal-timeline'>
                      <div className='countdown-container flip-countdown countdown-block' data-countdown='2026-04-18'>
                        <div className='counter'>
                          <span className='count count-days'>458</span>
                        </div>
                        <div className='counter'>
                          <span className='count count-hours'>01</span>
                        </div>
                        <div className='counter'>
                          <span className='count count-minites'>52</span>
                        </div>
                        <div className='counter'>
                          <span className='count count-seconds'>05</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='pro-btn-wrapper'>
                    <div className='pro-btn pro-wishlist'>
                      <label>
                        <span className='wishlist-label wishlist-btn pro-label'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={17}
                            height={16}
                            viewBox='0 0 17 16'
                            fill='none'
                          >
                            <path
                              d='M8.50048 14.4332C8.29381 14.4332 8.09381 14.4066 7.92715 14.3466C5.3805 13.4732 1.33386 10.3733 1.33386 5.79329C1.33386 3.45997 3.22052 1.56665 5.5405 1.56665C6.66716 1.56665 7.72048 2.00665 8.50048 2.79331C9.28047 2.00665 10.3338 1.56665 11.4605 1.56665C13.7804 1.56665 15.6671 3.46664 15.6671 5.79329C15.6671 10.3799 11.6205 13.4732 9.07381 14.3466C8.90714 14.4066 8.70714 14.4332 8.50048 14.4332ZM5.5405 2.56664C3.77384 2.56664 2.33386 4.0133 2.33386 5.79329C2.33386 10.3466 6.71382 12.8799 8.25381 13.4066C8.37381 13.4466 8.63381 13.4466 8.75381 13.4066C10.2871 12.8799 14.6738 10.3533 14.6738 5.79329C14.6738 4.0133 13.2338 2.56664 11.4671 2.56664C10.4538 2.56664 9.5138 3.03997 8.90714 3.85997C8.72047 4.1133 8.29381 4.1133 8.10715 3.85997C7.48715 3.03331 6.55382 2.56664 5.5405 2.56664Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <input
                          type='checkbox'
                          id='true'
                          data-value='true'
                          style={{ display: 'none' }}
                          pro-handle='nintendo-switch-lite-turquoise'
                        />
                        <span className='checkmark' />
                      </label>
                    </div>
                    <div className='pro-btn pro-compare'>
                      <label>
                        <span className='compare-label compare-btn pro-label'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={17}
                            height={16}
                            viewBox='0 0 17 16'
                            fill='none'
                          >
                            <path
                              d='M15.167 15.1667H1.83374C1.56041 15.1667 1.33374 14.9401 1.33374 14.6667C1.33374 14.3934 1.56041 14.1667 1.83374 14.1667H15.167C15.4403 14.1667 15.667 14.3934 15.667 14.6667C15.667 14.9401 15.4403 15.1667 15.167 15.1667Z'
                              fill='white'
                            />
                            <path
                              d='M10.0001 15.1666H7.00012C6.72679 15.1666 6.50012 14.9399 6.50012 14.6666V2.66669C6.50012 1.52004 7.13345 0.833374 8.20011 0.833374H8.8001C9.86676 0.833374 10.5001 1.52004 10.5001 2.66669V14.6666C10.5001 14.9399 10.2734 15.1666 10.0001 15.1666ZM7.50011 14.1666H9.5001V2.66669C9.5001 1.90003 9.1401 1.83337 8.8001 1.83337H8.20011C7.86011 1.83337 7.50011 1.90003 7.50011 2.66669V14.1666Z'
                              fill='white'
                            />
                            <path
                              d='M5.16677 15.1665H2.50012C2.22679 15.1665 2.00012 14.9398 2.00012 14.6665V6.66657C2.00012 5.51991 2.58678 4.83325 3.56678 4.83325H4.10011C5.0801 4.83325 5.66676 5.51991 5.66676 6.66657V14.6665C5.66676 14.9398 5.4401 15.1665 5.16677 15.1665ZM3.00011 14.1665H4.66677V6.66657C4.66677 5.83324 4.30011 5.83324 4.10011 5.83324H3.56678C3.36678 5.83324 3.00011 5.83324 3.00011 6.66657V14.1665Z'
                              fill='white'
                            />
                            <path
                              d='M14.5004 15.1667H11.8337C11.5604 15.1667 11.3337 14.94 11.3337 14.6667V10.0001C11.3337 8.85341 11.9204 8.16675 12.9004 8.16675H13.4337C14.4137 8.16675 15.0004 8.85341 15.0004 10.0001V14.6667C15.0004 14.94 14.7737 15.1667 14.5004 15.1667ZM12.3337 14.1667H14.0004V10.0001C14.0004 9.16674 13.6337 9.16674 13.4337 9.16674H12.9004C12.7004 9.16674 12.3337 9.16674 12.3337 10.0001V14.1667Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <a className='compare-now' href='/pages/compare' style={{ display: 'none' }}>
                          Compare Now
                        </a>
                        <input
                          type='checkbox'
                          id='true'
                          data-value='true'
                          style={{ display: 'none' }}
                          pro-handle='nintendo-switch-lite-turquoise'
                        />
                        <span className='checkmark' />
                      </label>
                    </div>
                    <div className='pro-btn'>
                      <a
                        href='/products/nintendo-switch-lite-turquoise'
                        className='qv-btn quickview-btn'
                        data-handle='nintendo-switch-lite-turquoise'
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' width={17} height={16} viewBox='0 0 17 16' fill='none'>
                          <path
                            d='M8.49968 10.8868C6.90636 10.8868 5.61304 9.59349 5.61304 8.00017C5.61304 6.40685 6.90636 5.11353 8.49968 5.11353C10.093 5.11353 11.3863 6.40685 11.3863 8.00017C11.3863 9.59349 10.093 10.8868 8.49968 10.8868ZM8.49968 6.11352C7.45969 6.11352 6.61303 6.96018 6.61303 8.00017C6.61303 9.04016 7.45969 9.88682 8.49968 9.88682C9.53967 9.88682 10.3863 9.04016 10.3863 8.00017C10.3863 6.96018 9.53967 6.11352 8.49968 6.11352Z'
                            fill='white'
                          />
                          <path
                            d='M8.49955 14.0133C5.9929 14.0133 3.62626 12.5466 1.9996 9.99997C1.29294 8.89998 1.29294 7.10666 1.9996 6C3.63292 3.45335 5.99957 1.98669 8.49955 1.98669C10.9995 1.98669 13.3662 3.45335 14.9928 6C15.6995 7.09999 15.6995 8.89331 14.9928 9.99997C13.3662 12.5466 10.9995 14.0133 8.49955 14.0133ZM8.49955 2.98669C6.34624 2.98669 4.28625 4.28001 2.84626 6.53999C2.34626 7.31999 2.34626 8.67998 2.84626 9.45997C4.28625 11.72 6.34624 13.0133 8.49955 13.0133C10.6529 13.0133 12.7129 11.72 14.1528 9.45997C14.6528 8.67998 14.6528 7.31999 14.1528 6.53999C12.7129 4.28001 10.6529 2.98669 8.49955 2.98669Z'
                            fill='white'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='product-content'>
                  <div className='product-content-top'>
                    <h3>
                      <a href='/products/hyper-clutch-gaming-controller'>Hyper Clutch Gaming Controller</a>
                    </h3>
                  </div>
                  <div className='product-content-bottom'>
                    {/* <div className='product-rating flex align-center'>
                      <div
                        className='jdgm-widget jdgm-preview-badge jdgm-preview-badge--with-link jdgm--done-setup'
                        data-widget-name='preview_badge'
                        data-impressions-tracked='true'
                        data-views-tracked='true'
                      >
                        <div className='jdgm-prev-badge jdgm--js' data-average-rating={0.0} data-number-of-reviews={0}>
                          <span className='jdgm-prev-badge__stars' data-score={0.0}>
                            <span className='jdgm-star jdgm--off' />
                            <span className='jdgm-star jdgm--off' />
                            <span className='jdgm-star jdgm--off' />
                            <span className='jdgm-star jdgm--off' />
                            <span className='jdgm-star jdgm--off' />
                          </span>
                          <span className='jdgm-prev-badge__text'>No reviews</span>
                        </div>
                      </div>
                    </div>
                    <div className='product-variation-wrapper'>
                      <select
                        id='Variants-template--23750165987649__113666d7-0878-4214-ad50-1396c82c6b8f-8057105711425'
                        className='nice-select select__select no-js'
                        form='product-form-template--23750165987649__113666d7-0878-4214-ad50-1396c82c6b8f-8057105711425'
                        style={{ display: 'none' }}
                      >
                        <option data-v-title='Black' data-price='$630.00' data-cprice disabled value={44216079450433}>
                          Black - Sold out - $630.00
                        </option>
                      </select>
                    </div> */}
                    <div className='product-price-wrapper flex items-center justify-between'>
                      <div className='price'>
                        <p className='price-item font-bold text-[22px]'>$630.00</p>
                      </div>
                      <Button type='submit' className='btn'>
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
