import Department from '#models/department'
import { HtmxEvents } from '../../../../app/htmx-events/index.js'

export function DepartmentsList({ departments = [] }: { departments?: Department[] }) {
  return (
    <div class="overflow-x-auto">
      <table
        hx-get="/departments/list"
        hx-trigger={`load, ${HtmxEvents.DEPARTMENT_CREATED} from:body`}
        hx-target="find tbody"
        hx-select="tbody"
        hx-swap="outerHTML"
        class="table"
      >
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr class="hover">
              <td>{department.id}</td>
              <td>{department.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
