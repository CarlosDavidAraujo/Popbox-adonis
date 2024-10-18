import { buttonVariants } from '#components/ui/button'
import Form from '#models/form'
import { DashboardLayout } from '../../layouts/dashboard-layout.js'
import { Layout } from '../../layouts/layout.js'
import { DocumentsList } from './documents-list.js'

export function DocumentsPage({ forms }: { forms: Form[] }) {
  return (
    <Layout>
      <DashboardLayout>
        <main class="flex flex-col gap-4">
          <div class="flex gap-2 ">
            {forms.map((form) => (
              <a href={`/forms/${form.id}`} class={buttonVariants()}>
                <i data-lucide="plus-circle" class="w-4 h-4 mr-2" /> {form.title}
              </a>
            ))}
          </div>
          <DocumentsList />
        </main>
      </DashboardLayout>
    </Layout>
  )
}
