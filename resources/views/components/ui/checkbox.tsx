import { cn } from '#lib/utils'

const Checkbox = ({ class: className, ...props }: JSX.IntrinsicElements['input']) => (
  <input
    type="checkbox"
    class={cn(
      'h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  />
)

export { Checkbox }
