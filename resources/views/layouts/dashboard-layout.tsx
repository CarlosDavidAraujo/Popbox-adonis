import { Children } from '@kitajs/html'
import { HttpContext } from '@adonisjs/core/http'
import { cn } from '#lib/utils'
import { Notifications } from '#components/notifications'

const links = [
  { href: '/documents', title: 'Documentos' },
  { href: '/departments', title: 'Setores' },
  { href: '/forms', title: 'Formulários' },
]

export function DashboardLayout({ children }: { children: Children }) {
  const { request } = HttpContext.getOrFail()
  const pathname = request.url()

  return (
    <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div class="hidden border-r bg-muted/40 md:block">
        <div class="flex h-full max-h-screen flex-col gap-2">
          <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="/" class="flex items-center gap-2 font-semibold">
              <i class="h-6 w-6" />
              <span class="">Acme Inc</span>
            </a>
            <Notifications />
          </div>
          <div class="flex-1">
            <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
              {links.map((link) => (
                <a
                  href={link.href}
                  class={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                    pathname === link.href && 'bg-muted text-primary'
                  )}
                >
                  <i class="h-4 w-4" />
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div class="flex flex-col p-4 lg:gap-6 lg:p-6">{children}</div>
    </div>
  )
}
