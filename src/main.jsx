import React, { useState } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  Target, 
  Briefcase, 
  Clock, 
  AlertCircle, 
  CheckSquare, 
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  PieChart,
  FileText,
  Home,
  Cpu,
  Users,
  X
} from 'lucide-react';

// Color Palette Variables
const colors = {
  mainBg: '#F2EFE8',
  sidebarBg: '#FFFFFF',
  primaryGreen: '#66897A',
  charcoal: '#1E2923',
  neutral: '#E5E0D5',
  red: '#CE544B',
  cardBg: '#FFFFFF',
  inactive: '#EDE9DE'
};

const SlidesData = [
  { id: 'intro', title: 'Introduction', icon: <Target size={20} /> },
  { id: 'rules', title: 'Community Rules', icon: <Users size={20} /> },
  { id: 'why', title: 'Why This Matters', icon: <TrendingUp size={20} /> },
  { id: 'security', title: 'Security vs. Wealth', icon: <ShieldCheck size={20} /> },
  { id: 'layers', title: 'The 3 Layers', icon: <Layers size={20} /> },
  { id: 'meaning', title: 'What Wealth Means', icon: <PieChart size={20} /> },
  { id: 'saving', title: 'Saving vs. Investing', icon: <ArrowRight size={20} /> },
  { id: 'assets', title: 'Types of Assets', icon: <Briefcase size={20} /> },
  { id: 'compounding', title: 'Power of Time', icon: <Clock size={20} /> },
  { id: 'mistakes', title: 'Common Mistakes', icon: <AlertCircle size={20} /> },
  { id: 'next', title: 'Your Next Move', icon: <CheckSquare size={20} /> },
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState('intro');

  const renderSlide = () => {
    switch (activeSlide) {
      case 'intro': return <Slide1 />;
      case 'rules': return <Slide2 />;
      case 'why': return <Slide3 />;
      case 'security': return <Slide4 />;
      case 'layers': return <Slide5 />;
      case 'meaning': return <Slide6 />;
      case 'saving': return <Slide7 />;
      case 'assets': return <Slide8 />;
      case 'compounding': return <Slide9 />;
      case 'mistakes': return <Slide10 />;
      case 'next': return <Slide11 />;
      default: return <Slide1 />;
    }
  };

  const handleNavClick = (id) => setActiveSlide(id);

  const currentIndex = SlidesData.findIndex(s => s.id === activeSlide);

  return (
    <div className="flex h-screen overflow-hidden font-sans" style={{ backgroundColor: colors.mainBg, color: colors.charcoal }}>
      
      {/* Main Content Area - Slide Deck Layout */}
      <main className="flex-1 flex h-full overflow-hidden w-full relative">
        
        {/* Left Navigation Arrow */}
        <div className="w-16 md:w-24 flex items-center justify-center flex-shrink-0 z-10">
          {currentIndex > 0 && (
            <button 
              onClick={() => handleNavClick(SlidesData[currentIndex - 1].id)}
              className="p-3 md:p-4 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: colors.cardBg, color: colors.charcoal }}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={32} />
            </button>
          )}
        </div>

        {/* Centered Slide Container */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="w-full m-auto flex justify-center transition-opacity duration-500 pt-4 pb-12">
             {renderSlide()}
          </div>
        </div>
           
        {/* Right Navigation Arrow */}
        <div className="w-16 md:w-24 flex items-center justify-center flex-shrink-0 z-10">
          {currentIndex < SlidesData.length - 1 && (
            <button 
              onClick={() => handleNavClick(SlidesData[currentIndex + 1].id)}
              className="p-3 md:p-4 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 text-white"
              style={{ backgroundColor: colors.primaryGreen }}
              aria-label="Next Slide"
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>

      </main>
    </div>
  );
}

// --- Slide Components ---

function Slide1() {
  return (
    <div className="text-center space-y-6 p-10 md:p-16 rounded-2xl shadow-xl w-full max-w-3xl" style={{ backgroundColor: colors.cardBg }}>
      <div className="inline-block p-4 rounded-full mb-4" style={{ backgroundColor: colors.mainBg }}>
        <Target size={56} style={{ color: colors.primaryGreen }} />
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight" style={{ color: colors.charcoal }}>
        Beyond the <br/><span style={{ color: colors.primaryGreen }}>Security Fund</span>
      </h1>
      <h2 className="text-xl md:text-2xl font-light mt-6" style={{ color: colors.charcoal }}>
        Intro to Long-Term Wealth Building
      </h2>
      <div className="w-24 h-1 mx-auto mt-8 rounded-full" style={{ backgroundColor: colors.primaryGreen }}></div>
      <p className="mt-8 text-lg md:text-xl font-medium italic" style={{ color: colors.primaryGreen }}>
        "What comes after financial safety? Building real wealth."
      </p>
    </div>
  );
}

function Slide2() {
  const rules = [
    { title: "BE OPEN, IT'S A SAFE SPACE", text: "Participate in questionnaires, answer us in the chat, talk about yourself and never worry about being judged. It's a safe space." },
    { title: "HAVE YOUR CAMERA OPEN", text: "If possible, always have your camera on. It makes a huge difference because we can see your face, and see if you're all good!" },
    { title: "DO THE ASSIGNMENTS", text: "We don't want you to just show up or watch the recordings, this is why we have designed assignments with specific goals. Skipping assignments takes all the fun out of our journey together!" },
    { title: "ASK AND YOU SHALL RECEIVE!", text: "Ask your questions, and participate in the community, book challenges and in the group. The more you ask from us, the more you get out of this experience." }
  ];

  return (
    <div className="flex flex-col md:flex-row w-full max-w-5xl min-h-[500px] rounded-2xl shadow-xl overflow-hidden" style={{ backgroundColor: colors.cardBg }}>
      <div className="md:w-1/4 p-8 flex items-center justify-center relative bg-[#FEF6F5]">
         <h2 className="md:-rotate-90 whitespace-nowrap text-4xl md:text-5xl font-extrabold tracking-wider" style={{ color: colors.primaryGreen }}>
           Community Rules
         </h2>
      </div>
      <div className="md:w-3/4 p-8 md:p-12 flex flex-col justify-center bg-[#E6E8E3]">
        <div className="space-y-8 relative border-l-[3px] ml-2" style={{ borderColor: '#B0BCB6' }}>
          {rules.map((rule, idx) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute w-5 h-5 rounded-full -left-[11px] top-1" style={{ backgroundColor: colors.primaryGreen }}></div>
              <h3 className="text-lg md:text-xl font-bold mb-2 tracking-wide" style={{ color: colors.primaryGreen }}>{rule.title}</h3>
              <p className="text-sm md:text-base font-medium leading-relaxed" style={{ color: '#6A7874' }}>{rule.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide3() {
  return (
    <div className="p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-4xl" style={{ backgroundColor: colors.cardBg }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3" style={{ color: colors.charcoal }}>
        <TrendingUp style={{ color: colors.primaryGreen }} /> Why This Topic Matters
      </h2>
      
      <div className="space-y-6 text-xl">
        <div className="flex items-center gap-5 p-6 rounded-xl transition-all hover:scale-[1.01]" style={{ backgroundColor: colors.mainBg }}>
          <ShieldCheck className="flex-shrink-0" size={32} style={{ color: colors.primaryGreen }} />
          <p>A Security Fund gives <strong>protection</strong>.</p>
        </div>
        <div className="flex items-center gap-5 p-6 rounded-xl transition-all hover:scale-[1.01]" style={{ backgroundColor: colors.mainBg }}>
          <AlertCircle className="flex-shrink-0" size={32} style={{ color: colors.red }} />
          <p>But protection alone does <strong>not</strong> create wealth.</p>
        </div>
        <div className="flex items-center gap-5 p-6 rounded-xl transition-all hover:scale-[1.01]" style={{ backgroundColor: colors.mainBg }}>
          <CheckSquare className="flex-shrink-0" size={32} style={{ color: colors.primaryGreen }} />
          <p>Saving money is important. <strong>Growing money is the next level.</strong></p>
        </div>
      </div>

      <div className="mt-12 p-8 rounded-xl border-l-4" style={{ backgroundColor: colors.neutral, borderLeftColor: colors.primaryGreen }}>
        <p className="text-2xl font-semibold text-center flex flex-wrap items-center justify-center gap-4">
          <span>The Goal:</span>
          <span className="px-4 py-2 rounded-md text-lg" style={{ backgroundColor: colors.inactive }}>Survival</span>
          <ArrowRight size={24} style={{ color: colors.primaryGreen }}/>
          <span className="px-4 py-2 rounded-md text-lg bg-white border" style={{ borderColor: colors.neutral }}>Stability</span>
          <ArrowRight size={24} style={{ color: colors.primaryGreen }}/>
          <span className="px-4 py-2 rounded-md text-white shadow-md text-lg" style={{ backgroundColor: colors.primaryGreen }}>Growth</span>
        </p>
      </div>
    </div>
  );
}

function Slide4() {
  return (
    <div className="space-y-8 w-full max-w-5xl">
      <h2 className="text-4xl font-bold text-center mb-10" style={{ color: colors.charcoal }}>Security vs. Wealth</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-10 rounded-2xl shadow-lg border-t-8 flex flex-col h-full" style={{ backgroundColor: colors.cardBg, borderColor: colors.neutral }}>
          <div className="flex justify-center mb-6">
            <div className="p-5 rounded-full" style={{ backgroundColor: colors.mainBg }}>
              <ShieldCheck size={40} style={{ color: colors.charcoal }} />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: colors.charcoal }}>Security Fund</h3>
          <ul className="space-y-6 text-xl flex-1">
            <li className="flex items-center gap-4"><div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: colors.neutral }}></div> Protects you</li>
            <li className="flex items-start gap-4"><div className="w-3 h-3 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: colors.neutral }}></div> Helps with unexpected expenses</li>
            <li className="flex items-center gap-4"><div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: colors.neutral }}></div> Creates peace of mind</li>
          </ul>
        </div>

        <div className="p-10 rounded-2xl shadow-lg border-t-8 flex flex-col h-full" style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryGreen }}>
          <div className="flex justify-center mb-6">
            <div className="p-5 rounded-full" style={{ backgroundColor: colors.mainBg }}>
              <TrendingUp size={40} style={{ color: colors.primaryGreen }} />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: colors.primaryGreen }}>Wealth Building</h3>
          <ul className="space-y-6 text-xl flex-1">
            <li className="flex items-center gap-4"><div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: colors.primaryGreen }}></div> Grows your money over time</li>
            <li className="flex items-center gap-4"><div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: colors.primaryGreen }}></div> Creates future freedom</li>
            <li className="flex items-start gap-4"><div className="w-3 h-3 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: colors.primaryGreen }}></div> Helps you own assets, not just save cash</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-xl text-center shadow-md font-bold text-2xl md:text-3xl" style={{ backgroundColor: colors.primaryGreen, color: '#FFF' }}>
        Cash gives safety. Assets create freedom.
      </div>
    </div>
  );
}

