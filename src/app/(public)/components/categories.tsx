'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const products = [
  {
    product_id: 1,
    product_name: 'MSI Gaming Laptop',
    description: 'High-performance laptop with RTX 4060 and Intel i7.',
    category_id: 1,
    brand_id: 8,
    product_status: 'Available',
    update_at: '2025-01-10T08:31:37.000Z',
    created_at: '2025-01-10T08:31:37.000Z',
    categories: {
      category_id: 1,
      category_name: 'Gaming Laptops'
    },
    brands: {
      brand_id: 8,
      brand_name: 'MSI'
    },
    product_variants: [
      {
        variant_id: 1,
        product_id: 1,
        variant_name: '16GB RAM, 512GB SSD',
        variant_price: 1500,
        product_image_main:
          '//gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81.png?v=1671451100&width=600',
        product_image_hover:
          '//gaming-workdo.myshopify.com/cdn/shop/products/4_e72d0ae8-ac42-44e0-8222-251ef40c9c8d.png?v=1671451099&width=600',
        product_status: 'Available',
        rating: 5,
        attributes: {
          inches: '32 inches'
        },
        update_at: '2025-01-10T08:31:43.000Z',
        created_at: '2025-01-10T08:31:43.000Z'
      },
      {
        variant_id: 2,
        product_id: 2,
        variant_name: '16GB RAM, 512GB SSD',
        variant_price: 600,
        product_image_main:
          '//gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81.png?v=1671451100&width=600',
        product_image_hover:
          '//gaming-workdo.myshopify.com/cdn/shop/products/4_e72d0ae8-ac42-44e0-8222-251ef40c9c8d.png?v=1671451099&width=600',
        product_status: 'Available',
        rating: 5,
        attributes: {
          inches: '28 inches'
        },
        update_at: '2025-01-10T08:31:43.000Z',
        created_at: '2025-01-10T08:31:43.000Z'
      }
    ]
  },
  {
    product_id: 2,
    product_name: 'Corsair Gaming PC',
    description: 'Custom-built gaming PC with AMD Ryzen 9 and RTX 4070.',
    category_id: 2,
    brand_id: 2,
    product_status: 'Out of Stock',
    update_at: '2025-01-10T08:31:37.000Z',
    created_at: '2025-01-10T08:31:37.000Z',
    categories: {
      category_id: 2,
      category_name: 'Gaming PCs'
    },
    brands: {
      brand_id: 2,
      brand_name: 'Corsair'
    },
    product_variants: [
      {
        variant_id: 1,
        product_id: 1,
        variant_name: '16GB RAM, 512GB SSD',
        variant_price: 1500,
        product_image_main:
          '//gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81.png?v=1671451100&width=600',
        product_image_hover:
          '//gaming-workdo.myshopify.com/cdn/shop/products/4_e72d0ae8-ac42-44e0-8222-251ef40c9c8d.png?v=1671451099&width=600',
        product_status: 'Available',
        rating: 2,
        attributes: {
          ram: '16GB',
          color: 'Black',
          storage: '512GB SSD'
        },
        update_at: '2025-01-10T08:31:43.000Z',
        created_at: '2025-01-10T08:31:43.000Z'
      }
    ]
  },
  {
    product_id: 3,
    product_name: 'Corsair Gaming PC',
    description: 'Custom-built gaming PC with AMD Ryzen 9 and RTX 4070.',
    category_id: 3,
    brand_id: 3,
    product_status: 'Out of Stock',
    update_at: '2025-01-10T08:31:37.000Z',
    created_at: '2025-01-10T08:31:37.000Z',
    categories: {
      category_id: 3,
      category_name: 'Gaming PCs'
    },
    brands: {
      brand_id: 3,
      brand_name: 'Corsair'
    },
    product_variants: [
      {
        variant_id: 3,
        product_id: 3,
        variant_name: '16GB RAM, 512GB SSD',
        variant_price: 1500,
        product_image_main:
          '//gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81.png?v=1671451100&width=600',
        product_image_hover:
          '//gaming-workdo.myshopify.com/cdn/shop/products/4_e72d0ae8-ac42-44e0-8222-251ef40c9c8d.png?v=1671451099&width=600',
        product_status: 'Available',
        rating: 3,
        attributes: {
          ram: '16GB',
          color: 'Black',
          storage: '512GB SSD'
        },
        update_at: '2025-01-10T08:31:43.000Z',
        created_at: '2025-01-10T08:31:43.000Z'
      }
    ]
  },
  {
    product_id: 3,
    product_name: 'Corsair Gaming PC',
    description: 'Custom-built gaming PC with AMD Ryzen 9 and RTX 4070.',
    category_id: 3,
    brand_id: 3,
    product_status: 'Out of Stock',
    update_at: '2025-01-10T08:31:37.000Z',
    created_at: '2025-01-10T08:31:37.000Z',
    categories: {
      category_id: 3,
      category_name: 'Gaming PCs'
    },
    brands: {
      brand_id: 3,
      brand_name: 'Corsair'
    },
    product_variants: [
      {
        variant_id: 3,
        product_id: 3,
        variant_name: '16GB RAM, 512GB SSD',
        variant_price: 1500,
        product_image_main:
          '//gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81.png?v=1671451100&width=600',
        product_image_hover:
          '//gaming-workdo.myshopify.com/cdn/shop/products/4_e72d0ae8-ac42-44e0-8222-251ef40c9c8d.png?v=1671451099&width=600',
        product_status: 'Available',
        rating: 3,
        attributes: {
          ram: '16GB',
          color: 'Black',
          storage: '512GB SSD'
        },
        update_at: '2025-01-10T08:31:43.000Z',
        created_at: '2025-01-10T08:31:43.000Z'
      }
    ]
  },
  {
    product_id: 3,
    product_name: 'Corsair Gaming PC',
    description: 'Custom-built gaming PC with AMD Ryzen 9 and RTX 4070.',
    category_id: 3,
    brand_id: 3,
    product_status: 'Out of Stock',
    update_at: '2025-01-10T08:31:37.000Z',
    created_at: '2025-01-10T08:31:37.000Z',
    categories: {
      category_id: 3,
      category_name: 'Gaming PCs'
    },
    brands: {
      brand_id: 3,
      brand_name: 'Corsair'
    },
    product_variants: [
      {
        variant_id: 3,
        product_id: 3,
        variant_name: '16GB RAM, 512GB SSD',
        variant_price: 1500,
        product_image_main:
          '//gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81.png?v=1671451100&width=600',
        product_image_hover:
          '//gaming-workdo.myshopify.com/cdn/shop/products/4_e72d0ae8-ac42-44e0-8222-251ef40c9c8d.png?v=1671451099&width=600',
        product_status: 'Available',
        rating: 3,
        attributes: {
          ram: '16GB',
          color: 'Black',
          storage: '512GB SSD'
        },
        update_at: '2025-01-10T08:31:43.000Z',
        created_at: '2025-01-10T08:31:43.000Z'
      }
    ]
  },
  {
    product_id: 3,
    product_name: 'Corsair Gaming PC',
    description: 'Custom-built gaming PC with AMD Ryzen 9 and RTX 4070.',
    category_id: 3,
    brand_id: 3,
    product_status: 'Out of Stock',
    update_at: '2025-01-10T08:31:37.000Z',
    created_at: '2025-01-10T08:31:37.000Z',
    categories: {
      category_id: 3,
      category_name: 'Gaming PCs'
    },
    brands: {
      brand_id: 3,
      brand_name: 'Corsair'
    },
    product_variants: [
      {
        variant_id: 3,
        product_id: 3,
        variant_name: '16GB RAM, 512GB SSD',
        variant_price: 1500,
        product_image_main:
          '//gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81.png?v=1671451100&width=600',
        product_image_hover:
          '//gaming-workdo.myshopify.com/cdn/shop/products/4_e72d0ae8-ac42-44e0-8222-251ef40c9c8d.png?v=1671451099&width=600',
        product_status: 'Available',
        rating: 3,
        attributes: {
          ram: '16GB',
          color: 'Black',
          storage: '512GB SSD'
        },
        update_at: '2025-01-10T08:31:43.000Z',
        created_at: '2025-01-10T08:31:43.000Z'
      }
    ]
  }
]
export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0)

  const categoriesTab = [
    { img: '//gaming-workdo.myshopify.com/cdn/shop/files/cat-1.png?v=1723107519', name: 'Power Supplies' },
    { img: '//gaming-workdo.myshopify.com/cdn/shop/files/cat-2.png?v=1723107519', name: 'Speakers and Headphones' },
    { img: '//gaming-workdo.myshopify.com/cdn/shop/files/cat-3.png?v=1723107518', name: 'Gaming Peripherals' }
  ]
  return (
    <section className='block pb-[70px] category-tab-sec'>
      <div className='container mx-auto max-w-[1280px]'>
        <div className='flex flex-wrap items-center mx-[15px]'>
          <div className='md:basis-1/3 lg:basis-1/4 sm:basis-7/12 w-full px-[15px]'>
            <div className='category-left-col'>
              <div className='section-title'>
                <h2 className='!leading-[1.4]'>
                  <span className='whitespace-nowrap'>
                    Best <b>Pro</b>
                  </span>
                  <br />
                  <b>Gaming</b>
                  <br />
                  Categories
                </h2>
              </div>
              <ul className='cat-tab tabs'>
                {categoriesTab.map((category, index) => (
                  <li
                    key={index}
                    className={index === activeIndex ? 'active' : ''}
                    onClick={() => setActiveIndex(index)}
                  >
                    <a className='btn btn-transparent hover:cursor-pointer'>
                      <img src={category.img} className='icon' alt={category.name} loading='lazy' /> {category.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className='more-categories'>
                <a href='/collections' className='link-btn'>
                  show more Categories
                </a>
              </div>
            </div>
          </div>
          <div className='md:basis-2/3 lg:basis-3/4 sm:basis-full w-full px-[15px]'>
            <div className='category-right-col tabs-container'>
              <div className='tab-content active'>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={15}
                  slidesPerView={3}
                  navigation
                  style={{ width: '280px' }}
                  className='product-card-slider !pb-[40px]'
                >
                  {products.map((product) => (
                    <SwiperSlide key={product.product_id} className='!w-[280px] '>
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
                            {/* <div className='product-label-wrp'>
                              <div className='pro-label'>New</div>
                              <div className='pro-label pro-discount'>37%</div>
                            </div> */}
                            {/* <div className='time-counter flex items-center justify-center text-center'>
                              <div className='deal-timeline'>
                                <div
                                  className='countdown-container flip-countdown countdown-block'
                                  data-countdown='2026-04-18'
                                >
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
                            </div> */}
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
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={17}
                                    height={16}
                                    viewBox='0 0 17 16'
                                    fill='none'
                                  >
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
                              {/* haha  */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
