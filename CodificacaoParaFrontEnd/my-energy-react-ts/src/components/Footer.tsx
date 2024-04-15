import styles from './Footer.module.css';

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={`${styles.divisor} ${styles.espacamentoTop}`}></div>

            <p className={styles.direitosPagina}>© 2024 Carlos Roberto Garcia / MyEnergy. Todos os direitos reservados.</p>

            <footer className={styles.rodape}>
                <div className={styles.divRodape}>
                    <div className={styles.infoRodape}>
                        <div className={styles.tituloRodape}>
                            <span>Contato</span>
                        </div>
                        <a href="mailto:crgfilho15@gmail.com" target="_blank">
                            <img className={styles.imgContato} src="https://logosmarcas.net/wp-content/uploads/2020/11/Gmail-Logo.png"
                                alt="" />
                        </a>
                    </div>

                    <div className={`${styles.infoRodape} ${styles.tamMax}`}>
                        <div className={styles.tituloRodapeTexto}>
                            <span>Projeto</span>
                        </div>
                        <div className={styles.textoScroll}>
                            <div className={styles.texto}>
                                <p>Este projeto é open source e foi criado com o objetivo de ajudar as pessoas a simularem o
                                    custo da conta de energia elétrica em suas casas. Estamos abertos para colaborações e
                                    melhorias, então sinta-se à vontade para contribuir no nosso repositório no GitHub.</p>
                                <p>Por favor, note que esta é uma iniciativa independente e não possui relação com nenhuma
                                    concessionária de energia elétrica. Nosso objetivo é fornecer uma ferramenta útil e
                                    transparente para ajudar os usuários a entenderem melhor seus gastos com energia.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoRodape}>
                        <div className={styles.tituloRodape}>
                            <span>Redes Sociais</span>
                        </div>
                        <a href="https://www.linkedin.com/in/carlosrobertogarcia/" target="_blank">
                            <img className={styles.img}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
                                alt="" />
                        </a>
                        <a href="https://github.com/crgfilho15/my-energy" target="_blank">
                            <img className={styles.img} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}