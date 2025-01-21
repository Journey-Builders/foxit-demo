export async function customAppearance() {
  try {
    const response = await fetch('/layoutTemplate.html');
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const template = doc.getElementById('layout-template');
    if (!template) {
      throw new Error('Template with id "layout-template" not found in layoutTemplate.html');
    }
    return template?.innerHTML;
  } catch (error) {
    console.error(error);
  }
}