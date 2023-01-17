/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Menu } from '@headlessui/react'
import { MegaphoneIcon } from '@heroicons/react/24/outline'

export function Banner() {
  const [openx, setOpen] = useState(false);
  return (
    <>
      {(openx: any) => (
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8 bg-indigo-600">
          < div className="flex flex-wrap items-center justify-between" >
            <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg bg-indigo-800 p-2">
                <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 truncate font-medium text-white">
                <span className="md:hidden">We announced a new product!</span>
                <span className="hidden md:inline">Big news! Were excited to announce a brand new product.</span>
              </p>
            </div>
            <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <a href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50">
                Learn more
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                onClick={() => (setOpen(false))}>
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div >
        </div >
      )
      }
    </>
  )
}


const navigation = {
  categories: [
    {
      id: 'men',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
      ],
    },
  ],
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export function Logo() {
  return (
    <div className="ml-4 lg:ml-0 hidden sm:block">
      <a href="#">
        <span className="sr-only">Your Company</span>
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="x"
        />
      </a>
    </div>
  )
}

export function Mobiledropdown({ state: [open, setOpen] }: any) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pt-5 pb-2">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex space-x-8 px-4">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                            'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div key={item.name} className="group relative text-sm">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                            </div>
                            <a href={item.href} className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true" />
                              {item.name}
                            </a>
                            <p aria-hidden="true" className="mt-1">
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export function Flyovermenu() {
  return (
    <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch  z-50">
      <div className="flex h-full space-x-8">

        {navigation.categories.map((category) => (
          <Popover key={category.name} className="flex">
            {({ open }) => (
              <>
                <div className="relative flex">
                  <Popover.Button
                    className={classNames(
                      open
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-transparent text-gray-700 hover:text-gray-800',
                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                    )}
                  >
                    {category.name}
                  </Popover.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                    <div className="relative bg-white">
                      <div className="mx-auto max-w-7xl px-8">
                        <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                          <div className="col-start-2 grid grid-cols-2 gap-x-8">
                            {category.featured.map((item) => (
                              <div key={item.name} className="group relative text-base sm:text-sm">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="object-cover object-center"
                                  />
                                </div>
                                <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                                  {item.name}
                                </a>
                                <p aria-hidden="true" className="mt-1">
                                  Shop now
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                            {category.sections.map((section) => (
                              <div key={section.name}>
                                <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${section.name}-heading`}
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  {section.items.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a href={item.href} className="hover:text-gray-800">
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}


      </div>
    </Popover.Group>
  )
}

export function Menubutton({ classname, state: [open, setOpen] }: any) {
  return (
    <>
      <button type="button"
        className={classname}
        onClick={() => setOpen(true)}>
        <span className="sr-only">Open menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </>
  )
}


const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]


interface ComponentProps {
  maplist: any;
  classx?: any;
}

export const Listnav = ({ maplist, classx }: ComponentProps): JSX.Element => (
  <>
    {
      maplist.map((item: any) => (
        <a key={item.name}
          href={item.href}
          className={
            classNames(item.current
              ? 'bg-gray-900 text-white'
              : 'text-black hover:bg-gray-700 hover:text-white',
              classx
            )}
          aria-current={item.current ? 'page' : undefined}>
          {item.name}
        </a>
      ))
    }
  </>
);

export function Searchbutton() {
  return (
    <div className="flex lg:ml-6">
      <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
        <span className="sr-only">Search</span>
        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  )
}

export const Accountbutton = (): JSX.Element => (
  <Menu as="div" className="relative ml-3">
    <div>
      <Menu.Button className="flex max-w-xs items-center">
        <span className="sr-only">Open user menu</span>
        <p className="text-sm font-medium">Sign in</p>
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          <Listnav maplist={userNavigation} classx="block px-4 py-2 text-sm" />
        </Menu.Item>
      </Menu.Items>
    </Transition>
  </Menu>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="relative bg-slate-200">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-6">
          <div className="border-b border-gray-200">
            <div className="flex h-10 items-center">
              <Menubutton state={[open, setOpen]} classname="rounded-md p-2 text-gray-400 lg:hidden" />
              <Logo />
              <Flyovermenu />
              <div className="ml-auto flex items-center">
                <Searchbutton />
                <Accountbutton />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Mobiledropdown state={[open, setOpen]} />
      <Banner />
    </>
  )
}