function Slide5() {
  return (
    <div className="p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-4xl" style={{ backgroundColor: colors.cardBg }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.charcoal }}>
        The 3 Layers of Money
      </h2>

      <div className="flex flex-col gap-3 max-w-3xl mx-auto">
        <div className="p-6 rounded-t-3xl border-2 flex flex-col items-center text-center transition-transform hover:-translate-y-2 shadow-sm" style={{ backgroundColor: colors.primaryGreen, borderColor: colors.primaryGreen, color: '#FFF' }}>
          <span className="text-sm md:text-base font-bold uppercase tracking-wider mb-2 opacity-80">Layer 3</span>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Growth</h3>
          <p className="text-base md:text-lg">Investing • Ownership • Income-producing assets</p>
        </div>

        <div className="p-6 border-x-2 border-y-2 flex flex-col items-center text-center transition-transform hover:-translate-y-1" style={{ backgroundColor: `${colors.primaryGreen}80`, borderColor: colors.neutral }}>
          <span className="text-sm md:text-base font-bold uppercase tracking-wider mb-2" style={{ color: colors.charcoal }}>Layer 2</span>
          <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: colors.charcoal }}>Stability</h3>
          <p className="text-base md:text-lg" style={{ color: colors.charcoal }}>Debt reduction • Steady saving habits • Predictable cash flow</p>
        </div>

        <div className="p-6 rounded-b-3xl border-2 flex flex-col items-center text-center" style={{ backgroundColor: `${colors.primaryGreen}40`, borderColor: colors.neutral }}>
          <span className="text-sm md:text-base font-bold uppercase tracking-wider mb-2" style={{ color: colors.charcoal }}>Layer 1</span>
          <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: colors.charcoal }}>Security</h3>
          <p className="text-base md:text-lg" style={{ color: colors.charcoal }}>Security Fund • Bill coverage • Breathing room</p>
        </div>
      </div>
    </div>
  );
}

