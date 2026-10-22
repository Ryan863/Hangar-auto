import { BusinessConfig, ServiceItem, DifferentialItem, TestimonialItem, FaqItem } from '../types';

export const BUSINESS_INFO: BusinessConfig = {
  name: "Hangar Auto",
  tagline: "Estética Automóvel de Precisão & Higienização Têxtil Residencial",
  subtitle: "O padrão editorial em cuidado, proteção e preservação do seu património em Herval d'Oeste, Joaçaba e região.",
  phoneDisplay: "(49) 98810-4554",
  phoneRaw: "5549988104554",
  whatsappUrl: "https://wa.me/5549988104554?text=Ol%C3%A1%2C+visitei+o+site+da+Hangar+Auto+e+gostaria+de+um+or%C3%A7amento+personalizado.",
  address: {
    street: "R. Francisco Porto Moreira",
    neighborhood: "Santo Antônio",
    city: "Herval d'Oeste",
    state: "SC",
    zip: "89610-000",
    fullFormatted: "R. Francisco Porto Moreira - Santo Antônio, Herval d'Oeste - SC, CEP 89610-000"
  },
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=R.+Francisco+Porto+Moreira+-+Santo+Ant%C3%B4nio,+Herval+d%27Oeste+-+SC,+89610-000",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.2!2d-51.498!3d-27.185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e3e3b3d1b6e4e5%3A0x4a4d6411f1810f44!2sR.%20Francisco%20Porto%20Moreira%20-%20Santo%20Ant%C3%B4nio%2C%20Herval%20d%27Oeste%20-%20SC%2C%2089610-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  rating: {
    score: 5.0,
    totalReviews: 28,
    platform: "Google Avaliações"
  },
  hours: {
    weekdays: "08:00 às 18:30",
    saturday: "08:00 às 12:00",
    sunday: "Encerrado"
  }
};

export const AUTOMOTIVE_SERVICES: ServiceItem[] = [
  {
    id: "polimento-tecnico",
    category: "automotive",
    title: "Polimento Técnico & Correção de Pintura",
    badge: "Alta Precisão",
    description: "Correção cirúrgica de micro-riscos, teias de aranha (swirls) e marcas de lavagens inadequadas. Restauração do reflexo espelhado com preservação máxima da espessura do verniz original.",
    features: [
      "Inspeção com medidor de espessura de verniz digital",
      "Remoção de até 95% das imperfeições superficiais",
      "Acabamento óptico com compostos alemães sem silicones de mascaramento",
      "Brilho profundo, nítido e duradouro"
    ],
    duration: "1 a 2 dias úteis",
    whatsappMessage: "Olá! Gostaria de consultar um orçamento para Polimento Técnico e Correção de Pintura do meu veículo na Hangar Auto.",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=85",
    popular: true
  },
  {
    id: "vitrificacao-ceramica",
    category: "automotive",
    title: "Vitrificação & Proteção Cerâmica 9H",
    badge: "Blindagem Química",
    description: "Aplicação de nano-revestimento cerâmico de alta dureza sobre a pintura. Cria um escudo hidrofóbico impenetrável contra raios UV, fezes de aves, seiva de árvores e intempéries da estrada.",
    features: [
      "Altíssima repelência a água e sujeira (Efeito Lótus)",
      "Proteção térmica e contra desbotamento solar",
      "Garantia estendida de proteção de até 3 anos",
      "Lavagens muito mais rápidas e sem atrito"
    ],
    duration: "2 dias úteis",
    whatsappMessage: "Olá! Gostaria de saber mais sobre a Vitrificação Cerâmica 9H para proteger a pintura do meu veículo.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=85",
    popular: true
  },
  {
    id: "detalhamento-interior",
    category: "automotive",
    title: "Detalhamento & Higienização Interior Completa",
    badge: "Ambiente Puro",
    description: "Higienização técnica minuciosa de cada centímetro da cabine. Desmontagem cautelosa de bancos quando necessária, sucção a vácuo, vaporização e assepsia profunda dos dutos de climatização.",
    features: [
      "Higienização a vapor térmico hospitalar",
      "Oxisanitização e desodorização por ozônio",
      "Tratamento de painéis, fendas, botões e cintos de segurança",
      "Eliminação de 99,9% de fungos, ácaros e bactérias"
    ],
    duration: "1 dia útil",
    whatsappMessage: "Olá! Gostaria de agendar o Detalhamento e Higienização Interior Completa do meu carro.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85",
    popular: false
  },
  {
    id: "tratamento-couro",
    category: "automotive",
    title: "Tratamento de Couro & Materiais Nobres",
    badge: "Preservação Luxo",
    description: "Limpeza técnica com formulação de pH neutro e hidratação profunda que rejuvenesce o couro legítimo e tecidos nobres, devolvendo a elasticidade natural, aroma suave e acabamento acetinado fosco original.",
    features: [
      "Limpeza profunda sem agressão das fibras",
      "Hidratação com óleos essenciais de alta permeabilidade",
      "Prevenção contra rachaduras, desbotamento e ressecamento precoce",
      "Toque aveludado e visual original de concessionária de luxo"
    ],
    duration: "4 a 6 horas",
    whatsappMessage: "Olá! Gostaria de um orçamento para Tratamento e Hidratação de Couro do meu automóvel.",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85",
    popular: false
  }
];

