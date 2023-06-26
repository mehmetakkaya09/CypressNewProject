///<reference types = "cypress"/>

import { it } from "mocha";


describe('My test cases', ()=>{
    
    beforeEach(()=>{
        cy.clearCookies();
    })
    
    
    xit('Opening a new application', ()=>{

       cy.visit('/registration_form');
    })

    xit('test 2',()=>{//bu kod varsayılan testi iptal eder.
        expect(false).to.equal(false);
    })
    it('test 3',()=>{
        expect(false).not.to.equal(true);
    })
    it('test 4',()=>{
        expect(true).to.equal(true);
    })          


})