function Slide6() {
  return (
    <div className="p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-5xl" style={{ backgroundColor: colors.cardBg }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.charcoal }}>
        What Wealth Actually Means
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 md:p-8 rounded-2xl space-y-4 flex flex-col justify-center" style={{ backgroundColor: colors.mainBg }}>
          <AlertCircle size={36} style={{ color: colors.red }} />
          <ul className="space-y-3 text-lg md:text-xl font-medium text-gray-800">
            <li>• Wealth is <strong>not just income</strong>.</li>
            <li>• High income does not always equal high net worth.</li>
            <li>• Some people earn a lot and still build nothing.</li>
          </ul>
        </div>
        
        <div className="p-6 md:p-8 rounded-2xl space-y-4 shadow-sm border-2 flex flex-col justify-center" style={{ backgroundColor: '#FFFFFF', borderColor: colors.primaryGreen }}>
          <PieChart size={36} style={{ color: colors.primaryGreen }} />
          <ul className="space-y-3 text-lg md:text-xl font-medium text-gray-800">
            <li>• Wealth = what you own, what grows, and what can pay you later.</li>
            <li>• Wealth is built through <strong>ownership, discipline, and time</strong>.</li>
          </ul>
        </div>
      </div>

      <div className="p-6 md:p-8 rounded-2xl text-center shadow-inner" style={{ backgroundColor: colors.primaryGreen }}>
        <h3 className="text-lg md:text-xl font-semibold text-white/90 mb-4 uppercase tracking-wider">The Wealth Equation</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-white text-lg md:text-xl font-bold">
          <span className="bg-black/20 px-5 py-2.5 rounded-lg shadow-sm">What you OWN</span>
          <span className="text-2xl md:text-3xl font-light">+</span>
          <span className="bg-black/20 px-5 py-2.5 rounded-lg shadow-sm">What GROWS</span>
          <span className="text-2xl md:text-3xl font-light">+</span>
          <span className="bg-black/20 px-5 py-2.5 rounded-lg shadow-sm">What can PAY you later</span>
        </div>
      </div>
    </div>
  );
}

