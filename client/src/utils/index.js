import FileSaver from 'file-saver';
import { EducationPrompts } from '../constant';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * EducationPrompts.length);
  const randomPrompt = EducationPrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
