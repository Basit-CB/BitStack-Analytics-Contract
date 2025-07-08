'use client'

import { useState } from 'react'
import { VoteIcon, ClockIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function GovernancePage() {
  const [isConnected, setIsConnected] = useState(false)
  const [selectedTab, setSelectedTab] = useState('proposals')
  const [newProposalText, setNewProposalText] = useState('')

  const proposals = [
    {
      id: 1,
      title: 'Increase Base Reward Rate to 6%',
      description: 'Proposal to increase the base reward rate from 5% to 6% to attract more stakers to the platform.',
      creator: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
      startBlock: 150000,
      endBlock: 151440,
      votesFor: 15000000,
      votesAgainst: 5000000,
      status: 'active',
      timeRemaining: '2 days'
    },
    {
      id: 2,
      title: 'Reduce Cooldown Period to 12 Hours',
      description: 'Proposal to reduce the unstaking cooldown period from 24 hours to 12 hours for better user experience.',
      creator: 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG',
      startBlock: 148000,
      endBlock: 149440,
      votesFor: 8000000,
      votesAgainst: 12000000,
      status: 'rejected',
      timeRemaining: 'Ended'
    },
    {
      id: 3,
      title: 'Add New Tier 4 with 2.5x Multiplier',
      description: 'Proposal to add a new tier level 4 requiring 50M STX minimum stake with 2.5x reward multiplier.',
      creator: 'ST3NBRSFKX28FQ2ZZW6FYZT4N3XQHPJZGWKJ7TMXR',
      startBlock: 152000,
      endBlock: 153440,
      votesFor: 3000000,
      votesAgainst: 1000000,
      status: 'active',
      timeRemaining: '5 days'
    }
  ]

  const handleCreateProposal = () => {
    // Handle proposal creation logic
    console.log('Creating proposal:', newProposalText)
    setNewProposalText('')
  }

  const handleVote = (proposalId: number, voteFor: boolean) => {
    // Handle voting logic
    console.log('Voting on proposal', proposalId, 'Vote for:', voteFor)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Governance
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Participate in protocol governance and shape the future of BitStacks Analytics
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Tabs */}
          <div className="flex space-x-1 bg-white/5 rounded-lg p-1">
            <button
              onClick={() => setSelectedTab('proposals')}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                selectedTab === 'proposals'
                  ? 'bg-blue-500 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Active Proposals
            </button>
            <button
              onClick={() => setSelectedTab('create')}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                selectedTab === 'create'
                  ? 'bg-blue-500 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Create Proposal
            </button>
          </div>

          {/* Proposals Tab */}
          {selectedTab === 'proposals' && (
            <div className="space-y-4">
              {proposals.map((proposal) => (
                <div key={proposal.id} className="card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {proposal.title}
                      </h3>
                      <p className="text-white/70 mb-3">{proposal.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-white/50">
                        <span>by {proposal.creator.slice(0, 8)}...</span>
                        <span>•</span>
                        <span>{proposal.timeRemaining}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      proposal.status === 'active' ? 'bg-green-500/20 text-green-400' :
                      proposal.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {proposal.status}
                    </div>
                  </div>

                  {/* Voting Results */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/70">Votes</span>
                      <span className="text-white/70 text-sm">
                        {(proposal.votesFor + proposal.votesAgainst).toLocaleString()} total
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-white/70 text-sm mr-2">For:</span>
                        <div className="flex-1 bg-gray-700 rounded-full h-2 mr-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-white text-sm">{proposal.votesFor.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-white/70 text-sm mr-2">Against:</span>
                        <div className="flex-1 bg-gray-700 rounded-full h-2 mr-2">
                          <div 
                            className="bg-red-500 h-2 rounded-full"
                            style={{ width: `${(proposal.votesAgainst / (proposal.votesFor + proposal.votesAgainst)) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-white text-sm">{proposal.votesAgainst.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Voting Buttons */}
                  {proposal.status === 'active' && (
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleVote(proposal.id, true)}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                      >
                        <CheckIcon className="h-4 w-4" />
                        <span>Vote For</span>
                      </button>
                      <button
                        onClick={() => handleVote(proposal.id, false)}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                      >
                        <XMarkIcon className="h-4 w-4" />
                        <span>Vote Against</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Create Proposal Tab */}
          {selectedTab === 'create' && (
            <div className="card">
              <h2 className="text-2xl font-semibold text-white mb-6">Create New Proposal</h2>
              
              {isConnected && (
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <VoteIcon className="h-5 w-5" />
                    <span className="font-medium">Your Voting Power: 5,000,000 STX</span>
                  </div>
                  <p className="text-blue-400/80 text-sm mt-1">
                    Minimum required: 1,000,000 STX
                  </p>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Proposal Description
                  </label>
                  <textarea
                    value={newProposalText}
                    onChange={(e) => setNewProposalText(e.target.value)}
                    placeholder="Describe your proposal in detail..."
                    className="input-field w-full h-32 resize-none"
                  />
                  <p className="text-sm text-white/50 mt-1">
                    Maximum 256 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Voting Period
                  </label>
                  <select className="input-field w-full">
                    <option value="1440">1 Day (1,440 blocks)</option>
                    <option value="2880">2 Days (2,880 blocks)</option>
                    <option value="4320">3 Days (4,320 blocks)</option>
                    <option value="7200">5 Days (7,200 blocks)</option>
                    <option value="10080">7 Days (10,080 blocks)</option>
                  </select>
                </div>

                <button
                  onClick={handleCreateProposal}
                  className="btn-primary w-full py-3"
                  disabled={!isConnected || !newProposalText.trim()}
                >
                  {isConnected ? 'Create Proposal' : 'Connect Wallet'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4">Governance Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-white/70">Total Proposals</span>
                <span className="text-white font-semibold">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Active Proposals</span>
                <span className="text-green-400 font-semibold">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Your Votes Cast</span>
                <span className="text-blue-400 font-semibold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Participation Rate</span>
                <span className="text-purple-400 font-semibold">68%</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4">Voting Power</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/70">From Staking</span>
                <span className="text-white">5,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Tier Multiplier</span>
                <span className="text-blue-400">1.5x</span>
              </div>
              <div className="border-t border-white/20 pt-3">
                <div className="flex justify-between">
                  <span className="text-white font-medium">Total Power</span>
                  <span className="text-white font-semibold">5,000,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-white/70 text-sm">Voted on Proposal #1</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-white/70 text-sm">Created Proposal #3</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-white/70 text-sm">Voting power updated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
