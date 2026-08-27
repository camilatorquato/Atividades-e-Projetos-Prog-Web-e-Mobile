import Link from 'next/link';

export default function Home() {
  const exercicios = [
    { path: '/exercicio-pg-210', label: 'Primeiro Exercício (Pág. 210)' },
    { path: '/exercicio-pg-231', label: 'Segundo Exercício (Pág. 231)' },
    { path: '/exercicio-pg-246', label: 'Terceiro Exercício (Pág. 246)' },
    { path: '/exercicio-pg-263', label: 'Quarto Exercício (Pág. 263)' },
  ];

  return (
    <main style={styles.container}>
      <div style={styles.menu}>
        <h1 style={styles.titulo}>Exercícios</h1>
        
        <div style={styles.grid}>
          {exercicios.map((ex, index) => (
            <Link key={index} href={ex.path} style={styles.link}>
              {ex.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

const styles = {
  container: {
    backgroundColor: '#f4f4f5', 
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'system-ui, sans-serif',
    margin: 0,
    padding: '20px',
  },
  menu: {
    backgroundColor: '#ffffff', 
    padding: '40px 30px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)', 
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  titulo: {
    fontSize: '24px',
    color: '#18181b',
    marginBottom: '30px',
    fontWeight: '700',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  link: {
    display: 'block',
    backgroundColor: '#18181b', 
    color: '#ffffff',
    padding: '14px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '15px',
    textAlign: 'center',
  }
};