import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'emails.json');

if (!fs.existsSync(DB_PATH)) {
  fs.writeFileSync(DB_PATH, JSON.stringify([], null, 2));
}

export const getEmails = (): string[] => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const saveEmail = (email: string): boolean => {
  const emails = getEmails();
  if (emails.includes(email)) return false;
  emails.push(email);
  fs.writeFileSync(DB_PATH, JSON.stringify(emails, null, 2));
  return true;
};
