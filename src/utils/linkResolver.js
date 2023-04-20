exports.linkResolver = (doc) => {
  // URL for a page type
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  if (doc.type === 'home') {
    return '/'
  }
  // Backup for all other types
  return '/'
}
