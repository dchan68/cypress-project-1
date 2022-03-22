/// <reference types="cypress" />

describe("locators", () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it("locating elements with the get command", () => {
        //Get all elements by tag name
        cy.get("button")

        //Get all elements by their className
        cy.get(".btn-with-class")

        //Get all elements with specific classes
        cy.get("[class='Elements-btn btn-with-class']")
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

        //Get all elements by id
        cy.get("[id='btn-with-id']")
        cy.get("#btn-with-id")

        //Get all elements by specific attribute
        cy.get("[type='submit']")

        //Get all elements by tag name AND class
        cy.get("button.Elements-btn")

        //Get all elements by tag name AND class AND id
        cy.get("button.Elements-btn#btn-with-id")

        //Get all elements by tag name And class And type attribute
        cy.get("button.Elements-btn[type='submit']")

        //Get all elements with specific data test id
        cy.get("[data-cy='btn-id-1']")
        cy.getByTestId("btn-id-1")
    })

    it("locating elements with contains", () => {
        //Get elements by text
        cy.contains("Unique Text")

        //Get element by text
        cy.contains("Not Unique Text")

        //With Selector
        cy.contains("[type='submit']","Not Unique Text")

        cy.get("[type='submit']").contains("Not Unique Text") //Using get and then filtering result with contains
    })
})