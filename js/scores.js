function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (e.parameter.action === 'clear') {
      sheet.clearContents();
      return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
    }
    const rows = sheet.getDataRange().getValues();
    const scores = rows
      .filter(row => row[1] && row[1] !== 'test')
      .map(row => { try { return JSON.parse(row[1]); } catch(e) { return null; } })
      .filter(Boolean);
    return ContentService.createTextOutput(JSON.stringify(scores)).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify([])).setMimeType(ContentService.MimeType.JSON);
  }
}
