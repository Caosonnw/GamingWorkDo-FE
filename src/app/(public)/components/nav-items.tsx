'use client'

import { path } from '@/common/path'
import Link from 'next/link'
import { useState } from 'react'

export default function NavItems({ className }: { className?: string }) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu)
  }

  const handleMouseLeave = () => {
    setActiveMenu(null)
  }
  return (
    <header className='site-header'>
      <div className='main-navigationbar sticky-header'>
        <div className='container max-w-[1280px] px-[15px]'>
          <div className='main-navigationbar-row flex flex-wrap justify-between items-center'>
            <div className='menu-items-col mobile-menu-wrapper'>
              <ul className='main-nav flex flex-wrap items-center'>
                <li
                  className={`menu-lnk main-menu has-item ${activeMenu === 'shop' ? 'menu_active' : ''}`}
                  onMouseEnter={() => handleMouseEnter('shop')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href='/'>Shop</a>
                  <div
                    className={`mega-menu menu-dropdown ${activeMenu === 'shop' ? 'open_menu' : ''} bg-white shadow-lg`}
                  >
                    <div className='mobile-sub-title flex items-center border-b p-3 md:hidden'>
                      <div className='back-menu-button flex items-center cursor-pointer'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' className='w-5 h-5 mr-2'>
                          <path d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
                        </svg>
                        Shop
                      </div>
                    </div>

                    <div className='mega-menu-container container mx-auto px-64 py-2'>
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='sub-menu-lnk has-item'>
                          <a
                            href='/'
                            tabIndex={0}
                            className='list-title font-semibold flex items-center justify-between'
                          >
                            Category Page
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' className='w-4 h-4'>
                              <path d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z' />
                            </svg>
                          </a>
                          <div className='sub-menu-dropdown hidden md:block'>
                            <ul className='megamenu-list arrow-list mobile-menu-wrapper'>
                              <li>
                                <a href='/collections/gaming-pcs'>Gaming PCs</a>
                              </li>
                              <li>
                                <a href='/collections/game-remote'>Game Remote</a>
                              </li>
                              <li>
                                <a href='/collections/gaming-cards'>Gaming Cards</a>
                              </li>
                              <li>
                                <a href='/collections/gaming-chairs'>Gaming Chairs</a>
                              </li>
                              <li>
                                <a href='/collections/gaming-moniter'>Gaming Moniter</a>
                              </li>
                              <li>
                                <a href='/collections/game-console'>Game Console</a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className='sub-menu-lnk has-item'>
                          <a
                            href='javascript:;'
                            tabIndex={0}
                            className='list-title font-semibold flex items-center justify-between'
                          >
                            Feature Product
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' className='w-4 h-4'>
                              <path d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z' />
                            </svg>
                          </a>
                          <div className='sub-menu-dropdown hidden md:block'>
                            <ul className='megamenu-list arrow-list mobile-menu-wrapper'>
                              <li>
                                <a href='/products/colossus-ergonomic-gaming-office-chair'>Gaming Office Chair</a>
                              </li>
                              <li>
                                <a href='/products/gaming-chair-for-gamers-with-lumbar'>Gaming Chair with Lumbar</a>
                              </li>
                              <li>
                                <a href='/products/htc-vive-tracker-3-0-pc'>HTC Vive Tracker (3.0)</a>
                              </li>
                              <li>
                                <a href='/products/vr-headset-with-headphones'>VR Headset with Headphones</a>
                              </li>
                              <li>
                                <a href='/products/radeon-rx-590-gts-graphics-card'>RX 590 GTS Graphics Card</a>
                              </li>
                              <li>
                                <a href='/products/radeon-rx-680-gts-graphics-card'>RX 680 GTS Graphics Card</a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className='hidden md:block'>
                          <a className='d-block img-col'>
                            <img
                              loading='lazy'
                              src='/img/megamenu1.webp'
                              alt='menubaner'
                              className='w-full h-auto rounded-lg'
                            />
                          </a>
                        </div>
                        <div className='hidden md:block'>
                          <a className='d-block img-col'>
                            <img
                              loading='lazy'
                              src='/img/megamenu2.webp'
                              alt='menubaner'
                              className='w-full h-auto rounded-lg'
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={`menu-lnk main-menu has-item ${activeMenu === 'product' ? 'menu_active' : ''}`}
                  onMouseEnter={() => handleMouseEnter('product')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href='/'>Product</a>
                  <div className={`mega-menu menu-dropdown ${activeMenu === 'product' ? 'open_menu' : ''}`}>
                    <div className='mobile-sub-title flex items-center border-b p-3 md:hidden'>
                      <div className='back-menu-button flex items-center cursor-pointer'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' className='w-5 h-5 mr-2'>
                          <path d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
                        </svg>
                        Product
                      </div>
                    </div>
                    <div className='mega-menu-container container mx-auto px-64 py-2'>
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='megamenu-card'>
                          <div className='megamenu-card-inner'>
                            <div className='megamenu-image'>
                              <a className='block aspect-w-1 aspect-h-1' tabIndex={0}>
                                <img
                                  src='/img/gaming-desktop-pc-computer-setup-gamer-illustration.webp'
                                  alt='megamenu-image'
                                  loading='lazy'
                                  className='object-cover w-full h-full'
                                />
                              </a>
                            </div>
                            <div className='megamenu-content'>
                              <a tabIndex={0} className='text-center'>
                                Gaming Mirror
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='megamenu-card'>
                          <div className='megamenu-card-inner'>
                            <div className='megamenu-image'>
                              <a className='block aspect-w-1 aspect-h-1' tabIndex={0}>
                                <img
                                  src='/img/gaming-desktop-pc-computer-setup-gamer-headphone.webp'
                                  alt='megamenu-image'
                                  loading='lazy'
                                  className='object-cover w-full h-full'
                                />
                              </a>
                            </div>
                            <div className='megamenu-content'>
                              <a tabIndex={0} className='text-center'>
                                Gaming Headphone
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='megamenu-card'>
                          <div className='megamenu-card-inner'>
                            <div className='megamenu-image'>
                              <a className='block aspect-w-1 aspect-h-1' tabIndex={0}>
                                <img
                                  src='/img/young-man-wearing-vr-goggles-video-game.webp'
                                  alt='megamenu-image'
                                  loading='lazy'
                                  className='object-cover w-full h-full'
                                />
                              </a>
                            </div>
                            <div className='megamenu-content'>
                              <a tabIndex={0} className='text-center'>
                                Gaming VR
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='megamenu-card'>
                          <div className='megamenu-card-inner'>
                            <div className='megamenu-image'>
                              <a className='block aspect-w-1 aspect-h-1' tabIndex={0}>
                                <img
                                  src='/img/professional-gamer-high-tech-game-room.webp'
                                  alt='megamenu-image'
                                  loading='lazy'
                                  className='object-cover w-full h-full'
                                />
                              </a>
                            </div>
                            <div className='megamenu-content'>
                              <a tabIndex={0} className='text-center'>
                                Gaming PCs
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={`menu-lnk main-menu has-item ${activeMenu === 'about' ? 'menu_active' : ''}`}
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href='/'>About Us</a>
                  <div className={`menu-dropdown ${activeMenu === 'about' ? 'open_menu' : ''}`}>
                    <ul className='mobile-menu-wrapper'>
                      <li>
                        <a href='/products/alien-ware-monitor-t-46'>About</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={`menu-lnk main-menu has-item ${activeMenu === 'blog' ? 'menu_active' : ''}`}
                  onMouseEnter={() => handleMouseEnter('blog')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href='/'>Blogs</a>
                  <div className={`menu-dropdown ${activeMenu === 'blog' ? 'open_menu' : ''}`}>
                    <div className='mobile-sub-title '>
                      <div className='back-menu-button flex align-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
                          <path d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
                        </svg>
                        Blogs
                      </div>
                    </div>
                    <ul className='mobile-menu-wrapper' id='menu_85407968-9bee-4175-bd2c-598de921929a'>
                      <li>
                        <a href='/blogs/news'>Blog Page</a>
                      </li>
                      <li>
                        <a href='/blogs/news/best-gamers-desk-settings-for-amateurs-5'>Article Page</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className='logo-col'>
              <h1>
                <Link href='/' tabIndex={0}>
                  <img src='/img/logo-gaming-workdo.webp' alt='Gaming WorkDo' loading='lazy' />
                </Link>
              </h1>
            </div>
            <ul className='menu-item-right flex items-center'>
              <li className='cart-header'>
                <a href='javascript:;' tabIndex={0} className='main-cart flex items-center'>
                  <span className='cart-price'>
                    {' '}
                    My Cart:
                    <b>$0.00</b>
                  </span>
                  <div className='cart-icon'>
                    <svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 20 20' fill='none'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9.79786 0.81665C7.36378 0.81665 5.35392 2.6317 5.04758 4.98247H4.49554C3.66597 4.98244 2.97803 4.98242 2.43813 5.05786C1.87055 5.13716 1.36054 5.31227 0.972682 5.74562C0.584816 6.17896 0.467099 6.70519 0.450958 7.27806C0.435603 7.82299 0.511595 8.50671 0.60323 9.33116L0.859755 11.6399C1.05141 13.3648 1.20193 14.7196 1.45758 15.7726C1.71963 16.8519 2.10938 17.6942 2.83294 18.3418C3.55719 18.99 4.44157 19.284 5.54917 19.4251C6.63057 19.5628 8.00374 19.5628 9.75328 19.5628H9.84243C11.5919 19.5628 12.9651 19.5628 14.0465 19.4251C15.1541 19.284 16.0385 18.99 16.7628 18.3418C17.4863 17.6942 17.876 16.8519 18.1381 15.7726C18.3938 14.7196 18.5442 13.3649 18.736 11.6399L18.9925 9.33116C19.084 8.50671 19.16 7.82298 19.1447 7.27806C19.1285 6.70519 19.0109 6.17896 18.623 5.74562C18.2351 5.31227 17.7252 5.13716 17.1575 5.05786C16.6176 4.98242 15.9297 4.98244 15.1001 4.98247H14.5481C14.242 2.63189 12.2319 0.81665 9.79786 0.81665ZM9.79786 2.0664C11.5403 2.0664 12.9887 3.32488 13.2838 4.98247H6.3118C6.60681 3.32506 8.05546 2.0664 9.79786 2.0664ZM1.9039 6.5791C2.0128 6.45742 2.18561 6.35503 2.61107 6.29557C3.05427 6.23365 3.65413 6.23221 4.54165 6.23221H15.054C15.9415 6.23221 16.5414 6.23365 16.9846 6.29557C17.4101 6.35503 17.5829 6.45742 17.6917 6.5791C17.8006 6.70077 17.8834 6.88383 17.8955 7.31326C17.908 7.76057 17.8433 8.35694 17.7452 9.23901L17.4988 11.4574C17.3011 13.2365 17.1582 14.5116 16.9237 15.4777C16.6933 16.4265 16.3919 16.9964 15.9293 17.4106C15.4673 17.8241 14.8648 18.061 13.8886 18.1854C12.8953 18.3119 11.6017 18.3131 9.79786 18.3131C7.99402 18.3131 6.70039 18.3119 5.70708 18.1854C4.73082 18.061 4.12842 17.8241 3.66642 17.4106C3.20373 16.9964 2.90241 16.4265 2.67204 15.4777C2.43747 14.5116 2.2946 13.2365 2.09691 11.4574L1.85043 9.23901C1.75241 8.35694 1.6876 7.76057 1.70021 7.31326C1.71231 6.88383 1.795 6.70077 1.9039 6.5791Z'
                        fill='white'
                      />
                    </svg>
                    <span className='count'>0</span>
                  </div>
                </a>
              </li>
              <li className='search-header mobile-only'>
                <a href='javascript:;' tabIndex={0}>
                  <svg xmlns='http://www.w3.org/2000/svg' width={32} height={32} viewBox='0 0 32 32' fill='none'>
                    <path
                      d='M30.9279 28.3388L24.9822 22.3931C26.7842 20.0341 27.7725 17.1729 27.7728 14.1537C27.7728 10.5152 26.3558 7.09429 23.7826 4.52154C21.2098 1.94878 17.7893 0.531708 14.1504 0.531708C10.5119 0.531708 7.091 1.94878 4.51825 4.52154C-0.792867 9.8331 -0.792867 18.4752 4.51825 23.7859C7.091 26.3591 10.5119 27.7761 14.1504 27.7761C17.1696 27.7757 20.0309 26.7875 22.3898 24.9855L28.3355 30.9312C28.6931 31.2893 29.1626 31.4683 29.6317 31.4683C30.1008 31.4683 30.5703 31.2893 30.9279 30.9312C31.6441 30.2155 31.6441 29.0545 30.9279 28.3388ZM7.1107 21.1934C3.22919 17.3119 3.22963 10.9959 7.1107 7.11398C8.99103 5.2341 11.4913 4.19837 14.1504 4.19837C16.81 4.19837 19.3098 5.2341 21.1901 7.11398C23.0705 8.99431 24.1062 11.4946 24.1062 14.1537C24.1062 16.8133 23.0705 19.3131 21.1901 21.1934C19.3098 23.0737 16.81 24.1095 14.1504 24.1095C11.4913 24.1095 8.99103 23.0737 7.1107 21.1934Z'
                      fill='white'
                    />
                  </svg>
                </a>
              </li>
              <li className='profile-header'>
                <a href={path.login} tabIndex={0}>
                  <svg xmlns='http://www.w3.org/2000/svg' width={19} height={19} viewBox='0 0 19 19' fill='none'>
                    <path
                      d='M16.854 11.6205C16.2473 11.0874 15.5116 10.6268 14.667 10.2515C14.306 10.0912 13.8835 10.2538 13.7232 10.6147C13.5628 10.9755 13.7254 11.398 14.0863 11.5585C14.7984 11.875 15.4121 12.2572 15.91 12.6948C16.5239 13.2342 16.876 14.0152 16.876 14.838V16.1609C16.876 16.5551 16.5551 16.876 16.1609 16.876H2.14525C1.75098 16.876 1.43017 16.5551 1.43017 16.1609V14.838C1.43017 14.0152 1.78226 13.2342 2.39609 12.6948C3.11857 12.0599 5.2236 10.5832 9.15306 10.5832C12.0708 10.5832 14.4447 8.20935 14.4447 5.29161C14.4447 2.37388 12.0708 0 9.15306 0C6.23533 0 3.86145 2.37388 3.86145 5.29161C3.86145 6.99734 4.6729 8.51689 5.92988 9.48518C3.62988 9.99077 2.19916 10.964 1.45209 11.6205C0.529329 12.4313 0 13.6039 0 14.838V16.1609C0 17.3438 0.962289 18.3061 2.14525 18.3061H16.1609C17.3438 18.3061 18.3061 17.3438 18.3061 16.1609V14.838C18.3061 13.6039 17.7768 12.4313 16.854 11.6205ZM5.29161 5.29161C5.29161 3.16243 7.02387 1.43017 9.15306 1.43017C11.2822 1.43017 13.0145 3.16243 13.0145 5.29161C13.0145 7.4208 11.2822 9.15306 9.15306 9.15306C7.02387 9.15306 5.29161 7.4208 5.29161 5.29161Z'
                      fill='white'
                    />
                  </svg>
                </a>
              </li>
              {/* <li className='mobile-menu mobile-only'>
                <button className='mobile-menu-button'>
                  <div className='one' />
                  <div className='two' />
                  <div className='three' />
                </button>
              </li> */}
              {/* <li className='languages menu-lnk main-menu has-item'>
                <noscript>
                  &lt;form method="post" action="/localization" id="FooterLanguageFormNoScript" accept-charset="UTF-8"
                  class="localization-form" enctype="multipart/form-data"&gt;&lt;input type="hidden" name="form_type"
                  value="localization" /&gt;&lt;input type="hidden" name="utf8" value="✓" /&gt;&lt;input type="hidden"
                  name="_method" value="put" /&gt;&lt;input type="hidden" name="return_to" value="/" /&gt;&lt;div
                  class="localization-form__select"&gt; &lt;h2 class="visually-hidden"
                  id="FooterLanguageLabelNoScript"&gt;Language&lt;/h2&gt; &lt;select class="localization-selector link"
                  name="locale_code" aria-labelledby="FooterLanguageLabelNoScript"&gt;&lt;option value="en" lang="en"
                  selected&gt; English &lt;/option&gt;&lt;option value="ar" lang="ar"&gt; العربية
                  &lt;/option&gt;&lt;option value="de" lang="de"&gt; Deutsch &lt;/option&gt;&lt;option value="es"
                  lang="es"&gt; Español &lt;/option&gt;&lt;/select&gt; &lt;/div&gt; &lt;button class="button
                  button--tertiary"&gt;Update language&lt;/button&gt;&lt;/form&gt;
                </noscript>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
