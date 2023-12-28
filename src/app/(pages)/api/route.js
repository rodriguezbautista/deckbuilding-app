import { HttpError } from '@/app/utils/httperror'
import { userModel } from './models/userModel'
import { query } from './dbConnection'

export async function GET () {
  return Response.json({ text: 'connection successful' })
}

export async function POST (req) {
  try {
    const body = await req.json()
    const { error, value } = userModel.validate(body)
    if (error) {
      throw new HttpError(error, 422)
    }

    await query('test', async (collection) => {
      await collection.insertOne(value)
    })

    return Response.json(value)
  } catch (err) {
    return Response.json(err.message, { status: err.statusCode })
  }
}
