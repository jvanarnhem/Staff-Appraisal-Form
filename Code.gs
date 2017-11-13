// Replace with your spreadsheet ID
var ss = SpreadsheetApp.openById("14Mtz3LS9iMZHeyJbkm2etrH-veRC8Un05aKNTpGUttQ");
var SheetRecApps = ss.getSheetByName("Appraisals 2017-2018");

function doGet(e) {
  var template = HtmlService.createTemplateFromFile('Form.html');
  var html = template.evaluate();
  return HtmlService.createHtmlOutput(html);
}
  
function postAppraisal(form) {
 
  
  // Construct form element value in an array
  var application = [
    form.name,
    form.job_title,
    form.hire_date,
    form.building_location,
    form.date,
    form.supervisor_name,
    form.response1,
    form.comments1,
    form.response2,
    form.comments2,
    form.response3,
    form.comments3,
    form.response4,
    form.comments4,
    form.response5,
    form.comments5,
    form.response6,
    form.comments6,
    form.response7,
    form.comments7,
    form.response8,
    form.comments8,
    form.response9,
    form.comments9,
    form.response10,
    form.comments10,
    form.response11,
    form.comments11,
    form.response12,
    form.comments12
  ];
  
  SheetRecApps.appendRow(application);
  
  var htmlBody = "<p>An appraisal has been submitted.</p>";
  htmlBody += "<p>Appraisee: " + form.name + "</p>";
  htmlBody += "<p>Date: " + form.date + "</p>";
  
  MailApp.sendEmail({
    to: "jvanarnhem@ofcs.net",
    subject: "Appraisal Confirmation for " + form.name,
    htmlBody: htmlBody
  });
  
  // Return confirmation message to user
  return "Appraisal submitted successfully. \nYou should receive a confirmation email. \nYou may close this window now.";
}