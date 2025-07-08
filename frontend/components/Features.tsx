import { 
  LockClosedIcon, 
  ClockIcon, 
  TrophyIcon, 
  VoteIcon,
  PauseIcon,
  CalculatorIcon
} from '@heroicons/react/24/outline'

export default function Features() {
  const features = [
    {
      icon: LockClosedIcon,
      title: 'Lock Period Staking',
      description: 'Lock your STX for 1-2 months to earn bonus multipliers up to 1.5x',
      color: 'text-blue-400'
    },
    {
      icon: ClockIcon,
      title: 'Cooldown Protection',
      description: '24-hour cooldown period prevents immediate withdrawals for stability',
      color: 'text-purple-400'
    },
    {
      icon: TrophyIcon,
      title: 'Tier System',
      description: 'Three tiers with increasing benefits based on staking amount',
      color: 'text-yellow-400'
    },
    {
      icon: VoteIcon,
      title: 'Governance Voting',
      description: 'Create proposals and vote on protocol changes with your staked tokens',
      color: 'text-green-400'
    },
    {
      icon: PauseIcon,
      title: 'Emergency Controls',
      description: 'Contract can be paused in emergencies to protect user funds',
      color: 'text-red-400'
    },
    {
      icon: CalculatorIcon,
      title: 'Reward Calculation',
      description: 'Transparent reward calculation based on stake, tier, and multipliers',
      color: 'text-indigo-400'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Platform Features
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Comprehensive DeFi staking solution with advanced features for optimal returns and security
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="card hover:bg-white/15 transition-all duration-300">
            <feature.icon className={`h-8 w-8 ${feature.color} mb-4`} />
            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
            <p className="text-white/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
