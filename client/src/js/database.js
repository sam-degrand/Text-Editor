import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    console.log('PUT to the database');
    const contactDb = await initdb();
    const tx = contactDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.put({ value: content });
    await request;
    console.log('data saved to the database');
  } catch (error) {
    console.error('Error putting data into the database:', error);
  }
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
