# 🌾 Miharina - Agricultural Fintech Platform UI/UX Design

## 🎯 True Product Vision (Based on North Star)

**Mission**: Turn rural supply-chain data into money in farmers' mobile wallets

**North Star Metric**: Verified vanilla transactions where net payment reaches a Malagasy mobile-wallet within [ZZ] calendar days

**Target Users**: Smallholder farmers with feature phones in Sambava & Antalaha (vanilla cooperatives)

---

## 🌾 Agricultural Focus - Core Platform Features

### Primary User Flows

#### 1. **Farmer Payment Flow** 📱💰
```
Feature Phone (SMS) → Price Quote → Deal Confirmation → Mobile Wallet Payment
```

#### 2. **Exporter Dashboard** 🖥️
```
Web Interface → Farmer Network → Deal Management → Payment Processing → Export Documentation
```

#### 3. **Cooperative Admin** 📊
```
Mobile/Web → Member Management → Transaction Tracking → Payment Distribution
```

---

## 👤 Revised User Personas

### Persona 1: **Farmer Rakoto** 👨‍🌾 (PRIMARY USER)
- **Age**: 45
- **Location**: Sambava, Madagascar  
- **Crop**: Vanilla producer (2 hectares)
- **Device**: Feature phone (Orange/Airtel)
- **Tech Comfort**: SMS only, no smartphone
- **Income**: Seasonal, needs quick payment after harvest
- **Challenge**: Gets paid months late, loses 60% of FOB value to middlemen

#### Critical User Journey: Getting Paid
1. **Harvest Ready**: Sends SMS with vanilla quality/quantity
2. **Price Quote**: Receives SMS with current market price + premium
3. **Deal Confirmation**: Replies YES to accept deal
4. **Quality Check**: Local agent verifies vanilla quality
5. **Payment**: Money arrives in Orange Money within 24-48 hours
6. **Export**: Vanilla moves through digital pre-clearance system

### Persona 2: **Exporter Marie-Claire** 👩‍💼 
- **Age**: 38
- **Location**: Antananarivo (office) + regional buying
- **Role**: Vanilla export company owner
- **Goal**: Source quality vanilla, reduce payment delays, improve traceability
- **Challenge**: Managing hundreds of farmers, ensuring quality, export paperwork
- **Device**: Laptop + smartphone

### Persona 3: **Cooperative Leader Hasina** 👩‍💻
- **Age**: 32
- **Location**: Antalaha Cooperative
- **Role**: Manages 150+ farmer members  
- **Goal**: Ensure fair prices, coordinate logistics, distribute payments
- **Challenge**: Manual record-keeping, payment distribution complexity
- **Device**: Basic smartphone + SMS

---

## 📱 SMS-First Design Strategy

### Core Principle: **App is Enhancement, SMS is Core**

#### SMS Flow Examples
```sms
# Farmer sends quality update
TO: 888: VANILLA 50KG GRADE-A READY

# System responds with quote  
FROM 888: Current price 45,000 MGA/kg. 
Total: 2,250,000 MGA. 
Reply YES to accept. Expires 2h.

# Farmer accepts
TO: 888: YES

# Confirmation + next steps
FROM 888: ACCEPTED! Agent visits tomorrow 2PM. 
Payment within 24h after quality check. 
Ref: VAN2025-001234
```

#### Web App = **SMS Management Dashboard**
- Exporters manage SMS campaigns
- View farmer responses in real-time
- Trigger payments to mobile wallets
- Generate export documentation

---

## 🎨 Visual Design System (Revised)

### Colors - **Agricultural Focused**
- **Vanilla Gold**: `#F4D03F` - Success states, payments
- **Madagascar Green**: `#27AE60` - Growth, quality verified  
- **Earth Brown**: `#8D6E63` - Farming, natural
- **Mobile Orange**: `#FF9500` - Orange Money integration
- **Airtel Red**: `#DC2626` - Airtel Money integration

### Typography - **SMS Readable**
- Large, clear fonts optimized for feature phone screens
- High contrast for outdoor visibility
- Numbers prominently displayed (prices, quantities)

---

## 🖥️ Landing Page Design (Revised)

### Hero Section - **Problem-Focused**
```
┌─────────────────────────────────────────────┐
│  🌾 Miharina                    [Français ▼]│
├─────────────────────────────────────────────┤
│                                             │
│     From Harvest to Mobile Wallet          │
│          in 24 Hours                        │
│                                             │
│   Madagascar vanilla farmers get paid      │
│   quickly and fairly - using any phone     │
│                                             │
│   [Join as Farmer] [Export Partner]        │
│                                             │
│     📊 2,247 Farmers Paid | 💰 €2.4M Total │
│                                             │
└─────────────────────────────────────────────┘
```

### Problem Statement Section
```
┌─────────────────────────────────────────────┐
│  ❌ The Problem                             │
│                                             │
│  🕐 Farmers wait 6+ months for payment     │
│  💸 Lose 60% of crop value to middlemen    │
│  📋 No traceability or quality premiums    │
│  📱 Cannot access traditional banking       │
│                                             │
│  ✅ The Solution                            │
│                                             │
│  ⚡ Get paid in 24-48 hours                │
│  💰 Capture fair share of export value     │
│  📊 Quality verified = price premiums      │
│  📱 Works with any phone (SMS + app)       │
└─────────────────────────────────────────────┘
```

