import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LeetcodeIcon from '../components/Icon/LeetcodeIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/lake-4936249_1920.jpg';
import porfolioImage7 from '../images/portfolio/3JS-demo.png';
import appstore from '../images/portfolio/AppStore.png';
import porfolioImage10 from '../images/portfolio/crypto-app.png';
import fbplay from '../images/portfolio/fbplay.png';
import porfolioImage2 from '../images/portfolio/four-word-splashscreen.webp';
import playstore from '../images/portfolio/GooglePlay.png';
import porfolioImage6 from '../images/portfolio/JungleSlots.png';
import porfolioImage1 from '../images/portfolio/ludo-all-star-banner.jpg';
import ludoGameplay from '../images/portfolio/ludo-gameplay.jpg';
import ludoGameplay2 from '../images/portfolio/ludo-gameplay2.jpg';
import ninjaGameplay from '../images/portfolio/ninja-gameplay.png';
import ninjasurvival from '../images/portfolio/ninja-survival.jpg';
import porfolioImage9 from '../images/portfolio/NinjaAdventure.png';
import porfolioImage5 from '../images/portfolio/QuizMaster.png';
import porfolioImage11 from '../images/portfolio/snow-ski-surfing.jpg';
import snowsurf1 from '../images/portfolio/snowsurf-gameplay.png';
import snowsurf2 from '../images/portfolio/snowsurf-gameplay2.png';
import porfolioImage4 from '../images/portfolio/spotmatch.jpg';
import spotGameplay from '../images/portfolio/spotmatch-gameplay1.jpg';
import spotGameplay2 from '../images/portfolio/spotmatch-gameplay2.jpg';
import porfolioImage3 from '../images/portfolio/Wordle.png';
import profilepic from '../images/profilepicture.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ketan Shukla Portfolio',
  description: 'site built to showcase my work and experience',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Projects: 'projects',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ketan Shukla.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Pune based <strong className="text-stone-100">Full Stack Game Developer</strong>, currently working at{' '}
        <strong className="text-stone-100">Bombay Play</strong> helping build hyper social, mobile-first, games that you
        can play with your family and friends.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Gym</strong>, jolting down
        my thoughts in my <strong className="text-stone-100">poems</strong>, or exploring wilderness of{' '}
        <strong className="text-stone-100">Majestic Sahyadri Ranges</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      target: 'resume.pdf',
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg"> */}
      I'm a passionate Software Development Engineer with a strong background in{' '}
      <strong className="text-stone-100"> Unity, Cocos game engine, C++ and TypeScript</strong>. My experience includes
      leading client-side development for games using Unity, collaborating with cross-functional teams, and championing
      Agile/Scrum practices.
      {/* </p> */}
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg"> */}
      With a focus on creating highly performant web applications, I excel in{' '}
      <strong className="text-stone-100">JavaScript, React.js, Redux, and Redux Saga</strong> as well. My commitment to
      testable and maintainable code, along with a keen eye for detail, ensures top-quality software
      {/* </p> */}
    </>
  ),

  aboutItems: [
    {label: 'Location', text: 'Pune, MH', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Games, Gym, Trekking', Icon: SparklesIcon},
    {label: 'Study', text: 'CDAC ACTS Pune', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Bombay Play, PVT. LTD.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Game development',
    skills: [
      {
        name: 'Unity',
        level: 9,
      },
      {
        name: 'Cocos Creator',
        level: 9,
      },
      {
        name: 'Phaser',
        level: 6,
      },
      {
        name: 'Unreal',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Angular',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Rust',
        level: 3,
      },
      {
        name: 'Golang',
        level: 3,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Ludo All Star',
    description: `I had the privilege of working a remarkable project while working at Yoozoo games that achieved remarkable success with over 10 million downloads and an outstanding 4.8 rating. This achievement was made possible through the creation of "Ludo All Star," a captivating Parcheesi game offering engaging gameplay for two to four players on a shared board.
    This project involved a rich blend of technologies, including the CocosCreator Game Engine, Javascript, TypeScript, C++, Python, Android Java, and iOS Xcode ObjectiveC, culminating in a thrilling and globally beloved gaming experience.
    In this project, I played a pivotal role in client-side development, using JavaScript and TypeScript, and created scripting tools to streamline the development process. Utilizing Python, I generated Android projects and employed regular expressions to craft Android gradle files, manifests, and other project details. Additionally, I wrote custom code in Java and Objective C, leveraging platform-specific features, including ad implementation, analytical events, purchases, achievements, notifications scheduling, and crash fixes. Furthermore, I contributed to enhancing the game engine in C++ and Java, particularly focusing on improvements to the sound manager and touch events.
    `,
    url: 'https://ludo-all-star.en.uptodown.com/android',
    image: porfolioImage1,
  },
  {
    title: 'Four Word: Word Battle',
    description: `Four Word Battle: The ultimate word challenge! Exercise your brain with this addictive fusion of word games and competition. Free to download, it offers simple, fun gameplay for all ages. Connect letters, guess hidden words, and enjoy endless word fun in a "Best of Three" format. Download now and conquer the word arena!`,
    url: 'https://apk-dl.com/amp/four-word-word-battle-game/com.fourword.wordcrush.wordgames',
    image: porfolioImage2,
  },
  {
    title: 'Daily Word Puzzle',
    description: `Embark on a thrilling journey with DWP where you'll encounter a world of challenges, excitement, and brain-teasing puzzles. Explore a diverse range of levels, each more intriguing than the last, as you work to unravel the mysteries within. Played a important role in development of the game published by Bombay Play`,
    url: 'https://play.google.com/store/apps/details?id=com.bombayplay.DailyWord&pcampaignid=web_share',
    image: porfolioImage3,
  },
  {
    title: 'Spot Match: Math Puzzle',
    description: `This math puzzle game challenges your logic and skills. Find the right numbers to total 10 and conquer the puzzle board. Hours of math-solving fun await, where longer chains mean higher scores. Simple to learn, yet tough to master, it's a brain-teasing, engaging number game. Test your skills and enjoy the challenge.`,
    url: 'https://play.google.com/store/apps/details?id=com.bombayplay.spot.match.math.puzzle&pcampaignid=web_share',
    image: porfolioImage4,
  },
  {
    title: 'Quiz Master 2D',
    description:
      'Simple Quiz Game Made With Unity 2021.3.17f. Demonstrates the use of Canvas, Buttons, and TextMeshPro',
    url: 'https://ketan-shukla.github.io/QuizMaster2D-Build/',
    image: porfolioImage5,
  },
  {
    title: 'Jungle Slots - Casino Games',
    description: ` Play casino slots machines with game coin rounds and free spins! Feel the excitement from the top lucky casino games while getting big jackpot win! Exciting bonus coins and progressive JACKPOTS are waiting for you!`,
    url: 'https://ketan-shukla.github.io/jungleSlotsBuild/',
    image: porfolioImage6,
  },
  {
    title: 'Virtual Village Babylon',
    description: `There are 5 buttons on the screen in the bottom part a. Entrance: Will take you to the entrance b. Corner A: Will take you to fountain area c. Corner B: Will take you to the right side d. Corner C: Will take you to the road/ main square e. Corner D: Will take you to the home with a car

    All assets in these corners load dynamically except the houses.`,
    url: 'https://ketan-shukla.github.io/VirtualVillageBabylon/',
    image: porfolioImage7,
  },
  {
    title: 'Ninja Survival',
    description: 'survivo.io clone game',
    url: 'https://drive.google.com/drive/folders/1c0XIxf89i5NndOSWOANiXCg-uuPa58GZ',
    image: ninjasurvival,
  },
  {
    title: 'Ninja Adventure',
    description:
      'Play Using WASD Keys! Game Show cases 3d terrain with collectable items fully working inventory, Traps and ester eggs',
    url: 'https://ketan-shukla.github.io/Ninja-Platformer-openworld-puzzle/',
    image: porfolioImage9,
  },
  {
    title: 'CJX Crypto Wallet',
    description: 'React Native crypto wallet to ability add remove crypto currencies and tracking win/loss percentage.',
    url: 'https://github.com/Ketan-Shukla/crypto-wallet-app',
    image: porfolioImage10,
  },
  {
    title: 'Ski Slope Adventure - A 2D Mobile Skiing Game',
    description:
      '"Ski Slope Adventure" is an exhilarating 2D mobile game that transports players to the thrilling world of downhill skiing. With responsive controls and heart-pounding gameplay, this game offers an immersive experience for both casual gamers and skiing enthusiasts. Players must navigate a snow-covered mountain, avoid obstacles, and strive to reach the finish line while enjoying breathtaking winter landscapes.',
    url: 'https://ketan-shukla.github.io/Snow-ski-surf-build/',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Feb 2019',
    location: 'CDAC ACTS, Pashan Pune',
    title: 'PG Diploma Course',
    content: (
      <p>
        Rooted in C-DAC's extensive research and development heritage, the course curriculum, teaching materials, and
        instructional approach draw from the institution's distinguished legacy of designing the PARAM series of
        supercomputers. As a result, PG-DVLSI offers a comprehensive and industry-relevant education, empowering
        participants to excel in the field of VLSI design{' '}
      </p>
    ),
  },
  {
    date: 'June 2018',
    location: 'Sant Gadge Baba Amravati University',
    title: 'Bachelor of Engineering Electronics and Telecommunication',
    content: (
      <p>
        {' '}
        I've gained expertise in DSA, C++, programming languages, semiconductors, and the application of the knowledge
        in communication and problem-solving. The program instilled innovation, technological understanding, and a
        commitment to human values. It prepared me for a dynamic tech landscape, encouraging adaptability and creativity
        for a self-sustaining Digital India. I've honed skills through technology-focused courses, soft skill training,
        workshops, and insights from industry experts.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2022 - Present',
    location: 'Bombay Play Pvt Ltd',
    title: 'Software Development Engineer 2',
    content: (
      <div>
        <ul>
          - Led game development for Daily Word Puzzle and Spot-Match using Cocos and TypeScript, C++. Actively engaged
          in peer code reviews.
        </ul>
        <ul>- Contributed to the development of a new exciting game DragonTile using Unity and C#.</ul>
        <ul>- Built SDKs in C++, Java, and TypeScript to streamline cross-project processes.</ul>
        <ul>- Collaborated with product management and UX teams to ensure the best user experiences.</ul>
        <ul>- Contributing to the development of a new exciting game BlockHeads using CocosCreator and TypeScript.</ul>
      </div>
    ),
  },
  {
    date: 'Sept 2019 - March 2022',
    location: 'Yoozoo Games India',
    title: 'Software Engineer',
    content: (
      <div>
        <ul>- Worked on the development of FourWords and CricketRivals 3D game using Unity and C#.</ul>
        <ul>
          - Contributed to designing and developing multiplayer board games employing C++, Cocos, and
          JavaScript/Typescript.
        </ul>
        <ul>- Built scripting tools and SDKs in C++, and Python to streamline development processes.</ul>
        <ul>- Development of Dashboards for monitoring and managing analytics data from thousands of players</ul>
      </div>
    ),
  },
  {
    date: 'May 2019 - Sept 2019',
    location: 'Route Rabbit',
    title: 'Trainee Engineer',
    content: (
      <div>
        <ul>- Implemented Chatbot for an educational website using React, Node.</ul>
        <ul>- Working on CodeZinger platform to solve problems in C++, Java, C#, Python.</ul>
        <ul>- Development of Progressive Web Application (PWA) using ReactJS Redux and ES6.</ul>
        <ul>- Dockerized test cases in the UNIX environment with Shell scripting and Dockerfile</ul>
        <ul>- Created a test framework for a project using Selenium, unit testing, and pytest</ul>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Shyam Gupta \nTechnical Leader \nSTMicroelectronics',
      text: 'Ketan is a highly motivated and multiskilled individual. Being able to think quickly and come up with a logical solution is his strong suit. He is very much capable of delivering a presentation and explain his ideas.',
      image:
        'https://media.licdn.com/dms/image/D4D03AQHV6sKfCoF2-w/profile-displayphoto-shrink_800_800/0/1693242654376?e=1704326400&v=beta&t=3BHdQrsWav6jmbHLjmSfsO7PtrRkBwCDql8adGH6R64',
    },
    {
      name: 'Kaustubh Mhatre Pre-Silicon Verification Engineer at Intel Corporation',
      text: 'Ketan was my project partner. He has excellent leadership and team management skills. He actively participated in any discussion regarding project and always had a solution to any problem faced in project. He is really a go-to-guy. He also has amazing presentation skills',
      image:
        'https://media.licdn.com/dms/image/C4E03AQE_1brrpU3O1A/profile-displayphoto-shrink_800_800/0/1578933949285?e=1704326400&v=beta&t=IKNfRZIj-bolcJZ2BqaW94rdKs1Xe5ZxAFeAYO1Pq3s',
    },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here are some of the ways you can to reach out to me.',
  items: [
    {
      type: ContactType.Email,
      text: 'ketanshukla94@gmail.com',
      href: 'mailto:ketanshukla94@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Pune MH, India',
      href: 'https://maps.app.goo.gl/HxWSk8V87d8J4zQH7',
    },
    {
      type: ContactType.Instagram,
      text: '@ketanshukla9',
      href: 'https://www.instagram.com/ketanshukla9/',
    },
    {
      type: ContactType.Github,
      text: 'ketan-shukla',
      href: 'https://github.com/ketan-shukla',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ketan-shukla'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://steamcommunity.com/id/mastermindo_0/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ketan-shukla-/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ketanshukla9/'},
  {label: 'Leetcode', Icon: LeetcodeIcon, href: 'https://leetcode.com/Ketan-Shukla/'},
];

interface Media {
  type: string;
  src: string;
}

interface Project {
  title: string;
  description: string;
  readMoreLink: string;
  marketplaces: string[];
  media: Media[];
}

export const projects: Project[] = [
  {
    title: 'Ludo All Star',
    description: `
    ⦿ A real-time multiplayer mobile game with over 10 million downloads and 4.8 rating.
    ⦿ Contribution: Led the frontend development, implemented fixes and improvements engine level code,
    implemented gameplay and monetanization related features.
    ⦿ Implemented features such as battlepass, innovative game modes,
    ⦿ Reduced ANRs by 150% and crash rate by 110%, ensuring a stable player experience.
    ⦿ Integrated SDKs for Ads, Analytics, and Authentication on Android and iOS platforms.
    ⦿ Core game architecture, multiplayer implementation, game engine level fixes, performance optimization.
    `,
    readMoreLink: 'https://ludo-all-star.en.uptodown.com/android',
    marketplaces: [],
    media: [
      {type: 'image', src: ludoGameplay2},
      {type: 'image', src: ludoGameplay},
      {type: 'video', src: 'https://www.youtube.com/embed/J4_SkTpXsDU'},
    ],
  },
  {
    title: 'Spot Match: Math Puzzle',
    description: `
    ⦿ Spot match is a math puzzle game of logic. Spot the right numbers to make 10 and solve puzzle board
    ⦿ 4.0 Star and with over 3 Lakhs downloads 
    ⦿ Contribution: Led the frontend development, implemented core gameplay, created common modules for objectpooling,
    touch gestures, Android Notifications, Integration of rewarded video ads
    ⦿ Implemented Analytics, SDK integration, and conducted code reviews
    ⦿ Participated in brain storming and development of rapid prototyping of the game
    `,
    readMoreLink: 'https://play.google.com/store/apps/details?id=com.bombayplay.spot.match.math.puzzle&hl=en_IN',
    marketplaces: [],
    media: [
      {type: 'image', src: spotGameplay},
      {type: 'image', src: spotGameplay2},
      {type: 'video', src: 'https://www.youtube.com/embed/I8rQPEskPzQ'},
    ],
  },
  {
    title: 'Snowboard Sprint',
    description: `
    ⦿ A captivating 2D snowboarding game with the thrilling objective of finishing each level while performing stunts.
    ⦿ Contribution: Developed core gameplay mechanics, designed challenging levels, and implemented unique features.
    ⦿ Implemented features such as scoring for spins, a timer to track level completion speed, and various hazards to increase difficulty.
    ⦿ Designed diverse jumps and boost mechanisms to enhance gameplay dynamics.
    ⦿ Created multiple levels with increasing challenges to keep players engaged.
    ⦿ Integrated parallax background for a visually appealing and immersive experience.
    ⦿ Core game architecture, level design, feature implementation, performance optimization, and visual enhancement.
`,
    readMoreLink: 'https://github.com/Ketan-Shukla/Snow-ski-surf-build',
    marketplaces: [],
    media: [
      {type: 'image', src: snowsurf1},
      {type: 'image', src: snowsurf2},
      {
        type: 'video',
        src: 'https://www.loom.com/embed/6cb40cba3d1347d0b71af3af68d2fea8?sid=c4731f5a-d077-4751-93ba-02fa860f0e4c',
      },
    ],
  },
  {
    title: 'Ninja 3d Open World Platformer',
    description: `    
    ⦿ A comedic 3D open-world platformer game with engaging ninja gameplay and captivating humor.
    ⦿ Contribution: Created the this demo game for showcasing 3D games, ensuring all features and mechanics were fully functional.
    ⦿ Implemented key features such as interaction systems, navigation fixes, and a comprehensive inventory system.
    ⦿ Enhanced player experience by fixing critical bugs, adding a Hard Mode, and optimizing the character controller.
    ⦿ Reduced compile errors and navigation issues, ensuring a smooth and seamless gaming experience.
    ⦿ Core game architecture, interaction system design, bug fixes, performance optimization, and gameplay enhancement.`,
    readMoreLink: 'https://ketan-shukla.github.io/Ninja-Platformer-openworld-puzzle/',
    marketplaces: [],
    media: [
      {type: 'image', src: ninjasurvival},
      {type: 'image', src: ninjaGameplay},
      {
        type: 'video',
        src: 'https://www.loom.com/embed/63fdc8e152af4b23aecb4b0622684d5f?sid=f73307ab-0688-47f8-86ec-9d886e4b787d',
      },
    ],
  },
];

export const StoreButtons = {
  appstore: appstore,
  playstore: playstore,
  fbplay: fbplay,
};
