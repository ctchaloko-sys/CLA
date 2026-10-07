import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 390, "height": 844})
        await page.goto("http://localhost:8000/index.html")
        await page.wait_for_timeout(1000)

        # Mobile screenshot
        await page.screenshot(path="mobile_home.png")

        print("Mobile verification screenshot taken successfully.")
        await browser.close()

asyncio.run(run())