export const RESIDENTIAL_SERVICES: ServiceItem[] = [
  {
    id: "higienizacao-sofas",
    category: "residential",
    title: "Higienização Profunda de Sofás & Poltronas",
    badge: "Hangar Home",
    description: "Atendimento técnico ao domicílio com maquinário extrator profissional de alta sucção. Remoção profunda de sujidades incrustadas, manchas de uso, odores corporais e agentes alérgenos sem molhar a estrutura interna.",
    features: [
      "Produtos certificados de grau sanitário e biodegradáveis",
      "Eliminação bactericida profunda sem desbotar o tecido",
      "Secagem rápida acelerada por circulação técnica de ar",
      "Seguro para crianças, pets e pessoas com sensibilidade respiratória"
    ],
    duration: "2 a 3 horas no local",
    whatsappMessage: "Olá! Gostaria de agendar uma Higienização de Sofás e Estofos residenciais na Hangar Home.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
    popular: true
  },
  {
    id: "sanitizacao-colchoes",
    category: "residential",
    title: "Sanitização de Colchões & Cabeceiras Têxteis",
    badge: "Saúde & Sono",
    description: "Descontaminação profunda com extração térmica que neutraliza ácaros, resíduos de pele morta, suor e fungos alojados no núcleo do colchão. Melhore instantaneamente a qualidade do seu ar e das suas noites de sono.",
    features: [
      "Eliminação de fontes de crises alérgicas e rinites",
      "Desodorização ativa e assepsia profunda dos tecidos",
      "Procedimento executado na sua própria cama com agilidade",
      "Tecnologia que permite o uso no mesmo dia"
    ],
    duration: "1h30 a 2 horas",
    whatsappMessage: "Olá! Gostaria de saber os valores para Sanitização de Colchão e Cabeceira da minha residência.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    popular: false
  },
  {
    id: "impermeabilizacao-textil",
    category: "residential",
    title: "Impermeabilização Têxtil Avançada",
    badge: "Nanoproteção",
    description: "Aplicação uniforme de resina nanoestruturada que envolve cada filamento do tecido individualmente. Impede a absorção imediata de café, vinho, refrigerantes e gorduras, facilitando a limpeza instantânea com um simples papel toalha.",
    features: [
      "Não altera a cor, o toque nem a respirabilidade original do tecido",
      "Tecnologia segura sem solventes tóxicos ou inflamáveis",
      "Protege contra manchas permanentes e desbotamento precoce",
      "Garantia com certificado de impermeabilização técnica"
    ],
    duration: "2 horas + cura",
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para Impermeabilização de Sofá / Estofos na minha casa.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    popular: true
  }
];

