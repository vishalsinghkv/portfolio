import type { ComponentProps } from 'react'
import { FileDown } from 'lucide-react'
import { resume } from '../data/portfolio'

type ResumeDownloadProps = ComponentProps<'a'> & {
  showIcon?: boolean
  children?: React.ReactNode
}

export function ResumeDownload({
  className,
  showIcon = true,
  children = 'Download resume',
  ...props
}: ResumeDownloadProps) {
  const href = `${import.meta.env.BASE_URL}${resume.path}`

  return (
    <a
      href={href}
      download={resume.downloadFilename}
      className={className}
      {...props}
    >
      {showIcon && <FileDown className="h-4 w-4" aria-hidden />}
      {children}
    </a>
  )
}
