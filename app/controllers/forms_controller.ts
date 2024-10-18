import type { HttpContext } from '@adonisjs/core/http'
import { FormsPage } from '../../resources/views/pages/forms/page.js'
import { createFormValidator } from '#validators/form'
import Form from '#models/form'
import db from '@adonisjs/lucid/services/db'
import { inject } from '@adonisjs/core'
import FormService from '#services/form_service'
import { FormPage } from '#pages/forms/[formId]/page'

@inject()
export default class FormsController {
  constructor(protected formService: FormService) {}

  async displayFormsPage({}: HttpContext) {
    return FormsPage()
  }

  async displayFormPage({ params }: HttpContext) {
    const form = await this.formService.findOne(params.id)
    return FormPage({ form })
  }

  async create({ request }: HttpContext) {
    const { title, description, fields } = await request.validateUsing(createFormValidator)

    await db.transaction(async (trx) => {
      const form = new Form()
      form.title = title
      form.description = description

      form.useTransaction(trx)
      await form.save()

      await form.related('fields').createMany(fields)
    })
  }
}
