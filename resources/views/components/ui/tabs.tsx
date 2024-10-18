import { cn } from '#lib/utils'
import { Children } from '@kitajs/html'

const Tabs = ({ children }: { children: Children }) => {
  return <div x-data="{tab}">{children}</div>
}

type TabsListProps = JSX.IntrinsicElements['div'] & {}

const TabsList = ({ children, class: className, ...props }: ) => (
  <div
    class={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

const TabsTrigger = ({ children, class: className, ...props }: JSX.IntrinsicElements['button']) => (
  <button
    class={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      className
    )}
    {...props}
  >
    {children}
  </button>
)

const TabsContent = ({ children, class: className, ...props }: JSX.IntrinsicElements['div']) => (
  <div
    class={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export { Tabs, TabsList, TabsTrigger, TabsContent }
