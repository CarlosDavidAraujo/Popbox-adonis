import Form from '#models/form'

export default class FormService {
  findMany() {
    return Form.query().preload('fields')
  }

  findOne(id: number) {
    return Form.query().where('id', id).preload('fields').firstOrFail()
  }
}
