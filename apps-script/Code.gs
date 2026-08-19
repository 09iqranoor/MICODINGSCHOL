/**
 * MI CODING SCHOOL — REGISTRATION WEB APP (Google Apps Script)
 * ---------------------------------------------------------------
 * Deploy this script as a Web App bound to your Google Sheet.
 * See README.md → "Google Sheets Setup" for full step-by-step
 * deployment instructions.
 *
 * Expected Sheet columns (row 1, in this exact order):
 * Registration ID | Date | Time | Student Name | Father's Name | Email |
 * Phone | WhatsApp | City | Age | Selected Course | Education |
 * Preferred Timing | How Did You Hear About Us | Message | Status
 * ---------------------------------------------------------------
 * SECURITY NOTE: This script intentionally contains no API keys,
 * OAuth secrets, or service-account credentials. It only runs with
 * the permissions of whichever Google account deploys it. Do not
 * add credentials here or in the frontend JavaScript.
 */

const SHEET_NAME = "Registrations"; // change if your tab is named differently

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const required = ["fullName", "email", "phone", "whatsapp", "course", "timing"];
    for (const field of required) {
      if (!data[field] || String(data[field]).trim() === "") {
        return jsonResponse({ success: false, message: "Missing required field: " + field });
      }
    }

    const sheet = getSheet();
    const now = new Date();
    const registrationId = data.registrationId || generateRegistrationId();

    sheet.appendRow([
      registrationId,
      Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd"),
      Utilities.formatDate(now, Session.getScriptTimeZone(), "HH:mm:ss"),
      data.fullName || "",
      data.fatherName || "",
      data.email || "",
      data.phone || "",
      data.whatsapp || "",
      data.city || "",
      data.age || "",
      data.course || "",
      data.education || "",
      data.timing || "",
      data.source || "",
      data.message || "",
      "New",
    ]);

    return jsonResponse({ success: true, message: "Registration submitted successfully", registrationId });
  } catch (err) {
    return jsonResponse({ success: false, message: "Unable to submit registration" });
  }
}

// Optional: lets you sanity-check the deployed URL from a browser (GET request).
function doGet(e) {
  return jsonResponse({ success: true, message: "Mi Coding School registration endpoint is live." });
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Registration ID", "Date", "Time", "Student Name", "Father's Name", "Email",
      "Phone", "WhatsApp", "City", "Age", "Selected Course", "Education",
      "Preferred Timing", "How Did You Hear About Us", "Message", "Status",
    ]);
  }
  return sheet;
}

function generateRegistrationId() {
  return "REG-" + Utilities.getUuid().slice(0, 6).toUpperCase();
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
