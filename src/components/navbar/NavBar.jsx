import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import FiapLogo from '/img/fiapLogo.svg';

export default function NavBar() {
  return (
    <Navbar shouldHideOnScroll className='bg-transparent'>
      <NavbarBrand>
        <img src={FiapLogo} alt='' />
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <a
            className='text-verdeSecundario p-2 rounded-md hover:bg-verdePrimario transition duration-300 active:bg-verdePrimario uppercase'
            href='/'
          >
            Home
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            className='text-verdeSecundario p-2 rounded-md hover:bg-verdePrimario transition duration-300 uppercase '
            href=''
          >
            Desafio
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            className='text-verdeSecundario p-2 rounded-md hover:bg-verdePrimario transition duration-300 uppercase '
            href=''
          >
            Estudos
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            className='text-verdeSecundario p-2 rounded-md hover:bg-verdePrimario transition duration-300 uppercase'
            href=''
          >
            Problema
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            className='text-verdeSecundario p-2 rounded-md hover:bg-verdePrimario transition duration-300 uppercase'
            href=''
          >
            Solução
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
