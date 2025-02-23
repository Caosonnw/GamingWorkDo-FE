'use client'

import { Rating, RatingButton } from '@/components/rating'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'

const product = [
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

export default function All() {
  const [isOpenSelected, setIsOpenSelected] = useState(true)
  const [isOpenPrice, setIsOpenPrice] = useState(true)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(940)

  const handleReset = () => {
    setMinPrice(0)
    setMaxPrice(940)
  }
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
              <h2>Products</h2>
            </div>
          </div>
        </div>
      </section>
      <section className='shopify-section product-listing-section collection-leftbar pt-[70px] py-[800px] tabs-wrapper'>
        <div id='ProductGridContainer'>
          <div className='collection'>
            <div className='product-heading-row'>
              <div className='container max-w-[1280px] pt-[15px]'>
                <div className='grid grid-cols-12 row m-0 items-center justify-between'>
                  <div className='product-heading-column grid col-span-1 md:col-span-4 lg:col-span-3 w-1/4'>
                    <div className='filter-title flex align-center'>
                      <div className='icon icon-filter desk-only'>
                        <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' fill='none'>
                          <path
                            d='M0.75 4.23089H12.169C12.5131 5.79741 13.9121 6.97345 15.5805 6.97345C17.2488 6.97345 18.6478 5.79745 18.9919 4.23089H23.25C23.6642 4.23089 24 3.89508 24 3.48089C24 3.0667 23.6642 2.73089 23.25 2.73089H18.9915C18.6467 1.16517 17.2459 -0.0116253 15.5805 -0.0116253C13.9141 -0.0116253 12.5139 1.16498 12.1693 2.73089H0.75C0.335812 2.73089 0 3.0667 0 3.48089C0 3.89508 0.335812 4.23089 0.75 4.23089ZM13.588 3.48286C13.588 3.48019 13.588 3.47747 13.588 3.4748C13.5913 2.37947 14.4851 1.48842 15.5805 1.48842C16.6743 1.48842 17.5681 2.37825 17.5728 3.47306L17.573 3.48408C17.5712 4.58128 16.6781 5.4735 15.5805 5.4735C14.4833 5.4735 13.5904 4.58217 13.5879 3.48563L13.588 3.48286ZM23.25 19.7691H18.9915C18.6467 18.2034 17.2459 17.0265 15.5805 17.0265C13.9141 17.0265 12.5139 18.2032 12.1693 19.7691H0.75C0.335812 19.7691 0 20.1048 0 20.5191C0 20.9333 0.335812 21.2691 0.75 21.2691H12.169C12.5131 22.8356 13.9121 24.0116 15.5805 24.0116C17.2488 24.0116 18.6478 22.8356 18.9919 21.2691H23.25C23.6642 21.2691 24 20.9333 24 20.5191C24 20.1048 23.6642 19.7691 23.25 19.7691ZM15.5805 22.5116C14.4833 22.5116 13.5904 21.6203 13.5879 20.5238L13.588 20.521C13.588 20.5183 13.588 20.5156 13.588 20.513C13.5913 19.4176 14.4851 18.5265 15.5805 18.5265C16.6743 18.5265 17.5681 19.4164 17.5728 20.5111L17.573 20.5222C17.5714 21.6195 16.6782 22.5116 15.5805 22.5116ZM23.25 11.25H11.831C11.4869 9.68349 10.0879 8.50748 8.41955 8.50748C6.75117 8.50748 5.35223 9.68349 5.00808 11.25H0.75C0.335812 11.25 0 11.5858 0 12C0 12.4142 0.335812 12.75 0.75 12.75H5.00845C5.35331 14.3157 6.75413 15.4925 8.41955 15.4925C10.0859 15.4925 11.4861 14.3159 11.8307 12.75H23.25C23.6642 12.75 24 12.4142 24 12C24 11.5858 23.6642 11.25 23.25 11.25ZM10.412 11.998C10.412 12.0008 10.412 12.0034 10.412 12.0061C10.4087 13.1014 9.51492 13.9925 8.41955 13.9925C7.32572 13.9925 6.43191 13.1026 6.42717 12.0079L6.42703 11.9969C6.42867 10.8996 7.32188 10.0075 8.41955 10.0075C9.5167 10.0075 10.4096 10.8988 10.4121 11.9954L10.412 11.998Z'
                            fill='white'
                          />
                        </svg>
                      </div>
                      <h2>Filters</h2>
                    </div>
                  </div>
                  <div className='product-heading-right-column grid lg:col-span-9 md:col-span-8 sm:col-span-10'>
                    <div className='product-sorting-row flex items-center justify-between'>
                      <div className='filter-list-wrp flex items-center'>
                        <ul className='filter-list tabs flex items-center'>
                          <li className='grid-view active'>
                            <svg
                              width={16}
                              height={18}
                              viewBox='0 0 16 18'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <rect width={2} height={18} fill='black' />
                              <rect x={7} width={2} height={18} fill='black' />
                              <rect x={14} width={2} height={18} fill='black' />
                            </svg>
                          </li>
                          <li className='list-view'>
                            <svg
                              width={18}
                              height={16}
                              viewBox='0 0 18 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <rect x={18} width={2} height={18} transform='rotate(90 18 0)' fill='black' />
                              <rect x={18} y={7} width={2} height={18} transform='rotate(90 18 7)' fill='black' />
                              <rect x={18} y={14} width={2} height={18} transform='rotate(90 18 14)' fill='black' />
                            </svg>
                          </li>
                        </ul>
                        <p className='text-[#838383]'>
                          <b>25</b> products viewed
                        </p>
                      </div>
                      <div className='filter-select-wrp flex items-center justify-end'>
                        <div className='facet-filters sorting caption'>
                          <div className='facet-filters__field featured-select flex items-center'>
                            <span className='sort-lbl'>
                              <label htmlFor='SortBy'>Sort by:</label>
                            </span>
                            <select
                              name='sort_by'
                              className='nice-select facet-filters__sort select__select caption-large border border-gray-300 rounded px-2 py-1'
                              id='SortBy'
                            >
                              <option value='manual'>Featured</option>
                              <option value='best-selling'>Best selling</option>
                              <option value='title-ascending' selected={true}>
                                Alphabetically, A-Z
                              </option>
                              <option value='title-descending'>Alphabetically, Z-A</option>
                              <option value='price-ascending'>Price, low to high</option>
                              <option value='price-descending'>Price, high to low</option>
                              <option value='created-ascending'>Date, old to new</option>
                              <option value='created-descending'>Date, new to old</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='container max-w-[1280px]'>
              <div className='product-list-row grid grid-cols-12 row m-0'>
                <div className='product-filter-left-column col-span-12 md:col-span-4 lg:col-span-3'>
                  <div className='facets-container product-filter-body pr-4 py-4'>
                    <div className='product-widget relative'>
                      <div className='w-full text-[19px] font-medium'>
                        <button
                          className='w-full flex justify-between items-center pb-2 text-left font-medium'
                          onClick={() => setIsOpenSelected(!isOpenSelected)}
                        >
                          <span className='uppercase'>Availability</span>
                          <span>{isOpenSelected ? '-' : '+'}</span>
                        </button>

                        {isOpenSelected && (
                          <div className='pb-4'>
                            <div className='flex items-center justify-between'>
                              0 selected
                              <button className='text-sm font-medium text-gray-600 hover:underline'>Reset</button>
                            </div>
                            <div className='space-y-2 pt-4'>
                              <div className='flex items-center space-x-2'>
                                <Checkbox id='terms' />
                                <label
                                  htmlFor='terms'
                                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                >
                                  In stock
                                </label>
                              </div>
                              <div className='flex items-center space-x-2'>
                                <Checkbox id='terms' />
                                <label
                                  htmlFor='terms'
                                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                >
                                  Out of stock
                                </label>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='product-price-widget product-widget relative'>
                      <div className='w-full text-[19px] font-medium'>
                        <div className='flex justify-between items-center py-2'>
                          <h2 className='text-lg font-semibold'>PRICE</h2>
                          <button className='text-xl font-semibold' onClick={() => setIsOpenPrice(!isOpenPrice)}>
                            <span>{isOpenPrice ? '-' : '+'}</span>
                          </button>
                        </div>
                        {isOpenPrice && (
                          <>
                            <div className='flex items-center justify-between'>
                              <p className='text-sm text-gray-600'>The highest price is ${maxPrice.toFixed(2)}</p>
                              <div className='mt-2 flex justify-end'>
                                <button
                                  onClick={handleReset}
                                  className='text-sm font-medium text-gray-600 hover:underline'
                                >
                                  Reset
                                </button>
                              </div>
                            </div>
                            <div className='flex justify-between items-center mt-4 gap-4 pb-4'>
                              <div className='flex flex-col'>
                                <label htmlFor='min-price' className='text-sm font-medium pb-2'>
                                  Min price:
                                </label>
                                <input
                                  id='min-price'
                                  type='number'
                                  className='border border-gray-400 rounded-md w-full text-[14px] font-normal p-[10px]'
                                  value={minPrice}
                                  onChange={(e) => setMinPrice(Number(e.target.value))}
                                />
                              </div>
                              <div className='flex flex-col'>
                                <label htmlFor='max-price' className='text-sm font-medium pb-2'>
                                  Max price:
                                </label>
                                <input
                                  id='max-price'
                                  type='number'
                                  className='border border-gray-400 rounded-md w-full text-[14px] font-normal p-[10px]'
                                  value={maxPrice}
                                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='product-filter-right-column col-span-12 md:col-span-8 lg:col-span-9'>
                  <div className='tabs-container'>
                    <div className='grid-product'>
                      <div className='grid grid-cols-12 row pro-list product-grid-view'>
                        {product.map((item) => (
                          <div
                            key={item.product_id}
                            className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 product-card grid__item flex-card card'
                          >
                            <div className='product-card-inner flex-card-inner'>
                              <div className='product-card-image card__media'>
                                <a
                                  href='/products/nintendo-switch-lite-turquoise'
                                  title='Nintendo Switch Lite Turquoise'
                                  className='default-img img-wrapper product__media-item '
                                >
                                  <img
                                    src={item.product_variants[0]?.product_image_main}
                                    alt={item.product_name}
                                    width={600}
                                    height={600}
                                  />
                                </a>
                                <a
                                  href='/products/nintendo-switch-lite-turquoise'
                                  title='Nintendo Switch Lite Turquoise'
                                  className='hover-img img-wrapper '
                                >
                                  <img
                                    src={item.product_variants[0]?.product_image_hover}
                                    alt={item.product_name}
                                    width={600}
                                    height={600}
                                  />
                                </a>
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
                              <div className='product-content text-black'>
                                <div className='product-content-top'>
                                  <h3 className='!mb-[10px]'>
                                    <a href='/products/hyper-clutch-gaming-controller'>
                                      Hyper Clutch Gaming Controller
                                    </a>
                                  </h3>
                                </div>
                                <div className='product-content-bottom'>
                                  <div className='product-rating flex items-center !mb-[10px]'>
                                    <Rating defaultValue={item.product_variants[0]?.rating} readOnly>
                                      {Array.from({ length: 5 }).map((_, index) => (
                                        <RatingButton key={index} />
                                      ))}
                                    </Rating>
                                  </div>
                                  <div className='product-variation-wrapper'>
                                    <select className='nice-select select__select'>
                                      {item.product_variants.map((variant) => (
                                        <option key={variant.variant_id} value={variant.variant_id}>
                                          {Object.entries(variant.attributes)
                                            .map(([key, value]) => `${value}`)
                                            .join(', ')}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className='product-price-wrapper flex items-center justify-between'>
                                    <div className='price'>
                                      <p className='price-item font-bold text-[22px]'>
                                        {new Intl.NumberFormat('en-US', {
                                          style: 'currency',
                                          currency: 'USD'
                                        }).format(item.product_variants[0]?.variant_price || 0)}
                                      </p>
                                    </div>
                                    <Button type='submit' className='btn'>
                                      Add To Cart
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
