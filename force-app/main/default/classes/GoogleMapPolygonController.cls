global with sharing class GoogleMapPolygonController {
    public GoogleMapPolygonController() {

    }

    @RemoteAction
	global static String getGroupZones(){
		return JSON.serialize([Select Id,Name,CreatedDate,Polygon__c  	
								from Zone__c 
								order by CreatedDate DESC]);
	}

	@RemoteAction
	global static String saveGroupZone(GroupZoneWrapper groupZoneObject){

		Zone__c zone_group	= new Zone__c();
		zone_group.Name				= groupZoneObject.name;
		zone_group.Polygon__c		= groupZoneObject.googleGeolocation;
		insert zone_group;
		return JSON.serialize(zone_group);
	}

	@RemoteAction
	global static String updateGroupZone(GroupZoneWrapper groupZoneObject){
		
		List<Zone__c> gzoneList = new List<Zone__c>();
		for(Zone__c gz:[Select Id,Name,Polygon__c
											from Zone__c 
											where Id=:groupZoneObject.id]){

			gz.Polygon__c		= groupZoneObject.googleGeolocation;
			gzoneList.add(gz);

		}

		update gzoneList;
		return JSON.serialize(gzoneList);
	}

	@RemoteAction
	global static String getAccountRecords(){	
		return JSON.serialize([Select Id,Name,geolocation__Latitude__s,geolocation__Longitude__s from Account]);
	}

	


	/**
	 * 
	 */
	global class GroupZoneWrapper{
		public String id{get;set;}
		public String name;
		public String googleGeolocation{get;set;}
	}
}
