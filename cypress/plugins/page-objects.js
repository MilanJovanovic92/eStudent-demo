import * as selectors from '../fixtures/selectors.json'

class PageObjects {

    goToMainPage() {
        return cy.visit("")
    }

    getMainNavList() {
        return cy.get(selectors.mainPage.mainNavList)
    }

    getNewsTable() {
        return cy.get(selectors.mainPage.newsTable)
    }

    getNewsTableItemList() {
        return cy.get(selectors.mainPage.newsTableItemList)
    }
    
    getStudentNav() {
        return cy.get(selectors.mainPage.studentNav)
    }

    getUsernameInput() {
        return cy.get(selectors.eStudentLogin.usernameInput)
    }

    getPasswordInput() {
        return cy.get(selectors.eStudentLogin.passwordInput)
    }

    getSubmitButton() {
        return cy.get(selectors.eStudentLogin.submitButton)
    }

    getLoginBox() {
        return cy.get(selectors.eStudentLogin.loginBox)
    }

    getErrorMessage() {
        return cy.get(selectors.eStudentLogin.errorMessage)
    }

    getHomePage() {
        return cy.get(selectors.eStudent.homePage)
    }

    getPageName() {
        return cy.get(selectors.eStudent.pageName)
    }

    getProfileBox() {
        return cy.get(selectors.eStudent.profileBox)
    }

    getLoadMoreButton() {
        return cy.get(selectors.mainPage.loadMoreButton)
    }

    getStudentName() {
        return cy.get(selectors.eStudent.studentName)
    }

    getIndex() {
        return cy.get(selectors.eStudent.index)
    }

    getIndexNumber() {
        return cy.get(selectors.eStudent.indexNumber)
    }

    getJibs() {
        return cy.get(selectors.eStudent.jibs)
    }

    getJibsNumber() {
        return cy.get(selectors.eStudent.jibsNumber)
    }

    getExamSchedule() {
        return cy.get(selectors.eStudent.examSchedule)
    }

    getListOfSubjects() {
        return cy.get(selectors.eStudent.listOfSubjects)
    }

    getAllSubjectsButton() {
        return cy.get(selectors.eStudent.allSubjectsButton)
    }

    getEaxmDate() {
        return cy.get(selectors.eStudent.examDate)
    }

    getProfessorList() {
        return cy.get(selectors.eStudent.professorList)
    }

    getSocialMediaList() {
        return cy.get(selectors.eStudent.socialMediaList)
    }

    getConsultations() {
        return cy.get(selectors.eStudent.consultations)
    }

    getPaymentSlipButton() {
        return cy.get(selectors.paymentSlip.paymentButton)
    }

    getSlipHeaderList() {
        return cy.get(selectors.paymentSlip.slipHeaderList)
    }

    getSlipList() {
        return cy.get(selectors.paymentSlip.slipList)
    }

    getFirstCallNumber() {
        return cy.get(selectors.paymentSlip.firstCallNumber)
    }

    getSecondCallNumber() {
        return cy.get(selectors.paymentSlip.secondCallNumber)
    }

    getProfileButton() {
        return cy.get(selectors.eStudent.profileButton)
    }

    getLogoutButton() {
        return cy.get(selectors.eStudent.logoutButton)
    }
}

export default PageObjects