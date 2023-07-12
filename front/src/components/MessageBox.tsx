type MessageBoxProps = {
  children: React.ReactNode
}

export default function MessageBox({ children }: MessageBoxProps) {
  return <div className="pt-28">{children}</div>
}
