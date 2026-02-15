import pool from '../../lib/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' })
  }

  try {
    // Garantir que a tabela existe (para facilitar setup)
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `
    await pool.query(createTableQuery)

    // Inserir mensagem
    const insertQuery = `
      INSERT INTO contact_messages (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING id
    `
    const result = await pool.query(insertQuery, [name, email, message])

    return res.status(200).json({ 
      success: true, 
      id: result.rows[0].id,
      message: 'Mensagem salva com sucesso!' 
    })
  } catch (error) {
    console.error('Erro ao salvar mensagem:', error)
    return res.status(500).json({ message: 'Erro interno do servidor', error: error.message })
  }
}