export const TECHNICAL_DIFFERENTIALS: DifferentialItem[] = [
  {
    iconName: "Gauge",
    title: "Medição Micrométrica de Verniz",
    tag: "Diagnóstico Científico",
    description: "Não trabalhamos no escuro. Mapeamos com precisão digital de mícrons a espessura da pintura do seu veículo antes de encostar qualquer boina ou polidor, garantindo 100% de segurança à integridade estrutural do verniz."
  },
  {
    iconName: "ShieldCheck",
    title: "Química Certificada de Grau Hospitalar",
    tag: "Saúde & Preservação",
    description: "Tanto na cabine do automóvel como na sua sala de estar, empregamos exclusivamente químicos importados com homologação sanitária, biodegradáveis e neutros, sem resíduos tóxicos para a sua família e animais."
  },
  {
    iconName: "SunMedium",
    title: "Estúdio com Iluminação de Alto CRI",
    tag: "Inspeção Visual 360°",
    description: "Instalações climatizadas com arranjos luminosos técnicos concebidos para revelar qualquer micro-imperfeição óptica que passaria despercebida sob iluminação comum ou luz solar direta."
  },
  {
    iconName: "Wind",
    title: "Secagem Rápida & Controlo de Humidade",
    tag: "Tecnologia Térmica",
    description: "Equipamentos de extração industrial e fluxo turbilhonar aceleram a secagem de estofos automóveis e residenciais, prevenindo a proliferação de bolores e permitindo a utilização imediata do bem."
  },
  {
    iconName: "UserCheck",
    title: "Atendimento Exclusivo com Hora Marcada",
    tag: "Dedicacão Total",
    description: "Limitamos intencionalmente o número de veículos e residências atendidas por semana. Cada projeto recebe a dedicação cirúrgica dos nossos técnicos, sem correrias, filas ou soluções genéricas de linha de produção."
  },
  {
    iconName: "Award",
    title: "Garantia Real & Consultoria de Manutenção",
    tag: "Pós-Venda Premium",
    description: "Entregamos não apenas o serviço executado, mas todo o protocolo de cuidados e recomendações personalizadas para que o acabamento e a proteção durem muito além da entrega."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    author: "Vital Fedrigo",
    role: "Cliente Verificado",
    city: "Herval d'Oeste, SC",
    avatarText: "VF",
    rating: 5,
    text: "Perfeito em cada detalhe, meu carro nunca ficou tão bonito. Super recomendo.",
    vehicleOrService: "Polimento Técnico & Proteção Cerâmica",
    verified: true
  },
  {
    author: "Eduardo Silveira",
    role: "Proprietário de Veículo Premium",
    city: "Joaçaba, SC",
    avatarText: "ES",
    rating: 5,
    text: "Serviço de outro patamar na nossa região. A precisão na correção da pintura e o acabamento do interior deixaram o carro com aspecto de 0km tirado na loja hoje. Profissionalismo exemplar.",
    vehicleOrService: "Detalhamento e Vitrificação",
    verified: true
  },
  {
    author: "Camila R. Zanella",
    role: "Cliente Residencial",
    city: "Herval d'Oeste, SC",
    avatarText: "CZ",
    rating: 5,
    text: "Fizeram a higienização e impermeabilização do nosso sofá de linho claro e o resultado foi impressionante. Equipe pontual, cuidadosa com a casa e o sofá secou muito rápido. Vale cada centavo!",
    vehicleOrService: "Higienização & Impermeabilização Sofá Retrátil",
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Quanto tempo demora o procedimento de polimento técnico e vitrificação?",
    answer: "Por se tratar de um processo artesanal e minucioso com múltiplas etapas de descontaminação, medição, corte, refino e cura térmica da cerâmica, o tempo varia geralmente entre 1 a 2 dias úteis. Não fazemos polimentos apressados; a perfeição exige tempo de cura e dedicação exclusiva.",
    category: "Automóvel"
  },
  {
    question: "Como funciona o atendimento de higienização residencial (Hangar Home)?",
    answer: "Nossa equipe desloca-se até à sua residência com todo o maquinário profissional e produtos necessários. Você não precisa transportar nenhum móvel nem sair da sua casa. O processo é limpo, silencioso e protege o piso e os arredores do móvel durante todo o trabalho.",
    category: "Residencial"
  },
  {
    question: "Qual é o tempo de secagem dos sofás e estofos residenciais?",
    answer: "Graças ao nosso sistema de extração de alto vácuo e técnicas de circulação de ar, os tecidos ficam apenas levemente umedecidos ao final da aplicação, secando completamente em média entre 4 a 8 horas, dependendo do clima do dia.",
    category: "Residencial"
  },
  {
    question: "Qual é a região atendida pela Hangar Auto?",
    answer: "Para estética automotiva, atendemos em nossa sede em Herval d'Oeste - SC (próximo a Joaçaba). Para os serviços residenciais da Hangar Home, deslocamo-nos por Herval d'Oeste, Joaçaba, Luzerna e cidades vizinhas no Meio-Oeste Catarinense.",
    category: "Geral"
  },
  {
    question: "A vitrificação cerâmica substitui a lavagem do carro?",
    answer: "A proteção cerâmica facilita drasticamente a lavagem, criando uma superfície ultra-hidrofóbica na qual a sujeira tem enorme dificuldade em aderir. As lavagens futuras tornam-se muito mais rápidas, apenas com shampoo neutro e água, sem necessidade de ceras ou esforço mecânico agressivo.",
    category: "Automóvel"
  },
  {
    question: "Como posso solicitar um orçamento ou agendar um horário?",
    answer: "Basta clicar em qualquer um dos botões de WhatsApp do site. Você falará diretamente conosco, poderá enviar fotos do seu veículo ou estofo residencial, e receberá uma estimativa detalhada e as datas disponíveis em poucos minutos.",
    category: "Geral"
  }
];
