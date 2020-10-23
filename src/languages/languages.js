const es = {
  menu0: "Proyectos",
  menu1: "Contacto",
  menu2: "Sobre mí",

  projects0:
    "Feria 3D de arte virtual con editor para poder subir obras y contenido.",
  projects1: `Barcu se presenta como un gran reto donde numerosas galerías y
  artistas debían de poder subir y exponer sus obras. Para dar cabida a
  tanto contenido de forma dinámica, se optó por crear un editor 3D en
  linea para que los expositores pudieran presentar de la forma que
  quisieran y con el formato deseado (imagen, video o archivo 3D) sus
  trabajos.`,
  projects2: `Extensión para el navegador Chrome que permite medir distancias y
  tamaños así como tipos de fuente de cualquier página o app web.`,
  projects3: `Esta herramienta nace de la necesidad en las empresas de software de
  realizar QAs visuales para comprobar que los tamaños y tipos de fuente
  de los distinos elementos se corresponden con el diseño planteado. Su
  proposito es facilitar esta tarea lo máximo posible ofreciendo una
  interfaz e interacción lo más parecida a Figma u otros programas de
  diseño.`,

  projectsStack: "Stack tecnológico:",
  projectsWatch: "Ver",
  projectsInstall: "Instalar",

  contactTitle: "¿Hablamos?",
  contactName: "Nombre...",
  contactSubject: "Asunto...",
  contactText: "Cuéntame tu idea...",
  contactButton: "Enviar",

  contactMsg0: "¡Gracias por ponerte en contacto!",
  contactMsg1:
    "En breve estudiaré tu propuesta y me pondré en contacto contigo.",

  about0:
    "Ingeniero Informático con especialidad en el desarrollo de software.",
  about1:
    "Me cautivó la programación desde el principio y he decantado toda mi vida profesional en esta dirección.",
  about2:
    "Pasando por trabajo de investigación en la universidad hasta un par de compañías de software de Madrid, he tenido tenido la oportunidad de trabajar en proyectos con grandes empresas internacionales y del tejido empresarial español,",
  about3: "",
  about4: "adquiriendo así amplios conocimientos en el área de",
  about5: "Front-End y desarrollo de aplicaciones Web y Móvil.",
  about6:
    "Con un gran interés en generar experiencias inmersivas en 3D, mis últimos esfuerzos se han volcado en aprender a crear",
  about7: "entornos virtuales con WebGL",
  about8: "que aporten un gran valor al UX."
};

const en = {
  menu0: "Projects",
  menu1: "Contact",
  menu2: "About me",

  projects0: "3D virtual art fair with editor to upload artworks and content.",
  projects1: `Barcu presents itself as a great challenge where numerous galleries and
  artists should be able to upload and exhibit their works. To accommodate
  so much content dynamically, it was decided to create an online 3D editor so that exhibitors could present in the way they
  would like and with the desired format (image, video or 3D file) their
  artworks.`,
  projects2: `Extension for the Chrome browser that allows you to measure distances and
  sizes as well as font types of any page or web app.`,
  projects3: `This tool was born out of the need in software companies to
  perform visual QAs to verify that font sizes and fonts
  of the different elements correspond to the proposed design.
  The purpose is to make this task as easy as possible by offering a
  interface and interaction as similar to Figma or other software
  design.`,

  projectsStack: "Technological stack:",
  projectsWatch: "Watch",
  projectsInstall: "Install",

  contactTitle: `Let's get in touch!`,
  contactName: "Name...",
  contactSubject: "Subject...",
  contactText: "Tell me your idea...",
  contactButton: "Send",

  contactMsg0: "Thank you for contacting!",
  contactMsg1: "I will study your proposal shortly and get in touch with you.",

  about0: "Computer Engineer specialized in software development.",
  about1:
    "I was captivated by programming from the beginning and I have chosen my entire professional life in this direction.",
  about2:
    "Going through research work at the university to a couple of software companies in Madrid, I have had the opportunity to work on projects with large spanish and international companies,",
  about3: "",
  about4: "thus acquiring extensive knowledge in the area of",
  about5: "Front-End and Web and Mobile application development.",
  about6:
    "With a great interest in generating immersive 3D experiences, my latest efforts have focused on learning how to create",
  about7: "virtual environments with WebGL",
  about8: "that add great value to the UX."
};

export const getCopy = key => {
  if (navigator.language.indexOf("es") > -1) {
    return es[key];
  }
  return en[key];
};
