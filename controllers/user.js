import Account from '../models/Account'

export const create = async (request, response) => {
  return response.status(200).json(
      await Account.create(request.body)
  )
}

export const getById = async (request, response) => {
  return response.status(200).json(
      await Account.findById(request.params.body)
  )
}

export const getMany = async (request, response) => {
  return response.status(200).json(
      await Account.find().limit(20)
  )
}

export const update = async (request, response) => {
  return response.status(200).json(
      await Account.findByIdAndUpdate(request.params.body, request.body)
  )
}

export const destroy = async (request, response) => {
  return response.status(200).json(
      await Account.findByIdAndDelete(request.params.body)
  )
}
