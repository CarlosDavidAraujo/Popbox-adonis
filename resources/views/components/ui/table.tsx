import { cn } from '#lib/utils'

const Table = ({ children, class: className, ...props }: JSX.IntrinsicElements['table']) => (
  <table class={cn('w-full caption-bottom text-sm', className)} {...props}>
    {children}
  </table>
)

const TableHeader = ({ children, class: className, ...props }: JSX.IntrinsicElements['thead']) => (
  <thead class={cn('[&_tr]:border-b', className)} {...props}>
    {children}
  </thead>
)

const TableBody = ({ children, class: className, ...props }: JSX.IntrinsicElements['tbody']) => (
  <tbody class={cn('[&_tr:last-child]:border-0', className)} {...props}>
    {children}
  </tbody>
)

const TableFooter = ({ children, class: className, ...props }: JSX.IntrinsicElements['tfoot']) => (
  <tfoot
    class={cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', className)}
    {...props}
  >
    {children}
  </tfoot>
)

const TableRow = ({ children, class: className, ...props }: JSX.IntrinsicElements['tr']) => (
  <tr
    class={cn(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      className
    )}
    {...props}
  >
    {children}
  </tr>
)

const TableHead = ({ children, class: className, ...props }: JSX.IntrinsicElements['th']) => (
  <th
    class={cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  >
    {children}
  </th>
)

const TableCell = ({ children, class: className, ...props }: JSX.IntrinsicElements['td']) => (
  <td class={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)} {...props}>
    {children}
  </td>
)

const TableCaption = ({
  children,
  class: className,
  ...props
}: JSX.IntrinsicElements['caption']) => (
  <caption class={cn('mt-4 text-sm text-muted-foreground', className)} {...props}>
    {children}
  </caption>
)

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
