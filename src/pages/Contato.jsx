import ContactForm from '../components/contactform/ContactForm';

function Contato() {
    return (
        <main style={{backgroundColor: '#F6C2AB', padding: '2rem 0rem 0rem 0rem'}}>
            <h2 style={{margin: '0', padding: '2rem 2rem 0rem 2rem', textAlign: 'center', marginBottom: '2rem', color: '#3b82f6', fontSize: '2.5rem'}}>Entre em contato conosco</h2>
            <p style={{textAlign: 'center', marginBottom: '2rem', color: '#3b82f6', fontSize: '1.5rem'}}>Abaixo você pode nos enviar uma mensagem</p>
            <ContactForm />
        </main>
    );
}

export default Contato;