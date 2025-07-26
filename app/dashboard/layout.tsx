export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-red-950 via-blue-950 to-purple-950">
      <div className="flex-grow overflow-y-auto text-white">{children}</div>
    </div>
  );
}
