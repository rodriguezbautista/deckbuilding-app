import { HttpError } from '@/app/utils/httperror'
import { query } from '../../dbConnection'

export async function GET (req, { params }) {
  try {
    if (!params) {
      throw new HttpError('User requested not specified', 403)
    }
    let user
    await query('users', async (collection) => {
      user = await collection.find({ username: params.user }, { projection: { _id: 0, username: 1 } }).toArray()
    })
    return Response.json(user)
  } catch (err) {
    console.log(err)
  }
}
