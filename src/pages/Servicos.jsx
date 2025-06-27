import Cards from '../components/cards/Cards';

function Servicos() {
    return (
        <main style={{backgroundColor: '#FCD295', padding: '2rem 0rem 0rem 0rem'}}>
            <h2 style={{margin: '0', padding: '2rem 2rem 0rem 2rem', textAlign: 'center', marginBottom: '2rem', color: '#3b82f6', fontSize: '2.5rem'}}>Todos os nossos serviços</h2>
            <p style={{textAlign: 'center', marginBottom: '2rem', color: '#3b82f6', fontSize: '1.5rem'}}>Abaixo você pode ver todos os nossos serviços</p>
            <Cards />
        </main>
    );
}



export default Servicos;