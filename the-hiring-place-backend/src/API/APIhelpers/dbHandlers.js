import util from "util";
import fs from "fs";
import path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const dbPathUsers = path.resolve(process.env.DB_PATH_USERS);
const dbPathEntries = path.resolve(process.env.DB_PATH_ENTRIES);
const dbPathResume = path.resolve(process.env.DB_PATH_RESUME);

async function readUsers() {
  const json = await readFile(dbPathUsers);
  return JSON.parse(json);
};

async function readEntries() {
  const json = await readFile(dbPathEntries);
  return JSON.parse(json);
};

async function readResume() {
  const json = await readFile(dbPathResume);
  return JSON.parse(json);
};

async function writeUsers(users) {
  const json = JSON.stringify(users, null, 2);
  return writeFile(dbPathUsers, json);
};

async function writeEntries(entries) {
  const json = JSON.stringify(entries, null, 2);
  return writeFile(dbPathEntries, json);
};

async function writeResume(resume) {
  const json = JSON.stringify(resume, null, 2);
  return writeFile(dbPathResume, json);
};

async function getUserById(id) {
  const users = await readUsers();

  let matchedUser;
  users.forEach((user) => {
    if (user.id === id) {
      matchedUser = user;
    }
  });

  if (matchedUser) {
    return matchedUser;
  }
  return null;
};

async function getEntryById(id) {
  const entries = await readEntries();

  let matchedEntry;
  entries.forEach((entry) => {
    if (entry.id === id) {
      matchedEntry = entry;
    }
  });

  if (matchedEntry) {
    return matchedEntry;
  }
  return null;
};

async function getResumeById(id) {
  const resume = await readResume();

  let matchedResume;
  resume.forEach((resume) => {
    if (resume.id === id) {
      matchedResume = resume;
    }
  });

  if (matchedResume) {
    return matchedResume;
  }
  return null;
};

async function createUser(newUser) {
  const users = await readUsers();
  users.push(newUser);
  return writeUsers(users);
};

async function createEntry(newEntry) {
  const entries = await readEntries();
  entries.push(newEntry);
  return writeEntries(entries);
};

async function createResume(newResume) {
  const resume = await readResume();
  resume.push(newResume);
  return writeResume(resume);
};

async function updateUser(updatedUser) {
  const users = await readUsers();

  users.forEach((user, i) => {
    if (user.id === updatedUser.id) {
      users[i] = updatedUser;
    }
  });
  return writeUsers(users);
};

async function removeUser(id) {
  const users = await readUsers();
  const remainingUsers = users.filter((entry) => entry.id !== id);
  return writeUsers(remainingUsers);
};

async function removeEntry(id) {
  const entries = await readEntries();
  let remainingEntries = entries.filter((entry) => entry.id !== id);
  return writeEntries(remainingEntries);
};

async function removeResume(id) {
  const resume = await readResume();
  let remainingResume = resume.filter((resume) => resume.id !== id);
  return writeResume(remainingResume);
};

export {
  getUserById,
  getEntryById,
  getResumeById,
  createUser,
  createEntry,
  createResume,
  updateUser,
  removeUser,
  removeEntry,
  removeResume,
  readUsers as getAllUsers,
  readEntries as getAllEntries,
  readResume as getAllResume,
};
