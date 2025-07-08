import Hero from '@/components/Hero'
import Features from '@/components/Features'
import StakingTiers from '@/components/StakingTiers'
import Analytics from '@/components/Analytics'

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Features />
      <StakingTiers />
      <Analytics />
    </div>
  )
}
