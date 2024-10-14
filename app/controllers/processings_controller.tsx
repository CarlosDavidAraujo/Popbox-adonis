import Processing from '#models/processing'
import { createDocumentProcessingValidator } from '#validators/document'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProcessingsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Display form to create a new record
   */
  async create({ request }: HttpContext) {
    return (
      <dialog open>
        <form hx-post="">
          <select></select>
        </form>
      </dialog>
    )
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, auth }: HttpContext) {
    const input = await request.validateUsing(createDocumentProcessingValidator)

    await Processing.create({ ...input, senderId: auth.user!.id })
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
