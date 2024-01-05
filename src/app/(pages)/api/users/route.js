import { HttpError } from '@/app/utils/httperror'
import { userModel } from '../models/userModel'
import { query } from '../dbConnection'

export async function GET () {
  let res = []
  await query('users', async (collection) => {
    res = await collection.find({}, { projection: { _id: 0 } }).toArray()
  })
  return Response.json(res)
}

export async function POST (req) {
  try {
    const body = await req.json()
    const { error, value } = userModel.validate(body)
    if (error) {
      throw new HttpError(error, 422)
    }

    await query('users', async (collection) => {
      await collection.insertOne(value)
    })

    return Response.json({}, { status: 201 })
  } catch (err) {
    return Response.json(err.message, { status: 409 })
  }
}
