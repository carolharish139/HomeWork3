const fs = require('fs');
const path = require('path');

// נתיב לקובץ JSON
const usersFilePath = path.join(__dirname, 'users.json');

// קריאת תוכן קובץ ה-JSON
fs.readFile(usersFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('שגיאה בקריאת הקובץ:', err);
    return;
  }

  // המרת התוכן למערך משתמשים
  const users = JSON.parse(data);

  // ספירת המשתמשים
  const userCount = users.length;

  // איחוד שמות כל המשתמשים
  const userNames = users.map(user => user.name).join(', ');

  // כתיבת מספר המשתמשים לקובץ user_count.txt
  const userCountFilePath = path.join(__dirname, 'user_count.txt');
  fs.writeFileSync(userCountFilePath, `Number of users: ${userCount}`, 'utf8');

  // כתיבת שמות המשתמשים לקובץ user_names.txt
  const userNamesFilePath = path.join(__dirname, 'user_names.txt');
  fs.writeFileSync(userNamesFilePath, `User names: ${userNames}`, 'utf8');

  console.log('הקבצים נוצרו בהצלחה!');
});
