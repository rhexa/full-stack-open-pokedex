const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })
  test('pokemon page can be opened from main page', async ({ page }) => {
    await page.goto('')
    const charmeleonLink = await page.locator('a[href="/pokemon/charmeleon"]')
    await charmeleonLink.click()

    await page.waitForSelector('div.pokemon-name')
    await expect(await page.locator('div.pokemon-name').textContent()).toBe(
      'charmeleon'
    )
  })
})
