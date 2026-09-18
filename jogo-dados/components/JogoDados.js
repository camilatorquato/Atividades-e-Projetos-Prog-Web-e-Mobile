'use client';

import { useState } from 'react';
import Dado from './Dado';

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);
  const [vitoriasJ1, setVitoriasJ1] = useState(0);
  const [vitoriasJ2, setVitoriasJ2] = useState(0);
  const [dado1J1, setDado1J1] = useState(1);
  const [dado2J1, setDado2J1] = useState(1);
  const [dado1J2, setDado1J2] = useState(1);
  const [dado2J2, setDado2J2] = useState(1);
  const [turno, setTurno] = useState(1);
  const [mensagem, setMensagem] = useState('Aguardando jogada do Jogador 1...');
  const [fimDeJogo, setFimDeJogo] = useState(false);

  function sortearNumero() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function jogarJogador1() {
    const v1 = sortearNumero();
    const v2 = sortearNumero();

    setDado1J1(v1);
    setDado2J1(v2);

    setTurno(2);
    setMensagem('Aguardando jogada do Jogador 2...');
  }

  function jogarJogador2() {
    const v1 = sortearNumero();
    const v2 = sortearNumero();

    setDado1J2(v1);
    setDado2J2(v2);

    const somaJ1 = dado1J1 + dado2J1;
    const somaJ2 = v1 + v2;

    let vitsJ1 = vitoriasJ1;
    let vitsJ2 = vitoriasJ2;
    let textoRodada = '';

    if (somaJ1 > somaJ2) {
      vitsJ1 = vitsJ1 + 1;
      setVitoriasJ1(vitsJ1);
      textoRodada = 'Rodada ' + rodada + ': Jogador 1 venceu!';
    } else if (somaJ2 > somaJ1) {
      vitsJ2 = vitsJ2 + 1;
      setVitoriasJ2(vitsJ2);
      textoRodada = 'Rodada ' + rodada + ': Jogador 2 venceu!';
    } else {
      textoRodada = 'Rodada ' + rodada + ': Empate!';
    }

    if (rodada >= 5) {
      setFimDeJogo(true);
      setTurno(0); 

      let textoFinal = '';
      if (vitsJ1 > vitsJ2) {
        textoFinal = ' | FIM DE JOGO: Jogador 1 é o Campeão!';
      } else if (vitsJ2 > vitsJ1) {
        textoFinal = ' | FIM DE JOGO: Jogador 2 é o Campeão!';
      } else {
        textoFinal = ' | FIM DE JOGO: Empate Geral!';
      }

      setMensagem(textoRodada + textoFinal);
    } else {
      setMensagem(textoRodada + ' Aguardando Jogador 1...');
      setRodada(rodada + 1);
      setTurno(1);
    }
  }
  function reiniciar() {
    setRodada(1);
    setVitoriasJ1(0);
    setVitoriasJ2(0);
    setDado1J1(1);
    setDado2J1(1);
    setDado1J2(1);
    setDado2J2(1);
    setTurno(1);
    setMensagem('Aguardando jogada do Jogador 1...');
    setFimDeJogo(false);
  }

  return (
    <div style={{ textAlign: 'center', border: '2px solid #333', padding: '20px', maxWidth: '520px', margin: '30px auto', borderRadius: '10px', fontFamily: 'sans-serif' }}>
      <h1>Jogo de Dados</h1>
      <h2>Rodada {rodada} de 5</h2>

      {/* Placar de Vitórias */}
      <p style={{ fontSize: '14px', color: '#555' }}>
        Placar: Jogador 1 ({vitoriasJ1}) x ({vitoriasJ2}) Jogador 2
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
        {/* Painel Jogador 1 */}
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '42%' }}>
          <h3>Jogador 1</h3>
          <div>
            <Dado valor={dado1J1} />
            <Dado valor={dado2J1} />
          </div>
          <button onClick={jogarJogador1} disabled={turno !== 1 || fimDeJogo} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Jogar
          </button>
        </div>

        {/* Painel Jogador 2 */}
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '42%' }}>
          <h3>Jogador 2</h3>
          <div>
            <Dado valor={dado1J2} />
            <Dado valor={dado2J2} />
          </div>
          <button onClick={jogarJogador2} disabled={turno !== 2 || fimDeJogo} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Jogar
          </button>
        </div>
      </div>

      {/* Caixa de Mensagem das Rodadas e do Resultado Final */}
      <div style={{ border: '2px solid #333', padding: '12px', margin: '15px 0', backgroundColor: '#e1118e', fontWeight: 'bold' }}>
        <p style={{ margin: 0 }}>{mensagem}</p>
      </div>

      {/* Botão de Jogar Novamente (exibido apenas ao fim das 5 rodadas) */}
      {fimDeJogo && (
        <button onClick={reiniciar} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#222', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Jogar Novamente
        </button>
      )}
    </div>
  );
}