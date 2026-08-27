import Link from 'next/link';

export default function Exercicio210() {
  return (
    <main style={styles.container}>
        <Link href="/" style={styles.linkVoltar}>
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
 