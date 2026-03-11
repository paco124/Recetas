import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Explorar Recetas 🥗
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Bienvenido"
      description="150 recetas gourmet nutritivas y saludables de alta elaboración">
      <HomepageHeader />
      <main>
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              Tu Guía de Alimentación Consciente
            </Heading>
            <div className={styles.featureGrid}>
              
              <div className={styles.featureCard}>
                <img src="/img/breakfast.png" alt="Desayunos" className={styles.featureImage} />
                <div className={styles.featureContent}>
                  <h3>Desayunos Vibrantes</h3>
                  <p>Comienza tu día con energía real. Bowls nutritivos, smoothies y opciones proteicas diseñadas para el bienestar.</p>
                </div>
              </div>

              <div className={styles.featureCard}>
                <img src="/img/dinner.png" alt="Cenas Gourmet" className={styles.featureImage} />
                <div className={styles.featureContent}>
                  <h3>Cenas de Alta Cocina</h3>
                  <p>Platos sofisticados pero ligeros. Técnicas profesionales aplicadas a ingredientes saludables para terminar el día con sabor.</p>
                </div>
              </div>

              <div className={styles.featureCard}>
                <img src="/img/hero.png" alt="Nutrición" className={styles.featureImage} />
                <div className={styles.featureContent}>
                  <h3>Equilibrio Perfecto</h3>
                  <p>Más de 150 recetas categorizadas para cada necesidad: desde Keto hasta Plant-Based, siempre con un enfoque gourmet.</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
