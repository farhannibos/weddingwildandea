# Cara Setup RSVP Wedding - Lengkap

## LANGKAH 1: Siapkan Google Sheets

1. Buka **Google Sheets** baru atau yang sudah ada
2. Pastikan ada sheet dengan nama: **RSVP Undangan** (atau sesuai nama sheet Anda)
3. Di sheet tersebut, buat header di baris 1 dan 2 (merge cells):
   - A1+A2: Waktu Pengumpulan
   - B1+B2: Nama Tamu
   - C1+C2: Jumlah Tamu
   - D1+D2: Status
   - E1+E2: Ucapan

## LANGKAH 2: Buat Google Apps Script

1. Di Google Sheets, klik **Extensions** → **Apps Script**
2. Hapus semua kode yang ada
3. Copy dan paste kode di bawah ini:

```javascript
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
```

4. Klik **ikon disket** (Save) - WAJIB!

## LANGKAH 3: Deploy Apps Script

1. Klik **Deploy** (tombol biru di kanan atas)
2. Klik **New deployment**
3. Klik icon **Select type** → pilih **Web app**
4. Isi form:
   - **Description**: RSVP Wedding
   - **Execute as**: **Me**
   - **Who has access**: **Anyone** ← PENTING!
5. Klik **Deploy**
6. Klik **Done**

## LANGKAH 4: Copy URL Web App

1. Setelah deploy, akan muncul URL seperti:
   ```
   https://script.google.com/macros/s/xxxxxx/exec
   ```
2. **Copy URL tersebut**

## LANGKAH 5: Update Kode Frontend

1. Buka file `components/wedding/rsvp-section.tsx`
2. Cari baris 32 (atau sekitar handleSubmit)
3. Ganti URL lama dengan URL baru Anda:

```javascript
const scriptUrl = "https://script.google.com/macros/s/URL_BARU_ANDA/exec"
```

## LANGKAH 6: Test

1. Buka website undangan
2. Isi form RSVP
3. Klik Kirim
4. Buka Google Sheets - data harusnya sudah masuk!

---

## JIKA TIDAK BERFUNGSI:

### Test Langsung:
Coba buka URL ini di browser baru:
```
https://script.google.com/macros/s/URL_ANDA/exec?name=Test&guests=1&attendance=Hadir&message=Coba
```

Kalau muncul `{"success":true}` berarti Apps Script OK.

### Cek Console Browser:
1. Buka website
2. Klik kanan → Inspect → Console
3. Kirim form RSVP
4. Lihat pesan error di console

### Cek Spreadsheet:
Pastikan sheet名称 persis sama dengan yang di kode. Jika sheet Anda namanya "RSVP Undangan", maka di kode harus sama:
```javascript
let sheet = spreadsheet.getSheetByName("RSVP Undangan");
```

