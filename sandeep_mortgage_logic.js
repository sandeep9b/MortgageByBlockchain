    /**
     * Create test borrower function
     * @param {sandeep.mortgage.samplenetwork.createTestBorrower} cTB - application for a new test borrower
     * @transaction
     */
    async function createTestBorrower(cTB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var brwr = factory.newResource(NS, 'Borrower', cTB.Bid);
      brwr.borrowerFirstName = 'Andy';
      brwr.borrowerMiddleName = '';
      brwr.borrowerLastName = 'America';
      brwr.borrowerSuffix = '';
      brwr.social = 999603333;
      brwr.dateOfBirth = new Date(1970, 1, 1);
      brwr.citizenship = 'USCitizen';
      brwr.jointCredit = false;
      brwr.totalNumberOfBorrowers = 1;
      brwr.mariStat = 'Unmarried';
      brwr.numberOfDependents = 0;
      brwr.homePhoneNumber = 9876543210;
      brwr.cellPhoneNumber = 9876543210;
      brwr.workPhoneNumber = 9876543210;
      brwr.workPhoneExtn = 1234;
      brwr.email = 'test@test.com';
      var prAddress = factory.newConcept(NS, 'DetailAddress');
      prAddress.street = '4321 Cul de Sac Street';
      prAddress.city = 'Someplace';
      prAddress.state = 'MA';
      prAddress.zip = '02723';
      prAddress.country = 'United States';
      prAddress.addrTyp = 'Present';
      brwr.presentAddress = prAddress;
      brwr.noOfYears = 5;
      brwr.dwType = 'Own';
      brwr.lessThan2YrsAtCurrentAddress = false;
      brwr.isMailingAddrDiffFromCurrentAddr = false;
      brwr.militaryService = false;
      brwr.loanAmount = 200000.00;
      brwr.loanPurpose = 'Refinance';
      var subjPropAddress = factory.newConcept(NS, 'DetailAddress');
      subjPropAddress.street = '331314 West Main Street';
      subjPropAddress.city = 'Los Angeles';
      subjPropAddress.state = 'CA';
      subjPropAddress.zip = '90002';
      subjPropAddress.country = 'United States';
      subjPropAddress.addrTyp = 'SubjectProperty';
      brwr.subjectPropertyAddress = subjPropAddress;
      brwr.noOfUnits = 1;
      brwr.propertyValue = 280000.00;
      brwr.occoupancyType = 'PrimaryResidence';
      brwr.mixedUseProperty = false;
      brwr.manufacturedHome = false;
      brwr.Q5A1 = true;
      brwr.Q5A2 = false;
      brwr.Q5A3 = false;
      brwr.Q5A41 = false;
      brwr.Q5A42 = false;
      brwr.Q5A5 = false;
      brwr.Q5B1 = false;
      brwr.Q5B2 = false;
      brwr.Q5B3 = false;
      brwr.Q5B4 = false;
      brwr.Q5B5 = false;
      brwr.Q5B6 = false;
      brwr.Q5B7 = false;
      brwr.Q5B8 = false;
      brwr.ethenicityType = 'NotHispanicOrLatino';
      brwr.genderType = 'Male';
      brwr.receType = 'Asian';
      brwr.asianType = 'AsianIndian';
      brwr.ethenicityByVisualOrSurname = false;
      brwr.genderByVisualOrSurname = false;
      brwr.raceByVisualOrSurname = false;
      brwr.demographicChannel = 'FaceToFace';

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      await borrowerRegistry.add(brwr);
    }
    /**
     * Create borrower function
     * @param {sandeep.mortgage.samplenetwork.createBorrower} cB - application for a new borrower
     * @transaction
     */
    async function createBorrower(cB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var brwr = factory.newResource(NS, 'Borrower', cB.Bid);
      brwr.borrowerFirstName = cB.borrowerFirstName;
      brwr.borrowerMiddleName = cB.borrowerMiddleName;
      brwr.borrowerLastName = cB.borrowerLastName;
      brwr.borrowerSuffix = cB.borrowerSuffix;
      brwr.social = cB.social;
      brwr.dateOfBirth = cB.dateOfBirth;
      brwr.citizenship = cB.citizenship;
      brwr.jointCredit = cB.jointCredit;
      brwr.totalNumberOfBorrowers = cB.totalNumberOfBorrowers;
      brwr.mariStat = cB.mariStat;
      brwr.numberOfDependents = cB.numberOfDependents;
      brwr.homePhoneNumber = cB.homePhoneNumber;
      brwr.cellPhoneNumber = cB.cellPhoneNumber;
      brwr.workPhoneNumber = cB.workPhoneNumber;
      brwr.workPhoneExtn = cB.workPhoneExtn;
      brwr.email = cB.email;
      var prAddress = factory.newConcept(NS, 'DetailAddress');
      prAddress.street = cB.presentAddress.street;
      prAddress.city = cB.presentAddress.street;
      prAddress.state = cB.presentAddress.street;
      prAddress.zip = cB.presentAddress.street;
      prAddress.country = cB.presentAddress.street;
      prAddress.addrTyp = 'Present';
      brwr.presentAddress = prAddress;
      brwr.noOfYears = cB.noOfYears;
      brwr.dwType = cB.dwType;
      brwr.lessThan2YrsAtCurrentAddress = cB.lessThan2YrsAtCurrentAddress;
      brwr.isMailingAddrDiffFromCurrentAddr = cB.isMailingAddrDiffFromCurrentAddr;
      brwr.militaryService = cB.militaryService;
      brwr.loanAmount = cB.loanAmount;
      brwr.loanPurpose = cB.loanPurpose;
      var subjPropAddress = factory.newConcept(NS, 'DetailAddress');
      subjPropAddress.street = cB.subjectPropertyAddress.street;
      subjPropAddress.city = cB.subjectPropertyAddress.city;
      subjPropAddress.state = cB.subjectPropertyAddress.state;
      subjPropAddress.zip = cB.subjectPropertyAddress.zip;
      subjPropAddress.country = cB.subjectPropertyAddress.country;
      subjPropAddress.addrTyp = 'SubjectProperty';
      brwr.subjectPropertyAddress = subjPropAddress;
      brwr.noOfUnits = cB.noOfUnits;
      brwr.propertyValue = cB.propertyValue;
      brwr.occoupancyType = cB.occoupancyType;
      brwr.mixedUseProperty = cB.mixedUseProperty;
      brwr.manufacturedHome = cB.manufacturedHome;
      brwr.Q5A1 = cB.Q5A1;
      brwr.Q5A2 = cB.Q5A2;
      brwr.Q5A3 = cB.Q5A3;
      brwr.Q5A41 = cB.Q5A41;
      brwr.Q5A42 = cB.Q5A42;
      brwr.Q5A5 = cB.Q5A5;
      brwr.Q5B1 = cB.Q5B1;
      brwr.Q5B2 = cB.Q5B2;
      brwr.Q5B3 = cB.Q5B3;
      brwr.Q5B4 = cB.Q5B4;
      brwr.Q5B5 = cB.Q5B5;
      brwr.Q5B6 = cB.Q5B6;
      brwr.Q5B7 = cB.Q5B7;
      brwr.Q5B8 = cB.Q5B8;
      brwr.ethenicityType = cB.ethenicityType;
      brwr.genderType = cB.genderType;
      brwr.receType = cB.receType;
      brwr.ethenicityByVisualOrSurname = cB.ethenicityByVisualOrSurname;
      brwr.genderByVisualOrSurname = cB.genderByVisualOrSurname;
      brwr.raceByVisualOrSurname = cB.raceByVisualOrSurname;
      brwr.demographicChannel = cB.demographicChannel;

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      await borrowerRegistry.add(brwr);
    }
    /**
     * Create employee addition function
     * @param {sandeep.mortgage.samplenetwork.createLenderAssociate} cLA - new employee creation for Lender
     * @transaction
     */
    async function createLenderAssociate(cLA) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var LndrAssociate = factory.newResource(NS, 'LenderAssociate', cLA.LAid);
      LndrAssociate.associateCategory = "LoanOfficer";
      LndrAssociate.organizationName = "Test Lender";
      var orgOfficeAddress = factory.newConcept(NS, 'Address');
      orgOfficeAddress.street = '443423 South Main Street';
      orgOfficeAddress.city = 'Fort Worth';
      orgOfficeAddress.state = 'TX';
      orgOfficeAddress.zip = '76155';
      orgOfficeAddress.country = 'United States';
      LndrAssociate.originatorOrgAddress = orgOfficeAddress;
      LndrAssociate.OrganizationNMLSid = 33333;
      LndrAssociate.OrganizationStateNMLSid = 44444;
      LndrAssociate.AssociateName = "Test Associate";
      LndrAssociate.AssociateEMail = "test@lender.com";
      LndrAssociate.AssociatePhone = 7777777777;

      let employeeRegistry = await getParticipantRegistry(NS + '.LenderAssociate');
      await employeeRegistry.add(LndrAssociate);
    }
    /**
     * Create docOwner addition function
     * @param {sandeep.mortgage.samplenetwork.createDocOwner} cDO - new doc owner creation for Lender
     * @transaction
     */
    async function createDocOwner(cDO) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var dcOwner = factory.newResource(NS, 'DocOwner', cDO.DOid);
      dcOwner.docOwnerType = "Borrower";
      
      let docOwnerRegistry = await getParticipantRegistry(NS + '.DocOwner');
      await docOwnerRegistry.add(dcOwner);
    }
    /**
     * Create loanObject addition function
     * @param {sandeep.mortgage.samplenetwork.loanObjectAddition} lOA - new loan shell creation for Lender
     * @transaction
     */
    async function loanAddition(lOA) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var newLoan = factory.newResource(NS, 'LoanObject', lOA.loanObjId);
      newLoan.loanNumber = getRndInteger();
      newLoan.isDisbursed = false;
      
      newLoan.borrowers = factory.newRelationship(NS, 'Borrower', lOA.borrowers);
      newLoan.officer = factory.newRelationship(NS, 'LenderAssociate', lOA.officer);
      newLoan.processor = factory.newRelationship(NS, 'LenderAssociate', lOA.processor);
      newLoan.underwriter = factory.newRelationship(NS, 'LenderAssociate', lOA.underwriter);
      newLoan.closer = factory.newRelationship(NS, 'LenderAssociate', lOA.closer);
      newLoan.owner = factory.newRelationship(NS, 'LenderAssociate', lOA.owner);
      
      let loanObjRegistry = await getAssetRegistry(NS + '.LoanObject');
      await loanObjRegistry.add(newLoan);
    }
    function getRndInteger() {
      return Math.floor(Math.random() * 9000000 ) + 1000000;
    }
    /**
     * Create document addition function
     * @param {sandeep.mortgage.samplenetwork.documentAddition} dA - new employee creation for Lender
     * @transaction
     */
    async function documentAddition(dA) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var newDoc = factory.newResource(NS, 'Document', dA.Docid);
      newDoc.docType = "SocialCard";

      newDoc.bwr = factory.newRelationship(NS, 'Borrower', 'Borrower1');
      newDoc.downr = factory.newRelationship(NS, 'DocOwner', 'Borrower');
      newDoc.lobject = factory.newRelationship(NS, 'LoanObject', 'loan1');
      
      let documentRegistry = await getAssetRegistry(NS + '.Document');
      await documentRegistry.add(newDoc);
      /*let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      await borrowerRegistry.update(newDoc.bwr);
      let docOwnerRegistry = await getParticipantRegistry(NS + '.DocOwner');
      await docOwnerRegistry.update(newDoc.downr);
      let loanObjRegistry = await getAssetRegistry(NS + '.LoanObject');
      await loanObjRegistry.update(newDoc.lobject); */
    }              
    /**
     * Document transfer function
     * @param {sandeep.mortgage.samplenetwork.documentTransfer} dT - doc to be sent from one party to another
     * @transaction
     */
    async function docTransfer(dT) {
      var NS = 'sandeep.mortgage.samplenetwork';

      dT.docToBeTransferred.downr = dT.receipient;

      let documentRegistry = await getAssetRegistry(NS + '.Document');
      await documentRegistry.update(dT.docToBeTransferred);
      let docOwnerRegistry = await getParticipantRegistry(NS + '.DocOwner');
      await docOwnerRegistry.updateAll([dT.sender, dT.receipient]);
    }  
    /**
     * Loan transfer function
     * @param {sandeep.mortgage.samplenetwork.loanObjectTransfer} lOT - Loan to be sent from one associate to another associate
     * @transaction
     */
    async function loanTransfer(lOT) {
      var NS = 'sandeep.mortgage.samplenetwork';

      lOT.generatedLoan.owner = lOT.To;

      let loanObjRegistry = await getAssetRegistry(NS + '.LoanObject');
      await loanObjRegistry.update(lOT.generatedLoan);
      let loanObjOwnerRegistry = await getParticipantRegistry(NS + '.LenderAssociate');
      await loanObjOwnerRegistry.updateAll([lOT.From, lOT.To]);
    }  
    /**
     * Other income addition function
     * @param {sandeep.mortgage.samplenetwork.addOtherIncomeToExistingBorrower} aOITEB - add other income for existing borrower
     * @transaction
     */
    async function addOtherIncome(aOITEB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var othIncome = factory.newConcept(NS, 'IncomeFromOtherSources');
      othIncome.IncomeSourceType = aOITEB.incomeSource;
      othIncome.monthlySecondaryIncome = aOITEB.monthlyIncome;

      if(!Array.isArray(aOITEB.borrowerID.secondaryIncomeArray) || !aOITEB.borrowerID.secondaryIncomeArray.length){
        aOITEB.borrowerID.secondaryIncomeArray = new Array();
        aOITEB.borrowerID.secondaryIncomeArray[0] = othIncome;
        aOITEB.borrowerID.totalOtherSourcesIncome = aOITEB.monthlyIncome;
      }
      else{
        var othIncomesLen = aOITEB.borrowerID.secondaryIncomeArray.length;
        aOITEB.borrowerID.secondaryIncomeArray[othIncomesLen] = othIncome;
        aOITEB.borrowerID.totalOtherSourcesIncome = aOITEB.borrowerID.totalOtherSourcesIncome + aOITEB.monthlyIncome;
      }

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aOITEB.borrowerID);
    }
    /**
     * Asset addition function
     * @param {sandeep.mortgage.samplenetwork.addAssetToExistingBorrower} aATEB - add asset for existing borrower
     * @transaction
     */
    async function addAsset(aATEB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var ast = factory.newConcept(NS, 'Asset');
      ast.astType = aATEB.astType;
      ast.financialInstitution = aATEB.financialInstitution;
      ast.accountNumberAst = aATEB.accountNumberAst;
      ast.cashOrMarketValue = aATEB.cashOrMarketValue;

      if(!Array.isArray(aATEB.borrowerID.assets) || !aATEB.borrowerID.assets.length){
        aATEB.borrowerID.assets = new Array();
        aATEB.borrowerID.assets[0] = ast;
        aATEB.borrowerID.TotalPrimaryAssetValue = aATEB.cashOrMarketValue;
      }
      else{
        var assetsLen = aATEB.borrowerID.assets.length;
        aATEB.borrowerID.assets[assetsLen] = ast;
        aATEB.borrowerID.TotalPrimaryAssetValue = aATEB.borrowerID.TotalPrimaryAssetValue + aATEB.cashOrMarketValue;
      }

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aATEB.borrowerID);
    }
    /**
     * Secondary Asset addition function
     * @param {sandeep.mortgage.samplenetwork.addSecondaryAssetToExistingBorrower} aSATEB - add secondary asset for existing borrower
     * @transaction
     */
    async function addSecondaryAsset(aSATEB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var SndAst = factory.newConcept(NS, 'SecondaryAsset');
      SndAst.astType = aSATEB.astType;
      SndAst.cashOrMarketValue = aSATEB.cashOrMarketValue;

      if(!Array.isArray(aSATEB.borrowerID.sndAssets) || !aSATEB.borrowerID.sndAssets.length){
        aSATEB.borrowerID.sndAssets = new Array();
        aSATEB.borrowerID.sndAssets[0] = SndAst;
        aSATEB.borrowerID.TotalSecondaryAssetValue = aSATEB.cashOrMarketValue;
      }
      else{
        var SndassetsLen = aSATEB.borrowerID.sndAssets.length;
        aSATEB.borrowerID.sndAssets[SndassetsLen] = SndAst;
        aSATEB.borrowerID.TotalSecondaryAssetValue = aSATEB.borrowerID.TotalSecondaryAssetValue + aSATEB.cashOrMarketValue;
      }

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aSATEB.borrowerID);
    }
    /**
     * Liability addition function
     * @param {sandeep.mortgage.samplenetwork.addLiabilityToExistingBorrower} aLTEB - add liability for existing borrower
     * @transaction
     */
    async function addLiability(aLTEB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var liab = factory.newConcept(NS, 'Liability');
      liab.liabType = aLTEB.liabType;
      liab.companyName = aLTEB.companyName;
      liab.accountNumberLiab = aLTEB.accountNumberLiab;
      liab.unpaidBalance = aLTEB.unpaidBalance;
      liab.toBePaidOff = aLTEB.toBePaidOff;
      liab.monthlyPayment = aLTEB.monthlyPayment;
      liab.lienPosition = aLTEB.lienPosition;

      if(!Array.isArray(aLTEB.borrowerID.liabilities) || !aLTEB.borrowerID.liabilities.length){
        aLTEB.borrowerID.liabilities = new Array();
        aLTEB.borrowerID.liabilities[0] = liab;
      }
      else{
        var liabLen = aLTEB.borrowerID.liabilities.length;
        aLTEB.borrowerID.liabilities[liabLen] = liab;
      }

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aLTEB.borrowerID);
    }
    /**
     * Secondary liability addition function
     * @param {sandeep.mortgage.samplenetwork.addSecondaryLiabilityToExistingBorrower} aSLTEB - add secondary liability for existing borrower
     * @transaction
     */
    async function addScndLiability(aSLTEB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var SndLiab = factory.newConcept(NS, 'SecondaryLiability');
      SndLiab.liabType = aSLTEB.liabType;
      SndLiab.monthlyPayment = aSLTEB.monthlyPayment;

      if(!Array.isArray(aSLTEB.borrowerID.sndLiabilities) || !aSLTEB.borrowerID.sndLiabilities.length){
        aSLTEB.borrowerID.sndLiabilities = new Array();
        aSLTEB.borrowerID.sndLiabilities[0] = SndLiab;
      }
      else{
        var SndLiabLen = aSLTEB.borrowerID.sndLiabilities.length;
        aSLTEB.borrowerID.sndLiabilities[SndLiabLen] = SndLiab;
      }

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aSLTEB.borrowerID);
    }
    /**
     * Owned property addition function
     * @param {sandeep.mortgage.samplenetwork.addOwnedPropertiesToExistingBorrower} aOPTEB - add owned properties for existing borrower
     * @transaction
     */
    async function addOwnedProperty(aOPTEB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var propOwn = factory.newConcept(NS, 'PropertyYouOwn');
      propOwn.street = aOPTEB.street;
      propOwn.unit = aOPTEB.unit;
      propOwn.city = aOPTEB.city;
      propOwn.state = aOPTEB.state;
      propOwn.zip = aOPTEB.zip;
      propOwn.country = aOPTEB.country;
      propOwn.addrTyp = aOPTEB.addrTyp;
      propOwn.propertyValue = aOPTEB.propertyValue;
      propOwn.asstStat = aOPTEB.asstStat;
      propOwn.monthlyExpenseOnAsset = aOPTEB.monthlyExpenseOnAsset;
      propOwn.monthlyRentalIncome = aOPTEB.monthlyRentalIncome;
      propOwn.netMonthlyRentalIncome = aOPTEB.netMonthlyRentalIncome;
      propOwn.isMortgageOnProperty = aOPTEB.isMortgageOnProperty;
      var CreditorLen = aOPTEB.company.length;
      var i = 0;

      while(i < CreditorLen) {

        var creditor = factory.newConcept(NS, 'Creditor');
        creditor.companyName = aOPTEB.company[i].companyName;
        creditor.accountNumberLiab = aOPTEB.company[i].accountNumberLiab;
        creditor.monthlyPayment = aOPTEB.company[i].monthlyPayment;
        creditor.unpaidBalance = aOPTEB.company[i].unpaidBalance;
        creditor.toBePaidOff = aOPTEB.company[i].toBePaidOff;
        creditor.loanTyp = aOPTEB.company[i].loanTyp;
        creditor.creditLimit = aOPTEB.company[i].creditLimit;

        if(i == 0) {
          propOwn.creditors = new Array();
        }
        propOwn.creditors.push(creditor);
        i++;
      }

      if(!Array.isArray(aOPTEB.borrowerID.ownedProperties) || !aOPTEB.borrowerID.ownedProperties.length){
        aOPTEB.borrowerID.ownedProperties = new Array();
        aOPTEB.borrowerID.ownedProperties[0] = propOwn;
      }
      else{
        var ownedPropLen = aOPTEB.borrowerID.ownedProperties.length;
        aOPTEB.borrowerID.ownedProperties[ownedPropLen] = propOwn;
      }

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aOPTEB.borrowerID);
    }
    /**
     * Gifts addition function
     * @param {sandeep.mortgage.samplenetwork.addGiftsToExistingBorrower} aGTEB - add gifts for existing borrower
     * @transaction
     */
    async function addGifts(aGTEB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var gft = factory.newConcept(NS, 'Gifts');
      gft.giftType = aGTEB.giftType;
      gft.isDeposited = aGTEB.isDeposited;
      gft.gftSource = aGTEB.gftSource;
      gft.cashValue = aGTEB.cashValue;

      if(!Array.isArray(aGTEB.borrowerID.gifts) || !aGTEB.borrowerID.gifts.length){
        aGTEB.borrowerID.gifts = new Array();
        aGTEB.borrowerID.gifts[0] = gft;
      }
      else{
        var giftsLen = aGTEB.borrowerID.gifts.length;
        aGTEB.borrowerID.gifts[giftsLen] = gft;
      }

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aGTEB.borrowerID);
    }
    /**
     * Alternate names addition function
     * @param {sandeep.mortgage.samplenetwork.addAlternateNamesToExistingBorrower} aANTEB - add alternate names for existing borrower
     * @transaction
     */
    async function addAlternateName(aANTEB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var altName = factory.newConcept(NS, 'AltNames');
      altName.altFirstName = aANTEB.altFirstName;
      altName.altMiddleName = aANTEB.altMiddleName;
      altName.altLastName = aANTEB.altLastName;
      altName.altSuffix = aANTEB.altSuffix;

      if(!Array.isArray(aANTEB.borrowerID.alternateNames) || !aANTEB.borrowerID.alternateNames.length){
        aANTEB.borrowerID.alternateNames = new Array();
        aANTEB.borrowerID.alternateNames[0] = altName;
      }
      else{
        var altNamesLen = aANTEB.borrowerID.alternateNames.length;
        aANTEB.borrowerID.alternateNames[altNamesLen] = altName;
      }

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aANTEB.borrowerID);
    }
    /**
     * Other borrower name addition function
     * @param {sandeep.mortgage.samplenetwork.addOtherBorrowerName} aOBN - add other borrower names in existing loan application
     * @transaction
     */
    async function addOtherBrwerNames(aOBN) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var othBrwrName = factory.newConcept(NS, 'othBorrowers');
      othBrwrName.othFirstName = aOBN.othFirstName;
      othBrwrName.othMiddleName = aOBN.othMiddleName;
      othBrwrName.othLastName = aOBN.othLastName;
      othBrwrName.othSuffix = aOBN.othSuffix;

      if(!Array.isArray(aOBN.borrowerID.otherBrwr) || !aOBN.borrowerID.otherBrwr.length){
        aOBN.borrowerID.otherBrwr = new Array();
        aOBN.borrowerID.otherBrwr[0] = othBrwrName;
      }
      else{
        var othBrwrLen = aOBN.borrowerID.otherBrwr.length;
        aOBN.borrowerID.otherBrwr[othBrwrLen] = othBrwrName;
      }

      aOBN.borrowerID.totalNumberOfBorrowers += 1;

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aOBN.borrowerID);
    }
    /**
     * Dependent addition function
     * @param {sandeep.mortgage.samplenetwork.addDependentToExistingBorrower} aDTEB - add dependents for existing borrower
     * @transaction
     */
    async function addDependents(aDTEB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var dependent = factory.newConcept(NS, 'Dependents');
      dependent.dependentAge = aDTEB.dependentAge;

      if(!Array.isArray(aDTEB.borrowerID.dependnt) || !aDTEB.borrowerID.dependnt.length){
        aDTEB.borrowerID.dependnt = new Array();
        aDTEB.borrowerID.dependnt[0] = dependent;
      }
      else{
        var dependentLen = aDTEB.borrowerID.dependnt.length;
        aDTEB.borrowerID.dependnt[dependentLen] = dependent;
      }

      aDTEB.borrowerID.numberOfDependents += 1;

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aDTEB.borrowerID);
    }
    /**
     * Former address addition function
     * @param {sandeep.mortgage.samplenetwork.addFormerAddressToExistingBorrower} aFATEB - add former address for existing borrower
     * @transaction
     */
    async function addFormerAddress(aFATEB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      aFATEB.borrowerID.lessThan2YrsAtCurrentAddress = true;
      var frmrAddress = factory.newConcept(NS, 'DetailAddress');
      frmrAddress.street = aFATEB.street;
      frmrAddress.city = aFATEB.city;
      frmrAddress.state = aFATEB.state;
      frmrAddress.zip = aFATEB.zip;
      frmrAddress.country = aFATEB.country;
      frmrAddress.addrTyp = aFATEB.addrTyp;
      aFATEB.borrowerID.formerAddress = frmrAddress;
      aFATEB.borrowerID.noOfYearsFormerAddress = aFATEB.noOfYearsFormerAddress;
      aFATEB.borrowerID.dwTypeFormerAddress = aFATEB.dwTypeFormerAddress;

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aFATEB.borrowerID);
    }
    /**
     * Different mailing address addition function
     * @param {sandeep.mortgage.samplenetwork.addDiffMailingAddressToExistingBorrower} aDMATEB - add different mailing address for existing borrower
     * @transaction
     */
    async function addMailingAddress(aDMATEB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      aDMATEB.borrowerID.isMailingAddrDiffFromCurrentAddr = true;
      var mailAddress = factory.newConcept(NS, 'DetailAddress');
      mailAddress.street = aDMATEB.street;
      mailAddress.city = aDMATEB.city;
      mailAddress.state = aDMATEB.state;
      mailAddress.zip = aDMATEB.zip;
      mailAddress.country = aDMATEB.country;
      mailAddress.addrTyp = aDMATEB.addrTyp;
      aDMATEB.borrowerID.mailingAddress = mailAddress;

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aDMATEB.borrowerID);
    }
    /**
     * Military service addition function
     * @param {sandeep.mortgage.samplenetwork.addMilitaryServiceToExistingBorrower} aMSTEB - add military service for existing borrower
     * @transaction
     */
    async function addMilitaryService(aMSTEB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      aMSTEB.borrowerID.militaryService = true;
      aMSTEB.borrowerID.militaryServiceType = aMSTEB.militaryServiceType;
      aMSTEB.borrowerID.projExpDateOfServiceOrTour = aMSTEB.projExpDateOfServiceOrTour;

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aMSTEB.borrowerID);
    }
    /**
     * Current employment addition function
     * @param {sandeep.mortgage.samplenetwork.addCurrentEmploymentToExistingBorrower} aCETEB - add current employment for existing borrower
     * @transaction
     */
    async function addCurrentEmployment(aCETEB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';
      var totalIncome = 0.0;

      var curEmp = factory.newConcept(NS, 'CurrentEmployment');
      curEmp.street = aCETEB.street;
      curEmp.city = aCETEB.city;
      curEmp.state = aCETEB.state;
      curEmp.zip = aCETEB.zip;
      curEmp.country = aCETEB.country;
      curEmp.addrTyp = aCETEB.addrTyp;
      curEmp.employerName = aCETEB.employerName;
      curEmp.phoneNumber = aCETEB.phoneNumber;
      curEmp.positionOrTitle = aCETEB.positionOrTitle;
      curEmp.startDate = aCETEB.startDate;
      curEmp.jobTenureInYears = aCETEB.jobTenureInYears;
      curEmp.employedByFamilyMember = aCETEB.employedByFamilyMember;
      curEmp.bussOwnerOrSelfEmployed = aCETEB.bussOwnerOrSelfEmployed;
      curEmp.ownershipLessThan25Percent = aCETEB.ownershipLessThan25Percent;
      curEmp.monthlyIncomeForBussOrSelfEmpl = aCETEB.monthlyIncomeForBussOrSelfEmpl;
      curEmp.base = aCETEB.base;
      curEmp.overtime = aCETEB.overtime;
      curEmp.bonus = aCETEB.bonus;
      curEmp.commission = aCETEB.commission;
      curEmp.militaryEntl = aCETEB.militaryEntl;
      curEmp.other = aCETEB.other;
      curEmp.monthlyIncomeForEmpl = aCETEB.base + aCETEB.overtime + aCETEB.bonus + aCETEB.commission + aCETEB.militaryEntl + aCETEB.other;

      if(!Array.isArray(aCETEB.borrowerID.currempl) || !aCETEB.borrowerID.currempl.length){
        aCETEB.borrowerID.currempl = new Array();
        aCETEB.borrowerID.currempl[0] = curEmp;
      }
      else{
        var currEmplLen = aCETEB.borrowerID.currempl.length;
        aCETEB.borrowerID.currempl[currEmplLen] = curEmp;
      }

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aCETEB.borrowerID);
    }
    /**
     * Previous employment addition function
     * @param {sandeep.mortgage.samplenetwork.addPreviousEmploymentToExistingBorrower} aPETEB - add previous employment for existing borrower
     * @transaction
     */
    async function addPreviousEmployment(aPETEB) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var prevEmp = factory.newConcept(NS, 'PreviousEmployment');
      prevEmp.street = aPETEB.street;
      prevEmp.city = aPETEB.city;
      prevEmp.state = aPETEB.state;
      prevEmp.zip = aPETEB.zip;
      prevEmp.country = aPETEB.country;
      prevEmp.addrTyp = aPETEB.addrTyp;
      prevEmp.employerName = aPETEB.employerName;
      prevEmp.positionOrTitle = aPETEB.positionOrTitle;
      prevEmp.startDate = aPETEB.startDate;
      prevEmp.endDate = aPETEB.endDate;
      prevEmp.bussOwnerOrSelfEmployed = aPETEB.bussOwnerOrSelfEmployed;
      prevEmp.grossMonthlyIncome = aPETEB.grossMonthlyIncome;

      aPETEB.borrowerID.prevEmpl = prevEmp;

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aPETEB.borrowerID);
    }
    /**
     * New mortgage creditor on same property addition function
     * @param {sandeep.mortgage.samplenetwork.addNewMortCreditorOnSameProperty} aNMCOSP - add new mortgage creditor on same property for existing borrower
     * @transaction
     */
    async function addNewMortCreditorOnSameProp(aNMCOSP) {
      var factory = getFactory();
      var NS = 'sandeep.mortgage.samplenetwork';

      var othCreditor = factory.newConcept(NS, 'OtherMortgageCreditor');
      othCreditor.companyName = aNMCOSP.companyName;
      othCreditor.lienPosition = aNMCOSP.lienPosition;
      othCreditor.monthlyPayment = aNMCOSP.monthlyPayment;
      othCreditor.loanToBeDrawn = aNMCOSP.loanToBeDrawn;
      othCreditor.creditLimit = aNMCOSP.creditLimit;

      if(!Array.isArray(aNMCOSP.borrowerID.newMortOnSameProp) || !aNMCOSP.borrowerID.newMortOnSameProp.length){
        aNMCOSP.borrowerID.newMortOnSameProp = new Array();
        aNMCOSP.borrowerID.newMortOnSameProp[0] = othCreditor;
      }
      else{
        var othMortLen = aNMCOSP.borrowerID.newMortOnSameProp.length;
        aNMCOSP.borrowerID.newMortOnSameProp[othMortLen] = othCreditor;
      }

      let borrowerRegistry = await getParticipantRegistry(NS + '.Borrower');
      borrowerRegistry.update(aNMCOSP.borrowerID);
    }