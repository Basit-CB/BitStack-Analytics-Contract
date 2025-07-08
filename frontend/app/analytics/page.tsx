'use client'

import { useState } from 'react'
import { 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  TrendingUpIcon, 
  UsersIcon,
  ArrowUpIcon,
  ArrowDownIcon 
} from '@heroicons/react/24/outline'

export default function AnalyticsPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d')

  const timeframes = [
    { value: '24h', label: '24H' },
    { value: '7d', label: '7D' },
    { value: '30d', label: '30D' },
    { value: '90d', label: '90D' },
  ]

  const metrics = [
    {
      title: 'Total Value Locked',
      value: '$2.45M',
      change: '+12.5%',
      trend: 'up',
      icon: CurrencyDollarIcon,
      color: 'text-green-400'
    },
    {
      title: 'Active Stakers',
      value: '1,234',
      change: '+8.3%',
      trend: 'up',
      icon: UsersIcon,
      color: 'text-blue-400'
    },
    {
      title: 'Average APY',
      value: '12.5%',
      change: '+2.1%',
      trend: 'up',
      icon: TrendingUpIcon,
      color: 'text-purple-400'
    },
    {
      title: 'Total Rewards',
      value: '$186K',
      change: '+15.7%',
      trend: 'up',
      icon: ChartBarIcon,
      color: 'text-yellow-400'
    }
  ]

  const tierDistribution = [
    { name: 'Tier 1', percentage: 60, color: 'bg-blue-500', stakers: 740 },
    { name: 'Tier 2', percentage: 30, color: 'bg-purple-500', stakers: 370 },
    { name: 'Tier 3', percentage: 10, color: 'bg-yellow-500', stakers: 124 }
  ]

  const lockPeriodDistribution = [
    { name: 'No Lock', percentage: 50, color: 'bg-green-500', multiplier: '1x' },
    { name: '1 Month', percentage: 35, color: 'bg-blue-500', multiplier: '1.25x' },
    { name: '2 Months', percentage: 15, color: 'bg-purple-500', multiplier: '1.5x' }
  ]

  const topStakers = [
    { address: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM', amount: '15.2M', tier: 3 },
    { address: 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG', amount: '12.8M', tier: 3 },
    { address: 'ST3NBRSFKX28FQ2ZZW6FYZT4N3XQHPJZGWKJ7TMXR', amount: '8.5M', tier: 2 },
    { address: 'ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5', amount: '7.2M', tier: 2 },
    { address: 'ST2REHHS5J3CERCRBEPMGH7921Q6PYKAADT7JP2VB', amount: '6.1M', tier: 2 }
  ]

  const recentActivity = [
    { type: 'stake', user: 'ST1PQHQ...', amount: '500K STX', time: '2 minutes ago' },
    { type: 'unstake', user: 'ST2CY5V...', amount: '1.2M STX', time: '5 minutes ago' },
    { type: 'reward', user: 'ST3NBRS...', amount: '15K STX', time: '8 minutes ago' },
    { type: 'stake', user: 'ST1SJ3D...', amount: '800K STX', time: '12 minutes ago' },
    { type: 'vote', user: 'ST2REHH...', amount: 'Proposal #1', time: '15 minutes ago' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Analytics Dashboard
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Real-time insights into platform performance, user behavior, and market trends
        </p>
      </div>

      {/* Timeframe Selector */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-1 bg-white/5 rounded-lg p-1">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe.value}
              onClick={() => setSelectedTimeframe(timeframe.value)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                selectedTimeframe === timeframe.value
                  ? 'bg-blue-500 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {timeframe.label}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between mb-2">
              <metric.icon className={`h-6 w-6 ${metric.color}`} />
              <div className={`flex items-center text-sm ${metric.color}`}>
                {metric.trend === 'up' ? (
                  <ArrowUpIcon className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4 mr-1" />
                )}
                {metric.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
            <p className="text-white/70 text-sm">{metric.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Tier Distribution */}
        <div className="card">
          <h3 className="text-xl font-semibold text-white mb-4">Staking Tier Distribution</h3>
          <div className="space-y-4">
            {tierDistribution.map((tier, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${tier.color}`}></div>
                  <span className="text-white/70">{tier.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div 
                      className={`${tier.color} h-2 rounded-full`}
                      style={{ width: `${tier.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-white text-sm w-12">{tier.percentage}%</span>
                  <span className="text-white/70 text-sm w-16">{tier.stakers} users</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lock Period Distribution */}
        <div className="card">
          <h3 className="text-xl font-semibold text-white mb-4">Lock Period Distribution</h3>
          <div className="space-y-4">
            {lockPeriodDistribution.map((period, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${period.color}`}></div>
                  <span className="text-white/70">{period.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div 
                      className={`${period.color} h-2 rounded-full`}
                      style={{ width: `${period.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-white text-sm w-12">{period.percentage}%</span>
                  <span className="text-blue-400 text-sm w-16">{period.multiplier}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Stakers */}
        <div className="card">
          <h3 className="text-xl font-semibold text-white mb-4">Top Stakers</h3>
          <div className="space-y-3">
            {topStakers.map((staker, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-white font-medium">{staker.address.slice(0, 8)}...</p>
                    <p className="text-white/70 text-sm">Tier {staker.tier}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">{staker.amount}</p>
                  <p className="text-white/70 text-sm">STX</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'stake' ? 'bg-green-500' :
                    activity.type === 'unstake' ? 'bg-red-500' :
                    activity.type === 'reward' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`}></div>
                  <div>
                    <p className="text-white text-sm">
                      {activity.user} {activity.type === 'stake' ? 'staked' : 
                       activity.type === 'unstake' ? 'unstaked' :
                       activity.type === 'reward' ? 'claimed' : 'voted on'} {activity.amount}
                    </p>
                    <p className="text-white/50 text-xs">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
