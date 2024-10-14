import { Layout } from '../layout.js'
import { DocumentForm } from './document-form.js'
import { DocumentsList } from './documents-list.js'

export function DashboardPage() {
  return (
    <Layout>
      <DocumentForm />
      <DocumentsList />
    </Layout>
  )
}
