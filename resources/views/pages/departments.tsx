import { DepartmentForm } from '#components/departments/form'
import { DepartmentsList } from '#components/departments/list'
import { DashboardLayout } from '#layouts/dashboard-layout'
import { Layout } from '#layouts/layout'

export function DepartmentsPage() {
  return (
    <Layout>
      <DashboardLayout>
        <main class="flex flex-col">
          <button class="btn btn-sm btn-primary self-end" x-on:click="$refs.modal.showModal()">
            Adicionar setor
          </button>
          <dialog x-ref="modal" class="modal">
            <div class="modal-box">
              <button
                x-on:click="$refs.modal.close()"
                class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <h3 class="text-lg font-bold">Novo Setor</h3>
              <DepartmentForm />
            </div>
            <div x-on:click="$refs.modal.close()" class="modal-backdrop" />
          </dialog>
          <div class="card card-bordered">
            <div class="card-body">
              <h2 class="card-title">Setores</h2>
              <DepartmentsList />
            </div>
          </div>
        </main>
      </DashboardLayout>
    </Layout>
  )
}
