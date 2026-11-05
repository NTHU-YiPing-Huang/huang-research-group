export type Lang = 'en' | 'zh';
export const languages: Lang[] = ['en', 'zh'];
export const content = {
  en: {
    nav: ['Home', 'Research', 'Publications', 'People', 'News', 'Teaching', 'Join Us', 'Contact'],
    eyebrow: 'NATIONAL TSING HUA UNIVERSITY · DEPARTMENT OF PHYSICS',
    headline: 'Uncovering Hidden Structures in Quantum Many-Body Physics',
    intro: 'We investigate how surprising quantum phenomena emerge from the interplay of interactions, symmetry, topology, and information. Our work bridges fundamental theory and new ways of understanding complex quantum matter.',
    explore: 'Explore our research', join: 'Join our group',
    researchTitle: 'Research directions', researchSub: 'Different systems. Shared fundamental questions.',
    highlightsTitle: 'Research highlights', highlightsSub: 'Selected themes and emerging ideas from our group.',
    aboutTitle: 'Curiosity-driven quantum many-body theory',
    aboutText: 'Our group seeks simple organizing principles behind seemingly complicated quantum systems. We combine analytical reasoning, numerical methods, and connections to quantum information to reveal structures that conventional descriptions can miss.',
    newsTitle: 'Latest updates', newsSub: 'News and publications will appear here as they are added.',
    newsEmpty: 'Updates coming soon. Edit src/data/updates.ts to publish announcements.',
    contactTitle: 'Let’s explore quantum matter together.',
    contactText: 'We welcome conversations with prospective students, researchers, and collaborators.',
    contactButton: 'Get in touch', footer: 'Yi-Ping Huang Research Group · National Tsing Hua University',
    readMore: 'Learn more', placeholder: 'Content is being prepared',
    sections: ['Overview', 'Research', 'Publications', 'People', 'News', 'Teaching', 'Join Us', 'Contact']
  },
  zh: {
    nav: ['首頁', '研究方向', '學術發表', '團隊成員', '最新消息', '教學課程', '加入團隊', '聯絡資訊'],
    eyebrow: '國立清華大學 · 物理學系',
    headline: '探索量子多體物理中的隱藏結構',
    intro: '我們研究交互作用、對稱性、拓樸與量子資訊如何共同形塑新奇的量子現象，並致力於尋找理解複雜量子物質的新方法。',
    explore: '探索研究方向', join: '加入研究團隊',
    researchTitle: '研究方向', researchSub: '不同的物理系統，共通的基礎科學問題。',
    highlightsTitle: '研究亮點', highlightsSub: '團隊的重要研究主題與新興想法。',
    aboutTitle: '以基礎問題為核心的量子多體理論',
    aboutText: '我們希望找出複雜量子系統背後簡潔的組織原理，結合解析理論、數值方法及量子資訊的觀點，揭示傳統描述容易忽略的物理結構。',
    newsTitle: '最新消息', newsSub: '後續可持續新增論文與研究室動態。',
    newsEmpty: '消息即將更新。請編輯 src/data/updates.ts 新增公告。',
    contactTitle: '一起探索量子物質的奧秘',
    contactText: '歡迎有興趣的學生、研究者與潛在合作者與我們交流。',
    contactButton: '聯絡我們', footer: '黃一平研究團隊 · 國立清華大學',
    readMore: '了解更多', placeholder: '內容建置中',
    sections: ['概覽', '研究方向', '學術發表', '團隊成員', '最新消息', '教學課程', '加入團隊', '聯絡資訊']
  }
} as const;
export const paths = ['', 'research', 'publications', 'people', 'news', 'teaching', 'join', 'contact'] as const;
export const research = [
  { slug:'spin-liquids', icon:'◈', en:{title:'Quantum Spin Liquids',description:'Fractionalization, emergent gauge structure, and physical-spin descriptions of quantum matter.'},zh:{title:'量子自旋液體',description:'研究分數化、湧現規範結構，以及以物理自旋描述量子物質。'} },
  { slug:'many-body-scars', icon:'✳', en:{title:'Quantum Many-Body Scars',description:'Nonthermal quantum dynamics, interference caging, dualities, and symmetry defects.'},zh:{title:'量子多體疤痕',description:'探索非熱化動力學、干涉囚禁、對偶性與對稱性缺陷。'} },
  { slug:'quantum-resources', icon:'✦', en:{title:'Quantum Information & Resources',description:'Quantum magic, entanglement, and quantum walks as windows into many-body physics.'},zh:{title:'量子資訊與量子資源',description:'透過量子魔性、糾纏與量子行走理解多體物理。'} },
  { slug:'topology-symmetry', icon:'⌘', en:{title:'Topology, Symmetry & Emergence',description:'Finding organizing principles behind complex phases and quantum dynamics.'},zh:{title:'拓樸、對稱性與湧現',description:'尋找複雜量子相與量子動力學背後的組織原理。'} }
];
export const highlights = [
  {number:'01', tag:'QUANTUM MATTER', en:{title:'Reading quantum spin liquids in the language of spins',description:'Toward understanding hidden gauge structures directly through physical observables and density matrices.'},zh:{title:'以物理自旋的語言理解量子自旋液體',description:'透過物理可觀測量與密度矩陣，探索隱藏的規範結構。'}},
  {number:'02', tag:'NONEQUILIBRIUM PHYSICS', en:{title:'Interference-caged many-body scars',description:'How interference and Fock-space structure can protect atypical dynamics in interacting systems.'},zh:{title:'干涉囚禁的量子多體疤痕',description:'理解干涉與 Fock 空間結構如何在交互作用系統中保護特殊動力學。'}},
  {number:'03', tag:'QUANTUM INFORMATION', en:{title:'Quantum resources in dynamical systems',description:'Using quantum walks and resource-theoretic ideas to expose the structure of quantum evolution.'},zh:{title:'動態量子系統中的量子資源',description:'利用量子行走與資源理論，揭示量子演化的深層結構。'}}
];
