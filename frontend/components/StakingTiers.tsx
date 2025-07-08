import { CheckIcon } from '@heroicons/react/24/outline'

export default function StakingTiers() {
  const tiers = [
    {
      name: 'Tier 1',
      minStake: '1M STX',
      multiplier: '1x',
      features: ['Basic Analytics', 'Standard Rewards', 'Cooldown Protection'],
      color: 'border-blue-500',
      popular: false
    },
    {
      name: 'Tier 2',
      minStake: '5M STX',
      multiplier: '1.5x',
      features: ['Enhanced Analytics', 'Boosted Rewards', 'Governance Rights', 'Priority Support'],
      color: 'border-purple-500',
      popular: true
    },
    {
      name: 'Tier 3',
      minStake: '10M STX',
      multiplier: '2x',
      features: ['Premium Analytics', 'Maximum Rewards', 'Full Governance', 'Emergency Access', 'Custom Features'],
      color: 'border-yellow-500',
      popular: false
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Staking Tiers
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Choose the tier that matches your staking amount and unlock exclusive benefits
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <div key={index} className={`card border-2 ${tier.color} ${tier.popular ? 'transform scale-105' : ''} relative`}>
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-white/70 mb-2">Minimum Stake: {tier.minStake}</p>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {tier.multiplier}
              </p>
              <p className="text-white/70">Reward Multiplier</p>
            </div>
            
            <div className="space-y-3 mb-6">
              {tier.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
              tier.popular 
                ? 'btn-primary' 
                : 'btn-secondary'
            }`}>
              Start Staking
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
