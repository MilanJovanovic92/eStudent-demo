/// <reference types = "cypress"/>

import * as pageData from '../../fixtures/page-data.json'
import * as redirection from '../../fixtures/redirection.json'
import * as inputData from '../../fixtures/input-data.json'
import PageObjects from '../../plugins/page-objects'


const pageObjects = new PageObjects()

describe('Demo Main Page', () => {

    beforeEach('Go to main page', function () {
        pageObjects.goToMainPage()
    })

    it('Check drop-down of main navigation', function () {
        const hoverElement = pageObjects.getMainNavList()
        for (let i = 0; i < hoverElement.length; i++) {
            expect(hoverElement).to.have('href')
        }
        hoverElement.should('have.length', 7)
    })

    it('Check news board', function () {
        pageObjects.getNewsTable().should('have.text', pageData.newsTable);
        pageObjects.getNewsTableItemList().find('img').should('be.visible').and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
        for (let i = 1; i <= 8; i++) {
            const tableItems = pageObjects.getNewsTableItemList()
            const newLength = 6 * i
            tableItems.should('have.length', newLength)
            pageObjects.getLoadMoreButton().click()
            cy.wait(3000)
        }
    })

    it('Student navigation', function () {
        const navigation = pageData.navigationTab;
        pageObjects.getStudentNav().each((item, index, list) => {
            expect(list).to.have.length(6)
            cy.wrap(item).should('contain.text', navigation[index])
        })
        pageObjects.getStudentNav().eq(0).click({ force: true })
        cy.url().should('include', redirection.authentication)
    })

    it('Student invalid login', function () {
        pageObjects.getStudentNav().eq(0).click({ force: true })
        cy.login(inputData.username.invalid, inputData.password.invalid)
        pageObjects.getSubmitButton().should('have.text', pageData.submit)
        pageObjects.getLoginBox().should('be.visible')
        pageObjects.getErrorMessage().should('have.text', pageData.errorMessage)
    })

    it('Student valid login', function () {
        pageObjects.getStudentNav().eq(0).click({ force: true })
        cy.login(inputData.username.valid, inputData.password.valid)
        cy.url().should('include', redirection.eStudent)
        pageObjects.getHomePage().should('have.text', pageData.homePage)
    })
})

describe('Demo Student', () => {

    beforeEach('Go to Student Page', function () {
        pageObjects.goToMainPage()
        pageObjects.getStudentNav().eq(0).click({ force: true })
        cy.login(inputData.username.valid, inputData.password.valid)
    })

    it('Check profile', function () {
        pageObjects.getPageName().should($el => expect($el.text().trim()).to.equal(pageData.pageName))
        pageObjects.getProfileBox().should('be.visible')
        pageObjects.getStudentName().should($el => expect($el.text().trim()).to.equal(pageData.studentName))
        pageObjects.getIndex().should('have.text', pageData.index)
        pageObjects.getIndexNumber().should('have.text', pageData.indexNumber)
        pageObjects.getJibs().should('have.text', pageData.jibs)
        pageObjects.getJibsNumber().should('have.text', pageData.jibsNumber)
    })

    it('Check social media', function () {
        pageObjects.getSocialMediaList().should('have.length', 4)
        pageObjects.getSocialMediaList().eq(0).should('have.class', 'fa fa-facebook')
        pageObjects.getSocialMediaList().eq(1).should('have.class', 'fa fa-twitter')
        pageObjects.getSocialMediaList().eq(2).should('have.class', 'fa fa-linkedin')
        pageObjects.getSocialMediaList().eq(3).should('have.class', 'fa fa-instagram')
    })

    it('Check exam schedule', function () {
        pageObjects.getExamSchedule().click()
        cy.url().should('include', redirection.exams)
        pageObjects.getExamSchedule().should('have.class', 'active')
        pageObjects.getEaxmDate().should('have.text', pageData.examDate)
        pageObjects.getListOfSubjects().should('have.length', 8)
        pageObjects.getAllSubjectsButton().click()
        pageObjects.getListOfSubjects().should('have.length', 32)
    })

    it('Check cinsultations', function () {
        pageObjects.getConsultations().click()
        const professorList = pageData.professorList;
        pageObjects.getProfessorList().each((item, index, list) => {
            expect(list).to.have.length(11)
            cy.wrap(item).should('contain.text', professorList[index])
        })
        cy.url().should('include', redirection.consultations)
    })

    it('Check filled payment slip', function () {
        pageObjects.getPaymentSlipButton().click()
        pageObjects.getSlipHeaderList().eq(0).should('have.text', pageData.paymentSlipHeader[0])
        pageObjects.getSlipList().eq(0).should('be.visible')
        pageObjects.getFirstCallNumber().should($el => expect($el.text().trim()).to.equal(pageData.paymentSlipInfo[0]))
        pageObjects.getSlipHeaderList().eq(1).should('have.text', pageData.paymentSlipHeader[1])
        pageObjects.getSlipList().eq(1).should('be.visible')
        pageObjects.getSecondCallNumber().should('have.text', pageData.paymentSlipInfo[1])
        cy.url().should('include', redirection.payment)
        cy.url().should('not.include', redirection.consultations)
    })

    it('Check logout validation', function () {
        pageObjects.getProfileButton().click()
        pageObjects.getLogoutButton().click()
        pageObjects.getLoginBox().should('be.visible')
        pageObjects.getErrorMessage().should('not.exist')
        cy.url().should('include', redirection.authentication)
    })
})

