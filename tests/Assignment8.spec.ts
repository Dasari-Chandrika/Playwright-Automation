// import { test, chromium } from "@playwright/test";
// import users from "../testdata/users.json";
// import { LoginPage } from "../pages/LoginPage";
// import { OpenAccountPage } from "../pages/OpenAccountPage";


// // --------------------------- TEST 1 (USER 1) ---------------------------
// test("Test1: User 1 - Valid Login Scenario", async ({ page }) => {

//   const login = new LoginPage(page);

//   await login.navigate(users.config.baseUrl);
//   await login.enterUsername(users.user1.username);
//   await login.enterPassword(users.user1.password);
//   await login.clickLogin();
//   await login.validateSuccess(users.user1.expected);
// });


// // --------------------------- TEST 2 (USER 2) ---------------------------
// test("Test2: User 2 - Valid Login + Open New Account Scenario", async ({ page }) => {

//   const login = new LoginPage(page);
//   const account = new OpenAccountPage(page);

//   await login.navigate(users.config.baseUrl);
//   await login.enterUsername(users.user2.username);
//   await login.enterPassword(users.user2.password);
//   await login.clickLogin();

//   await account.navigateToOpenNewAccount();
//   await account.openNewCheckingAccount();
//   await account.validateSuccess(users.user2.expected);
// });
import { test } from "@playwright/test";
import users from "../testdata/users.json";
import { LoginPage } from "../pages/LoginPage";
import { OpenAccountPage } from "../pages/OpenAccountPage";

test("Parallel login & account creation for User1 and User2", async ({ browser }) => {
  await Promise.all([

    // ---------------- USER 1 ----------------
    (async () => {
      const context1 = await browser.newContext();
      const page1 = await context1.newPage();

      const login1 = new LoginPage(page1);

      await login1.navigate(users.config.baseUrl);
      await login1.enterUsername(users.user1.username);
      await login1.enterPassword(users.user1.password);
      await login1.clickLogin();
      await login1.validateSuccess(users.user1.expected);

      await context1.close();
    })(),

    // ---------------- USER 2 ----------------
    (async () => {
      const context2 = await browser.newContext();
      const page2 = await context2.newPage();

      const login2 = new LoginPage(page2);
      const account2 = new OpenAccountPage(page2);

      await login2.navigate(users.config.baseUrl);
      await login2.enterUsername(users.user2.username);
      await login2.enterPassword(users.user2.password);
      await login2.clickLogin();

      await account2.navigateToOpenNewAccount();
      await account2.openNewCheckingAccount();
      await account2.validateSuccess(users.user2.expected);

      await context2.close();
    })()

  ]);
});