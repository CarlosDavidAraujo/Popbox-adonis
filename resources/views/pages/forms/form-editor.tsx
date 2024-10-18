import { Button } from '#components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '#components/ui/card'
import { Checkbox } from '#components/ui/checkbox'
import { Input } from '#components/ui/input'
import { Label } from '#components/ui/label'
import { fieldTypes } from '#lib/field_types'

export function FormEditor() {
  return (
    <Card>
      <CardHeader class="flex-row gap-2 items-center space-y-0">
        <CardTitle>Editar</CardTitle>
        <Button x-on:click="preview = true">
          <i data-lucide="eye" class="w-4 h-4"></i>
        </Button>
      </CardHeader>
      <CardContent class="space-y-2">
        <template x-data="{ editable: false }" x-for="(field, index) in fields">
          <div class="border p-4 rounded">
            <div x-show="editable" class="grid gap-4">
              <Label class="space-y-2">
                <span>Titulo</span>
                <span class="text-destructive"> *</span>
                <Input x-model="field.label" />
              </Label>

              <Label class="space-y-2">
                <span>Variavel</span>
                <span class="text-destructive"> *</span>
                <Input x-model="field.name" />
              </Label>

              <Label class="space-y-2">
                <span>Descrição</span>
                <Input x-model="field.description" />
              </Label>

              <Label class="space-y-2">
                <span>Tipo de campo</span>
                <span class="text-destructive"> *</span>
                <select x-model="field.type">
                  {fieldTypes.map((types) => (
                    <option value={types}>{types}</option>
                  ))}
                </select>
              </Label>

              <Label class="space-y-2 flex items-center gap-2">
                <Checkbox x-model="field.required" />
                Obrigatório
              </Label>

              <Button x-on:click="editable = false">Salvar</Button>
            </div>

            <div x-show="!editable" class="flex items-center gap-2">
              <span x-text="field.label" class="mr-auto"></span>
              <Button x-on:click="editable = true" variant="ghost">
                <i data-lucide="pen" class="w-4 h-4" />
              </Button>
              <Button x-on:click="moveField(index, -1)" variant="ghost">
                <i data-lucide="chevron-up" class="w-4 h-4" />
              </Button>
              <Button x-on:click="moveField(index, 1)" variant="ghost">
                <i data-lucide="chevron-down" class="w-4 h-4" />
              </Button>
              <Button x-on:click="removeField(index)" variant="destructive">
                <i data-lucide="x" class="w-4 h-4" />
              </Button>
            </div>
          </div>
        </template>
      </CardContent>
    </Card>
  )
}
