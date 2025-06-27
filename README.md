# Site React - Projeto de Treinamento

Este é um projeto de desenvolvimento front-end criado com **React 19** para fins de aprendizado e prática. O site apresenta uma estrutura moderna e responsiva com componentes reutilizáveis e navegação dinâmica.

## 🚀 Tecnologias Utilizadas

- **React 19.1.0** - Biblioteca principal para construção da interface
- **React Router DOM 7.6.2** - Sistema de navegação e roteamento
- **Swiper.js 11.2.8** - Slider/carrossel moderno e responsivo
- **React Icons 5.5.0** - Biblioteca de ícones vetoriais
- **CSS3** - Estilização com Flexbox e Grid
- **Create React App** - Ambiente de desenvolvimento

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── navbar/         # Barra de navegação
│   ├── hero/           # Seção principal com slider
│   ├── cards/          # Cards de conteúdo
│   ├── contactform/    # Formulário de contato
│   └── footer/         # Rodapé do site
├── pages/              # Páginas do site
│   ├── Home.jsx        # Página inicial
│   ├── Servicos.jsx    # Página de serviços
│   └── Contato.jsx     # Página de contato
└── assets/             # Imagens e recursos
```

## ✨ Funcionalidades

- **🎨 Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- **🖼️ Slider Dinâmico**: Carrossel de imagens com navegação automática usando Swiper.js
- **🧭 Navegação SPA**: Sistema de roteamento sem recarregamento de página
- **📝 Formulário de Contato**: Interface para captura de dados dos usuários
- **🎯 Componentes Modulares**: Estrutura organizada e reutilizável
- **⚡ Performance Otimizada**: Carregamento rápido e eficiente

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone [url-do-repositorio]
   cd site-react-treino/site-teste
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm start
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📋 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run dev` - Alias para o comando start
- `npm test` - Executa os testes automatizados
- `npm run build` - Gera a versão otimizada para produção
- `npm run eject` - Ejeta as configurações do Create React App

## 🎯 Páginas e Rotas

| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | Home | Página inicial com Hero, Cards e Formulário |
| `/servicos` | Servicos | Apresentação dos serviços oferecidos |
| `/contato` | Contato | Página dedicada ao contato |

## 🔧 Componentes Principais

### Hero
- Slider responsivo com Swiper.js
- Navegação automática e manual
- Sobreposição de texto personalizada

### Navbar
- Menu de navegação responsivo
- Links ativos com React Router

### Cards
- Seção de conteúdo modular
- Layout responsivo com CSS Grid/Flexbox

### ContactForm
- Formulário de contato funcional
- Validação de campos
- Interface intuitiva

## 📱 Responsividade

O projeto foi desenvolvido seguindo a abordagem **Mobile First**, garantindo uma experiência otimizada em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktops (1024px+)
- 🖥️ Telas grandes (1200px+)

## 🎨 Padrões de Desenvolvimento

- **Componentização**: Cada funcionalidade isolada em componentes reutilizáveis
- **Separação de Responsabilidades**: CSS, lógica e estrutura organizados separadamente
- **Nomenclatura Clara**: Nomes de classes e funções em português, autoexplicativos
- **Código Limpo**: Comentários em português e estrutura bem organizada

## 🚀 Próximos Passos

- [ ] Implementar sistema de autenticação
- [ ] Adicionar animações com Framer Motion
- [ ] Integrar com API para formulário de contato
- [ ] Implementar tema escuro/claro
- [ ] Adicionar testes unitários
- [ ] Configurar deployment automático

## 📄 Licença

Este projeto é de uso educacional e está disponível sob a licença MIT.

---

**Desenvolvido com ❤️ usando React** - Projeto de treinamento front-end

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, sinta-se à vontade para abrir uma issue ou entrar em contato.
