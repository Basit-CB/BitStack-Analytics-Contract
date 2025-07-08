import { TrendingUpIcon, UsersIcon, CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function Analytics() {
  const stats = [
    {
      icon: CurrencyDollarIcon,
      title: 'Total Value Locked',
      value: '$2.4M',
      change: '+12.5%',
      color: 'text-green-400'
    },
    {
      icon: UsersIcon,
      title: 'Active Stakers',
      value: '1,234',
      change: '+8.3%',
      color: 'text-blue-400'
    },
    {
      icon: TrendingUpIcon,
      title: 'Average APY',
      value: '12.5%',
      change: '+2.1%',
      color: 'text-purple-400'
    },
    {
      icon: ChartBarIcon,
      title: 'Rewards Distributed',
      value: '$156K',
      change: '+15.7%',
      color: 'text-yellow-400'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Platform Analytics
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Real-time insights into the platform performance and user engagement
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="card text-center">
            <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-white/70 mb-2">{stat.title}</p>
            <p className={`text-sm font-medium ${stat.color}`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-xl font-semibold text-white mb-4">Staking Distribution</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Tier 1 (1M - 5M STX)</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-700 rounded-full h-2">
                  <div className="w-12 bg-blue-500 h-2 rounded-full"></div>
                </div>
                <span className="text-white text-sm">60%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Tier 2 (5M - 10M STX)</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-700 rounded-full h-2">
                  <div className="w-8 bg-purple-500 h-2 rounded-full"></div>
                </div>
                <span className="text-white text-sm">30%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Tier 3 (10M+ STX)</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-700 rounded-full h-2">
                  <div className="w-4 bg-yellow-500 h-2 rounded-full"></div>
                </div>
                <span className="text-white text-sm">10%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-xl font-semibold text-white mb-4">Lock Period Distribution</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70">No Lock (1x)</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-700 rounded-full h-2">
                  <div className="w-10 bg-green-500 h-2 rounded-full"></div>
                </div>
                <span className="text-white text-sm">50%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">1 Month (1.25x)</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-700 rounded-full h-2">
                  <div className="w-8 bg-blue-500 h-2 rounded-full"></div>
                </div>
                <span className="text-white text-sm">35%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">2 Months (1.5x)</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-700 rounded-full h-2">
                  <div className="w-6 bg-purple-500 h-2 rounded-full"></div>
                </div>
                <span className="text-white text-sm">15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
