import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  { name: 'Henrique', email: 'henrique@gmai.com' }
]

export default {
  async index (req: Request, res: Response) {
    return res.json(users)
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService()

    emailService.sendMail({
      to: { 
        name: 'Henrique Camargo', 
        email: 'henrique@gmail.com' 
      },
      message: { 
        subject: 'Bem vindo ao sistema', 
        body: 'Uhuuul seja bem-vindo' 
      }
    })

    return res.send();
  }
}