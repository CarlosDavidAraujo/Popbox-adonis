import { cn } from '#lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
)

export type LabelProps = JSX.IntrinsicElements['label'] & VariantProps<typeof labelVariants>

const Label = ({ children, class: className, ...props }: LabelProps) => (
  <label class={cn(labelVariants(), className)} {...props}>
    {children}
  </label>
)

export { Label }
