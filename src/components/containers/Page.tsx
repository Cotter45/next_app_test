export default function PageContainer({
  children,
  classes
}: { 
  children: React.ReactNode
  classes?: string
}) {
  return (
    <main
      className="relative w-full h-[calc(100%-4rem)] min-h-[calc(100%-4rem)] flex flex-col z-10 overflow-y-auto"
    >
      <div className={`h-full w-full z-10 flex flex-col items-center ${classes}`}>
        {children}
      </div>
    </main>
  )
}