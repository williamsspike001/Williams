import {inputforms} from "../fixtures/selectors.js";
 
describe("Given I am on the orders page", function () {
    beforeEach(function () {
        cy.visit('/')
        cy.get(inputforms.inputform).click()
    });
 
    it.only("INPUTFORMS - I Should be able to click and type", function () {
      cy.get(inputforms.simpledemobtn).click()
      cy.get(inputforms.entermessage).click()
      cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/input[1]").type("williamsspike")
      cy.get(inputforms.showmessagebtn).click()
      cy.get(inputforms.entervaluefield).click()
      cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[2]/div[2]/div[2]/form[1]/div[1]/input[1]").type("5")
      cy.get(inputforms.typevaluefieldb).type("55")
      cy.get(inputforms.gettotal).click()
    })
 
    it("INPUTFORMS - I Should be able to tick", function () {
      cy.get(inputforms.checkboxdemo).click()
      cy.get(inputforms.singlecheckboxdemo).click()
      cy.get(inputforms.multiplecheckboxdemooption1).click()
      cy.get(inputforms.unclickoption1).click()
      cy.get(inputforms.multiplecheckboxdemooption2).click()
      cy.get(inputforms.unclickoption2).click()
      cy.get(inputforms.multiplecheckboxdemooption3).click()
      cy.get(inputforms.unclickoption3).click()
      cy.get(inputforms.multiplecheckboxdemooption4).click()
      cy.get(inputforms.unclickoption4).click()
      cy.get(inputforms.checkallbtn).click()
      cy.get(inputforms.uncheckallbtn).click()
    })

    it("INPUTFORMS - I Should be able to click", function () {
      cy.get(inputforms.radiobtndemo).click()
      cy.get(inputforms.singlemaleselectedvalue).click()
      cy.get(inputforms.singlefemaleselectedvalue).click()
      cy.get(inputforms.getcheckedvaluebtn).click()
      cy.get(inputforms.groupselectedvalueformale).click()
      cy.get(inputforms.groupselectedvalueforfemale).click()
      cy.get(inputforms.agegroup0to5).click()
      cy.get(inputforms.agegroup5to15).click()
      cy.get(inputforms.agegroup15to50).click()
      cy.get(inputforms.getvaluebtn).click()
    })

    it("INPUTFORMS - I Should be able to click", function () {
      cy.get(inputforms.selectdropdownlist).click()
      cy.get(inputforms.selectdemo).select("Sunday")
      cy.get(inputforms.multiselectdemo).click()
      cy.get(inputforms.firstselectedbtn).click()
      cy.get(inputforms.getallselectedbtn).click()
    })

    it("INPUTFORMS - I Should be able to click", function () {
      cy.get(inputforms.inputformsubmit).click()
      cy.get(inputforms.firstnamefield).click()
      cy.get(inputforms.firstnamefield).type("spike")
      cy.get(inputforms.lastnamefield).click()
      cy.get(inputforms.lastnamefield).type("williams")
      cy.get(inputforms.emailfield).click()
      cy.get(inputforms.emailfield).type("yonawe7574@24rumen.com")
      cy.get(inputforms.phonefield).click()
      cy.get(inputforms.phonefield).type("08064764370")
      cy.get(inputforms.homeaddress).click()
      cy.get(inputforms.homeaddress).type("7 atlanta avenue")
      cy.get(inputforms.city).click()
      cy.get(inputforms.city).type("jerusalem")
      cy.get(inputforms.state).select("daho")
      cy.get(inputforms.zipcode).click()
      cy.get(inputforms.zipcode).type("23401")
      cy.get(inputforms.domainname).click()
      cy.get(inputforms.domainname).type("www.cypress.com")
      cy.get(inputforms.hoaftingyes).click()
      cy.get(inputforms.hoaftingno).click()
      cy.get(inputforms.projectdescription).click()
      cy.get(inputforms.projectdescription).type("selenium automation")
      cy.get(inputforms.sendbtn).click()
    })

    it("INPUTFORMS - very user can click on ajax form submit", function () {
      cy.get(inputforms.ajaxformsubmit).click()
      cy.get(inputforms.ajaxformnamefield).click()
      cy.get(inputforms.ajaxformnamefield).type("williams spike")
      cy.get(inputforms.commentfield).click()
      cy.get(inputforms.commentfield).type("it was nice automating")
      cy.get(inputforms.submitbtn).click()
    })
      
    it.only("INPUTFORMS - very user can click on ajax form submit", function () {
      cy.get(inputforms.jqueryselectdropdown).click()
      cy.get(inputforms.selectcountrysearchbox).click()
      cy.get(inputforms.countrysearch).click()
      cy.get(inputforms.selectstatemultiplevalue).click()
      cy.get(inputforms.typecolorado).type("Colorado")
      cy.get(inputforms.selectcolorado).type("Colorado")

    })



  })
