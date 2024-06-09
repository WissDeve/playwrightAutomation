import { test, expect, type Page } from '@playwright/test';
import {HomePage} from '../pages/home-page';



//AAA pattern

//POM page object model

const url ='https://playwright.dev/';

let homePage:HomePage;

test.beforeEach( async({page})=>{

    await page.goto(url);
    homePage = new HomePage(page);

})


test.describe('Playwright website', () =>{

    test('has title', async ({ page }) => {
  
        // Expect a title "to contain" a substring.
        //await expect(page).toHaveTitle(/Playwright/);

        //pom way 
         await homePage.assertPageTitle();

      });
      
      test('get started link', async ({ page }) => {
      
        // Click the get started link.
        //await page.getByRole('link', { name: 'Get started' }).click();

        //pom way

        await homePage.clickGetStarted();
      
        // Expects page to have a heading with the name of Installation.
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
      });
      
      
      /**
       * 1. Open the page
       * 2. Click at Get started
       * 3. Mouse hover the language dropdown
       * 4. Click at  Java
       * 5. Check the URL 
       * 6. Check the text "Installing Playwright" is not being displayed
       * 7. Check the text below is displayed
       * 
       * Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.
       * 
       */
      
      
      
      
      test.only('check java page', async({page})=>{
      
      
         await page.getByRole('link',{name:'Get started'}).click();
      
         await page.getByRole('button', {name : 'Node.js'}).hover();
      
         await page.getByRole('navigation', { name: 'Main' }).getByText('Java').click(); 
         
      
         await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
         
         await expect(page.getByText('Playwright for Java',{exact: true})).toBeVisible();
      
      
      
      
      });

})


