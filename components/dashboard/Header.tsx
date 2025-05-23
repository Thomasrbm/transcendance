import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Activity, BarChart, LogOut, Settings } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/i18n-client"

interface HeaderProps {
  locale: string
}

export function Header({ locale }: HeaderProps) {
  const t = useI18n()

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-10">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">{t('common.appName')}</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <Settings className="h-5 w-5" />
          </Button>
          <Link href={`/${locale}/stats`}>
            <Button variant="ghost" size="sm">
              <BarChart className="h-5 w-5" />
            </Button>
          </Link>
          <LanguageSwitcher />
          <ThemeToggle />
          <Link href={`/${locale}`}>
            <Button variant="ghost" size="sm">
              <LogOut className="h-5 w-5" />
            </Button>
          </Link>
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=JD" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
} 
