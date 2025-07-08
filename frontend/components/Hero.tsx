import { ChartBarIcon, ShieldCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Advanced DeFi Analytics
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Multi-Tier Staking Platform
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto animate-slide-up">
            Stake STX tokens, earn enhanced rewards through our tier system, and participate in governance with advanced analytics and emergency features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button className="btn-primary text-lg px-8 py-4">
              Start Staking
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <CurrencyDollarIcon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Multi-Tier Rewards</h3>
            <p className="text-white/70">Up to 2x multiplier based on staking amount and lock period</p>
          </div>
          <div className="card text-center">
            <ChartBarIcon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Advanced Analytics</h3>
            <p className="text-white/70">Real-time tracking of positions, health factors, and rewards</p>
          </div>
          <div className="card text-center">
            <ShieldCheckIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Governance & Security</h3>
            <p className="text-white/70">Participate in governance and benefit from emergency protections</p>
          </div>
        </div>
      </div>
    </div>
  )
}
