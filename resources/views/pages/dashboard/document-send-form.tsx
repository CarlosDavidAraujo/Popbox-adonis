import Department from '#models/department'
import Document from '#models/document'
import { route } from '#start/view'

export function DocumentSendForm({
  document,
  departments,
}: {
  document: Document
  departments: Department[]
}) {
  return (
    <form
      hx-post={route('documents-processing.store')}
      hx-target="this"
      hx-swap="none"
      class="grid gap-4"
    >
      <input type="hidden" name="documentId" value={document.id.toString()} />
      <label>
        Setor:
        <select name="destinationDepartmentId">
          {departments.map((department) => (
            <option value={department.id.toString()}>{department.name}</option>
          ))}
        </select>
      </label>
      <button type="submit">Enviar</button>
    </form>
  )
}
