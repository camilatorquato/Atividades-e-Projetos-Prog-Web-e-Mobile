import Link from 'next/link';

export default function exercicio231() {
  return (
    <main style={styles.container}>
        <Link href="/" style={styles.linkVoltar}>
        Voltar
        </Link>
        
        <div style={styles.conteudoCentralizado}>
            <div style={styles.divVermelha}>
                <h2>DIV Vermelha (Padding: 0px)</h2>
                <p>Largura configurada: 700px.</p>
            </div>
            <div style={styles.divVerde}>
                <h2>DIV Verde (Padding: 25px</h2>
                <p>Largura configurada: 700px.</p>
            </div>
        </div>
    </main>
  ); 
}

const styles = {
    container: {
        backgroundColor: '#f0f2f5',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px 40px 20px',
        fontFamily: 'sans-serif',
        position: 'relative',
    },
    linkVoltar: {
        position: 'absolute',
        top:'20px',
        left: '20px',
        backgroundColor: 'black',
        color: 'pink',
        padding: '10px 18px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontFamily: 'sans-serif',
        fontSize: '14px',
        fontWeight: 'bold',
        zIndex: 99,
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',

    },
    conteudoCentralizado: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    gap: '20px', 
  },
  divVermelha: {
    backgroundColor: 'red',
    color: 'white',
    width: '700px',
    padding: '0px',
    textAlign: 'center',
    border: '2px solid #000',
    margin: '0 auto', 
    boxSizing: 'border-box', 
  },
  divVerde: {
    backgroundColor: 'rgba(0, 128, 0, 0.8)', 
    color: 'white',
    width: '700px',
    padding: '25px', 
    textAlign: 'center',
    border: '2px solid #000',
    margin: '0 auto', 
    boxSizing: 'content-box', 
  }
};
