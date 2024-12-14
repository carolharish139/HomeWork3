const fs = require('fs');
const path = require('path');

// פונקציה לקרוא קובץ ולהחזיר את השורות שלו
function readLines(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return content.split('\n').filter(line => line.trim() !== '');
}

// קבצי הקלט
const file1 = path.join(__dirname, 'input1.txt');
const file2 = path.join(__dirname, 'input2.txt');
const file3 = path.join(__dirname, 'input3.txt');

// קריאת השורות מכל קובץ
const lines1 = readLines(file1);
const lines2 = readLines(file2);
const lines3 = readLines(file3);

// יצירת הפלט לפי הדרישות
const outputLines = [
  lines1[0], // שורה אחת מקובץ ראשון
  lines2[0], // שורה אחת מקובץ שני
  lines3[0], // שורה אחת מקובץ שלישי
  lines1.slice(0, 2).join('\n'), // שתי שורות מקובץ ראשון
  lines2.slice(0, 2).join('\n'), // שתי שורות מקובץ שני
  lines3.slice(0, 2).join('\n'), // שתי שורות מקובץ שלישי
];

// כתיבת השורות לקובץ חדש
const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, outputLines.join('\n\n'), 'utf8');

console.log('קובץ הפלט נוצר בהצלחה: output.txt');
