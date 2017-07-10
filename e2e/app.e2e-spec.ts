import { EmployeesListAngularPage } from './app.po';

describe('employees-list-angular App', () => {
  let page: EmployeesListAngularPage;

  beforeEach(() => {
    page = new EmployeesListAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
