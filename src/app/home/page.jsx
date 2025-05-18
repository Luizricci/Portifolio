import styles from './home.module.css';
import Image from 'next/image';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.name}>Luiz Henrique</h2>
                <h3 className={styles.subTitle}>Desenvolvedor de Software</h3>
            </div>
            <div className={styles.profile}>
                <div className={styles.imageContainer}>
                    <Image src="/images/profile.svg" alt="Minha Foto" width={200} height={200} className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.sobre}>Sobre</h2>
                    <p className={styles.description}>
                        Olá, sou um desenvolvedor de software apaixonado por tecnologia e inovação estou sempre 
                        em busca de novos desafios e oportunidades para aprender e crescer na minha carreira.
                    </p>
                </div>
            </div>
            <div className={styles.habilidades}>
                <h2 className={styles.habilidadesTitle}>Habilidades</h2>
                
            </div>
        </div>
    );
}