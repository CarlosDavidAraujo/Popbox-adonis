import Department from '#models/department'
import Document from '#models/document'
import { route } from '#start/view'
import { HtmxEvents } from '../../../../app/htmx-events/index.js'
import { DocumentForm } from './document-form.js'
import { DocumentSendForm } from './document-send-form.js'

export function DocumentsList({
  documents = [],
  departments = [],
}: {
  documents?: Document[]
  departments?: Department[]
}) {
  return (
    <table
      hx-get={route('documents.index')}
      hx-trigger={`load, ${HtmxEvents.DOCUMENT_CREATED} from:body`}
      hx-target="find tbody"
      hx-select="tbody"
      hx-swap="outerHTML"
      class="border p-4 rounded"
    >
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {documents.map((document) => (
          <tr>
            <td>{document.id}</td>
            <td>{document.name}</td>
            <td x-data="">
              <dialog x-ref="dialog" class="bg-card border rounded shadow-sm p-4">
                <DocumentSendForm document={document} departments={departments} />
              </dialog>
              <dialog x-ref="updateDialog" class="bg-card border rounded shadow-sm p-4">
                <DocumentForm initialData={document} />
              </dialog>
              <button x-on:click="$refs.dialog.showModal()">enviar</button>
              <button x-on:click="$refs.updateDialog.showModal()">editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
