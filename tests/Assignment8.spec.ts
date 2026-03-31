import { test, chromium } from "@playwright/test";
import users from "../testdata/users.json";
import { LoginPage } from "../pages/LoginPage";
import { OpenAccountPage } from "../pages/OpenAccountPage";


// --------------------------- TEST 1 (USER 1) ---------------------------
test("Test1: User 1 - Valid Login Scenario", async ({ page }) => {

  //const user = users.user1;  // ONLY ONE DATASET

  const login = new LoginPage(page);

  await login.navigate(users.config.baseUrl);
  await login.enterUsername(users.user1.username);
  await login.enterPassword(users.user1.password);
  await login.clickLogin();
  await login.validateSuccess(users.user1.expected);
});


// --------------------------- TEST 2 (USER 2) ---------------------------
test("Test2: User 2 - Valid Login + Open New Account Scenario", async ({ page }) => {

  //const user = users.user2;  // ONLY ONE DATASET

  const login = new LoginPage(page);
  const account = new OpenAccountPage(page);

  await login.navigate(users.config.baseUrl);
  await login.enterUsername(users.user2.username);
  await login.enterPassword(users.user2.password);
  await login.clickLogin();

  await account.navigateToOpenNewAccount();
  await account.openNewCheckingAccount();
  await account.validateSuccess(users.user2.expected);
});