function Slide7() {
  const [activeTab, setActiveTab] = useState('saving');

  return (
    <div className="p-10 md:p-14 rounded-2xl shadow-xl w-full max-w-4xl" style={{ backgroundColor: colors.cardBg }}>
      <h2 className="text-4xl font-bold mb-10 text-center" style={{ color: colors.charcoal }}>Saving vs. Investing</h2>
      
      <div className="flex justify-center mb-10">
        <div className="flex p-2 rounded-xl w-full max-w-lg" style={{ backgroundColor: colors.mainBg }}>
          <button
            onClick={() => setActiveTab('saving')}
            className={`flex-1 py-4 px-6 rounded-lg text-lg font-bold transition-all ${activeTab === 'saving' ? 'shadow-md scale-[1.02]' : 'opacity-70 hover:opacity-100'}`}
            style={{ 
              backgroundColor: activeTab === 'saving' ? '#FFFFFF' : 'transparent',
              color: colors.charcoal
            }}
          >
            Saving
          </button>
          <button
            onClick={() => setActiveTab('investing')}
            className={`flex-1 py-4 px-6 rounded-lg text-lg font-bold transition-all ${activeTab === 'investing' ? 'shadow-md scale-[1.02]' : 'opacity-70 hover:opacity-100'}`}
            style={{ 
              backgroundColor: activeTab === 'investing' ? colors.primaryGreen : 'transparent',
              color: activeTab === 'investing' ? '#FFFFFF' : colors.charcoal
            }}
          >
            Investing
          </button>
        </div>
      </div>

      <div className="min-h-[280px] flex items-center justify-center">
        {activeTab === 'saving' ? (
          <div className="w-full max-w-2xl p-10 rounded-2xl border-2 animate-fadeIn" style={{ borderColor: colors.neutral }}>
             <ul className="space-y-6 text-xl">
                <li className="flex items-center gap-5"><CheckSquare size={28} className="flex-shrink-0" style={{color: colors.primaryGreen}} /> Preserves money</li>
                <li className="flex items-center gap-5"><CheckSquare size={28} className="flex-shrink-0" style={{color: colors.primaryGreen}} /> Lower risk</li>
                <li className="flex items-center gap-5"><CheckSquare size={28} className="flex-shrink-0" style={{color: colors.primaryGreen}} /> Easier access</li>
                <li className="flex items-center gap-5"><CheckSquare size={28} className="flex-shrink-0" style={{color: colors.primaryGreen}} /> Good for short-term needs and safety</li>
             </ul>
          </div>
        ) : (
          <div className="w-full max-w-2xl p-10 rounded-2xl border-2 animate-fadeIn shadow-lg" style={{ borderColor: colors.primaryGreen, backgroundColor: colors.mainBg }}>
             <ul className="space-y-6 text-xl">
                <li className="flex items-center gap-5"><TrendingUp size={28} className="flex-shrink-0" style={{color: colors.primaryGreen}} /> Grows money</li>
                <li className="flex items-center gap-5"><TrendingUp size={28} className="flex-shrink-0" style={{color: colors.primaryGreen}} /> Higher long-term potential</li>
                <li className="flex items-center gap-5"><TrendingUp size={28} className="flex-shrink-0" style={{color: colors.primaryGreen}} /> Requires time and patience</li>
                <li className="flex items-center gap-5"><TrendingUp size={28} className="flex-shrink-0" style={{color: colors.primaryGreen}} /> Good for long-term wealth building</li>
             </ul>
          </div>
        )}
      </div>

      <div className="mt-12 text-center font-bold text-2xl p-5 rounded-xl" style={{ backgroundColor: colors.inactive, color: colors.charcoal }}>
        Key reminder: You need both.
      </div>
    </div>
  );
}

