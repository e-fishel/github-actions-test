import { promises as fs } from 'fs'

await fs.writeFile(`thing_${new Date().toLocaleString().replace(/[^\damp]/g, '_')}`, '')