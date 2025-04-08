// followersData.ts

export interface Follower {
    name: string;
    username: string;
    bio: string;
    location: string;
    image: string;
    company?: string;
  }
  
  export const followers: Follower[] = [
    {
      name: 'Naruto Uzumaki',
      username: 'dattebayoDev',
      bio: 'Frontend Developer con espíritu Hokage. Fan de React y siempre listo para mejorar el rendimiento con Shadow Clones.',
      location: 'Konoha',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjX17reEcm1AfYJ7H7qovSCv-XQC7oc7D6jw&s',
      company: 'Hidden Leaf Software',
    },
    {
      name: 'Kakashi Hatake',
      username: 'kakashiSensei',
      bio: 'Senior Developer y arquitecto de sistemas. Maestro en TypeScript, C++ y técnicas secretas de refactorización.',
      location: 'Konoha',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvl8EO8KMdOCwPh22xFa_CrfD7A_4nO_MZg&s',
      company: 'Sharingan Solutions',
    },
    {
      name: 'Sakura Haruno',
      username: 'sakura.codes',
      bio: 'Fullstack Developer especializada en salud digital y backend con Node.js. Precisión y potencia en cada línea de código.',
      location: 'Konoha',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqQOufc6gTOT0pLzq1EYv4cbKo39QFV2w9wQ2ehfuFtGtIpUvxPDq5msPmsGDIlyKv5Q',
      company: 'Medical Devs Inc.',
    },
    {
      name: 'Sasuke Uchiha',
      username: 'uchihaTech',
      bio: 'Backend ninja. Le apasiona trabajar solo, escribir microservicios oscuros en Rust y escalar bases de datos como un renegado.',
      location: 'Itinerante',
      image: 'https://cdn.pixabay.com/photo/2023/04/04/06/08/anime-7898569_1280.png',
      company: 'Uchiha Cloud Systems',
    },
    {
      name: 'Guts',
      username: 'berserkDev',
      bio: 'Desarrollador freelance con una espada enorme de experiencia. Fan del desarrollo con Go y arquitecturas monolíticas sólidas.',
      location: 'Midland',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmnY-tHeD_PhWPeId-y19pq1O_RFWf7xvbA&s',
      company: 'Black Swordsman Tech',
    },
  ];
  