/**
 * Google Apps Script RSVP Wedding
 * Sheet: RSVP Undangan
 * Kolom: Waktu | Nama | Jumlah | Status | Ucapan
 */

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    
    // Ganti "RSVP Undangan" dengan nama sheet Anda
    let sheet = spreadsheet.getSheetByName("RSVP Undangan");
    if (!sheet) {
      sheet = spreadsheet.getSheets()[0];
    }
    
    // Ambil data dari form
    const name = e.parameter.name || "";
    const guests = e.parameter.guests || "1";
    const attendance = e.parameter.attendance || "";
    const message = e.parameter.message || "";
    
    // Waktu sekarang (WIB)
    const waktu = new Date().toLocaleString("id-ID", { 
      timeZone: "Asia/Jakarta"
    });
    
    // Simpan ke sheet (baris 3 onwards)
    sheet.appendRow([waktu, name, guests, attendance, message]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

