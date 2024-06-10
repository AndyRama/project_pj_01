// import { Resend } from 'resend'
// import { render } from '@react-email/render'
// import { unl } from '../../emails/unl'

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST(request: Request, res: Response) {

//   const {email} =  await request.json()

//   const{ data, error} = await resend.emails.send({
//     from: 'Subscribes <contact@resend.dev>',
//     to: [email],
//     subject: 'Subscription Confirmation',
//     html: render(unl),
//   })
// }
