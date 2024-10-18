import { DashboardLayout } from '../../layouts/dashboard-layout.js'
import { Layout } from '../../layouts/layout.js'
import { FormBuilder } from './form-builder.js'
import { FormEditor } from './form-editor.js'
import { FormPreview } from './form-preview.js'

export function FormsPage() {
  return (
    <Layout>
      <DashboardLayout>
        <main>
          <div
            x-data="{
                preview: true,
                title: '',
                description: '',
                fields: [],
                initialField: {
                  label: '', 
                  name: '', 
                  type: 'text',
                  description: '',
                  required: false,
                },
                newField: {
                  label: '', 
                  name: '', 
                  type: 'text',
                  description: '',
                  required: false,
                },
                resetNewField() {
                  this.newField = {...this.initialField};
                },
                addNewField() {
                  this.fields.push({...this.newField});
                  this.resetNewField();
                  this.$refs.fieldTitleInput.focus();
                },
                removeField(index) {
                  this.fields.splice(index, 1)
                },
                moveField(index, direction) {
                    const newIndex = index + direction;
                    if (newIndex >= 0 && newIndex < this.fields.length) {
                    const temp = this.fields[newIndex];
                    this.fields[newIndex] = this.fields[index];
                    this.fields[index] = temp;
                  }
                },
              }"
            class="grid grid-cols-2 gap-4"
          >
            <FormBuilder />
            <div x-show="preview">
              <FormPreview />
            </div>
            <div x-show="!preview">
              <FormEditor />
            </div>
          </div>
        </main>
      </DashboardLayout>
    </Layout>
  )
}
