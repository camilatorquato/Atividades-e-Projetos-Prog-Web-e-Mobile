import Link from 'next/link';

export default function Exercicio246() {
  return (
    <main style={styles.container}>
      <Link href="/" style={styles.linkVoltar}>
        Voltar
      </Link>

      <div style={styles.cartaoConteudo}>
        <p style={styles.paragrafo}>
          Este é o parágrafo estilizado para o exercício da página 246. 
          Conforme as regras estabelecidas, todo o texto contido aqui deve ser exibido 
          obrigatoriamente de forma sublinhada e utilizando a família de fontes Arial.
        </p>
        <div style={styles.containerLinks}>
          <a href="https://open.spotify.com/intl-pt" target="_blank" rel="noopener noreferrer" style={styles.linkExercicio}>
            Hyperlink Spotify
          </a>
          <a href="https://br.pinterest.com/" target="_blank" rel="noopener noreferrer" style={styles.linkExercicio}>
            Hyperlink Pinterest
          </a>
        </div>
      </div>
    </main>
  );
}

const styles = {
  container: {
    backgroundColor: '#f5f5f7',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 20px 40px 20px',
    position: 'relative',
  },
  linkVoltar: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: '#111',
    color: 'pink',
    padding: '10px 18px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    zIndex: 99,
  },
  cartaoConteudo: {
    backgroundColor: 'white',
    maxWidth: '650px',
    width: '100%',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
  },
  paragrafo: {
    textDecoration: 'underline',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#222',
    marginBottom: '35px',
  },
  containerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  linkExercicio: {
    textDecoration: 'none',
    fontWeight: 'bold',
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '18px',
    color: 'pink', 
    transition: 'color 0.2s',
  }
};
