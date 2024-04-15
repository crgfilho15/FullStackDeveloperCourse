import styles from './Motivacao.module.css';

export function Motivacao() {
    const motivacao = [
        {title: "Consciência Energética", text: "A jornada da eficiência energética começa com a consciência. Ao entendermos nossos hábitos de consumo, podemos tomar decisões inteligentes para reduzir o desperdício e otimizar o uso da energia."},
        {title: "Responsabilidade Compartilhada", text: "A eficiência energética é uma responsabilidade compartilhada. Ao trabalharmos juntos, governos, empresas e indivíduos, podemos construir um futuro com energia limpa, acessível e sustentável para todos."},
        {title: "Pequenas Mudanças, Grande Impacto", text: "Mesmo pequenas mudanças nos hábitos de consumo podem gerar um grande impacto na economia de energia. Cada lâmpada desligada, cada eletrodoméstico desconectado, contribui para um futuro mais eficiente."},
        {title: "Sustentabilidade", text: "Cada watt economizado é um passo em direção a um futuro mais sustentável. Juntos, podemos construir um planeta mais verde e eficiente, preservando recursos para as próximas gerações."},
        {title: "Monitoramento Inteligente", text: "O monitoramento do consumo é a chave para a eficiência energética. Ao acompanharmos o uso de energia em tempo real, podemos identificar áreas de otimização e tomar medidas precisas para economizar."},
        {title: "Tecnologia Inovadora", text: "A tecnologia inovadora nos oferece ferramentas poderosas para otimizar o consumo de energia. Soluções inteligentes nos permitem gerenciar o uso de energia de forma eficiente e sustentável."},
    ];

    return(
        <div className={styles.cards}>
            {motivacao.map((m) => {
                return (
                <div className={styles.card}>
                    <div className={styles.titleArea}>
                        <h2 className={styles.title}>{m.title}</h2>
                    </div>
                    <div className={styles.textArea}>
                        <p className={styles.texto}>{m.text}</p>
                    </div>
                </div>
                );
            })}
        </div>
    )
}