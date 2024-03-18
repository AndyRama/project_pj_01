'use client'
import React from 'react'
import { BiSolidHeart } from 'react-icons/bi'
import Link from 'next/link'

const footerContent = {
  footerLinks: [
    {
      heading: 'Pack',
      links: [
        {
          href: '/prestations',
          label: 'Débutant',
        },
        {
          href: '/prestations',
          label: 'Intermédiaire',
          badge: 'New',
        },
        {
          href: '/prestations',
          label: 'Confirmé',
        },
      ],
    },
    {
      heading: 'Site Map',
      links: [
        {
          href: '/',
          label: 'Accueil',
        },
        {
          href: '/blog',
          label: 'Blog',
        },
        {
          href: '/contact',
          label: 'Contact',
        },
        {
          href: '/prestations',
          label: 'Prestations',
        },
        {
          href: '/team',
          label: 'Team',
          badge: '🧡 De la team',
        },
      ],
    },
    {
      heading: 'Ressources',
      links: [
        {
          href: '/blog',
          label: 'Blog',
        },
        {
          href: '/prestations/#Ebook',
          label: 'Ebook',
        },
        {
          href: '/',
          label: 'School',
        },
        // Version1
        // {
        //   href: '/terms',
        //   label: 'Terms',
        // },
        // {
        //   href: '/privacy',
        //   label: 'Privacy',
        // },
      ],
    },
  ],
}

const Copyright = () => {
  return (
    <div className="pt-3 mb-5 md:mt-5 md:pt-5 border-t border-t-gray-100 text-center text-white">
      <p className="text-center items-center mx-auto text-sm">
        &copy; 2023{' '}
        <Link href="/" className="text-orange-400">
          Unlcoaching{' '}
        </Link>
        Tous droits réservés. Crée avec{' '}
        <BiSolidHeart className="text-red-400 mx-1 inline-block" />
        par{' '}
        <Link href="/" className="text-orange-400">
          Andy Ramaroson
        </Link>
      </p>
    </div>
  )
}

const Footer = ({ className }) => {
  return (
    <footer className={`${className} overflow-hidden w-full h-full z-[2] `}>
      <div className="container mx-auto px-4 relative mt-10">
        <div className="md:flex ">
          <div className="md:w-4/12 mb-10 md:mb-0">
            <Link href="#" className="text-[28px] text-orange-400 font-bold">
              Unlcoaching
              <span className="text-white">.</span>
            </Link>
          </div>

          <div className="md:w-8/12">
            <div className="grid grid-cols-3 md:grid-cols-3">
              {footerContent.footerLinks.map((item, index) => (
                <div className="mb-5 md:mb-0" key={item.heading}>
                  <h3 className="text-gray-400 mb-3">{item.heading}</h3>
                  <ul className="list-none">
                    {item.links.map((link, index) => (
                      <li className="mb-2" key={link.label}>
                        <Link
                          href={link.href}
                          className={`${
                            link.badge ? 'flex gap-2 items-center' : ''
                          }
                            text-white duration-300 transition-all ease-in-out hover:text-orange-400`}
                        >
                          {link.badge ? (
                            <>
                              <span>{link.label}</span>
                              <span
                                className="py-0.5 px-2 rounded-full bg-orange-100
                                    border border-orange-400 text-[10px] text-orange-400
                                    font-semibold invisible sm:visible"
                              >
                                {link.badge}
                              </span>
                            </>
                          ) : (
                            link.label
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Version 2 */}
          <p className="text-right items-right mx-auto text-sm mb-2 ">
            <Link href="/privacy" className="text-orange-400">
              Privacy{' '}
            </Link>{' '}
            <Link href="/therms" className="text-white">
              Terms{' '}
            </Link>
          </p>
        </div>
        <Copyright />
      </div>
    </footer>
  )
}

export default Footer
