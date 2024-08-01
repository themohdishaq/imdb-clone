

export default function DashboardLayout({
    children,
    team,
    aboutus,
}: Readonly<{
    children: React.ReactNode
    team: React.ReactNode
    aboutus: React.ReactNode
}>) {
    return (
        <div>
            {children}
            <div className="flex gap-4 w-full p-4">
            <div className="w-1/2">
            {aboutus}
            </div>
            <div className="w-1/2">
            {team}
            </div>
            </div>
        </div>
    )
}