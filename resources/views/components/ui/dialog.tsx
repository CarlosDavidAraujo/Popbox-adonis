import { cn } from '#lib/utils'
import { Children } from '@kitajs/html'
import { Button, ButtonProps } from './button.js'

const Dialog = ({ children }: { children: Children }) => {
  return <div x-data="{open: false}">{children}</div>
}

const DialogTrigger = ({ children, ...props }: ButtonProps) => (
  <Button x-on:click="open = true; $refs.dialog.showModal()" {...props}>
    {children}
  </Button>
)

const DialogContent = ({
  class: className,
  children,
  ...props
}: JSX.IntrinsicElements['dialog']) => (
  <div x-show="open">
    <div x-on:click="$refs.dialog.close()" class="fixed inset-0 bg-black/50 backdrop-blur-sm" />
    <dialog
      x-ref="dialog"
      x-on:close="open = false"
      class={cn(
        'w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg relative',
        className
      )}
      {...props}
    >
      {children}
      <button
        x-on:click="$refs.dialog.close()"
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
      >
        <i data-lucide="x" class="h-4 w-4" />
        <span class="sr-only">Close</span>
      </button>
    </dialog>
  </div>
)

const DialogHeader = ({ children, class: className, ...props }: JSX.IntrinsicElements['div']) => (
  <div class={cn('flex flex-col space-y-1.5 text-center sm:text-left mb-6', className)} {...props}>
    {children}
  </div>
)

const DialogFooter = ({ children, class: className, ...props }: JSX.IntrinsicElements['div']) => (
  <div
    class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  >
    {children}
  </div>
)

const DialogTitle = ({ children, class: className, ...props }: JSX.IntrinsicElements['h3']) => (
  <h3 class={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props}>
    {children}
  </h3>
)

const DialogDescription = ({
  children,
  class: className,
  ...props
}: JSX.IntrinsicElements['p']) => (
  <p class={cn('text-sm text-muted-foreground', className)} {...props}>
    {children}
  </p>
)

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
