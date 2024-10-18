import Document from '#models/document'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class DocumentService {
  constructor(protected ctx: HttpContext) {}

  create(formId: number, metadata: object) {
    return Document.create({ formId, departmentId: this.ctx.auth.user?.departmentId!, metadata })
  }

  findMany() {
    return Document.query().preload('form')
  }

  findOne(id: number) {
    return Document.query().where('id', id).preload('form').firstOrFail()
  }

  findManyBySessionDepartment() {
    const userDepartmentId = this.ctx.auth.user?.departmentId!
    return Document.query()
      .where('departmentId', userDepartmentId)
      .orWhereHas('processings', (query) => {
        query.where('destinationDepartmentId', userDepartmentId!)
      })
      .preload('form')
      .preload('department')
  }
}
