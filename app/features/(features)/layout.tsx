import FeatureSideNav from "@/components/features/FeatureSideNav"
import FeatureMobileNav from "@/components/features/FeatureMobileNav"

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex pt-16">
      <FeatureSideNav />
      <main className="flex-1 bg-gray-800 pb-16 sm:pb-0">{children}</main>
      <FeatureMobileNav />
    </div>
  )
}
