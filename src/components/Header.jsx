import Image from "next/image";
import logo from "./logo.jpg"

export default function Header() {
    return ( 
      <header style={{ backgroundColor: '#000',alignItems:"center", columnGap:"100px", display: 'flex', justifyContent: 'flex-start' }}>
        <Image src={logo} alt="IDE.IA Logo" style={{
          height: '100px',         
          width: 'auto',         
          maxWidth: '100%',       
          objectFit: 'contain',   
        }}  />
        <h1>Gestão de Projetos</h1>
      </header>
    );
  }
  