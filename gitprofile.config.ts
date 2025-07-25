// gitprofile.config.ts


const CONFIG = {
  github: {
    username: 'Gui28F', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  bibliography: "I am currently pursuing my master's degree in Computer Science, with a thesis \
    centered on coherent image generation, co-oriented by Google. I have a deep enthusiasm for \
    distributed systems and artificial intelligence, especially in the areas of \
    natural language processing (NLP), and computer vision.", // if empty shows github bibliography
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['vladbug/CookingBot', 'Gui28F/Dstributed-Social-Network', 'Gui28F/RealTimeMsgApp', 'Gui28F/CPU-Scheduler-Simulation', 'Gui28F/Gravity-field-simulation',
          'Gui28F/Simple-File-System', 'Gui28F/Histogram_Equalization'
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: "OFLAT Project (NOVA-LINCS)",
          description: "Collaborated in the OFLAT project at NOVA-LINCS from Jun 2022 to Sep 2022.\
          My contributions included implementing an algorithm in OCaml to transform a\
          context-independent grammar into a grammar in Chomsky normal form, and implementing the\
          CYK algorithm.",
          imageUrl:
            'https://ocaml.org/_/MWIyY2ZmMWM5YzdkYWNmYWI4NGQ0MDBjOGFiZTYxOTg/ocaml_org_social_media.png',
          link: 'http://ctp.di.fct.unl.pt/FACTOR/OFLAT/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Guilherme Fernandes',
    description: "",
    imageURL: '',
  },
  social: {
    linkedin: 'guilherme-fernandes-a52611204',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'guidcf28@gmail.com',
  },
  resume: {
    fileUrl:'', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'PyTorch',
    'OCaml',
    'C',
    'C++',
    'CUDA',
    'Anaconda',
    'Windows Azure',
    'Microsoft Azure Machine Learning',
    'Microsoft Bot Framework',
    'PL/SQL',
    'SQLite',
    'Git',
    'Docker',
    'Bash',
    'Go',
    'Rust',
    'Erlang',
    'JavaScript',
  ],
  experiences: [
    {
      company: 'KPMG Portugal',
      position: 'AI intern',
      from: 'March 2023',
      to: 'July 2023',
      companyLink: 'https://kpmg.com/pt/pt/home.html',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: "NOVA School of Science and Technology",
      degree: "Master's degree, Computer Science and Engineering",
      from: "Aug 2023",
      to: "Present"
    },
    {
      institution: "Technische Universität Darmstadt",
      degree: "ACM Europe Summer School on Distributed and Replicated Environments (DARE)",
      from: "Sep 2024",
      to: "Sep 2024"
    },
    {
      institution: "NOVA School of Science and Technology",
      degree: "Bachelor's degree, Computer Science and Engineering",
      from: "Sep 2020",
      to: "Jul 2023",
      grade: "Grade: 18/20"
    },
  ],
  publications: [
    {
       title: 'Latent Beam Diffusion Models for Decoding Image Sequences',
       conferenceName: '',
       journalName: '',
       authors: 'Guilherme Fernandes, Vasco Ramos, Regev Cohen, Idan Szpektor, João Magalhães',
       link: 'https://arxiv.org/abs/2503.20429',
       description:
        'While diffusion models excel at generating high-quality images from text prompts, they struggle with visual consistency in image sequences. Existing methods generate each image independently, leading to disjointed narratives — a challenge further exacerbated in non-linear storytelling, where scenes must connect beyond adjacent frames. We introduce a novel beam search strategy for latent space exploration, enabling conditional generation of full image sequences with beam search decoding. Unlike prior approaches that use fixed latent priors, our method dynamically searches for an optimal sequence of latent representations, ensuring coherent visual transitions. As the latent denoising space is explored, the beam search graph is pruned with a cross-attention mechanism that efficiently scores search paths, prioritizing alignment with both textual prompts and visual context. Human and automatic evaluations confirm that BeamDiffusion outperforms other baseline methods, producing full sequences with superior coherence, visual continuity, and textual alignment.',
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
