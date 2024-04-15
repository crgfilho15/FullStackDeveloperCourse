import {Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import { Registro } from './components/Interfaces';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Frase } from './components/Frase';
import { CardPotencias } from './components/CardPotencias';
import { CardCadastroAparelho } from './components/CardCadastroAparelho';
import { CardDescricaoConsumo } from './components/CardDescricaoConsumo';
import { CardValorFinal } from './components/CardValorFinal';
import { CardAparelhosCadastrados } from './components/CardAparelhosCadastrados';
import { Motivacao } from './components/Motivacao';
import { Footer } from './components/Footer';
import styles from './App.module.css';
import './global.css';

export function App() {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const valorKWH = 1.016800;
  const percentualIluminacaoPublica = 0.05941397141;
  let total = 0;
  let totalFinal = 0;

  const handleRemoverRegistro = (id: number) => {
    setRegistros(registros.filter((registro) => registro.id !== id));
  };

  // function handleEditarRegistro(id: number) {
  //   const registro = registros.find((registro) => registro.id === id);
  //   if (registro != undefined) {
  //     setRegistroSelecionado(registro);
  //   }
  // }

  registros.map((registro: Registro) => {
    const valorParcial = registro.kwh[1].valor.toFixed(2);
    const valorParcial2 = parseFloat(valorParcial);
    total += valorParcial2;
  });

  totalFinal = (percentualIluminacaoPublica * total) + total;

  return (
    <>
      <Header />
      {/* <Banner /> */}

      <Routes>

        <Route path='/home' element={
          <div className={styles.corpo}>
          <Banner imagem={"https://energiaarion.com.br/wp-content/uploads/2019/02/lampada-de-energia-1024x559.jpg"} />
          <Frase />
          <CardPotencias />
          <CardCadastroAparelho registros={registros} setRegistros={setRegistros} />
          <CardDescricaoConsumo total={total} valorKWH={valorKWH} pil={percentualIluminacaoPublica} />
          <CardValorFinal total={totalFinal} />
          <CardAparelhosCadastrados registros={registros} handleRemoverRegistro={handleRemoverRegistro} total={total}/>
        </div>
        } />

        <Route path='/motivacao' element={
          <>
            <Banner imagem={"https://sunne.com.br/wp-content/uploads/2023/11/Imagem-Blog-su145.webp"} />
            <Motivacao />
          </>
        } />

      </Routes>

      <Footer />
    </>
  )
}