function Slide8() {
  // Updated colors: using pure green for all asset logos (red removed as it implies "bad")
  const assetTypes = [
    { title: 'Business Assets', icon: <Briefcase size={32}/>, items: ['Business ownership', 'Offers', 'Brand', 'Systems'], themeColor: colors.primaryGreen },
    { title: 'Paper Assets', icon: <FileText size={32}/>, items: ['Stocks', 'Index funds', 'Bonds'], themeColor: colors.primaryGreen },
    { title: 'Real Assets', icon: <Home size={32}/>, items: ['Real estate', 'Land', 'Property'], themeColor: colors.primaryGreen },
    { title: 'Intellectual Property', icon: <Cpu size={32}/>, items: ['Courses', 'Books', 'Software', 'Licensing'], themeColor: colors.primaryGreen },
  ];

  return (
    <div className="p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-5xl" style={{ backgroundColor: colors.cardBg }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center" style={{ color: colors.charcoal }}>Main Types of Assets</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {assetTypes.map((asset, idx) => (
          <div key={idx} className="p-6 md:p-8 rounded-xl border-t-4 shadow-sm hover:shadow-md transition-shadow relative" style={{ backgroundColor: colors.mainBg, borderTopColor: asset.themeColor }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-white shadow-sm flex items-center justify-center" style={{ color: asset.themeColor }}>
                {asset.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold" style={{ color: colors.charcoal }}>{asset.title}</h3>
            </div>
            <ul className="space-y-2 md:space-y-3 pl-2 text-base md:text-lg">
              {asset.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: asset.themeColor }}></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide9() {
  const [years, setYears] = useState(10);
  
  // Math logic matching annual compounding with end-of-year contributions
  const baseAmount = 1000;
  const annualContribution = 100 * 12; // $1,200/yr
  const rate = 0.08;

  // The base amount saved exactly: starting + (monthly * 12 * years)
  const savingsOnly = baseAmount + (annualContribution * years);
  
  // Compounded interest total
  const investedAmount = baseAmount * Math.pow(1 + rate, years) + annualContribution * ((Math.pow(1 + rate, years) - 1) / rate);

  // Growth specific to investments
  const investmentGrowthOnly = investedAmount - savingsOnly;

  // Invested amount is always the max for scaling the progress bars properly
  const maxAmount = Math.max(savingsOnly, investedAmount) || 1; 

  return (
    <div className="p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-5xl flex flex-col gap-8" style={{ backgroundColor: colors.cardBg }}>
      <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: colors.charcoal }}>
        The Power of Time & Compounding
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Restored Important Text Points */}
        <div className="space-y-6 text-xl text-gray-800">
           <div className="flex items-start gap-4">
             <div className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: colors.primaryGreen }}></div>
             <p><strong>Starting matters</strong> more than being perfect.</p>
           </div>
           <div className="flex items-start gap-4">
             <div className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: colors.primaryGreen }}></div>
             <p>Small amounts invested consistently can <strong>grow significantly</strong>.</p>
           </div>
           <div className="flex items-start gap-4">
             <div className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: colors.primaryGreen }}></div>
             <p><strong>Compounding</strong> = money earning money.</p>
           </div>
           <div className="flex items-start gap-4">
             <div className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: colors.primaryGreen }}></div>
             <p>Time is one of the biggest <strong>wealth-building advantages</strong>.</p>
           </div>
           <div className="flex items-start gap-4">
             <div className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: colors.primaryGreen }}></div>
             <p>Consistency beats waiting.</p>
           </div>
        </div>

        {/* Right Side: Interactive Visualizer */}
        <div className="p-6 md:p-8 rounded-2xl border-2 shadow-sm" style={{ borderColor: '#E5DFD3', backgroundColor: '#FFFFFF' }}>
          <h3 className="text-xl font-bold mb-8 text-center text-[#1c221e]">Interactive: $1,000 start + $100/mo</h3>
          
          <div className="mb-10 flex items-center gap-6">
            <div className="flex flex-col min-w-[50px]">
              <span className="font-bold text-[#1c221e]">Years:</span>
              <span className="font-extrabold text-2xl text-[#1c221e]">{years}</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="30" 
              value={years} 
              onChange={(e) => setYears(Number(e.target.value))}
              className="flex-1 h-3 rounded-full appearance-none cursor-pointer outline-none transition-all"
              style={{ backgroundColor: '#EBE7E0', accentColor: colors.primaryGreen }}
            />
          </div>

          <div className="space-y-8">
            {/* Saved in Cash Bar */}
            <div>
              <div className="flex justify-between text-[#1c221e] font-medium mb-2">
                <span>Total Contributed (Cash)</span>
                <span className="font-bold text-lg">${Math.round(savingsOnly).toLocaleString()}</span>
              </div>
              <div className="h-7 rounded-full w-full" style={{ backgroundColor: '#F3F0EA' }}>
                <div 
                  className="h-full rounded-full transition-all duration-300" 
                  style={{ backgroundColor: '#232924', width: `${(savingsOnly / maxAmount) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Invested Bar */}
            <div>
              <div className="flex justify-between font-medium mb-2" style={{ color: colors.primaryGreen }}>
                <span>Invested (8% return)</span>
                <span className="font-bold text-lg">${Math.round(investedAmount).toLocaleString()}</span>
              </div>
              <div className="h-7 rounded-full w-full relative flex overflow-hidden" style={{ backgroundColor: '#F3F0EA' }}>
                <div 
                  className="h-full transition-all duration-300" 
                  style={{ backgroundColor: '#232924', width: `${(savingsOnly / maxAmount) * 100}%` }}
                ></div>
                <div 
                  className="h-full transition-all duration-300 flex items-center px-2 text-xs font-bold text-white overflow-hidden whitespace-nowrap" 
                  style={{ backgroundColor: colors.primaryGreen, width: `${(investmentGrowthOnly / maxAmount) * 100}%` }}
                >
                  {investmentGrowthOnly > 2000 && `+ $${Math.round(investmentGrowthOnly).toLocaleString()}`}
                </div>
              </div>
              <p className="text-right text-xs mt-2 font-bold" style={{ color: colors.primaryGreen }}>
                That's ${Math.round(investmentGrowthOnly).toLocaleString()} in pure growth!
              </p>
            </div>
          </div>
        </div>

      </div>

      <p className="mt-4 text-center italic font-semibold text-xl" style={{ color: '#6A7874' }}>
        The best time to start was earlier. The second-best time is now.
      </p>
    </div>
  );
}

function Slide10() {
  const mistakes = [
    "Waiting too long to start",
    "Thinking you need to be rich before investing",
    "Skipping the Security Fund",
    "Chasing hype without understanding it",
    "Confusing spending with success",
    "Not having a plan"
  ];

  return (
    <div className="p-10 md:p-14 rounded-2xl shadow-xl border-t-8 w-full max-w-4xl" style={{ backgroundColor: colors.cardBg, borderColor: colors.red }}>
      <h2 className="text-4xl font-bold mb-10 flex items-center justify-center gap-4" style={{ color: colors.red }}>
        <AlertCircle size={40} /> Common Wealth-Building Mistakes
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {mistakes.map((mistake, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-5 p-6 rounded-xl border-2 transition-all hover:-translate-y-1 hover:shadow-md"
            style={{ backgroundColor: colors.mainBg, borderColor: colors.neutral }}
          >
            <div className="p-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#FFFFFF' }}>
              <X size={24} style={{ color: colors.red }} />
            </div>
            <p className="font-semibold text-lg" style={{ color: colors.charcoal }}>{mistake}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide11() {
  const [selectedMove, setSelectedMove] = useState(null);

  const moves = [
    { label: "Strengthen my Security Fund", advice: "Automate a weekly transfer to a high-yield savings account until you hit 3-6 months of basic expenses." },
    { label: "Reduce high-interest debt", advice: "List all debts today. Pick the one with the highest interest rate and aggressively allocate any extra cash to it." },
    { label: "Learn about one investment type", advice: "Spend 30 minutes this week reading about low-cost index funds. Don't buy yet, just understand how they work." },
    { label: "Start a separate long-term wealth account", advice: "Open a brokerage or specific retirement account today, even if you only fund it with $10 to start." },
    { label: "Create a new income-producing asset", advice: "Brainstorm 3 ideas for a digital product or side hustle. Pick one to outline and begin this weekend." },
    { label: "Set up an automatic monthly transfer", advice: "Log into your bank right now and set up a recurring transfer to your investment account right after payday." }
  ];

  return (
    <div className="p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-4xl" style={{ backgroundColor: colors.cardBg }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: colors.charcoal }}>
        Your Next Wealth Move
      </h2>
      <p className="text-center mb-8 text-lg md:text-xl text-gray-600"></p>

      <div className="space-y-3 md:space-y-4 mb-8">
        {moves.map((move, idx) => (
          <label 
            key={idx} 
            className={`flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-xl border-2 cursor-pointer transition-all ${selectedMove === move.label ? 'shadow-md transform scale-[1.01]' : 'hover:bg-gray-50'}`}
            style={{ 
              borderColor: selectedMove === move.label ? colors.primaryGreen : colors.neutral,
              backgroundColor: selectedMove === move.label ? `${colors.primaryGreen}10` : colors.mainBg
            }}
          >
            <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0`} style={{ borderColor: selectedMove === move.label ? colors.primaryGreen : '#999' }}>
              {selectedMove === move.label && <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full" style={{ backgroundColor: colors.primaryGreen }}></div>}
            </div>
            <input 
              type="radio" 
              name="nextMove" 
              className="hidden" 
              value={move.label}
              onChange={() => setSelectedMove(move.label)}
            />
            <span className={`font-semibold text-base md:text-lg ${selectedMove === move.label ? '' : 'text-gray-700'}`} style={{ color: selectedMove === move.label ? colors.primaryGreen : '' }}>
              {move.label}
            </span>
          </label>
        ))}
      </div>

      {selectedMove && (
        <div className="p-5 md:p-6 rounded-xl text-center animate-fadeIn text-white shadow-md flex flex-col gap-2" style={{ backgroundColor: colors.primaryGreen }}>
          <span className="font-bold text-lg md:text-xl uppercase tracking-wider opacity-90">Next Step Unlocked</span>
          <p className="text-base md:text-lg font-medium">
            {moves.find(m => m.label === selectedMove)?.advice}
          </p>
        </div>
      )}

      <div className="mt-8 md:mt-10 p-6 md:p-8 rounded-xl text-center border-2" style={{ backgroundColor: colors.inactive, borderColor: colors.neutral }}>
        <p className="text-xl md:text-2xl font-bold" style={{ color: colors.charcoal }}>
          Don’t try to master everything. <br className="md:hidden" />
          <span style={{ color: colors.primaryGreen }}>Just choose your next right step.</span>
        </p>
      </div>
    </div>
  );
}

import { createRoot } from 'react-dom/client';
createRoot(document.getElementById('root')).render(<App />);
