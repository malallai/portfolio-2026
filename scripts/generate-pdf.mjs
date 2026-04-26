import { chromium } from "playwright";
import { spawn } from "child_process";
import fs from "fs";
import path from "path";

const PORT = 4321;
const URL = `http://localhost:${PORT}/cv`;
const OUTPUT_FILE = process.env.PDF_FILENAME + ".pdf";

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, timeout = 10000) {
  const startTime = Date.now();
  while (Date.now() - startTime < timeout) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch (e) {
      // ignore
    }
    await wait(500);
  }
  return false;
}

async function generate() {
  console.log("Starting static preview server...");
  const server = spawn(
    "pnpm",
    ["preview", "--port", PORT.toString(), "--host"],
    {
      stdio: "ignore",
      detached: true,
    },
  );

  try {
    const isReady = await waitForServer(URL);
    if (!isReady) {
      throw new Error("Server failed to start within timeout.");
    }
    console.log("Server ready. Launching browser...");

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.emulateMedia({ media: "print" });

    console.log(`Navigating to ${URL}...`);
    await page.goto(URL, { waitUntil: "networkidle" });

    console.log("Generating PDF...");
    await page.pdf({
      path: OUTPUT_FILE,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
    });

    console.log(`Successfully generated ${OUTPUT_FILE}`);
    await browser.close();
  } catch (error) {
    console.error("Error generating PDF:", error);
    process.exitCode = 1;
  } finally {
    console.log("Shutting down server...");
    try {
      process.kill(-server.pid);
    } catch (e) {
      server.kill();
    }
  }
}

generate();
