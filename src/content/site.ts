// Todo o texto da landing fica aqui. Edite sem mexer nos componentes.

export const APP_URL = 'https://app.anvello.com.br/entrar';
export const SITE_URL = 'https://anvello.com.br';
export const PRODUCT = 'ReceitasAI';

export const meta = {
  title: 'ReceitasAI — modelos de receita para médicos | Anvello',
  description:
    'Crie seus modelos de receita, encontre pelo quadro clínico, calcule a dose pelo peso e copie o texto pronto para o sistema do hospital. Nenhum dado de paciente é armazenado.',
};

export const disclaimer =
  'O ReceitasAI é uma ferramenta de organização de texto. A prescrição e a decisão clínica são responsabilidade do médico.';

export const nav = [
  { label: 'Como funciona', href: '/#como' },
  { label: 'Cálculo de dose', href: '/#dose' },
  { label: 'Recursos', href: '/#cuidado' },
  { label: 'Planos', href: '/#planos' },
  { label: 'Dúvidas', href: '/#faq' },
];

export const hero = {
  eyebrow: 'Modelos de receita para médicos',
  title: 'Menos digitação. Mais tempo para quem está na sua frente.',
  text: 'Guarde seus modelos por quadro clínico, calcule a dose pelo peso e copie para o prontuário do hospital em um clique. Funciona em qualquer sistema, porque é só copiar e colar.',
  primary: 'Começar',
  secondary: 'Ver como funciona',
  note: 'Sem integração com o hospital e sem instalar nada.',
  mockupNote: 'Layout ilustrativo. Interface final em definição.',
};

export const steps = {
  eyebrow: 'Como funciona',
  title: 'Você escreve uma vez. Reusa em todo plantão.',
  items: [
    {
      n: '01',
      title: 'Crie o modelo',
      text: 'Medicamentos, posologia e orientações do jeito que você prescreve, organizados por quadro clínico.',
    },
    {
      n: '02',
      title: 'Encontre pelo sintoma',
      text: 'Chegou um quadro que você já tratou? Busque e o modelo certo abre na hora.',
    },
    {
      n: '03',
      title: 'Copie e cole',
      text: 'Um clique copia o texto pronto. Cole no sistema do hospital, ajuste o que for do paciente e siga.',
    },
  ],
};

export const dose = {
  eyebrow: 'Cálculo de dose por peso',
  title: 'Informe só o peso. A dose sai calculada.',
  text: 'Cadastre uma vez as suas regras de cálculo (por exemplo, mg por kg, dose máxima e intervalo) e reutilize em qualquer modelo. Na hora de usar, você informa apenas o peso do paciente: as doses aparecem calculadas, com a memória de cálculo à vista para você conferir.',
  points: [
    'Regras de cálculo reutilizáveis, definidas por você.',
    'Memória de cálculo sempre visível, conta por conta.',
    'O peso é usado só no seu navegador. Nenhum dado de paciente é armazenado.',
  ],
  demo: {
    label: 'Exemplo ilustrativo',
    drug: 'Medicamento exemplo',
    rule: 'Regra cadastrada: 10 mg/kg por dose, máximo de 500 mg, a cada 6 horas. Suspensão de 100 mg por 5 mL.',
    weightLabel: 'Peso do paciente (kg)',
    weightDefault: 18,
    privacy: 'Valores fictícios, só para demonstração. O peso não sai deste navegador.',
  },
};

export const care = {
  eyebrow: 'Feito para o plantão',
  title: 'Calmo quando o dia não está.',
  text: 'Telas tranquilas, poucos botões e nada que pisque. Você decide o que entra na receita.',
  items: [
    {
      title: 'Funciona em qualquer prontuário',
      text: 'Texto limpo, sem formatação que quebra no sistema do hospital.',
      highlight: true,
    },
    {
      title: 'Nenhum dado de paciente',
      text: 'Modelos são textos genéricos. Nome, idade e outros dados ficam só no sistema do hospital.',
    },
    {
      title: 'Um segundo olhar da IA',
      text: 'Apontar dose fora da faixa ou orientação ausente, sem interromper.',
      soon: true,
    },
    {
      title: 'Um login, vários hospitais',
      text: 'Seus modelos acompanham você, não a instituição.',
      soon: true,
    },
    {
      title: 'Exporte tudo quando quiser',
      text: 'Seus modelos são seus, e saem com você.',
      soon: true,
    },
  ],
};

export const plans = {
  eyebrow: 'Planos',
  title: 'Planos em breve',
  text: 'Ainda estamos definindo os planos do ReceitasAI. Quando estiverem prontos, você os verá aqui, sem letra miúda.',
  button: 'Avisar quando houver novidade',
  note: 'Em breve. Ainda não coletamos nenhum dado nesta página.',
};

export const faq = {
  eyebrow: 'Dúvidas',
  title: 'Perguntas frequentes',
  items: [
    {
      q: 'Preciso integrar com o sistema do hospital?',
      a: 'Não. O ReceitasAI funciona por copiar e colar, então roda ao lado de qualquer prontuário, sem integração, instalação ou aval da TI.',
    },
    {
      q: 'Os modelos guardam dados de pacientes?',
      a: 'Não. Modelos são textos genéricos por quadro clínico. Nome, idade e outros dados do paciente ficam apenas no sistema do hospital.',
    },
    {
      q: 'O peso que eu informo no cálculo de dose fica salvo?',
      a: 'Não. O peso é usado só no seu navegador, na hora do cálculo, e nenhum dado de paciente é armazenado.',
    },
    {
      q: 'A IA prescreve por mim?',
      a: 'Não. A prescrição e a decisão clínica são sempre suas. O segundo olhar da IA, que apontará pontos de atenção nos seus modelos, ainda está em desenvolvimento (em breve).',
    },
    {
      q: 'Quanto custa?',
      a: 'Os planos ainda estão em definição e serão anunciados aqui quando estiverem prontos.',
    },
  ],
};

export const cta = {
  title: 'Seu próximo modelo leva dois minutos.',
  button: 'Começar',
};

export const footer = {
  copyright: '© 2026 Anvello',
  privacy: 'Privacidade',
  terms: 'Termos',
};
