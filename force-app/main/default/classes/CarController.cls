public with sharing class CarController {
    //Wrapper Class- We have mixed data types
    public class Filters{
        @AuraEnabled
        public String searchKey {get;set;}
        @AuraEnabled
        public Decimal maxPrice {get;set;}
        @AuraEnabled
        public String[] categories {get;set;}
        @AuraEnabled
        public String[] makeType {get;set;}
    }
    @AuraEnabled(Cacheable=true)
    public static List<Car__c> getCars(Filters filters){
        String key, whereClause = '';
        Decimal maxPrice;
        String[] categories, makeType, criteria = new List<String>{};

        if(filters !=null){
            maxPrice = filters.maxPrice;
            categories = filters.categories;
            makeType = filters.makeType;
            if(!String.isEmpty(filters.searchKey)){
                key = '%'+filters.searchKey + '%';
                criteria.add('Name LIKE: key');
            }
            if(filters.maxPrice >= 0){
                criteria.add('MSRP__c <= :maxPrice');
            }
            if(filters.categories !=null){
                criteria.add('Category__c IN :categories');
            }
            if(filters.makeType !=null){
                criteria.add('Make__c IN :makeType');
            }
            if(criteria.size()>0){
                whereClause = 'WHERE ' + String.join(criteria, ' AND ');
            }
        }

        String query = 'SELECT Id, Name, Description__c, Category__c, Picture_URL__c , MSRP__c FROM Car__c ' + whereClause + ' WITH SECURITY_ENFORCED ORDER BY NAME';
        return Database.query(query);
    }
    @AuraEnabled(Cacheable=true)
    public static Car__c[] getSimilarCars(Id carId, String[] makeType){
        return [SELECT Id, Name, MSRP__c , Description__c, Category__c, Picture_URL__c FROM Car__c WHERE Make__c IN :makeType AND Id != :carId];
    }
}