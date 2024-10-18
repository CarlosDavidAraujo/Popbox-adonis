import Department from '#models/department'
import Document from '#models/document'
import { HtmxEvents } from '../../../../app/htmx-events/index.js'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '#components/ui/table'
import { Button } from '#components/ui/button'

export function DocumentsList({
  documents = [],
  departments = [],
}: {
  documents?: Document[]
  departments?: Department[]
}) {
  return (
    <Table
      hx-get="/documents/list"
      hx-trigger={`load, ${HtmxEvents.DOCUMENT_CREATED} from:body`}
      hx-target="find tbody"
      hx-select="tbody"
      hx-swap="outerHTML"
      class="border p-4 rounded"
    >
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {documents.map((document) => (
          <TableRow class="group">
            <TableCell>{document.id}</TableCell>
            <TableCell>{document.form.title}</TableCell>
            <TableCell class="gap-2 flex opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
              <Button variant="destructive">
                <i id="icon" hx-preserve data-lucide="x" class="w-4 h-4 text-white fill-white"></i>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
