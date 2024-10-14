import Document from '#models/document'
import { route } from '#start/view'

export function DocumentForm({ initialData }: { initialData?: Document }) {
  return (
    <form
      hx-post={initialData ? undefined : route('documents.store')}
      hx-patch={initialData ? `/documents/${initialData.id}` : undefined}
      class="grid gap-4"
      hx-swap="none"
    >
      <label>
        Nome:
        <input name="name" value={initialData?.name} />
      </label>
      <button type="submit">Salvar</button>
    </form>
  )
}
