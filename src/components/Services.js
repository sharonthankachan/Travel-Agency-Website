import Image from 'next/image';
import styles from '../styles/Services.module.scss';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: '/images/weather-icon.png',
      title: 'Calculated Weather',
      description: 'Built Wicket longer admire do barton vanity itself do in it.'
    },
    {
      id: 2,
      icon: '/images/flight-icon.png',
      title: 'Best Flights',
      description: 'Engrossed listening. Park gate sell they west hard for the.'
    },
    {
      id: 3,
      icon: '/images/mic-icon.png',
      title: 'Local Events',
      description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.'
    },
    {
      id: 4,
      icon: '/images/gear-icon.png',
      title: 'Customization',
      description: 'We deliver outsourced aviation services for military customers'
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.gridPattern}>
          <img alt='decor patten' src='images/plusSymbols.png' />
        </div>

        <div className={styles.sectionHeader}>
          <p className={styles.category}>CATEGORY</p>
          <h2 className={styles.title}>We Offer Best Services</h2>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={styles.serviceCard}
            >
              <div className={styles.serviceIcon}>
                <img
                  src={service.icon}
                  alt={service.title}
                />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
                <div className={styles.decorElement}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}