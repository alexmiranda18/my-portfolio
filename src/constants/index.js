import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpeg";

export const HERO_CONTENT = `Sou um desenvolvedor full stack apaixonado, com talento para criar aplicações web robustas e escaláveis. aprimorei minhas habilidades em tecnologias front-end como React e Next.js, bem como tecnologias back-end como Node.js, MySQL, PostgreSQL. Meu objetivo é aproveitar minha experiência para criar soluções inovadoras que impulsionem o crescimento dos negócios e proporcionem experiências excepcionais ao usuário.`;

export const ABOUT_TEXT = `Sou um desenvolvedor full stack dedicado e versátil, com uma paixão por criar aplicações web eficientes e intuitivas. Recentemente, fiz uma transição de carreira da área de eletrônica para o desenvolvimento de software, e estou sempre em busca de aprimorar meus conhecimentos. Durante um ano e meio, trabalhei em uma startup chamada Wooeen, onde fui responsável pelo tracking de e-commerces, o que me proporcionou uma valiosa experiência prática. Nesse período, estudei e apliquei tecnologias como React, Node.js e MySQL, consolidando meu conhecimento nessas áreas. Tenho 32 anos, sou casado e pai de um filho, e acredito que minha curiosidade sobre como as coisas funcionam foi o que inicialmente me atraiu para a programação. Desde então, essa curiosidade evoluiu para uma carreira na qual busco constantemente aprender e me adaptar a novos desafios. Gosto de trabalhar em ambientes colaborativos e de resolver problemas complexos para entregar soluções de alta qualidade. Fora do mundo da programação, adoro cinema e passar tempo com minha família.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Suporte Técnico",
    company: "Dev Club",
    description: `Experiência oferecendo auxilio aos alunos, ajudando a resolver problemas de código e orientando em suas jornadas de aprendizado.`,
    technologies: ["Node.js", "MongoDB", "React.js", "Html", "Css"],
  },
  {
    year: "2022 - 2024",
    role: "Desenvolvedor",
    company: "Wooeen CashBack",
    description: `Experiência na realização de projetos envolvendo meus conhecimentos com as tecnologias HTML, CSS, JavaScript. Realizava o tracking de informações de e-comerces viabilizando as informações obtidas para um melhor desempenho da plataforma.`,
    technologies: ["Javascript", "Html", "Css"],
  },
  {
    year: "2022 - Presente",
    role: "Desenvolvedor Frontend",
    company: "Freelance",
    description: `Desenvolvimento e manutenção de websites e aplicações web utilizando HTML, CSS, JavaScript, React e Node.js. Criação de interfaces responsivas e interativas, integração com APIs e implementação de funcionalidades do lado do servidor.`,
    technologies: ["HTML", "CSS", "React.js"],
  },
  {
    year: "2020 - 2022",
    role: "Técnico",
    company: "Autônomo",
    description: `Diagnóstico e reparo de computadores, notebooks e celulares, configuração de sistemas operacionais, aplicativos e redes. Atendimento ao cliente e suporte técnico direto, garantindo a funcionalidade e segurança dos dispositivos.`,
    technologies: ["Diagnóstico", "Reparo", "Conhecimento de Hardware"],
  },
  {
    year: "2018 - 2019",
    role: "Técnico em eletrônica",
    company: "Tenda Atacado",
    description: `Diagnóstico e conserto de computadores, televisores e equipamentos eletrônicos diversos vindos de todas as lojas da rede. Realização de reparos e manutenção preventiva para garantir o funcionamento adequado dos equipamentos e minimizar o tempo de inatividade.`,
    technologies: ["Diagnóstico", "Reparo", "Conhecimento de Hardware"],
  },
];

export const PROJECTS = [
  {
    title: "Gerenciador de estoque StockPro",
    image: project5,
    description:
      "Desenvolvi uma aplicação completa utilizando TypeScript, React, Node.js, Tailwind CSS, Supabase, Vercel e Render. O projeto inclui funcionalidades como upload de imagens com Multer, autenticação com JWT e criptografia de senhas com Bcrypt. Esta aplicação demonstra minha capacidade de integrar diversas tecnologias para criar uma solução robusta e funcional.",
    technologies: ["TypeScript", "React", "Node.js", "Tailwind CSS"],
    url: "https://inventory-portal-six.vercel.app/",
  },
  {
    title: "Website Portifólio",
    image: project1,
    description:
      "Site de portfólio pessoal apresentando projetos, habilidades e informações de contato.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Tailwind CSS"],
    url: "#",
  },
  {
    title: "Landing page Super Mario",
    image: project2,
    description:
      "Landing page temática do Super Mario, projetada para ser um modelo simples e eficaz para comércios. Utilizei HTML, CSS, JavaScript e Tailwind CSS para desenvolver um formulário funcional e visualmente atraente, com foco em uma experiência de usuário divertida e envolvente.",
    technologies: ["HTML", "CSS", "Javascript", "Tailwind CSS"],
    url: "https://supermario-alex.netlify.app",
  },
  {
    title: "Hamburgueria React",
    image: project3,
    description:
      "Projeto simples que simula o cadastro de pedidos,  tem o objetivo de integrar com o back-end na funcão de cadastrar, visualizar e deletar pedidos.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    url: "https://hamburgueria-react-alex.netlify.app",
  },
  {
    title: "Conversor de Moedas",
    image: project4,
    description:
      "Conversor pode ser feita de Real Brasileiro para Dólar Americano, Euro, Libra ou Bitcoins.",
    technologies: ["HTML", "CSS", "Javascript"],
    url: "https://alexconvertmoney.netlify.app",
  },
];

export const CONTACT = {
  address: "Guarulhos - SP ",
  email: "alexsousamiranda@hotmail.com",
};
