import Link from 'next/link';

export default function Exercicio210() {
  return (
    <main style={styles.container}>
        <Link href="/" style={styles.linkVoltar}>
        Voltar
      </Link>
      <h1 style={styles.titulo}>
        Primeiro exercício de CSS
      </h1>
    </main>
  );
}
const styles = {
  container: {
    backgroundImage: "url('/fundo.png')", 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: '20px',
  },
   linkVoltar: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: 'black', 
    color: 'pink',
    padding: '12px 20px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    zIndex: 99, 
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
   },
    titulo: {
    backgroundColor: 'red',
    border: '2px solid green',
    color: 'white',
    padding: '20px 40px',
    textAlign: 'center',
    fontFamily: 'Georgia, serif',
    fontSize: '2rem',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
  }
};
 