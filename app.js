let span = document.querySelectorAll("span");
let arrayOfSpans = Array.from(span);
arrayOfSpans[1].innerText += navigator.deviceMemory + "GB";
arrayOfSpans[2].innerText += navigator.hardwareConcurrency;

var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1)
  OSName = "Windows 10";
if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1)
  OSName = "Windows 8.1";
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1)
  OSName = "Windows 8";
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1)
  OSName = "Windows 7";
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1)
  OSName = "Windows Vista";
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1)
  OSName = "Windows XP";
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1)
  OSName = "Windows 2000";
if (window.navigator.userAgent.indexOf("Mac") != -1) OSName = "Mac/iOS";
if (window.navigator.userAgent.indexOf("X11") != -1) OSName = "UNIX";
if (window.navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";

arrayOfSpans[0].innerText += OSName;

let SixtyfourOr32bit = "Unknown";
if (window.navigator.userAgent.indexOf("x64") != -1) SixtyfourOr32bit = "64bit";
else SixtyfourOr32bit = "32bit";

arrayOfSpans[0].innerText += " ," + SixtyfourOr32bit + ".";

navigator.storage.estimate().then((storageInfo) => {
  arrayOfSpans[4].innerText += ` ${(storageInfo.quota / 1.0e9).toFixed(2)}GB`;
});
