import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 800})
        await page.goto("http://localhost:8000/index.html")
        await page.wait_for_timeout(1000)

        # Take main home screenshot
        await page.screenshot(path="/home/jules/verification/screenshots/updated_home.png")

        # Click VIP Request button to check pricing and form
        await page.click("button:has-text('Demander un Accès VIP')")
        await page.wait_for_timeout(500)
        await page.screenshot(path="/home/jules/verification/screenshots/updated_vip_pricing_modal.png")

        print("Verification screenshot taken successfully.")
        await browser.close()

asyncio.run(run())