### How It Works - **3 Simple Steps**
```
┌─────────────────────────────────────────────┐
│  How Miharina Works                         │
│                                             │
│  1️⃣  📱 SMS Your Harvest                   │
│      Text crop details to 888              │
│      Get instant price quote               │
│                                             │
│  2️⃣  🤝 Accept the Deal                     │
│      Reply YES to lock in price            │
│      Local agent verifies quality          │
│                                             │
│  3️⃣  💰 Get Paid Fast                       │
│      Money hits Orange/Airtel Money        │
│      within 24 hours of verification       │
│                                             │
│  [Try SMS Demo: Send "DEMO" to 888]        │
└─────────────────────────────────────────────┘
```

### Success Stories - **Real Impact**
```
┌─────────────────────────────────────────────┐
│  Real Stories from Madagascar Farmers       │
│                                             │
│  💬 "I got paid 2,100,000 MGA in 1 day.    │
│      Before Miharina, I waited 8 months    │
│      and got only 800,000 MGA."            │
│      - Rakoto, Sambava Vanilla Farmer      │
│                                             │
│  💬 "Our cooperative now gets premium       │
│      prices for Grade-A vanilla. Members   │
│      see money same week as harvest."      │
│      - Hasina, Antalaha Cooperative        │
│                                             │
│  [Read More Stories]                        │
└─────────────────────────────────────────────┘
```

---

## 💰 Payment Integration Focus

### Orange Money / Airtel Money Integration
- Prominent mobile wallet logos
- Real-time payment status
- Transaction history accessible via SMS
- Daily/weekly payment summaries

### Payment Flow Visualization
```
Harvest → Quality Check → Price Confirmation → Mobile Wallet
   ↓           ↓              ↓                    ↓
 SMS Quote → Agent Visit → Accept Deal → Money in 24h
```

---

## 📊 Dashboard Designs (Exporter/Cooperative)

### Exporter Dashboard - **Payment Management**
```
┌─────────────────────────────────────────────┐
│  🌾 Miharina Exporter                      │
├─────────────────────────────────────────────┤
│                                             │
│  📊 This Week                               │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐│
│  │💰 Paid │ │📦 KG   │ │👥 Farm │ │⏰ Avg  ││
│  │47 deals│ │2,340kg │ │23 farms│ │18h pay ││
│  └────────┘ └────────┘ └────────┘ └────────┘│
│                                             │
│  🚨 Pending Payments (Priority)             │
│  ┌─────────────────────────────────────────┐│
│  │🌾 Rakoto Sambava - 50kg Grade A        ││
│  │💰 2,250,000 MGA • Agent verified       ││
│  │📱 +261 34 12 345 67                    ││
│  │[💸 Pay Now] [📋 Details]               ││
│  └─────────────────────────────────────────┘│
│                                             │
│  📈 SMS Campaign Performance                │
│  📱 Messages sent: 234 • Response: 89%     │
│  ✅ Deals accepted: 67 • Completion: 94%   │
└─────────────────────────────────────────────┘
```

---

## 📱 Mobile App Features (Supplementary)

### For Smartphone-Enabled Users
- SMS conversation history
- Payment tracking
- Photo upload for quality verification
- Offline capability with SMS fallback

### Feature Phone SMS Interface
- All core functionality via SMS
- USSD backup for complex operations
- Voice prompts in Malagasy for illiterate users

---

## 🚀 Implementation Priority

### Phase 1: MVP (Q4 2025) - **Sambava Vanilla**
- [ ] SMS gateway integration (Orange/Airtel)
- [ ] Basic web dashboard for exporters
- [ ] Mobile wallet payment API
- [ ] Simple farmer SMS registration

### Phase 2: Scale (Q1-Q2 2026) - **Antalaha Expansion** 
- [ ] Mobile app for smartphone users
- [ ] Cooperative management tools
- [ ] Advanced analytics dashboard
- [ ] Multi-language SMS (Malagasy/French)

### Phase 3: Diversify (Q3 2026) - **Clove Integration**
- [ ] Multi-crop support
- [ ] Advanced quality scoring
- [ ] Export documentation automation
- [ ] Credit scoring API for banks

---

## 🎯 Success Metrics (Aligned with North Star)

### Primary KPIs
- **Payment Speed**: % of farmers paid within 24 hours
- **Price Capture**: % of FOB value reaching farmers
- **SMS Engagement**: Response rates to price quotes
- **Mobile Wallet Integration**: % successful payments

### Secondary KPIs  
- **Quality Premiums**: Price difference for verified grades
- **Farmer Retention**: Repeat users season-over-season
- **Export Documentation**: Average clearance time
- **Cooperative Growth**: Number of active cooperatives

---

This revised design specification aligns with Miharina's true mission: **getting Madagascar's smallholder farmers paid quickly and fairly through mobile-first agricultural fintech**, starting with vanilla in Sambava & Antalaha.

The landing page should now focus on the **payment promise** and **SMS accessibility** rather than general business networking.