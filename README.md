Portfolio Preview

Um site de portfólio moderno, responsivo e elegante para desenvolvedores full stack, construído com Next.js, TypeScript e Tailwind CSS.

📋 Sobre o Projeto
Este portfólio foi desenvolvido para apresentar de forma profissional as habilidades, projetos e informações de contato de Carina Yanaze, uma desenvolvedora full stack. O design é moderno, com suporte a tema claro/escuro e totalmente responsivo para todos os dispositivos.

✨ Funcionalidades
Design Responsivo: Adaptado para todos os tamanhos de tela
Tema Claro/Escuro: Alternância entre temas com persistência de preferência
Animações Suaves: Transições e animações para melhor experiência do usuário
Seções Completas: Hero, Sobre, Habilidades, Projetos e Contato
Formulário de Contato: Formulário funcional para envio de mensagens
SEO Otimizado: Metadados configurados para melhor indexação
Acessibilidade: Implementação de práticas de acessibilidade
🛠️ Tecnologias Utilizadas
Next.js 14: Framework React com renderização do lado do servidor
TypeScript: Tipagem estática para melhor desenvolvimento
Tailwind CSS: Framework CSS utilitário para estilização
Shadcn/UI: Componentes de UI reutilizáveis
Lucide Icons: Biblioteca de ícones
Next Themes: Gerenciamento de temas claro/escuro

🚀 Como Executar
Pré-requisitos
Node.js 18.x ou superior
npm ou yarn
Instalação
Clone o repositório:

git clone https://github.com/seu-usuario/portfolio-carina-yanaze.git
cd portfolio-carina-yanaze
Instale as dependências:

npm install
# ou
yarn install
Execute o servidor de desenvolvimento:

npm run dev
# ou
yarn dev
Abra http://localhost:3000 no seu navegador para ver o resultado.
Build para Produção
npm run build
# ou
yarn build

📁 Estrutura do Projeto
portfolio-carina-yanaze/
├── app/                    # Diretório principal do Next.js App Router
│   ├── layout.tsx          # Layout principal da aplicação
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais e variáveis Tailwind
├── components/             # Componentes reutilizáveis
│   ├── about.tsx           # Seção Sobre
│   ├── contact.tsx         # Seção Contato
│   ├── footer.tsx          # Rodapé
│   ├── header.tsx          # Cabeçalho com navegação
│   ├── hero.tsx            # Seção Hero
│   ├── projects.tsx        # Seção Projetos
│   ├── skills.tsx          # Seção Habilidades
│   ├── theme-provider.tsx  # Provedor de tema
│   ├── theme-toggle.tsx    # Botão de alternância de tema
│   └── ui/                 # Componentes de UI (shadcn)
├── public/                 # Arquivos estáticos
├── tailwind.config.ts      # Configuração do Tailwind CSS
├── next.config.js          # Configuração do Next.js
└── package.json            # Dependências e scripts

🎨 Personalização
Cores e Tema
As cores do tema são definidas em app/globals.css usando variáveis CSS. Você pode personalizar as cores alterando os valores HSL nas variáveis:

:root {
  --primary: 291.2 83.2% 53.3%;  /* Cor principal (roxo) */
  /* Outras variáveis de cor... */
}
Conteúdo
Para personalizar o conteúdo do portfólio:

Informações Pessoais: Atualize os textos em cada componente de seção
Projetos: Modifique o array de projetos em components/projects.tsx
Habilidades: Atualize as listas de habilidades em components/skills.tsx
Contato: Altere as informações de contato em components/contact.tsx
Imagens
Substitua as imagens de placeholder em public/ por suas próprias imagens e atualize os caminhos nos componentes.

🤝 Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar este projeto.

Faça um fork do projeto
Crie sua branch de feature (git checkout -b feature/amazing-feature)
Commit suas mudanças (git commit -m 'Add some amazing feature')
Push para a branch (git push origin feature/amazing-feature)
Abra um Pull Request

📄 Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

📬 Contato
Carina Yanaze - carina.yanaze@exemplo.com