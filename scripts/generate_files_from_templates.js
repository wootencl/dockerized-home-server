import { config } from 'dotenv';
import { join } from 'path';
import { render } from 'mustache';
import recursiveReaddir from 'recursive-readdir';
import { readFile, outputFile } from 'fs-extra';

// This script will copy all files from the `templates` directory,
// hydrate them with `.env` variabes, then move those into the `build`
// directory maintaining the original directory location _and_ remove
// `.template` from the file name.
// 
// (e.g. - /templates/traefik/traefik.template.yml => /build/traefik/traefik.yml)

const ROOT_DIRECTORY = join(__dirname, '../..');
const TEMPLATES_DIRECTORY = `${ROOT_DIRECTORY}/templates`;
const DOT_ENV_FILE = `${ROOT_DIRECTORY}/.env`;

const IGNORED_FILES = ['**/.DS_Store'];
const CUSTOM_DELIMITER = ['${', '}']


async function generateFilesFromTemplates() {
  // Load up `.env` variables
  config({ 
    path: DOT_ENV_FILE
  });

  const templatePaths = await recursiveReaddir(TEMPLATES_DIRECTORY, IGNORED_FILES);
  for (let i = 0; i < templatePaths.length; i++) {
    const template = await readFile(templatePaths[i], 'utf8');
    const rendered = render(template, process.env, {}, CUSTOM_DELIMITER);
    await outputFile(
      templatePaths[i]
        .replace('templates', 'build')
        .replace('.template', ''),
      rendered
    )
  }
}

generateFilesFromTemplates()