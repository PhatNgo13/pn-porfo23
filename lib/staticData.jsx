import path from 'path';
import { promises as fs } from 'fs';

export async function projectsHandler(req, res) {

      const jsonDirectory = path.join(process.cwd(), 'json');
      const fileContents = await fs.readFile(jsonDirectory + '/projects.json', 'utf8');
      res.status(200).json(fileContents);
    }

export async function skillsHandler(req, res) {

        const jsonDirectory = path.join(process.cwd(), 'json');
        const fileContents = await fs.readFile(jsonDirectory + '/skills.json', 'utf8');
        res.status(200).json(fileContents);
      }  