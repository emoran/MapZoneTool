# MapZoneTool



## Inspiration
Based on my experience working with multiple customers in the past, the fact of having a visual representation of a business is really a plus for many companies. I think if we are able to provide a nice UI with the tools that business needs with the combination of multiple technologies, companies / users can optimize time at work and have better sense of whats happening in realtime.

## What it does
The project is straight forward, basically We have a web page that allows users to start creating "Zones". A Zone is a delimited area in a map that might or not contain markers (entities). Each zone in the map is represented as a polygon and that information (geojson) is stored in the force.com platform (Salesforce) in a custom object.

User can add a new Zone in the map drawing the polygon and identifying markers in the same area, this will create a group of markers in a zone. this will allow in a different scenario to identify entities that belong to an specific zone or area and be able to do something else.

### How we built it
I used the force.com platform (Salesforce) which already provides the backed (storage) and the programing language to build this application (Apex, Visualforce Javascript). I've used google maps api, geometry.

### Challenges we ran into
Identifying how multiple functions are used when we are working with polygons, as well as identify the main pieces to render the polygons in the map and how to store them.

### Accomplishments that we're proud of
Been able to identify from the polygons the main functions that allows to be able to include them into the google map, the features we can use once we catch en events.

### What we learned
There's much more information that might need to be on the official google page, where samples are a bit more complex. Some functions have been shared on public forums like stackoverflow.

### What's next for MapZoneTool
First to be able to enrich the UI and user experience, adding more features that other people might find useful and be able to package this for Salesforce customers as this can be a tool multiple customers and users can use to optimize their workflow.


<a href="http://www.youtube.com/watch?feature=player_embedded&v=QR94El9jDfc" target="_blank">
 <img src="https://i9.ytimg.com/vi_webp/QR94El9jDfc/mqdefault.webp?v=6377e6ab&sqp=CJjN35sG&rs=AOn4CLAAZhhdkydHND7k9pjLJnNCTL2vfA" alt="Watch the video" width="240" height="180" border="10" />
</a>
