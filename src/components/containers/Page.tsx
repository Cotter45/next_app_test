export default function PageContainer({
  children,
  classes
}: { 
  children: React.ReactNode
  classes?: string
}) {
  return (
    <main
      className="relative w-full h-full min-h-full flex flex-col z-10"
    >
      <div className={`h-full w-full z-10 flex flex-col items-center ${classes}`}>
        {children}
      </div>
    </main>
  )
}