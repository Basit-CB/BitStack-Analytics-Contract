'use client'

import { useState } from 'react'
import { LockClosedIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function StakePage() {
  const [amount, setAmount] = useState('')
  const [lockPeriod, setLockPeriod] = useState('0')
  const [isConnected, setIsConnected] = useState(false)

  const lockOptions = [
    { value: '0', label: 'No Lock', multiplier: '1x', description: 'Flexible staking with standard rewards' },
    { value: '4320', label: '1 Month', multiplier: '1.25x', description: 'Lock for 1 month for 25% bonus' },
    { value: '8640', label: '2 Months', multiplier: '1.5x', description: 'Lock for 2 months for 50% bonus' },
  ]

  const handleStake = () => {
    if (!isConnected) {
      setIsConnected(true)
      return
    }
    // Handle staking logic here
    console.log('Staking', amount, 'STX with lock period', lockPeriod)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Stake Your STX
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Lock your STX tokens to earn rewards and participate in platform governance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Staking Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-6">Stake STX Tokens</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Amount to Stake
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="input-field w-full pr-16"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-white/70 text-sm">STX</span>
                  </div>
                </div>
                <p className="text-sm text-white/50 mt-1">
                  Minimum: 1,000,000 STX
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Lock Period
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {lockOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        lockPeriod === option.value
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                      onClick={() => setLockPeriod(option.value)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{option.label}</span>
                        <span className="text-blue-400 font-semibold">{option.multiplier}</span>
                      </div>
                      <p className="text-white/70 text-sm">{option.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleStake}
                className="btn-primary w-full py-4 text-lg"
              >
                {isConnected ? 'Stake STX' : 'Connect Wallet'}
              </button>
            </div>
          </div>

          {/* Current Positions */}
          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-6">Your Staking Position</h2>
            
            {isConnected ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white/70 text-sm">Total Staked</p>
                    <p className="text-white text-xl font-semibold">5,000,000 STX</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/70 text-sm">Current Tier</p>
                    <p className="text-blue-400 font-semibold">Tier 2</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white/70 text-sm">Rewards Earned</p>
                    <p className="text-green-400 text-xl font-semibold">125,000 STX</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/70 text-sm">Multiplier</p>
                    <p className="text-purple-400 font-semibold">1.5x</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button className="btn-secondary flex-1">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    Initiate Unstake
                  </button>
                  <button className="btn-primary flex-1">
                    Claim Rewards
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <LockClosedIcon className="h-12 w-12 text-white/40 mx-auto mb-4" />
                <p className="text-white/70">Connect your wallet to view your staking position</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4">Staking Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-white/70">Total Staked</span>
                <span className="text-white font-semibold">24.5M STX</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Base APY</span>
                <span className="text-green-400 font-semibold">5.0%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Your Voting Power</span>
                <span className="text-blue-400 font-semibold">5,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Cooldown Period</span>
                <span className="text-white/70">24 hours</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4">Tier Benefits</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-white/70">Enhanced Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-white/70">Governance Rights</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white/70">Priority Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-white/70">Exclusive Features</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
