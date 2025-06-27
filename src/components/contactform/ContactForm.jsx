import './ContactForm.css';
import { useState } from 'react';
import Toast from '../toast/Toast';

function ContactForm() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setToast({message: `Mensagem enviada por: ${formData.nome}`, type: 'success'});

    setFormData({ nome: '', email: '', mensagem: '' });
    setTimeout(() => {setToast(null)}, 3000);
  };

  return (
    <section id="contato" className="contact-section">
      <h2 className="contact-title">Fale Conosco</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            name="mensagem"
            rows="5"
            placeholder="Sua mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-button">Enviar Mensagem</button>
      </form>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}

export default ContactForm;
