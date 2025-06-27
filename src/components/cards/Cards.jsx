import './Cards.css';

function Cards() {
  const services = [
    {
      icon: '💻',
      title: 'Desenvolvimento Web',
      description: 'Sites rápidos, modernos e responsivos.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Experiência e design centrado no usuário.',
    },
    {
      icon: '⚙️',
      title: 'Suporte Técnico',
      description: 'Manutenção e suporte confiáveis para o usuário.',
    },
  ];

  return (
    <section id="cards" className="cards-section">
      <h2 className="section-title">Nossos Serviços</h2>
      <div className="cards-grid">
        {services.map((item, i) => (
          <div className="card" key={i}>
            <div className="card-icon">{item.icon}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
            <button className="card-button">Saiba Mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
