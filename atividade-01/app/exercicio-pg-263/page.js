import Link from 'next/link';

export default function Exercicio263() {
  return (
    <main style={styles.container}>
      <Link href="/" style={styles.linkVoltar}>
        Voltar 
      </Link>

      <h1 style={styles.tituloPrincipal}>Catálogo</h1>
      <div style={styles.containerProdutos}>
        
        <div style={styles.produtoCard}>
          <img 
            src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxPKvWfsk_YleSJyyBBNeEhFGKBqotfR3Av2M0X5d21kR3LTCjictAQvsAi6XCF_RKJxsoFjY11GH7wrdRCQXLoW32Znq5q2dCuzLvt58bl56chCWmUvRDJpdRsmbxj-RGL5LKhOY&usqp=CAc" 
            alt="Melissa Nabeela" 
            style={styles.produtoImagem}
          />
          <h3 style={styles.produtoNome}>Melissa Nabeela</h3>
          <p style={styles.produtoPreco}>R$ 325,41</p>
        </div>

        <div style={styles.produtoCard}>
          <img 
            src="https://cdn.awsli.com.br/600x450/1046/1046773/produto/335481154/d4ff151f6e81490d56ed89fcf64aa910-gknawk51mo.jpeg" 
            alt="Nike Air Max" 
            style={styles.produtoImagem}
          />
          <h3 style={styles.produtoNome}>Nike Air Max</h3>
          <p style={styles.produtoPreco}>R$ 1049,99</p>
        </div>

        <div style={styles.produtoCard}>
          <img 
            src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9869cd2a71d9441389ea7c33176596ca_9366/Tenis_Mega_Ghostride_Preto_JQ0553_00_plp_standard.jpg" 
            alt="Adidas Bounce" 
            style={styles.produtoImagem}
          />
          <h3 style={styles.produtoNome}>Adidas Bounce</h3>
          <p style={styles.produtoPreco}>R$ 1399,99</p>
        </div>

        <div style={styles.produtoCard}>
          <img 
            src="https://i.pinimg.com/736x/cf/53/ec/cf53ec66f0fc5e51411e36bf63ecae3f.jpg" 
            alt="Melissa Glass Heel" 
            style={styles.produtoImagem}
          />
          <h3 style={styles.produtoNome}>Melissa Glass Heel</h3>
          <p style={styles.produtoPreco}>R$ 349,90</p>
        </div>

        <div style={styles.produtoCard}>
          <img 
            src="https://dms.deckers.com/ugg/image/upload/t_pdp-slider-large-wp/v1780675283/1171393-DYR_1.png?_s=RAABAB0" 
            alt="UGG Cotton Shoes Rosa" 
            style={styles.produtoImagem}
          />
          <h3 style={styles.produtoNome}>UGG Cotton Shoes Rosa</h3>
          <p style={styles.produtoPreco}>R$ 798,17</p>
        </div>

      </div>

      <footer style={styles.rodape}>
        <h2>Camilinha Calçados</h2>
      </footer>

    </main>
  );
}

const styles = {
  container: {
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    padding: '80px 20px 0 20px', 
    fontFamily: 'sans-serif',
    position: 'relative',
  },
  linkVoltar: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: '#333',
    color: 'pink',
    padding: '10px 18px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    zIndex: 99,
  },
  tituloPrincipal: {
    textAlign: 'center',
    marginBottom: '40px',
    color: '#222',
  },
  containerProdutos: {
    width: '100%',
    textAlign: 'center', 
    marginBottom: '50px',
  },
  
  produtoCard: {
    backgroundColor: 'rgba(0, 255, 0, 0.25)', 
    border: '2px solid green', 
    width: '18%', 
    margin: '1%', 
    display: 'inline-block', 
    verticalAlign: 'top', 
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
  
  produtoImagem: {
    maxWidth: '100%', 
    height: 'auto',
    borderRadius: '4px',
    marginBottom: '15px',
  },
  produtoNome: {
    fontSize: '16px',
    marginBottom: '8px',
    color: '#111',
  },
  produtoPreco: {
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#333',
  },
  
  rodape: {
    backgroundColor: 'gray',
    color: '#ffffff',
    textAlign: 'center',
    padding: '25px 0',
    width: '100vw', 
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
  }
};