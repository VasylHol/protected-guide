export const SITE_KEY = "6LevtfApAAAAAN1vJnnwmNXMF536-cPNeU47rKzd";

export const htmlTemplateTrimmer = (code) => {
  // Регулярний вираз для знаходження вмісту між тегами <template>...</template>
  const templateContentRegex = /<template.*?>([\s\S]*?)<\/template>/i;

  // Застосовуємо регулярний вираз до рядка
  const match = code.match(templateContentRegex);

  // Повертаємо вміст між тегами, або порожній рядок, якщо нічого не знайдено
  return match ? match[1] : "";
};

export const vueTemplateTrimmer = (code) => {
  const vueContentRegex = /<script.*?>([\s\S]*?)<\/script>/i;
  const match = code.match(vueContentRegex);
  return match ? match[1] : "";
};

function extractDataBlock(code) {
  // Знайти початок блоку data()
  const dataStartRegex = /data\(\)\s*{\s*/g;
  const dataStartMatch = dataStartRegex.search(code);
  if (!dataStartMatch) {
    return null; // Не знайдено блоку data()
  }
  const dataStartIndex = dataStartMatch;
  console.log('dataStartIndex ====',dataStartIndex)
  // Знайти кінець блоку data()
  const dataEndRegex = /\}\s*/g;
  let dataEndMatch;
  let dataEndIndex = dataStartIndex;
  while ((dataEndMatch = dataEndRegex.exec(code)) !== null) {
    dataEndIndex = dataEndMatch.index + dataEndMatch[0].length;
  }

  // Виділити та повернути блок data()
  return code.substring(dataStartIndex, dataEndIndex);
}

export const dataTrimmer = (code) => {
  const dataString = `
data() {
  return {
    test: 12
  }
}`

const fullTemplate = extractDataBlock(`<template>
  <div>{{}}</div>
</template>

<script>
  export default {
    data(){
      return{
        test: 12
      }
    },
    computed: {
      
    }
  }
</script>`)

console.log('fullTemplate ====', fullTemplate)
// Regular expression to match the data() { return { ... } } structure
  const dataMethodRegex = /data\(\)\s*\{\s*return\s*\{([\s\S]*?)\}\s*\}/;
  // Function to replace the matched structure with an arrow function
  const transformedString = fullTemplate.replace(dataMethodRegex, (match, p1) => {
    // Clean up the inner object content
    const innerContent = p1.trim().split('\n').map(line => line.trim()).join(' ');
    return `() => { return { ${innerContent} }; }`;
  });
  console.log('transformedString ====', transformedString)
  return transformedString;
};
