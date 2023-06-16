public with sharing class CarController {
    @AuraEnabled(Cacheable=true)
    public static List<Car__c> getCars(){
        return [SELECT Id, Name, Description__c, Category__c, Picture_URL__c , MSRP__c FROM Car__c];
    }
}