import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { DepartmentService } from '#services/department_service'
import Department from '#models/department'
import { DepartmentsList } from '#components/departments/list'
import { DepartmentsPage } from '#pages/departments'
import { createDepartmentValidator } from '#validators/department'
import { DepartmentForm } from '#components/departments/form'
import { HtmxEvents } from '../htmx-events/index.js'

@inject()
export default class DepartmentsController {
  constructor(protected departmentService: DepartmentService) {}

  async displayDepartmentsPage() {
    return DepartmentsPage()
  }

  async displayDepartmentList() {
    const departments = await Department.all()
    return DepartmentsList({ departments })
  }

  async create({ request, response }: HttpContext) {
    const departmentPayload = request.all()
    const [error, data] = await createDepartmentValidator.tryValidate(departmentPayload)

    if (!error) {
      await this.departmentService.create(data)
      response.append('hx-trigger', HtmxEvents.DEPARTMENT_CREATED)
    }

    return DepartmentForm({ errors: error?.messages })
  }
}
