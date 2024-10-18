import { cn } from '#lib/utils'

const Card = ({ children, class: className, ...props }: JSX.IntrinsicElements['div']) => (
  <div class={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)} {...props}>
    {children}
  </div>
)

const CardHeader = ({ children, class: className, ...props }: JSX.IntrinsicElements['div']) => (
  <div class={cn('flex flex-col space-y-1.5 p-6', className)} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, class: className, ...props }: JSX.IntrinsicElements['h3']) => (
  <h3 class={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props}>
    {children}
  </h3>
)

const CardDescription = ({ children, class: className, ...props }: JSX.IntrinsicElements['p']) => (
  <p class={cn('text-sm text-muted-foreground', className)} {...props}>
    {children}
  </p>
)

const CardContent = ({ children, class: className, ...props }: JSX.IntrinsicElements['div']) => (
  <div class={cn('p-6 pt-0', className)} {...props}>
    {children}
  </div>
)

const CardFooter = ({ children, class: className, ...props }: JSX.IntrinsicElements['div']) => (
  <div class={cn('flex items-center p-6 pt-0', className)} {...props}>
    {children}
  </div>
)

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
