import { 
  BuildingOfficeIcon,
  GlobeAltIcon,
  BanknotesIcon,
  ChartBarIcon,
  TruckIcon,
  UserIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  XMarkIcon,
  CpuChipIcon,
  LinkIcon,
  DevicePhoneMobileIcon,
  SignalIcon
} from '@heroicons/react/24/outline';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl">🚀</span>
              <span className="ml-2 text-xl font-bold text-gray-900">Ranto</span>
            </div>
            <div className="flex items-center space-x-4">
              <select className="border rounded-md px-3 py-1 text-sm">
                <option>🇫🇷 Français</option>
                <option>🇬🇧 English</option>
                <option>🇲🇬 Malagasy</option>
              </select>
              <button className="btn-secondary text-sm px-4 py-2">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-title text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Madagascar's Supply Chain
            <br />
            <span className="text-blue-800">Into Bankable Data</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            One intelligent platform connecting farmers, exporters, banks, and global buyers 
            with AI-powered transparency and mobile-first payments
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-100 px-6 py-3 rounded-full border border-blue-200">
              <span className="text-blue-800 font-semibold">🎯 Vision: 45% FOB price for farmers within 48 hours</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary text-lg px-8 py-4">
              <RocketLaunchIcon className="w-6 h-6 inline mr-2" />
              Start Free Trial
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Watch Demo
            </button>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200">
              Book Consultation
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-800 font-mono">$1.2M+</div>
              <div className="text-gray-600">GMV</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 font-mono">🏢 150+</div>
              <div className="text-gray-600">Exporters</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-amber-600 font-mono">🌍 25</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Segment Experience Selector */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Choose Your Experience
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Different solutions for different needs - from farmers to Fortune 500 companies
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Exporters */}
            <div className="segment-card">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">EXPORTERS</h3>
              <p className="text-gray-600 mb-4">Find suppliers in &lt;2 hours</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">$99/month</div>
              <button className="btn-primary w-full mb-2">
                <BuildingOfficeIcon className="w-5 h-5 inline mr-2" />
                Dashboard →
              </button>
            </div>
            
            {/* Foreign Buyers */}
            <div className="segment-card">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">BUYERS</h3>
              <p className="text-gray-600 mb-4">ESG compliance & traceability</p>
              <div className="text-2xl font-bold text-green-600 mb-4">$200/report</div>
              <button className="btn-success w-full mb-2">
                <GlobeAltIcon className="w-5 h-5 inline mr-2" />
                ESG Portal →
              </button>
            </div>
            
            {/* Banks */}
            <div className="segment-card">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">BANKS</h3>
              <p className="text-gray-600 mb-4">Rural credit scoring API</p>
              <div className="text-2xl font-bold text-purple-600 mb-4">$0.50/call</div>
              <button className="btn-secondary w-full mb-2">
                <BanknotesIcon className="w-5 h-5 inline mr-2" />
                API Docs →
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Development Agencies */}
            <div className="segment-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AGENCIES</h3>
              <p className="text-gray-600 mb-4">Impact data & monitoring</p>
              <div className="text-2xl font-bold text-teal-600 mb-4">$5k/license</div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg w-full mb-2 transition-all duration-200">
                <ChartBarIcon className="w-5 h-5 inline mr-2" />
                Analytics →
              </button>
            </div>
            
            {/* Transport */}
            <div className="segment-card">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">TRANSPORT</h3>
              <p className="text-gray-600 mb-4">Cargo matching optimization</p>
              <div className="text-2xl font-bold text-orange-600 mb-4">$5/load match</div>
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg w-full mb-2 transition-all duration-200">
                <TruckIcon className="w-5 h-5 inline mr-2" />
                LogiHub →
              </button>
            </div>
            
            {/* Farmers */}
            <div className="segment-card border-2 border-green-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  FREE FOREVER
                </span>
              </div>
              <div className="text-4xl mb-4">👨‍🌾</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">FARMERS</h3>
              <p className="text-gray-600 mb-4">Better prices via SMS/app</p>
              <div className="text-2xl font-bold text-green-600 mb-4">Free forever</div>
              <button className="btn-success w-full mb-2">
                <DevicePhoneMobileIcon className="w-5 h-5 inline mr-2" />
                Join SMS →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Matrix */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Problems We Solve
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Before Ranto */}
            <div className="before-after-card before-card">
              <h3 className="text-2xl font-bold text-red-600 mb-8 flex items-center">
                <XMarkIcon className="w-8 h-8 mr-3" />
                BEFORE RANTO
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🕐</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">6 weeks export paperwork</h4>
                    <p className="text-gray-600">Manual processing, delays, inefficiencies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🚫</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Manual compliance audits</h4>
                    <p className="text-gray-600">Expensive, time-consuming, error-prone</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💸</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Farmers get 20% of FOB</h4>
                    <p className="text-gray-600">Middlemen capture most of the value</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🚫</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">No rural credit history</h4>
                    <p className="text-gray-600">Banks can't assess farmer creditworthiness</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🚛</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">40% empty return trips</h4>
                    <p className="text-gray-600">Inefficient logistics, wasted resources</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp supplier search</h4>
                    <p className="text-gray-600">Unstructured, time-consuming sourcing</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* After Ranto */}
            <div className="before-after-card after-card">
              <h3 className="text-2xl font-bold text-green-600 mb-8 flex items-center">
                <CheckCircleIcon className="w-8 h-8 mr-3" />
                AFTER RANTO
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">72 hours with 1-click generation</h4>
                    <p className="text-gray-600">Automated export documentation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🛰️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Satellite-verified certificates</h4>
                    <p className="text-gray-600">Real-time compliance monitoring</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💰</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Farmers get 45% of FOB price</h4>
                    <p className="text-gray-600">Fair value distribution to producers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">24-month blockchain sales ledger</h4>
                    <p className="text-gray-600">Complete transaction history for credit</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI cargo matching & optimization</h4>
                    <p className="text-gray-600">Smart logistics, reduced empty trips</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🤖</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI-ranked supplier recommendations</h4>
                    <p className="text-gray-600">Intelligent matching algorithms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase - Modern & Data-Driven */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Powered by Advanced Technology
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Enterprise-grade infrastructure built for the modern supply chain
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI-Powered Matching */}
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CpuChipIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">🤖 AI-Powered Matching</h3>
              <p className="text-gray-600 mb-2">Smart supplier ranking</p>
              <p className="text-gray-600">ML-based compatibility</p>
            </div>
            
            {/* Satellite Monitoring */}
            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <SignalIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">🛰️ Satellite Monitoring</h3>
              <p className="text-gray-600 mb-2">Real-time farm geo-verification</p>
              <p className="text-gray-600">Automated compliance detection</p>
            </div>
            
            {/* Blockchain Ledger */}
            <div className="text-center p-6">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <LinkIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">🔗 Blockchain Ledger</h3>
              <p className="text-gray-600 mb-2">Immutable sales history</p>
              <p className="text-gray-600">Smart contract payments</p>
            </div>
            
            {/* Advanced Analytics */}
            <div className="text-center p-6">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">📊 Advanced Analytics</h3>
              <p className="text-gray-600 mb-2">Real-time performance metrics</p>
              <p className="text-gray-600">Predictive market intelligence</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {/* Mobile-First Platform */}
            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DevicePhoneMobileIcon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">📱 Mobile-First Platform</h3>
              <p className="text-gray-600 mb-2">SMS + smartphone ready</p>
              <p className="text-gray-600">Orange/Airtel Money</p>
            </div>
            
            {/* Banking Integration */}
            <div className="text-center p-6">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BanknotesIcon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">🏦 Banking Integration</h3>
              <p className="text-gray-600 mb-2">RESTful credit scoring API</p>
              <p className="text-gray-600">Real-time risk assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Impact */}
      <section className="py-20 tech-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Real Impact Stories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md card-hover">
              <div className="flex items-start space-x-4">
                <div className="text-4xl mb-4">💼</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    "Reduced sourcing time from 6 hours to 1.8h. ROI: 340% in 6 months."
                  </h3>
                  <p className="text-gray-600 mb-4">- Marie Claire, Exporter</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">1.8h</div>
                    <div className="text-sm text-gray-600">Average sourcing time</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md card-hover">
              <div className="flex items-start space-x-4">
                <div className="text-4xl mb-4">🌍</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    "Achieved 100% ESG compliance for EU regulations. Audit costs reduced by 60%."
                  </h3>
                  <p className="text-gray-600 mb-4">- Johann Schmidt, EU Importer</p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                    <div className="text-sm text-gray-600">ESG compliance rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div className="bg-white p-8 rounded-xl shadow-md card-hover">
              <div className="flex items-start space-x-4">
                <div className="text-4xl mb-4">🏦</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    "Rural lending default rate dropped to 2.8% vs 12% industry average."
                  </h3>
                  <p className="text-gray-600 mb-4">- Dr. Hasina, BNI Bank</p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">2.8%</div>
                    <div className="text-sm text-gray-600">Default rate</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md card-hover">
              <div className="flex items-start space-x-4">
                <div className="text-4xl mb-4">👨‍🌾</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    "Income increased from 400k to 1.8M MGA per harvest using Ranto."
                  </h3>
                  <p className="text-gray-600 mb-4">- Rakoto, Vanilla Farmer</p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">+350%</div>
                    <div className="text-sm text-gray-600">Income increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phased Market Entry Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Ranto Market Expansion
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Strategic phased rollout across Madagascar's key agricultural regions
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Phase 1: 2025 Q4-Q1</h3>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🌾</span>
                <span className="font-semibold">Vanilla cooperatives</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📍</span>
                <span>Sambava & Antalaha</span>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Phase 2: 2026 Q2-Q3</h3>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🌿</span>
                <span className="font-semibold">Clove farmers</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📍</span>
                <span>Antalaha / Fénérive</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-amber-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Phase 3: 2026 Q4-Q2</h3>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">⚫</span>
                <span className="font-semibold">Graphite & cacao</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">💡</span>
                <span>If vanilla unit economics ≥ 0</span>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Phase 4: 2027 Q3-Q4</h3>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🔋</span>
                <span className="font-semibold">Battery minerals</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🇪🇺</span>
                <span>If EU battery passport enforced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Join the platform that's revolutionizing agricultural finance across Madagascar.
            From feature phones to Fortune 500 companies, we have the right solution for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="btn-primary text-xl px-12 py-6">
              <RocketLaunchIcon className="w-8 h-8 inline mr-3" />
              Start Free Trial
            </button>
            <button className="btn-secondary text-xl px-12 py-6">
              <DevicePhoneMobileIcon className="w-8 h-8 inline mr-3" />
              Join SMS Platform (Free)
            </button>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xl px-12 py-6 rounded-lg transition-all duration-200">
              <UserIcon className="w-8 h-8 inline mr-3" />
              Book Demo
            </button>
          </div>
          
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-800 mb-2">
              <span className="font-bold">Ready to get started?</span> Choose your path:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-semibold text-blue-800">🌾 Farmers:</span> SMS "START" to 888
              </div>
              <div>
                <span className="font-semibold text-green-800">🏢 Business:</span> hello@ranto.mg
              </div>
              <div>
                <span className="font-semibold text-purple-800">🏦 Banks:</span> API documentation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl">🚀</span>
                <span className="ml-2 text-xl font-bold">Ranto</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming Madagascar's supply chain into bankable data. 
                From feature phones to Fortune 500 companies.
              </p>
              <div className="text-sm text-gray-500">
                <p className="font-semibold">Mission:</p>
                <p>"We turn rural supply-chain data into money in farmers' mobile wallets."</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>For Exporters</li>
                <li>For Banks</li>
                <li>For Farmers</li>
                <li>For Buyers</li>
                <li>For Agencies</li>
                <li>For Transport</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Ranto</li>
                <li>Our Mission</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Success Stories</li>
                <li>Blog</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 hello@ranto.mg</li>
                <li>📱 +261 20 123 4567</li>
                <li>📍 Antananarivo, Madagascar</li>
                <li>Help Center</li>
                <li>API Documentation</li>
                <li>Contact Support</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                <p>&copy; 2025 Ranto - Transforming Madagascar's Supply Chain</p>
              </div>
              
              <div className="flex space-x-6 text-sm text-gray-400">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Bank of Madagascar License #MG-2025-001</span>
              </div>
            </div>
            
            <div className="text-center mt-6 text-gray-500">
              <p className="text-sm">
                <span className="font-semibold">Legal & Compliance:</span> Bank of Madagascar Licensed | SOC 2 Compliant | GDPR Ready
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;