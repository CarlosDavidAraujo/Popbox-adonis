import Department from '#models/department'
import { CreateDepartmentDto } from '#validators/department'

export class DepartmentService {
  create(createDepartmentDto: CreateDepartmentDto) {
    return Department.create(createDepartmentDto)
  }

  findMany() {
    return Department.all()
  }

  findOne(id: number) {
    return Department.find(id)
  }
}
